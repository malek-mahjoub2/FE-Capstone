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
        tunisia: '/FE-Capstone/tunisia',
        greece: '/FE-Capstone/greece',
        spain: '/FE-Capstone/spain',
        italy: '/FE-Capstone/italy',
      };
  
      // Get the route based on the search query
      const route = routes[searchQuery.toLowerCase()];
  
      if (route) {
        console.log('Opening route:', route);
        window.open(route, '_blank');
      } else {
       
        alert('Oops! We don\'t have information on that destination yet. Please try another destination or contact us for personalized recommendations!');
      }
    };
      
  const handlePlanClick = () => {
    window.open('/FE-Capstone/itinerary', '_self');
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
