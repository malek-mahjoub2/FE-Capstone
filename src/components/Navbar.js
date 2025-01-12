
import React, { useState } from 'react';
import logo from '../images/logo.jpg'; 
import './Navbar.css'; 


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu for mobile view
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#destinations">Destinations</a></li>
        <li><a href="#activities">Activities</a></li>
        <li><a href="#itinerary-planner">Itinerary Planner</a></li>
        <li><a href="#about">About</a></li> {/* Updated ID */}
        <li><a href="#contact">Contact</a></li> {/* Updated ID */}
      </ul>

      
      {/* Hamburger icon for mobile */}
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}

export default Navbar;
