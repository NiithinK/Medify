// src/components/BookingForm.js
import React, { useState } from 'react';
import './BookingForm.css'
const BookingForm = ({ center, onConfirm }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = () => {
    onConfirm({ center, date, time });
  };

  return (
    <div>
      <h3>Book Appointment at {center.name}</h3>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
      <button onClick={handleSubmit}>Confirm</button>
    </div>
  );
};

export default BookingForm;
