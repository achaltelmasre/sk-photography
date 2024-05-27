import { Schema, model } from 'mongoose';

const CommentSchema = Schema({
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

const comment = model("comment", CommentSchema);

export default Comment;