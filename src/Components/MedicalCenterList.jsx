// src/components/MedicalCenterList.js
import React from 'react';
import './MedicalCenterList.css';
import hos_logo from '../Assests/div.u-pos-has.png';
import { BiSolidLike } from "react-icons/bi";
import mess from '../Assests/group.png'

function MedicalCenterList  ({ centers, onBook })  {
  console.log(centers.lenght)
  return(
    <>
  <div className='medical-center-list'>

    {centers.map(center => (
      <div key={center.id} className='medical-center'>
        <img src={hos_logo} alt="" />
        <h3>{center.name}</h3>
        <p>{center.Address}</p>
        <p>{center.City}, {center.State} {center.zip}</p>
        <p style={{fontWeight:'400',fontSize:'14px'}}>
            <span className="hero-title-black">Free </span>
            <span>₹ 500 </span>
            <span className="hero-title-blue">Consultation fee at clinic</span>
          </p>
        <p style={{width:'44.5',height:'22.5',color:' #00A500',marginTop:'5px'}}><BiSolidLike />  {center.rating}</p>
        <button onClick={() => onBook(center)}>Book Free center visit</button>
      </div>
    ))}
    
  </div>
  {/* <div className='mess'>
  <img src={mess} alt="" />
</div> */}
  </>
  )
};

export default MedicalCenterList;
