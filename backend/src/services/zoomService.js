import axios from "axios";
import fs from "fs";
import { getZoomAccessToken } from "../config/zoom.js";

export const fetchZoomRecording = async (meetingId) => {
  const token = await getZoomAccessToken();
console.log(token)
  const res = await axios.get(
    `https://api.zoom.us/v2/meetings/${meetingId}/recordings`,
    { headers: { Authorization: `Bearer ${token}` } }
  );

  console.log(res)



  const recordingFile = res.data.recording_files.find(
    (f) => f.file_type === "MP4" || f.file_type === "M4A"
  );

  if (!recordingFile) throw new Error("No valid recording found");

  const downloadUrl = `${recordingFile.download_url}?access_token=${token}`;
  const response = await axios.get(downloadUrl, { responseType: "arraybuffer" });

  const filePath = `./downloads/${meetingId}.${recordingFile.file_type.toLowerCase()}`;
  fs.writeFileSync(filePath, Buffer.from(response.data));
  return filePath;
};
