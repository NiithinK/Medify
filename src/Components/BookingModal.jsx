// src/components/BookingModal.js
import React, { useState } from 'react';
import './MedicalCenterList.css';

function BookingModal({ center, onClose, onBook }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = () => {
    onBook({ ...center, date, time });
    onClose();
  };

  return (
    <div className='modal'>
      <div className='modal-content'>
        <span className='close' onClick={onClose}>&times;</span>
        <h2>Book an appointment at {center.name}</h2>
        <label>
          Date:
          <input type='date' value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <label>
          Time:
          <input type='time' value={time} onChange={(e) => setTime(e.target.value)} />
        </label>
        <button onClick={handleSubmit}>Book Appointment</button>
      </div>
    </div>
  );
}

export default BookingModal;
