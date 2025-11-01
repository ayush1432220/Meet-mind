/**
 * geminiService.js
 * - calls Gemini (Vertex / REST) to summarize meeting transcripts
 * - uses GEMINI_API_KEY stored in env
 *
 * Docs note: Vertex/Gen API offers generateContent / streamGenerateContent endpoints.
 * You can authenticate with an API key in `x-goog-api-key` header, or use ADC for server projects.
 * See Gemini/Vertex docs for exact JSON schema. (quickstart / generateContent)
 *
 * Reference: Gemini quickstart & generateContent docs.
 * :contentReference[oaicite:2]{index=2}
 */

const axios = require('axios');

const GEMINI_ENDPOINT = 'https://generativelanguage.googleapis.com/v1beta2/models/gemini-2.5/outputs'; 
// NOTE: endpoint may vary; use the Vertex generateContent endpoint or the documented REST path.
// The example below uses a generic endpoint shape — update based on the exact model + API.

async function summarize(prompt) {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error('GEMINI_API_KEY missing');
  }

  // Minimal request body for the Vertex generative API (adjust to the exact API format)
  const body = {
    // this body should be adjusted to match the real generateContent schema
    "input": {
      "text": prompt
    },
    "maxOutputTokens": 800
  };

  const resp = await axios.post(GEMINI_ENDPOINT, body, {
    headers: {
      'Content-Type': 'application/json',
      'x-goog-api-key': process.env.GEMINI_API_KEY
    }
  });

  // parse response depending on actual API response shape
  // Example expected: resp.data.candidates[0].content[0].text  OR resp.data.output[0].content[0].text
  try {
    const out = resp.data?.candidates?.[0]?.content?.[0]?.text
      || resp.data?.output?.[0]?.content?.[0]?.text
      || JSON.stringify(resp.data);
    return out;
  } catch (err) {
    console.error('Error parsing Gemini response', resp.data);
    throw err;
  }
}

module.exports = { summarize };
