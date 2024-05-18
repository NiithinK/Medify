import React, { useState } from 'react';
import './MedicalCenterList.css';
import hos_logo from '../Assests/div.u-pos-has.png';
import { BiSolidLike } from "react-icons/bi";
import mess from '../Assests/group.png';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import BookingForm from './BookingTable';
import BookingModal from './BookingModal';
import MyBookingsPage from '../pages/MyBookingsPage';

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
  const [selectedCenterId, setSelectedCenterId] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const[carouselOpen,setCarouselOpens] = useState(false);
  const handleBookClick = (centerId) => {
    setSelectedCenterId(centerId);
    setCarouselOpens('true');
  }

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setCarouselOpens(false);
    
  };

  const handleBookingConfirm = (bookingDetails) => {
    console.log('Booking confirmed:', bookingDetails);
    // Save booking details to local storage
    const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    existingBookings.push(bookingDetails);
    localStorage.setItem('bookings', JSON.stringify(existingBookings));
    
    // Handle booking confirmation logic here
    setIsModalOpen(false); // Close the modal after booking confirmation
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setIsModalOpen(true);
  };

  // Generate 7 dynamic dates
  const dates = generateDates(7);

  return (
    <>
      <div className='medical-center-list'>
        {centers.map(center => (
          <div key={center.id} className='medical-center'>
            <img src={hos_logo} alt={`${center.name} logo`} />
            <h3>{center.name}</h3>
            <p>{center.Address}</p>
            <p>{center.City}, {center.State} {center.zip}</p>
            <p className="consultation-fee">
              <span className="hero-title-black">Free </span>
              <span>₹ 500 </span>
              <span className="hero-title-blue">Consultation fee at clinic</span>
            </p>
            <p className="center-rating">
              <BiSolidLike /> {center.rating}
            </p>
            <button onClick={() => handleBookClick(center.id)}>Book Free center visit</button>
            {carouselOpen && selectedCenterId === center.id && (
              <div className='carousel-container'>
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
                          style={{fontSize: '14px', cursor: 'pointer', padding: '10px', textAlign: 'center'}}
                        >
                          {date}
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
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
    </>
  );
}

export default MedicalCenterList;
