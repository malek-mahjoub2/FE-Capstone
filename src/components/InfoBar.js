import React, { useState } from 'react';

function InfoBar({ onSearch }) {
  // State for SearchBar
  const [destination, setDestination] = useState('');

  const handleChange = (e) => {
    setDestination(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(destination);
  };

  return (
    <div className="info-bar-container">
      <div className="info-bar">

        <div className="date-location-weather">
          <span><i className="fas fa-calendar-day"></i> <strong>Date</strong></span>
          <span><i className="fas fa-map-pin"></i> <strong>Location</strong></span>
          <span><i className="fas fa-cloud-sun"></i> <strong>Weather</strong></span>
        </div>
      </div>

      <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter destination"
            value={destination}
            onChange={handleChange}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
}

export default InfoBar;
