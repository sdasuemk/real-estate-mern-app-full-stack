import express from 'express';
import connectDB from './db/db.js';
// import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
// db connection settings
connectDB();



const app = express();
app.use(express.json());

app.listen(process.env.PORT || 3000, () => {
    console.log(`listening on port ${process.env.PORT || 3000} :)`);
})