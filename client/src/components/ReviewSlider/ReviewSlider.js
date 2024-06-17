import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';
import './Review.css';

function ReviewSlider() {
  const [reviews, setReviews] = useState([]);

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
      setReviews(reviewsData);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  useEffect(() => {
    loadReview();
  }, []);

  return (
    <div>
      <div className='review-slider'>
        <h3 className='p-3'>Clients Reviews........😊</h3>
        <div className='review-container'>
          <Carousel>
            {reviews.map((review, index) => {
              const { name, text, reviews, createdAt } = review;
              const date = new Date(createdAt).toDateString();
              return (
                <Carousel.Item key={index}>
                  <div className='review'>
                    <span className='h5 pe-2 text-danger'>{name} </span>{date}
                    <h2 className='star'>{CATEGORY_EMOJI_MAP[text]}</h2>
                    <p>{reviews}</p>
                  </div>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default ReviewSlider;
