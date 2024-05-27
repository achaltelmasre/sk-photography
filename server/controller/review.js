import Review from "../model/Review.js";
import { responder } from "../util.js";

//add  review
const postApiReview = async (req, res) => {
    const {
        name,
        text
    } = req.body

    const review = new Review ({
        name:name,
        text:text
    });

    try{
        const savedReview = await review.save();

        return responder({
            res,
            success:true,
            data: savedReview,
            message: "review created successfully "
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
const getApiReview = async (res, res) =>{
    const allReview = await Review.find();

    return responder({
        res,
        success:true,
        message: "Successfully fetched all comment"
    })
}

//put
