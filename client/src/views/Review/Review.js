import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar.js'
import Footer from '../../components/Footer/Footer.js';
import AddReview from '../../components/AddReview/AddReview.js';
import './Review.css';

function Review() {
  const [reviews, setReviews] = useState([]);
  const [totalReviews, setTotalReviews] = useState(0);

  const CATEGORY_EMOJI_MAP = {
    "1": "⭐",
    "2": "⭐⭐",
    "3": "⭐⭐⭐",
    "4": "⭐⭐⭐⭐",
    "5": "⭐⭐⭐⭐⭐",
    
  }


  const loadReview = async () => {
    try {
      const response = await axios.get('/api/fetchReview');
      const reviewsData = response?.data?.data || [];

      // Calculate the total number of reviews
      let total = 0;
      reviewsData.forEach((review) => {
        total += 1;  // Increment total by 1 for each review
      });

      setTotalReviews(total);
      setReviews(reviewsData);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  useEffect(() => {
    loadReview();
  }, []);

  return (
    <>
      <div>
        <Navbar />
         
         <div className='review-page'>
        <h1 className='text-center p-3'>Clients Reviews</h1>
  
        <h4>Total Reviews: {totalReviews}</h4>
        <AddReview/>
        
        <div className='review-container' >
        {reviews.map((review, index) => {
          const { name, text, reviews, createdAt } = review;
          const date = new Date(createdAt).toLocaleDateString();
             
          return (
            <div  >
           
            <div className=' review-card ' key={index}>
        
              <h4>{name}</h4>
              <h2 className='star'>{CATEGORY_EMOJI_MAP[text]}</h2>
              <p>{reviews}</p>
              <span className='date'>{date}</span>
              </div>
              </div>
           
          
          );
        })}

     </div>
     </div>

        <Footer />
      </div>
    </>
  );
}

export default Review;
