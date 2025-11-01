/**
 * emailService.js
 * - uses Nodemailer with Gmail OAuth2
 */

const nodemailer = require('nodemailer');

const createTransporter = async () => {
  if (!process.env.GMAIL_CLIENT_ID) throw new Error('GMAIL_CLIENT_ID missing');

  const oauth2Config = {
    type: 'OAuth2',
    user: process.env.APP_EMAIL || 'meetmind@yourdomain.com',
    clientId: process.env.GMAIL_CLIENT_ID,
    clientSecret: process.env.GMAIL_CLIENT_SECRET,
    refreshToken: process.env.GMAIL_REFRESH_TOKEN
  };

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: oauth2Config
  });

  return transporter;
};

async function sendMeetingSummary(toEmail, meeting) {
  const transporter = await createTransporter();
  const html = `
    <h2>Meeting Summary: ${meeting.topic}</h2>
    <p><strong>When:</strong> ${new Date(meeting.scheduledAt).toLocaleString()}</p>
    <h3>Summary</h3>
    <p>${meeting.summary ? meeting.summary.replace(/\n/g, '<br/>') : 'No summary'}</p>
    <h3>Action Items</h3>
    <ul>
      ${(meeting.actionItems || []).map(ai => `<li>${ai.text}</li>`).join('')}
    </ul>
  `;

  const info = await transporter.sendMail({
    from: process.env.APP_EMAIL,
    to: toEmail,
    subject: `MeetMind Summary: ${meeting.topic}`,
    html
  });

  console.log('Email sent', info.messageId);
  return info;
}

module.exports = { sendMeetingSummary };
