import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { getApiHealth } from './controller/health.js';
import { getApiReview, postApiReview,putApiReview } from './controller/review.js';
import { postApiEvents } from './controller/events.js';
dotenv.config();

const app = express();
app.use(express.json());

const connectDB = async () => {

    try{
        const conn = await mongoose.connect(process.env.MONGO_URI)
        if (conn) {
            console.log('MongoDB connected');
        }
    }
    catch(e) {
        console.log(e.message);
    }
  
};
connectDB();

app.get('/api/health', getApiHealth);

app.post('/api/addReview', postApiReview);

app.get('/api/fetchReview', getApiReview);

app.put('/api/updateReview/:id', putApiReview);

//add events api
app.post('/api/event', postApiEvents);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});
