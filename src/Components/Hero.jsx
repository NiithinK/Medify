import './Hero.css';
import Navbar from './Navbar';
import "@fontsource/poppins";
import { Link } from 'react-router-dom';
import logo from '../Assests/Group 7.png';
import img from '../Assests/hero_image.png';

export default function Hero() {
  return (
    <div className="hero-Back" style={{ background: 'linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%'}}>
       <div style={{display:'flex',justifyContent:"space-around",marginTop:'30px'}}>
            <div className='logo'>
            <Link to="/">
                <img className='logo-img' src={logo} alt="" />      
            </Link>
           </div>
            
        <Navbar/>
       
       </div>
      <div className="hero">
          <div className="hero-font">
            <p className="hero-tagline">Skip the travel! Find Online</p>
            <p className="hero-title">
              <span className="hero-title-black">Medical </span>
              <span className="hero-title-blue">Centers</span>
            </p>
            <p className="hero-description">
              Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.
            </p>
          </div>
          <div className="hero-img">
            <img src={img} alt="Hero" />
          </div>
      </div>
    </div>
  );
}
