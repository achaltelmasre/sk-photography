import Comment from "../model/comment";
import { responder } from "./../util.js";

//add comment
const postApiComment = async (req, res) => {
    const {
        name,
        text
    } = req.body

    const comment = new Comment ({
        name:name,
        text:text
    });

    try{
        const savedComment = await comment.save();

        return responder({
            res,
            success:true,
            data: savedComment,
            message: "comment created successfully "
        })
    }
    catch(e){
        return responder({
            res,
            success: false,
            message: e.message
        })
    }
}

//get comment
const getApiComment = async (res, res) =>{
    const allComment = await Comment.find();

    return responder({
        res,
        success:true,
        message: "Successfully fetched all comment"
    })
}

//put
