/**
 * transcriptionService.js
 * - uses Whisper / OpenAI or Google Speech to transcribe audio buffer
 * - here we show example using OpenAI whisper (HTTP)
 *
 * Replace with Google Speech-to-Text if you prefer.
 */

const axios = require('axios');

const transcribe = async (audioBuffer) => {
  if (!audioBuffer || audioBuffer.length === 0) {
    console.warn('transcribe: empty audio buffer');
    return '';
  }

  // Example: using OpenAI Whisper via REST (if you have OPENAI_API_KEY)
  // If you are using a Whisper endpoint that accepts multipart/form-data, upload file and call transcription
  // This is a simple skeleton; adjust as per your chosen STT provider.
  if (!process.env.OPENAI_API_KEY) {
    // fallback: return a placeholder
    return 'Transcript not available: OPENAI_API_KEY not configured. Replace transcriptionService implementation.';
  }

  const form = new FormData();
  form.append('file', audioBuffer, 'meeting.wav');
  form.append('model', 'whisper-1');

  const resp = await axios.post('https://api.openai.com/v1/audio/transcriptions', form, {
    headers: {
      ...form.getHeaders(),
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
    }
  });

  return resp.data.text;
};

module.exports = { transcribe };
