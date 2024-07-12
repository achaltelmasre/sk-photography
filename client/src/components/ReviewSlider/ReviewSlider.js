import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';
import './ReviewSlider.css';

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

    <div>
      <br/><br/>
      <hr className='ms-5 me-5'/>
      <br/>
      <div className='review-slider '>
        <h4 className='p-3'>Clients Reviews </h4>
        <div className='review'>
          <Carousel>
            {reviews.map((review, index) => {
              const { name, text, reviews } = review;
              const initialLetter = name.charAt(0);  // Get the initial letter from the name
              const randomColor = getRandomColor();
              return (
                <Carousel.Item key={index}>
                  
                  <div className='reviewSlider-content'>

                  <div className='contain'>
                  <div className='circleround' style={{ backgroundColor: randomColor }}>
                      {initialLetter}
                    </div>
                    <h2 className=' pe-2 text-danger slider-name'>{name} </h2>
                  </div>

                    <p className='sliderreview-text'>{reviews}</p>
                    <h2 className='star'>{CATEGORY_EMOJI_MAP[text]}</h2>
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
