import express from "express";
import cors from "cors";
import connectDB from "./db/db.js";
// import mongoose from 'mongoose';
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import listingRouter from "./routes/listing.route.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();

// db connection settings
connectDB();

//Create Application
const app = express();

app.use(express.json());
// app.use(cors());

app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your client's URL
    credentials: true, // Allow credentials (cookies, authorization headers, TLS client certificates)
  })
);
app.use(cookieParser());

// Routers
app.use("/api/v1/user", userRouter);
app.use("/api/v1/auth", authRouter);
app.use('/api/v1/listing', listingRouter);

//Listen
app.listen(process.env.PORT || 4000, () => {
  console.log(`listening on port ${process.env.PORT || 4000} :)`);
});

// Error handlers
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
