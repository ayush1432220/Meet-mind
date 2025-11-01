const Queue = require('bull');
const { redisClient } = require('../config/redis');
const Meeting = require('../models/Meeting');
const zoomService = require('../services/zoomService');
const speechToTextService = require('../services/speechToTextService');
const geminiService = require('../services/geminiService');
const googleTasksService = require('../services/googleTasksService');
const emailService = require('../services/emailService');

const meetingQueue = new Queue('meeting processing', process.env.REDIS_URL);

// Process meetings at scheduled time
meetingQueue.process('join-meeting', async (job) => {
  const { meetingId } = job.data;
  
  try {
    const meeting = await Meeting.findById(meetingId).populate('userId');
    if (!meeting) {
      throw new Error('Meeting not found');
    }

    // Update meeting status
    meeting.status = 'joined';
    await meeting.save();

    // Join Zoom meeting (simplified - actual implementation would use Zoom SDK)
    await zoomService.joinMeeting(meeting.meetingId, meeting.userId.zoomAccessToken);
    
    // Simulate audio capture and transcription
    // In production, this would involve actual audio recording
    const simulatedAudio = "Simulated audio data from meeting";
    const transcript = await speechToTextService.transcribeAudio(
      Buffer.from(simulatedAudio)
    );
    
    meeting.transcript = transcript;
    meeting.status = 'transcribing';
    await meeting.save();

    // Add job for summarization
    await meetingQueue.add('summarize-meeting', { meetingId }, {
      delay: meeting.duration * 60 * 1000 // Delay for meeting duration
    });

    return { success: true, meetingId };
  } catch (error) {
    await Meeting.findByIdAndUpdate(meetingId, { status: 'failed' });
    throw error;
  }
});

// Process summarization
meetingQueue.process('summarize-meeting', async (job) => {
  const { meetingId } = job.data;
  
  try {
    const meeting = await Meeting.findById(meetingId).populate('userId');
    if (!meeting || !meeting.transcript) {
      throw new Error('Meeting or transcript not found');
    }

    meeting.status = 'summarizing';
    await meeting.save();

    // Summarize with Gemini
    const summaryData = await geminiService.summarizeTranscript(meeting.transcript);
    
    meeting.summary = summaryData.summary;
    meeting.actionItems = summaryData.actionItems;
    meeting.status = 'completed';
    await meeting.save();

    // Create Google Tasks
    for (const item of summaryData.actionItems) {
      try {
        const task = await googleTasksService.createTask(
          meeting.userId.googleAccessToken,
          item.title,
          item.dueDate
        );
        
        // Update action item with Google Task ID
        const actionItem = meeting.actionItems.find(ai => ai.title === item.title);
        if (actionItem && task.id) {
          actionItem.googleTaskId = task.id;
        }
      } catch (taskError) {
        console.error('Failed to create task:', taskError);
      }
    }

    await meeting.save();

    // Send email summary
    await emailService.sendMeetingSummary(
      meeting.userId.email,
      meeting.userId.googleRefreshToken,
      {
        topic: meeting.topic,
        scheduledTime: meeting.scheduledTime,
        summary: meeting.summary,
        actionItems: meeting.actionItems
      }
    );

    return { success: true, meetingId };
  } catch (error) {
    await Meeting.findByIdAndUpdate(meetingId, { status: 'failed' });
    throw error;
  }
});

// Cleanup failed jobs
meetingQueue.on('failed', (job, err) => {
  console.error(`Job ${job.id} failed:`, err);
});

module.exports = meetingQueue;