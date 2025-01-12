import React from 'react';
import './KeyHighlightsSection.css'; // CSS for styling
import { FaArrowRight, FaStar } from 'react-icons/fa';
// Importing images
import TunisiaBeach from '../images/tunisiaBeach.jpg';
import GreeceBeach from '../images/greeceBeach.jpg';
import ItalyBeach from '../images/italyBeach.jpg';
import SpainBeach from '../images/spainBeach.jpg';

const Rating = ({ rating, reviews }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <FaStar
      key={index}
      color={index < rating ? '#ffc107' : '#e4e5e9'} // Filled or empty star
      size={20} // Adjust size as needed
    />
  ));

  return (
    <div className="rating">
      {stars} <span>({reviews} reviews)</span>
    </div>
  ); 
};
const KeyHighlightsSection = () => {
  const handleViewDetails = (route) => {
    window.open(route, '_blank');
  };
  

  return (
    <main>
    <div className="key-highlights-section">
      <h1 className="highlights-title">Explore the Natural Wonders of the Mediterranean</h1>
      
      <div className="country-flex">
        <div className="country-item">
          <div className="image-box">
            <img src={TunisiaBeach} alt="Tunisia Beach" className="country-image" />
          </div>
          <h3>Tunisia</h3>
          <p>Explore the beaches, tranquil rivers, and natural parks like Ichkeul National Park and Chott el Jerid.</p>
          <Rating rating={4} reviews={1234} />
          <button onClick={() => handleViewDetails('/tunisia')} className="explore-btn">
            View Details <FaArrowRight />
          </button>
        </div>
        
        <div className="country-item">
          <div className="image-box">
            <img src={GreeceBeach} alt="Greece Beach" className="country-image" />
          </div>
          <h3>Greece</h3>
          <p>Discover the stunning mountain trails of Crete and Pelion, ideal for trekking and nature exploration.</p>
          <Rating rating={5} reviews={987} />
          <button onClick={() => handleViewDetails('/greece')} className="explore-btn">
            View Details <FaArrowRight />
          </button>
        </div>

        <div className="country-item">
          <div className="image-box">
            <img src={ItalyBeach} alt="Italy Beach" className="country-image" />
          </div>
          <h3>Italy</h3>
          <p>Venture through rugged mountains, nature reserves, and the Amalfi Coast’s scenic beauty.</p>
          <Rating rating={4.5} reviews={1567} />
          <button onClick={() => handleViewDetails('/italy')} className="explore-btn">
            View Details <FaArrowRight />
          </button>
        </div>

        <div className="country-item">
          <div className="image-box">
            <img src={SpainBeach} alt="Spain Beach" className="country-image" />
          </div>
          <h3>Spain</h3>
          <p>From the Sierra Nevada to Costa Brava, explore the natural beauty and cultural heritage of Spain.</p>
          <Rating rating={4.2} reviews={2345} /> 
          <button onClick={() => handleViewDetails('/spain')} className="explore-btn">
            View Details <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
    </main>
  );
};

export default KeyHighlightsSection;
