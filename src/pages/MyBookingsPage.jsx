// src/pages/MyBookingsPage.js
import React from 'react';
import MyBookings from '../Components/MyBooking';

const MyBookingsPage = () => {
  const bookings = JSON.parse(localStorage.getItem('bookings')) || [];

  return (
    <div>
      <MyBookings bookings={bookings} />
    </div>
  );
};

export default MyBookingsPage;
