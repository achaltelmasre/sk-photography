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

        <div className='addreview-btn'>
          Every picture tells a story, let me share mine with you,<br/>
          Everyone are share your ideas, let you  share <br/> valuable feedback on my work..... 👇!
        <AddReview/>
        </div>
         
         <div className='review-page'>
         <h3 className=' p-3'>Clients Happy Reviews........😊</h3>
  
        <h2 className='ps-5 text-info link-underline-dark'>Total Reviews: {totalReviews}</h2>
       
       
        
        <div className='review-container' >
        {reviews.map((review, index) => {
          const { name, text, reviews, createdAt } = review;
          const date = new Date(createdAt).toLocaleDateString();
             
          return (
            <div  >
           
            <div className=' review-card ' key={index}>
        
              <span className='h5 pe-2 text-denger'>{name} </span>{date}
              <h2 className='star'>{CATEGORY_EMOJI_MAP[text]}</h2>
              <p>{reviews}</p>
              
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
