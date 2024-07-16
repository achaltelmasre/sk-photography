import React, { useState, useEffect } from 'react';
import './imgSlider.css';

const ImgSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [images, setImages] = useState([
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwC6ZJFwqVk1BqL6ciRVmUUYqiDr6WIicYoQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe9dsEKz4e4UOv24Fc-t0O67ERVcQyMUhOVw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMEsNSTxFNYl2R_3n7lOZpwJgz_jEP-5RDbMP3RejNV6VoQ7ouFTMtCK_t4EBqCRlPJbo&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5MX_Fm3LP8wkZD3JR-coZtCL6niGohyoQmDATeziVRIFVLRgEzmHw0qsqHneK7LxsqrY&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzooH7QXSJ7jT_EWaWJjgFcOv0ZVK8kZVtLmZNfp-l0xiNDrbR1FpXr8-uWQf9kUznNZY&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmS8NsgZle5Stvqhx-4vPoy0twtvXJxieD7g&s"
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            moveSlide(1);
        }, 6000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, []);

    const moveSlide = (direction) => {
        const newIndex = (currentIndex + direction + images.length) % images.length;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="imgSlider-carousel">
            <div
                className="imgSlider-carousel-inner"
                style={{
                    transform: `translateX(-${(currentIndex * (300 + 20))}px)`, // Slide one image at a time
                    transition: 'transform 1s ease-in-out'
                }}
            >
                {images.map((imgSrc, index) => (
                    <div className="imgSlider-carousel-item" key={index}>
                        <img src={imgSrc} alt={`Image ${index + 1}`} style={{ width: '300px', height: '300px' }} />
                    </div>
                ))}
            </div>
            <a className="imgSlider-prev" onClick={() => moveSlide(-1)}>&#10094;</a>
            <a className="imgSlider-next" onClick={() => moveSlide(1)}>&#10095;</a>
            <div className="imgSlider-dots">
                {images.map((img, index) => (
                    <span
                        key={index}
                        className={`imgSlider-dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default ImgSlider;
