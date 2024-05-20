import React, { useState, useEffect } from 'react';
import SearchSection from '../Components/SearchSection';
import car1 from '../Assests/Group 11.png';
import car2 from '../Assests/Group 12.png';
import Carousel from '../Components/Carousel';
import './Home.css';
import "@fontsource/poppins"; 
import { getMedicalCenters } from '../services/api';
import Hero from '../Components/Hero';

const HomePage = () => {
  const [centers, setCenters] = useState([]);
  const [carouselItems, setCarouselItems] = useState([]);

  const handleSearch = (state, city) => {
    getMedicalCenters(state, city).then(response => setCenters(response.data));
  };

  const images = [
    { src: car1, alt: 'Car 1' },
    { src: car2, alt: 'Car 2' },
    { src: car1, alt: 'Car 1' },
    { src: car2, alt: 'Car 2' },
    { src: car1, alt: 'Car 1' },
    { src: car2, alt: 'Car 2' },
    { src: car1, alt: 'Car 1' },
    // Repeat as needed
  ];

  return (
    <div>
      <div className='hero-Back'>
        <div className='Header'>
            <Hero/>
        </div>
       <SearchSection onSearch={handleSearch} />
       <Carousel images={images} interval={3000} />
      </div>
    </div>
  );
};

export default HomePage;