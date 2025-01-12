import React from 'react';
import './Footer.css';
import logo from '../images/logo.jpg';

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo and company name */}
        <div className="footer-logo">
          <div className="logo-placeholder">
                      {/* Logo placeholder */}
                      <img src={logo} alt="Travelling Agency Logo" />
            </div>
          <h2>Mediterranean Travel Agency</h2>
          <p>Your gateway to the best Mediterranean destinations</p>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p><a href="mailto:info@travellingagency.com">Email: info@travellingagency.com</a></p>
          <p><a href="tel:+1234567890">Phone: +1 (234) 567-890</a></p>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i> Facebook
          </a>
          
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i> Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i> Instagram</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Mediterranean Travel Agency. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;