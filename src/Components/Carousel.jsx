import React, { useState, useEffect, useRef } from 'react';
import './Corousel.css'; // Import your CSS file for styling

const Carousel = ({ images, interval = 2000 }) => {
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const calculateSlidesPerView = () => {
      const carouselWidth = carouselRef.current.offsetWidth;
      const itemWidth = carouselRef.current.querySelector('.carousel-item').offsetWidth;
      const newSlidesPerView = Math.floor(carouselWidth / itemWidth);
      setSlidesPerView(newSlidesPerView > 0 ? newSlidesPerView : 1);
    };

    calculateSlidesPerView();
    window.addEventListener('resize', calculateSlidesPerView);

    return () => {
      window.removeEventListener('resize', calculateSlidesPerView);
    };
  }, []);

  useEffect(() => {
    const nextSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - slidesPerView ? 0 : prevIndex + 1
      );
    };

    timeoutRef.current = setTimeout(nextSlide, interval);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, images, interval, slidesPerView]);

  return (
    <div className="carousel-container" ref={carouselRef}>
      <div className="carousel">
        <div
          className="carousel-inner"
          style={{
            transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)`,
            width: `${images.length * (100 / slidesPerView)}%`,
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="carousel-item">
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
