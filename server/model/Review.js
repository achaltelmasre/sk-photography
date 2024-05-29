import { Schema, model } from 'mongoose';

const ReviewSchema = Schema({
    name: {
        type: String,
        require:true
    },
    text: {
        type: String,
        require:true
        
    },
    reviews: {
       type: String,
       default:"Very good work....."
    }
},{
    timestamp: true,
})

const Review = model("review", ReviewSchema);

export default Review;