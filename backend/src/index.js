import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import fs from "fs";
import connectDB from "./config/db.js";
import meetingRoutes from "./routes/meetingRoute.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

if (!fs.existsSync("./downloads")) fs.mkdirSync("./downloads");

app.use("/api/meetings", meetingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
