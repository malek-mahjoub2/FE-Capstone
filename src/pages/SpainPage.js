import React from 'react';
import './SpainPage.css';  // Ensure you have the CSS for styling
import { FaArrowRight } from 'react-icons/fa';
// Importing images for the sections
import spainHeaderImage from '../images/spainHeader.jpg';  // Image for Spain header
import madridImage from '../images/madrid.jpg';  // Image for Madrid
import barcelonaImage from '../images/barcelona.jpg';  // Image for Barcelona
import granadaImage from '../images/granada.jpg';  // Image for Granada
import ibizaImage from '../images/ibiza.jpeg';  // Image for Ibiza
import paellaImage from '../images/paella.jpeg';  // Image for paella
import tapasImage from '../images/tapas.jpg';  // Image for tapas
import gioiaImage from '../images/gioia.jpg';
import churrosImage from '../images/churros.jpg';

const SpainPage = () => {
  return (
    <div className="spain-page">
      
      {/* Introduction Section */}
      <div className="intro-section">
        <img src={spainHeaderImage} alt="Spain" className="header-image" />
        <div className="intro-text">
          <h1>Welcome to Spain</h1>
          <p>
            Spain, with its passionate culture, historical landmarks, and beautiful landscapes, offers something for every traveler. 
            From the vibrant streets of Barcelona to the serene beauty of the Balearic Islands, explore Spain's diverse regions 
            and immerse yourself in its rich history and culinary delights.
          </p>
        </div>
      </div>

      {/* Must-Visit Destinations Section */}
      <div className="destinations-section">
        <h2>Must-Visit Destinations in Spain</h2>
        <div className="destinations-grid">
          <div className="destination-item">
            <img src={madridImage} alt="Madrid" className="destination-image" />
            <h3>Madrid</h3>
            <p>Experience the heart of Spain with its art museums, royal palaces, and vibrant nightlife. Visit the Prado Museum and Retiro Park.</p>
          </div>

          <div className="destination-item">
            <img src={barcelonaImage} alt="Barcelona" className="destination-image" />
            <h3>Barcelona</h3>
            <p>Admire the stunning architecture of Antoni Gaudí, including the Sagrada Família, and stroll through the historic Gothic Quarter.</p>
          </div>

          <div className="destination-item">
            <img src={granadaImage} alt="Granada" className="destination-image" />
            <h3>Granada</h3>
            <p>Visit the breathtaking Alhambra Palace and immerse yourself in the city’s Islamic architecture, charming streets, and gardens.</p>
          </div>

          <div className="destination-item">
            <img src={ibizaImage} alt="Ibiza" className="destination-image" />
            <h3>Ibiza</h3>
            <p>Known for its world-renowned nightlife and stunning beaches, Ibiza offers a mix of relaxation and excitement.</p>
          </div>
        </div>
      </div>

      {/* Travel Essentials Section */}
      <div className="essentials-section">
        <h2>Travel Essentials for Spain</h2>
        <div className="essentials-grid">
          <div className="essential-item">
            <h3>Visa Requirements</h3>
            <p>EU citizens can travel to Spain visa-free. Other nationals may need a Schengen visa for short stays.</p>
          </div>
          <div className="essential-item">
            <h3>Best Time to Visit</h3>
            <p>Spain is best visited in spring (March to May) and autumn (September to November) for pleasant weather and fewer tourists.</p>
          </div>
          <div className="essential-item">
            <h3>Currency</h3>
            <p>The currency in Spain is the Euro (EUR). ATMs are widely available in cities and towns.</p>
          </div>
          <div className="essential-item">
            <h3>Getting Around</h3>
            <p>Spain has an efficient transport system, including high-speed trains (AVE), buses, and domestic flights for easy travel between cities.</p>
          </div>
        </div>
      </div>

      {/* Local Cuisine Section */}
      <div className="cuisine-section">
        <h2>Discover Spain's Local Cuisine</h2>
        <div className="cuisine-grid">
          <div className="cuisine-item">
            <img src={paellaImage} alt="Paella" className="cuisine-image" />
            <h3>Paella</h3>
            <p>One of Spain’s most famous dishes, paella combines rice, saffron, seafood, and meat, creating a flavorful culinary masterpiece.</p>
          </div>

          <div className="cuisine-item">
            <img src={tapasImage} alt="Tapas" className="cuisine-image" />
            <h3>Tapas</h3>
            <p>Small plates of various Spanish dishes such as patatas bravas, jamón ibérico, and calamari. A perfect way to taste Spain’s variety.</p>
          </div>
          <div className="cuisine-item">
            <img src={gioiaImage} alt="Gioia" className="cuisine-image" />
            <h3>Gioia</h3>
            <p>A delightful Spanish dessert, Gioia is a creamy and refreshing treat made with fresh fruits and a hint of citrus.</p>
          </div>

          <div className="cuisine-item">
            <img src={churrosImage} alt="Churros" className="cuisine-image" />
            <h3>Churros</h3>
            <p>These fried dough pastries, often dipped in thick hot chocolate, are a beloved Spanish breakfast or snack.</p>
          </div>
        </div>
      </div>
      <div className="plan-trip-section">
        <h2>Ready to Plan Your Trip to Spain?</h2>
        <p>Click the button below to create your personalized itinerary and start your journey!</p>
        <button
          className="plan-trip-button"
          onClick={() => window.open('/FE-Capstone/spain-plan', '_blank')} // Open in new tab
        >
          Plan Your Trip <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default SpainPage;
