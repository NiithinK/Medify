// src/components/Navbar.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "@fontsource/poppins";
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <nav>
      <ul>
        <li>
          <Link 
            to="/find" 
            className={activeLink === "/find" ? "active" : ""}
            onClick={() => handleLinkClick("/find")}
          >
            Find Doctors
          </Link>
        </li>
        <li>
          <Link 
            to="/" 
            className={activeLink === "/"  }
            onClick={() => handleLinkClick("/")}
          >
            Hospitals
          </Link>
        </li>
        <li>
          <Link 
            to="/medicines" 
            className={activeLink === "/" }
            onClick={() => handleLinkClick("/")}
          >
            Medicines
          </Link>
        </li>
        <li>
          <Link 
            to="/surgeries" 
            className={activeLink === "/" }
            onClick={() => handleLinkClick("/")}
          >
            Surgeries
          </Link>
        </li>
        <li>
          <Link 
            to="/software" 
            className={activeLink === "/" }
            onClick={() => handleLinkClick("/")}
          >
            Software for Provider
          </Link>
        </li>
        <li>
          <Link 
            to="/facilities" 
            className={activeLink === "/" }
            onClick={() => handleLinkClick("/")}
          >
            Facilities
          </Link>
        </li>
        <li>
          <button 
            style={{ backgroundColor: '#2AA7FF', color: 'white', padding: '0.5rem 1rem', cursor: 'pointer', borderRadius: '5px', border: 'none' }}
            onClick={() => handleLinkClick("/my-bookings")}
          >
            <Link 
              to="/my-bookings" 
              
            >
              My Bookings
            </Link>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
