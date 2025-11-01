/**
 * tasksService.js
 * - uses googleapis to create tasks in the user's Google Tasks list
 * - requires OAuth2 tokens (you must implement Google OAuth flow to obtain refresh/access tokens per user)
 *
 * This service demonstrates creating one task per action item.
 */

const { google } = require('googleapis');

// helper to create auth client using refresh token
function getAuthClient() {
  const oAuth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
  );
  oAuth2Client.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN });
  return oAuth2Client;
}

async function extractAndCreateTasks(meeting) {
  // naive extraction: look for lines starting with "- " or "Action Items:" in the summary
  const text = meeting.summary || '';
  const items = text.split('\n').filter(l => l.trim().startsWith('-') || l.toLowerCase().includes('action item')).map(l => l.replace(/^-+\s*/, '').trim());
  const auth = getAuthClient();
  const tasks = google.tasks({ version: 'v1', auth });

  const created = [];
  for (const it of items) {
    try {
      const resp = await tasks.tasks.insert({
        tasklist: '@default',
        requestBody: {
          title: it
        }
      });
      created.push({ text: it, googleTaskId: resp.data.id });
    } catch (err) {
      console.error('Error creating google task', err);
    }
  }
  return created;
}

module.exports = { extractAndCreateTasks };
