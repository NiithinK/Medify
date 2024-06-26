// src/components/SearchSection.js
import React, { useEffect, useState } from 'react';
import { getStates, getCities } from '../services/api';
import './SearchSection.css';
import card1 from '../Assests/card_service-1.png';
import card2 from '../Assests/card_service-2.png';
import card3 from '../Assests/card_service-3.png';
import card4 from '../Assests/card_service-4.png';
import card5 from '../Assests/card_service.png';
import { FaBeer } from 'react-icons/fa';
import {  Link } from "react-router-dom";
import { Button } from '@mui/material';
const SearchSection = ({ onSearch }) => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    getStates().then(response => setStates(response.data));
  }, []);

  const handleStateChange = (state) => {
    setSelectedState(state);
    getCities(state).then(response => setCities(response.data));
  };

  const handleSearch = () => {
    onSearch(selectedState, selectedCity);
  };

  return (
    <>
    <div className='search-section' style={{
      
    }}>
      <div className='search-section1'>
      <select onChange={(e) => handleStateChange(e.target.value)}>
        <option value=""><FaBeer /> Select State</option>
        {states.map((state) => (
          <option key={state} value={state}>{state}</option>
        ))}
      </select>
      <select onChange={(e) => setSelectedCity(e.target.value)} disabled={!selectedState}>
        <option value="">Select City</option>
        {cities.map((city) => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>
      <Link to="/find">
      
     
      <Button sx={{ marginTop: '1.4rem', width: '170px', height: '40px', borderRadius: '8px',background: '#2AA8FF', color: 'white', fontFamily:'poppins',}} 
      onClick={handleSearch}>Search</Button>
      
      </Link>
     
      </div>
      <p style={{textAlign:'center',marginTop:'25px',fontSize:'20px',fontWeight:'500'}}>You May be Looking for</p>
      <div className='card-img'>
        
        <img src={card5} alt="Hero" />
        <img src={card1} alt="Hero" />
        <img src={card2} alt="Hero" />
        <img src={card3} alt="Hero" />
        <img src={card4} alt="Hero" />
      
      </div>
    </div>

   
    </>
  );
};

export default SearchSection;
