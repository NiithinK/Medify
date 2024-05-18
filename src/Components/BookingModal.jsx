// src/components/BookingModal.js
import React from 'react';
import './MedicalCenterList.css';
import { TiDelete } from "react-icons/ti";
const BookingModal = ({ center, date, time, onClose, onBook }) => {
  const handleSubmit = () => {
    onBook({ center, date, time });
    onClose();
  };
  console.log(center)
  return (
    <div className='modal'>
      <div className='modal-content'>
        <span className='close' onClick={onClose} style={{width:'5rem',height:'5rem' , cursor:'pointer',marginLeft:'auto'}}><TiDelete /></span>
        <h2>Book an appointment at {center.name} Hospital</h2>
        <label>
          <h1>{center.State} {center.City}</h1>
          Date:  {date}
         </label>
         <br></br>
        <label>
          Time:  {time}
        </label>
        <button style={{cursor:'pointer'}} onClick={handleSubmit}>Book Appointment</button>
      </div>
    </div>
  );
};

export default BookingModal;
