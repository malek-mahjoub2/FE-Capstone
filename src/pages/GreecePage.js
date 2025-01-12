import React from 'react';
import './GreecePage.css';  // Ensure you have the CSS for styling
import { FaArrowRight } from 'react-icons/fa';
// Importing images for the sections
import greeceHeaderImage from '../images/greeceHeader.jpg';  
import athensImage from '../images/athens.jpg'; 
import santoriniImage from '../images/santorini.jpg';  
import mykonosImage from '../images/mykonos.jpg';  
import creteImage from '../images/crete.jpg';  
import souvlakiImage from '../images/souvlaki.jpg';  
import baklavaImage from '../images/baklava.jpeg'; 

const GreecePage = () => {
  return (
    <div className="greece-page">
      
      {/* Introduction Section */}
      <div className="intro-section">
        <img src={greeceHeaderImage} alt="Greece" className="header-image" />
        <div className="intro-text">
          <h1>Welcome to Greece</h1>
          <p>
            Greece, the cradle of civilization, offers a mix of ancient ruins, sun-drenched beaches, and vibrant cities. From the stunning islands of Santorini and Mykonos to the historical wonders of Athens, Greece is a journey through history, culture, and natural beauty.
          </p>
        </div>
      </div>

      {/* Must-Visit Destinations Section */}
      <div className="destinations-section">
        <h2>Must-Visit Destinations in Greece</h2>
        <div className="destinations-grid">
          <div className="destination-item">
            <img src={athensImage} alt="Athens" className="destination-image" />
            <h3>Athens</h3>
            <p>Explore ancient monuments like the Parthenon and the Acropolis. Athens is a city where history comes alive in every corner.</p>
          </div>

          <div className="destination-item">
            <img src={santoriniImage} alt="Santorini" className="destination-image" />
            <h3>Santorini</h3>
            <p>The iconic white-and-blue buildings of Santorini perched on volcanic cliffs offer stunning views and unforgettable sunsets.</p>
          </div>

          <div className="destination-item">
            <img src={mykonosImage} alt="Mykonos" className="destination-image" />
            <h3>Mykonos</h3>
            <p>Famous for its beaches, nightlife, and charming old town, Mykonos is the perfect blend of relaxation and excitement.</p>
          </div>

          <div className="destination-item">
            <img src={creteImage} alt="Crete" className="destination-image" />
            <h3>Crete</h3>
            <p>The largest Greek island is rich in history, with ancient Minoan ruins and gorgeous beaches perfect for nature lovers.</p>
          </div>
        </div>
      </div>

      {/* Travel Essentials Section */}
      <div className="essentials-section">
        <h2>Travel Essentials for Greece</h2>
        <div className="essentials-grid">
          <div className="essential-item">
            <h3>Visa Requirements</h3>
            <p>Greece is part of the Schengen Area, so EU citizens can visit without a visa. Non-EU citizens may need a Schengen visa for short stays.</p>
          </div>
          <div className="essential-item">
            <h3>Best Time to Visit</h3>
            <p>The best time to visit Greece is in spring (April to June) and autumn (September to October), as the weather is pleasant, and the tourist crowds are smaller.</p>
          </div>
          <div className="essential-item">
            <h3>Currency</h3>
            <p>Greece uses the Euro (EUR). Credit cards are widely accepted, and ATMs are available in most cities and islands.</p>
          </div>
          <div className="essential-item">
            <h3>Getting Around</h3>
            <p>Greece has a reliable ferry system to travel between islands. The mainland is well connected by buses, trains, and domestic flights.</p>
          </div>
        </div>
      </div>

      {/* Local Cuisine Section */}
      <div className="cuisine-section">
        <h2>Discover Greece's Local Cuisine</h2>
        <div className="cuisine-grid">
          <div className="cuisine-item">
            <img src={souvlakiImage} alt="Souvlaki" className="cuisine-image" />
            <h3>Souvlaki</h3>
            <p>Souvlaki is a popular Greek dish made of skewered and grilled meat (usually lamb, chicken, or pork) served with pita and sauces.</p>
          </div>

          <div className="cuisine-item">
            <img src={baklavaImage} alt="Baklava" className="cuisine-image" />
            <h3>Baklava</h3>
            <p>Baklava, a sweet pastry made of layers of filo dough, nuts, and honey syrup, is one of Greece’s most loved desserts.</p>
          </div>
        </div>
      </div>
      <div className="plan-trip-section">
            <h2>Ready to Plan Your Trip to Greece?</h2>
            <p>Click the button below to create your personalized itinerary and start your journey!</p>
            <button
              className="plan-trip-button"
              onClick={() => window.open('/FE-Capstone/italy-plan', '_blank')}
            >
              Plan Your Trip <FaArrowRight />
            </button>
          </div>
    </div>
  );
};

export default GreecePage;
