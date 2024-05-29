import Review from "../model/Review.js";
import { responder } from "../util.js";

//add  review
const postApiReview = async (req, res) => {
    const {
        name,
        text,
        reviews

    } = req.body

    const review = new Review ({
        name:name,
        text:text,
        reviews:reviews
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

//get review 
const getApiReview = async (req,res) =>{
    const allReview = await Review.find();

    return responder({
        res,
        success:true,
        data:allReview,
        message: "Successfully fetched all comment"
    })
}

//put review
const putApiReview = async (req, res) => {
    const {id} = req.params;

    const {name, text, review} = req.body;
    
    await Review.updateOne({_id: id}, {$set: {
        name: name,
        text:text,
        review:review
    }});

    const updateReview = await Review.findById(id);

    return responder({
        res,
        success:true,
        data: updateReview,
        message: "Review update successfully"
    });
 }

 export { postApiReview, getApiReview, putApiReview};

