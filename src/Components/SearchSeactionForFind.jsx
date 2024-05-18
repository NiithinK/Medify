import React, { useEffect, useState } from 'react';
import { getStates, getCities } from '../services/api';
import './SearchSeactionForFind.css';
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
    <div className='search'>
      <div className='search1'>
      <select onChange={(e) => handleStateChange(e.target.value)}>
        <option value="">Select State</option>
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
      <Button
      style={{
        cursor:'pointer',
        width:'231px',
        height:'40px',
        background:'#2AA8FF',
      }} onClick={handleSearch}>Search</Button>
      </div>
    </div>

   
    </>
  );
};

export default SearchSection;