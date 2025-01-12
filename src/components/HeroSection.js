import React, { useState } from 'react';
import './HeroSection.css';
import background from '../videos/background.mp4'; 

const HeroSection = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    };
        
        
    const handleSearchSubmit = (event) => {
      event.preventDefault();
      
      const routes = {
        tunisia: '/tunisia',
        greece: '/greece',
        spain: '/spain',
        italy: '/italy',
      };
  
      // Get the route based on the search query
      const route = routes[searchQuery.toLowerCase()];
  
      if (route) {
        // Open the destination page in a new tab
        window.open(route, '_blank');
      } else {
        // Show an alert if the destination is not found
        alert('Oops! We don\'t have information on that destination yet. Please try another destination or contact us for personalized recommendations!');
      }
    };
      
  const handlePlanClick = () => {
    window.open('/itinerary', '_self');
  };
  return (
    <div className="hero-section">
      <video autoPlay loop playsInline className="hero-video">
        <source src={background} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-search">
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search destinations..."
            className="search-input"
          />
          <button type="submit" className="search-button">Search</button>
        </form>
      </div>
      <div className="hero-content">
        <h3 className="hero-subtitle">
          Live Your Dream Travel With Us
        </h3>
        <button className="hero-btn" onClick={handlePlanClick}>
          Plan Your Natural Escape
        </button>
        
      </div>
    </div>
  );
};

export default HeroSection;
