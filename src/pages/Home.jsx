// src/pages/HomePage.js
import React, { useState, useEffect } from 'react';
import SearchSection from '../Components/SearchSection';
import MedicalCenterList from '../Components/MedicalCenterList';
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

  useEffect(() => {
    // Fetch data for the carousel (this is just an example)
    setCarouselItems([
      { title: 'Medical Center 1', description: 'Description 1' },
      { title: 'Medical Center 2', description: 'Description 2' },
      { title: 'Medical Center 3', description: 'Description 3' },
    ]);
  }, []);

  return (
    <div>
      <div className='hero-Back'>
        
    <div className='Header'>
        <Hero/>
    </div>
      <SearchSection onSearch={handleSearch} />
      
      {/* {/* <Carousel items={carouselItems} /> */}
      {/* <MedicalCenterList centers={centers} onBook={(center) => console.log('Book', center)} />  */}
    </div>
    </div>
  );
};

export default HomePage;
