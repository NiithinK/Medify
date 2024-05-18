import React from "react";
import Navbar from "./Navbar";
import { useState } from "react";
import pic from '../Assests/Group 7.png';
import SearchSeactionForFind from './SearchSeactionForFind';
import MedicalCenterList from '../Components/MedicalCenterList';
import { getMedicalCenters } from '../services/api';
import {  Link } from "react-router-dom";
import footer from '../Assests/footer.png'



export default function FindPage(){
    const [centers, setCenters] = useState([]);

    const handleSearch = (state, city) => {
        getMedicalCenters(state, city).then(response => setCenters(response.data));
      };

    return(
        <>
       <div style={{display:'flex',justifyContent:"space-around",marginTop:'30px',}}>
            <div >
            <Link to="/">
            <img style={{width: '92px',height: '27px', marginTop:'10px', marginLeft: '105px'}} src={pic} alt="logo" />
           </Link>
              
            </div>
            
        <Navbar/>
       
       </div>
       <div style={{background:'linear-gradient(91.75deg, #2AA7FF 1.4%, #0C8CE6 100.57%',height:'110px',width:'auto',borderRadius:'0 0px 16px 16px'}}></div>
        <div style={{background: 'linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%'}}>
            
           <SearchSeactionForFind onSearch={handleSearch}/>
            <MedicalCenterList centers={centers} onBook={(center) => console.log('Book', center)} /> 
          
        </div>
        </>
    );
}