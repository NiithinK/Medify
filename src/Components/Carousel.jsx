// src/components/Carousel.js
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import './Corousel.css'
const Carousel = ({ items, setTime }) => {
  
  return (
    <div className="carousel">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="swiper-slide-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              
              <div key={index} className="carousel-item" onClick={() => setTime(item)}></div>
              <p style={{fontSize:'14px',cursor:'pointer'}}>{item}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
