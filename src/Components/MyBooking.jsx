// src/components/MyBookings.js
import React from 'react';
import './MyBooking.css'
const MyBookings = ({ bookings }) => (
  <div className='my-bookings'>
    <h2>My Bookings</h2>
    {bookings.map((booking, index) => (
      <div key={index} className='bookings'>
        <h3>{booking.center.name}</h3>
        <p>Date: {booking.date}</p>
        <p>Time: {booking.time}</p>
      </div>
    ))}
  </div>
);

export default MyBookings;
