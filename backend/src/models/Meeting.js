import mongoose from "mongoose";

const meetingSchema = new mongoose.Schema({
  meetingId: String,
  topic: String,
  startTime: Date,
  summary: String,
  assignedTasks: [String],
  conclusion: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Meeting", meetingSchema);
