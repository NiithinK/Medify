// src/pages/SearchResultsPage.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MedicalCenterList from '../Components/MedicalCenterList';
import { getMedicalCenters } from '../services/api';

const SearchResultsPage = () => {
  const [centers, setCenters] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const state = params.get('state');
    const city = params.get('city');
    getMedicalCenters(state, city).then(response => setCenters(response.data));
  }, [location]);

  return (
    <div>
      <MedicalCenterList centers={centers} onBook={(center) => console.log('Book', center)} />
    </div>
  );
};

export default SearchResultsPage;
