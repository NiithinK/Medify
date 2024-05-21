import React, { useState, useEffect } from 'react';
import SearchSection from '../Components/SearchSection';
import car1 from '../Assests/Group11.png';
import car2 from '../Assests/Group12.png';
import Carousel from '../Components/Carousel';
import './Home.css';
import "@fontsource/poppins"; 
import { getMedicalCenters } from '../services/api';
import Hero from '../Components/Hero';
import services from '../Assests/Group13.png' ;
import doctar from '../Assests/doctar.png';
import mobile from '../Assests/mobile.png';
import footer from '../Assests/footer.png';

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
       <Carousel images={images} interval={2000} />
      <img className='service' src={services} alt="" />
      <div style={{background:'background: linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%);',height:'486px'}}>
        <img className='doctar' src={doctar} alt="" />
      </div>
      <img className='mobile' src={mobile} alt="" />
      <img className='footer' src={footer} alt="" />
      </div>
    </div>
  );
};

export default HomePage;