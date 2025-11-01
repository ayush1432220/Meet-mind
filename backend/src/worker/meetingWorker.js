require('dotenv').config();
const { Worker, Queue } = require('bullmq');
const IORedis = require('ioredis');
const connection = new IORedis(process.env.REDIS_URL);
const Meeting = require('../models/Meeting');
const mongoose = require('mongoose');
const connectDB = require('../config/db');
const zoomService = require('../services/zoomService');
const transcriptionService = require('../services/transcriptionService');
const geminiService = require('../services/geminiService');
const tasksService = require('../services/tasksService');
const emailService = require('../services/emailService');

(async () => {
  await connectDB();

  const worker = new Worker('meetings', async job => {
    const { name, data } = job;
    if (name === 'start-meeting') {
      const { meetingId } = data;
      const meeting = await Meeting.findById(meetingId);
      if (!meeting) return;
      try {
        console.log('Worker: joining meeting', meetingId);
        meeting.status = 'running';
        await meeting.save();

        // 1) join meeting (this might spawn headless browser or use Zoom SDK)
        await zoomService.joinMeeting(meeting);

        // 2) fetch audio/recording or stream -> store
        const audioBuffer = await zoomService.fetchMeetingAudio(meeting);

        // 3) transcribe
        const transcript = await transcriptionService.transcribe(audioBuffer);
        meeting.transcript = transcript;
        meeting.status = 'transcribed';
        await meeting.save();

        // 4) summarize via Gemini
        const prompt = `Summarize this meeting transcript. Include key points, decisions, and action items in bullet form:\n\n${transcript}`;
        const summary = await geminiService.summarize(prompt);
        meeting.summary = summary;
        meeting.status = 'summarized';
        await meeting.save();

        // 5) create Google Tasks and persist action items
        const createdTasks = await tasksService.extractAndCreateTasks(meeting);
        meeting.actionItems = createdTasks;
        meeting.status = 'completed';
        await meeting.save();

        // 6) send email with summary
        await emailService.sendMeetingSummary(meeting.email, meeting);

        console.log('Worker: meeting processed', meetingId);
      } catch (err) {
        console.error('Worker error', err);
        meeting.status = 'failed';
        await meeting.save();
      }
    }
  }, { connection });

  worker.on('failed', (job, err) => {
    console.error('Job failed', job.id, err);
  });

  console.log('Meeting worker started');
})();
