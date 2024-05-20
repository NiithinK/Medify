// src/components/BookingModal.js
import React from 'react';
import './MedicalCenterList.css';
// import './BookingModal.css'
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
        <span className='close' onClick={onClose} ><TiDelete /></span>
        <h2>Book an appointment at  </h2>
        <h2>{center['Hospital Name']}</h2>
        <label>
          <h3>{center.State} {center.City}</h3>
          Date:  {date}
         </label>
         <br></br>
        <label>
          Time:  {time}
        </label>
        <p style={{ marginTop:'10px',color:'#00A500'}}>Click Book Appointment to Book</p>
        <button style={{cursor:'pointer'}} onClick={handleSubmit}>Book Appointment</button>
      </div>
    </div>
  );
};

export default BookingModal;
