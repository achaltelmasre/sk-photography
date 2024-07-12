import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar.js';
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
  };

  const loadReview = async () => {
    try {
      const response = await axios.get('/api/fetchReview');
      const reviewsData = response?.data?.data || [];

      // Calculate the total number of reviews
      let total = 0;
      reviewsData.forEach((review) => {
        total += 1; // Increment total by 1 for each review
      });

      setTotalReviews(total);
      setReviews(reviewsData);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  useEffect(() => {
    loadReview();
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <div className='review-page'>
          <div className='addreview-btn '>
            Every picture tells a story, let me share mine with you,<br />
            Everyone are share your ideas, let you share <br /> valuable feedback on my work..... 👇!
            <AddReview />
          </div>
          <h3 className='p-3'>Clients Happy Reviews........😊</h3>
          <h2 className='ps-5 text-info link-underline-dark totalreview'>Total Reviews: {totalReviews}</h2>
          <div className='review-container'>
            {reviews.map((review, index) => {
              const { name, text, reviews, createdAt } = review;
              const date = new Date(createdAt).toDateString();
              const initialLetter = name.charAt(0);  // Get the initial letter from the name
              const randomColor = getRandomColor(); // Generate a random color

              return (
                <div key={index}>
                  <div className='review-card'>
                    <div className='circle' style={{ backgroundColor: randomColor }}>
                      {initialLetter}
                    </div>
                    <span className='h5 pe-2 text-danger name'>{name}</span>
                    <span className='date'>{date}</span>
                    <h2 className='star'>{CATEGORY_EMOJI_MAP[text]}</h2>
                    <p className='client-review'>{reviews}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <br /><br /><br /><br /><br />
          <div className='review-text'>
            We work hard to be the best at what we do for you. <br />And when hard work pays off, 
            we celebrate! <br />Thank you to everyone that has taken <br /> the time to tell us how we did.<br />
            We appreciate you.
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Review;
