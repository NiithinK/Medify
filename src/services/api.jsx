// src/services/api.js
import axios from 'axios';

const BASE_URL = 'https://meddata-backend.onrender.com';

export const getStates = () => axios.get(`${BASE_URL}/states`);
export const getCities = (state) => axios.get(`${BASE_URL}/cities/${state}`);
export const getMedicalCenters = (state, city) => axios.get(`${BASE_URL}/data`, {
  params: { state, city }
});
