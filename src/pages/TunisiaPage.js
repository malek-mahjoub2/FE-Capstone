import React from 'react';
import './TunisiaPage.css';  // Ensure to add your CSS file here

// Importing images for the sections
import tunisiaHeaderImage from '../images/tunisiaHeader.jpg';  // Image for the header
import carthageImage from '../images/carthage.jpg';  // Image for Carthage
import saharaImage from '../images/sahara.jpg';  // Image for Sahara Desert
import hammametImage from '../images/hammamet.jpg';  // Image for Hammamet
import couscousImage from '../images/couscous.jpg';  // Image for couscous
import brikImage from '../images/brik.jpg';  // Image for brik
import fricassiImage from '../images/fricassi.jpg';
import { FaArrowRight } from 'react-icons/fa';

const TunisiaPage = () => { 
  return (
    <div className="tunisia-page">

      {/* Introduction Section */}
      <div className="intro-section">
        <img src={tunisiaHeaderImage} alt="Tunisia" className="header-image" />
        <div className="intro-text">
          <h1>Welcome to Tunisia</h1>
          <p>
            Tunisia, a country rich in history, culture, and natural beauty, offers a unique blend of ancient ruins, 
            Sahara desert adventures, and Mediterranean beaches. Whether you're exploring ancient Carthage or 
            relaxing on stunning coastlines, Tunisia is a destination that captivates every traveler.
          </p>
        </div>
      </div>

      {/* Must-Visit Destinations Section */}
      <div className="destinations-section">
        <h2>Must-Visit Destinations in Tunisia</h2>
        <div className="destinations-grid">
          <div className="destination-item">
            <img src={carthageImage} alt="Carthage" className="destination-image" />
            <h3>Carthage</h3>
            <p>Explore the ancient ruins of this historic Phoenician city, including the famed Carthage ruins and Roman baths.</p>
          </div>

          <div className="destination-item">
            <img src={saharaImage} alt="Sahara Desert" className="destination-image" />
            <h3>Sahara Desert</h3>
            <p>Experience camel trekking, desert safaris, and breathtaking stargazing in one of the world's largest deserts.</p>
          </div>

          <div className="destination-item">
            <img src={hammametImage} alt="Hammamet Beaches" className="destination-image" />
            <h3>Hammamet Beaches</h3>
            <p>Relax on the Mediterranean coast with stunning beaches, crystal-clear waters, and a vibrant nightlife.</p>
          </div>
        </div>
      </div>

      {/* Travel Essentials Section */}
      <div className="essentials-section">
        <h2>Travel Essentials for Tunisia</h2>
        <div className="essentials-grid">
          <div className="essential-item">
            <h3>Visa Requirements</h3>
            <p>Visa requirements vary depending on your nationality. Most EU citizens can travel visa-free for up to 90 days.</p>
          </div>
          <div className="essential-item">
            <h3>Best Time to Visit</h3>
            <p>Spring (March to May) and fall (September to November) offer the best weather for exploring Tunisia.</p>
          </div>
          <div className="essential-item">
            <h3>Currency</h3>
            <p>The official currency is the Tunisian Dinar (TND). ATMs are widely available in cities.</p>
          </div>
          <div className="essential-item">
            <h3>Getting Around</h3>
            <p>Taxis, buses, and trains are available for local transport. Car rentals are also a good option for exploring the countryside.</p>
          </div>
        </div>
      </div>

      {/* Local Cuisine Section */}
      <div className="cuisine-section">
        <h2>Discover Tunisia's Local Cuisine</h2>
        <div className="cuisine-grid">
          <div className="cuisine-item">
            <img src={couscousImage} alt="Couscous" className="cuisine-image" />
            <h3>Couscous</h3>
            <p>This staple dish is served with vegetables, meat, and a rich sauce, and is a must-try in Tunisia.</p>
          </div>

          <div className="cuisine-item">
            <img src={brikImage} alt="Brik" className="cuisine-image" />
            <h3>Brik</h3>
            <p>A popular Tunisian pastry, brik is filled with tuna, egg, and herbs, deep-fried to crispy perfection.</p>
          </div>
          <div className="cuisine-item">
            <img src={fricassiImage} alt="Fricassi" className="cuisine-image" />
            <h3>Fricassi</h3>
            <p>
              Fricassi is a beloved Tunisian street food with tuna, egg
              with Tunisian Harissa(spices).
            </p>
         </div>
        </div>
      </div>
      <div className="plan-trip-section">
        <h2>Ready to Plan Your Trip to Tunisia?</h2>
        <p>Click the button below to create your personalized itinerary and start your journey!</p>
        <button
          className="plan-trip-button"
          onClick={() => window.open('/tunisia-plan', '_blank')} // Open in new tab
        >
          Plan Your Trip <FaArrowRight />
        </button>
      </div>

    </div>
  );
};

export default TunisiaPage;
