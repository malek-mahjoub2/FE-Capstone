import React from 'react';
import './ItalyPage.css';  // Ensure you have the CSS for styling

import italyHeaderImage from '../images/italyHeader.jpg';  // Image for Italy header
import romeImage from '../images/rome.jpg';  // Image for Rome
import florenceImage from '../images/florence.jpg';  // Image for Florence
import veniceImage from '../images/venice.jpg';  // Image for Venice
import amalfiImage from '../images/amalfi.jpg';  // Image for Amalfi Coast
import pastaImage from '../images/pasta.jpg';  // Image for pasta
import gelatoImage from '../images/gelato.jpg';  // Image for gelato
import pizzaImage from '../images/pizza.jpg';
import { FaArrowRight } from 'react-icons/fa';

const ItalyPage = () => {
  return (
    <div className="italy-page">
      
      {/* Introduction Section */}
      <div className="intro-section">
        <img src={italyHeaderImage} alt="Italy" className="header-image" />
        <div className="intro-text">
          <h1>Welcome to Italy</h1>
          <p>
            Italy, a land of art, history, and culinary wonders, awaits you. From the ancient ruins of Rome to the picturesque canals of Venice, Italy offers timeless experiences in every corner. Discover its breathtaking landscapes, rich culture, and world-famous cuisine.
          </p>
        </div>
      </div>

      {/* Must-Visit Destinations Section */}
      <div className="destinations-section">
        <h2>Must-Visit Destinations in Italy</h2>
        <div className="destinations-grid">
          <div className="destination-item">
            <img src={romeImage} alt="Rome" className="destination-image" />
            <h3>Rome</h3>
            <p>Step back in time and explore ancient landmarks like the Colosseum, Roman Forum, and the Vatican City. Rome is history and culture in motion.</p>
          </div>

          <div className="destination-item">
            <img src={florenceImage} alt="Florence" className="destination-image" />
            <h3>Florence</h3>
            <p>The heart of the Renaissance, Florence boasts world-class art and architecture, including Michelangelo’s David and the Duomo Cathedral.</p>
          </div>

          <div className="destination-item">
            <img src={veniceImage} alt="Venice" className="destination-image" />
            <h3>Venice</h3>
            <p>Discover the canals and charming streets of Venice, a city of romance, gondola rides, and iconic landmarks like St. Mark’s Basilica.</p>
          </div>

          <div className="destination-item">
            <img src={amalfiImage} alt="Amalfi Coast" className="destination-image" />
            <h3>Amalfi Coast</h3>
            <p>Explore the stunning coastline, cliffs, and villages such as Positano and Ravello. The Amalfi Coast is known for its beauty and relaxation.</p>
          </div>
        </div>
      </div>

      {/* Travel Essentials Section */}
      <div className="essentials-section">
        <h2>Travel Essentials for Italy</h2>
        <div className="essentials-grid">
          <div className="essential-item">
            <h3>Visa Requirements</h3>
            <p>Italy is part of the Schengen Area, so EU citizens can visit without a visa. Other nationals may need a Schengen visa for short stays.</p>
          </div>
          <div className="essential-item">
            <h3>Best Time to Visit</h3>
            <p>Italy is ideal to visit during spring (April to June) and autumn (September to October) when the weather is mild and the crowds are smaller.</p>
          </div>
          <div className="essential-item">
            <h3>Currency</h3>
            <p>The currency in Italy is the Euro (EUR). Credit cards are widely accepted, and ATMs are available in most cities.</p>
          </div>
          <div className="essential-item">
            <h3>Getting Around</h3>
            <p>Italy has an excellent train network, including high-speed trains. Renting a car is also an option if you plan to visit smaller towns or the countryside.</p>
          </div>
        </div>
      </div>

      {/* Local Cuisine Section */}
      <div className="cuisine-section">
        <h2>Discover Italy's Local Cuisine</h2>
        <div className="cuisine-grid">
          <div className="cuisine-item">
            <img src={pastaImage} alt="Pasta" className="cuisine-image" />
            <h3>Italian Pasta</h3>
            <p>Italy is known for its diverse pasta dishes. Enjoy classics like spaghetti carbonara, tagliatelle bolognese, or a simple plate of aglio e olio.</p>
          </div>

          <div className="cuisine-item">
            <img src={gelatoImage} alt="Gelato" className="cuisine-image" />
            <h3>Gelato</h3>
            <p>No trip to Italy is complete without sampling authentic Italian gelato. Made with fresh ingredients, it’s the perfect treat for any time of day.</p>
          </div>
          <div className="cuisine-item">
      <img src={pizzaImage} alt="Margherita Pizza" className="cuisine-image" />
      <h3>Margherita Pizza</h3>
      <p>Indulge in the classic Margherita Pizza, topped with fresh tomatoes, mozzarella, basil, and a drizzle of olive oil—a true Italian favorite.</p>
    </div>
        </div>
      </div>
      <div className="plan-trip-section">
        <h2>Ready to Plan Your Trip to Italy?</h2>
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

export default ItalyPage;
