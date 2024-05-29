import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./Review.css"

function Review(){

  const [review, setReview] = useState([]);
  const [totalReviews, setTotalReviews] = useState([])

  const loadReview = async () => {
 
    const respose = await axios.get('/api/fetchReview');
    const reviewsData = respose?.data?.data;

    let total = 0;

    reviewsData.forEach((review) => {
         if(review !== reviewsData){
                total += review;
         }
    })
    setTotalReviews(total);

    setReview(reviewsData);
  }
  
  useEffect( () => {
    loadReview();
  }, [])
   
    return(
        <>
        <div>
              <h1 className='text-center p-3'> Clients Reviews </h1>

              <h4>Total Review : {totalReviews}</h4>

              {
              review?.map((review, index) => {
                const { name, text, reviews, createdAt } = review

                const date = new Date(createdAt).toLocaleDateString();

                return(
                  <div className='review-card'>
                    <h4>{name}</h4>
                    <h3>{text}</h3>
                    <p>{reviews} </p>
                    <span>{date}</span>
                    
                  </div>

                )

              })
              }
        </div>

         
        </>
    );
    }
    
 export default Review;



