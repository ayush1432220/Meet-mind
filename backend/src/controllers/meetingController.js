import fs from "fs";
import Meeting from "../models/Meeting.js";
import { geminiModel } from "../config/gemini.js";
import { fetchZoomRecording } from "../services/zoomService.js";

export const processMeeting = async (req, res) => {
  try {
    const { meetingId, topic, startTime } = req.body;
    console.log(`Processing the meeting`)
    console.log(meetingId)
    console.log(topic)
    console.log(startTime)

    // 1️⃣ Fetch Zoom recording
    const audioPath = await fetchZoomRecording(meetingId);
    
    console.log("✅ Recording fetched:", audioPath);

    // 2️⃣ Read audio buffer
    const fileBuffer = fs.readFileSync(audioPath);
    const base64Audio = Buffer.from(fileBuffer).toString("base64");

    // 3️⃣ Send directly to Gemini
    const prompt = `
      You are a meeting assistant. 
      Analyze this meeting audio recording and provide the following:
      1. A short professional summary of the discussion.
      2. Key action items or assigned tasks.
      3. Final conclusions or decisions made.
      Output clearly in this format:
      ---
      Summary:
      [text]

      Tasks:
      - [task 1]
      - [task 2]

      Conclusion:
      [text]
      ---
    `;

    const result = await geminiModel.generateContent([
      { role: "user", parts: [{ text: prompt }, { inlineData: { mimeType: "audio/mp4", data: base64Audio } }] },
    ]);

    const text = result.response.text();

    // 4️⃣ Save to MongoDB
    const meetingData = new Meeting({
      meetingId,
      topic,
      startTime,
      summary: text,
    });

    await meetingData.save();

    res.json({
      message: "Meeting analyzed successfully ✅",
      meeting: meetingData,
    });
  } catch (error) {
    console.error("❌ Error processing meeting:", error);
    res.status(500).json({ error: error.message });
  }
};
