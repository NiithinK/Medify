// src/components/MyBookings.js
import React from 'react';
import './MyBooking.css';
import './MedicalCenterList.css';
import hos_logo from '../Assests/div.u-pos-has.png';
import { BiSolidLike } from "react-icons/bi";
import mess from '../Assests/group.png';




const MyBookings = ({ bookings }) => (
  <div className='my-bookings' >
  
    {bookings.map((booking, index) => (
     
      <div key={booking.center.id} className='booking'>
            <img src={hos_logo} alt={`${booking.center.name} logo`} />
            <h3>{booking.center.name}</h3>
            <p>{booking.center.Address}</p>
            <p>{booking.center.City}, {booking.center.State} {booking.center.zip}</p>
            <div className='booking-date'>

            <p >
            <span style={{color:'#00A500',border: '1px solid #00A500',marginRight:'5px',padding:'5px'}}>{booking.date} </span>
            <span style={{border: '1px solid #2AA7FF',color:'#2AA7FF',padding:'5px'}}>{booking.time}</span>
          </p>
            <p >Is Booked confrimily</p>
            </div>
            <p className="consultation-fee">
              <span className="hero-title-black">Free </span>
              <span>₹ 500 </span>
              <span className="hero-title-blue">Consultation fee at clinic</span>
            </p>
            <p className="center-rating">
              <BiSolidLike /> {booking.center.rating}
            </p>
           

            </div>
            
    ))}
  </div>
);

export default MyBookings;
