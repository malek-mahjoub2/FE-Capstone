// AboutSection.js
import React from 'react';
import './About.css';  // Import the CSS for styling
import ClientReviews from './ClientReviews.js';
import logo from '../images/logo.jpg';
const scrollToContact = () => {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};
const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        
        <div className="about-header">
          <div className="logo-placeholder">
            {/* Logo placeholder */}
            <img src={logo} alt="Travelling Agency Logo" />
          </div>
          <h1 className="agency-name">Travelling Agency</h1>
        </div>

        {/* Mission Statement */}
        <div className="mission-statement">
          <h2>Our Mission</h2>
          <p>
            At Travelling, we are passionate about bringing you the best travel experiences across the Mediterranean. 
            Our mission is to create personalized, unforgettable trips tailored to your interests, offering authentic adventures in Tunisia, Greece, Italy, Spain, and beyond. 
            Whether you're looking for a relaxing getaway or an adventurous exploration, we're here to guide you every step of the way.
          </p>
        </div>

        {/* Services Offered */}
        <div className="services">
          <h2>Our Services</h2>
          <p>At Travelling, we offer a variety of services designed to help you plan the perfect Mediterranean getaway:</p>
          <ul>
            <li><strong>Personalized Trip Planning</strong>: We’ll work with you to create a tailor-made itinerary based on your preferences, travel style, and budget.</li>
            <li><strong>Recommended Places to Visit</strong>: We suggest the best places to visit, including hidden gems, historic sites, beautiful beaches, and more.</li>
            <li><strong>Exciting Activities</strong>: We help you plan activities, such as guided tours, adventure sports, local cultural experiences, and more.</li>
            <li><strong>Hotel Recommendations</strong>: We recommend and book the best hotels that match your travel style—luxury, boutique, or budget-friendly options.</li>
            <li><strong>Average Price Estimates</strong>: Get an estimate of the total cost of your trip, including flights, hotels, activities, and meals, to plan within your budget.</li>
          </ul>
        </div>

        {/* About the Agency */}
        <div className="about">
          <h2>About Us</h2>
          <p>
            Founded with a passion for the Mediterranean's rich history, culture, and natural beauty, Travelling is a dedicated travel agency that aims to provide exceptional service and tailor-made experiences. 
            Our team is composed of seasoned travel professionals with deep knowledge of the Mediterranean region, ensuring that your trip is nothing short of spectacular.
          </p>
        </div>
        <div className="client-reviews-container">

          <ClientReviews />
        </div>

        
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>If you're ready to plan your dream Mediterranean vacation, feel free to reach out! We're here to help you create a perfect travel experience.</p>
          <a href="#contact" className="contact-link" onClick={scrollToContact}>Contact Us</a>
        </div>
      </div>
    </section>
  );
};

export default About;
