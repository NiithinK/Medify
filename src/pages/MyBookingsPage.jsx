// src/pages/MyBookingsPage.js
import React from 'react';
import MyBookings from '../Components/MyBooking';
import pic from '../Assests/Group 7.png';
import Navbar from '../Components/Navbar';
import {  Link } from "react-router-dom";
import mess from '../Assests/group.png';
import '../Components/MyBooking.css'
const MyBookingsPage = () => {
  const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    console.log(bookings)
  return (
    <div>
      <div style={{display:'flex',justifyContent:"space-around",marginTop:'30px',}}>
            <div >
            <Link to="/">
            <img style={{width: '92px',height: '27px', marginTop:'10px', marginLeft: '105px'}} src={pic} alt="logo" />
           </Link>
        </div>
          <Navbar/>
      </div>
      <div style={{background:'linear-gradient(91.75deg, #2AA7FF 1.4%, #0C8CE6 100.57%',
      height:'110px',width:'auto',
      borderRadius:'0 0px 16px 16px',
      color:'white',fontWeight:'700',fontSize:'40px',paddingTop:'20px', paddingLeft:"10rem"}}>My Bookings</div>
        <div style={{}}>
            
        <MyBookings bookings={bookings} />
        </div>
        
    </div>
  );
};

export default MyBookingsPage;
