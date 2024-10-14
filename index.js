import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from "dotenv";

import route from './routes/userRoutes.js';

const app = express();
app.use(bodyParser.json());
dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGOURL = process.env.MONGO_URL;

console.log("MongoDB Connection URL:", MONGOURL); // Log the connection string

mongoose.connect(MONGOURL)
    .then(() => {
        console.log("Database connection established");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error("Error connecting to database:", err); 
    });

app.route("/api/user",route) 