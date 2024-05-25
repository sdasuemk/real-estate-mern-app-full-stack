import express from 'express';
import connectDB from './db/db.js';
// import mongoose from 'mongoose';
import userRouter from './routes/user.route.js';
import dotenv from 'dotenv';

dotenv.config();

// db connection settings
connectDB();

//Create Application
const app = express();


app.use(express.json());


// Routers
app.use("/api/v1/user", userRouter);

//Listen
app.listen(process.env.PORT || 4000, () => {
    console.log(`listening on port ${process.env.PORT || 4000} :)`);
})