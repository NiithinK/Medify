import React, { useState } from 'react';
import './MedicalCenterList.css';
import hos_logo from '../Assests/div.u-pos-has.png';
import { BiSolidLike } from "react-icons/bi";
import { FaBars } from 'react-icons/fa'; // Import the hamburger icon
import mess from '../Assests/group.png';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import BookingForm from './BookingTable';
import BookingModal from './BookingModal';
import MyBookingsPage from '../pages/MyBookingsPage';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

// Helper function to generate dynamic dates
const generateDates = (numDays) => {
  const dates = [];
  const currentDate = new Date();
  
  for (let i = 0; i < numDays; i++) {
    const date = new Date(currentDate);
    date.setDate(currentDate.getDate() + i);
    dates.push(date.toDateString());
  }
  
  return dates;
};

function MedicalCenterList({ centers, onBook }) {
  const [navOpen, setNavOpen] = useState(false);
  const [selectedCenterId, setSelectedCenterId] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [carouselOpen, setCarouselOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const handleBookClick = (centerId) => {
    setSelectedCenterId(centerId);
    setCarouselOpen(true);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setCarouselOpen(false);
  };

  const handleBookingConfirm = (bookingDetails) => {
    console.log('Booking confirmed:', bookingDetails);
    // Save booking details to local storage
    const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    existingBookings.push(bookingDetails);
    localStorage.setItem('bookings', JSON.stringify(existingBookings));
    
    // Handle booking confirmation logic here
    setIsModalOpen(false); // Close the modal after booking confirmation
    setSnackbarOpen(true); // Show snackbar after booking confirmation
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setIsModalOpen(true);
  };

  // Generate 7 dynamic dates
  const dates = generateDates(7);

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <>
      <nav>
        <div className="hamburger" onClick={toggleNav}>
          <FaBars />
        </div>
        <ul className={navOpen ? 'show' : ''} style={{marginLeft:'30rem'}}>
          <li><Link to='/'>Home</Link></li>  
          <li><Link to='/find'>Find Doctor</Link></li>
          <li><Link to='/'>Software</Link></li>
          <li><Link to='/my-bookings'>My Booking</Link></li>
        </ul>
      </nav>
      <div className='medical-center-list'>
        {centers.map(center => (
          <div key={center['Provider ID']} className='medical-center'>
            <img src={hos_logo} alt={`${center.name} logo`} />
            <h3>{center['Hospital Name']}</h3>
            <p>{center.Address}</p>
            <p>{center.City}, {center.State} ,{center['ZIP Code']}</p>
            <p className="consultation-fee">
              <span className="hero-title-black">Free </span>
              <span>₹ 500 </span>
              <span className="hero-title-blue">Consultation fee at clinic</span>
            </p>
            <p className="center-rating">
              <BiSolidLike /> {center['Hospital overall rating']}
            </p>
            <button onClick={() => handleBookClick(center.id)}>Book Free center visit</button>
            
            {carouselOpen && selectedCenterId === center.id && (
              <div className='carousel123'>
                <h2>Select a Date for {center.name}</h2>
                <div className="carousel">
                  <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                  >
                    {dates.map((date, index) => (
                      <SwiperSlide key={index}>
                        <div 
                          className={`carousel-item ${selectedDate === date ? 'selected' : ''}`} 
                          onClick={() => handleDateSelect(date)}
                          style={{ fontSize: '14px', cursor: 'pointer', padding: '10px', textAlign: 'center' }}
                        >
                          {date}
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="swiper-button-prev" style={{ color: 'black' }}>&lt;</div>
                  <div className="swiper-button-next" style={{ color: 'black' }}>&gt;</div>
                </div>
                {carouselOpen && selectedDate && (
                  <BookingForm onTimeSelect={handleTimeSelect} />
                )}
                {isModalOpen &&
                  (<BookingModal
                    center={center}
                    date={selectedDate}
                    time={selectedTime}
                    onClose={handleModalClose}
                    onBook={handleBookingConfirm}
                  />)
                }
              </div>
            )}
          </div>
        ))}
      </div>
      <div className='mess'>
        <img src={mess} alt="Message" />
      </div>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100vw',textAlign:'center',fontSize:'25px' }}>
          Booking Confirmed, visit My booking page
        </Alert>
      </Snackbar>
    </>
  );
}

export default MedicalCenterList;
