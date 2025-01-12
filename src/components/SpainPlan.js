import React, { useState, useEffect } from 'react';
import { fetchFlights } from '../api/flight';
import './SpainPlan.css';
import headerImage from '../images/header.jpg';
import barcelona from '../images/barcelona1.jpg'; // Import the header image
import madrid from '../images/madrid.jpg';
import seville from '../images/seville.jpg'; // Import image for Seville
import valencia from '../images/valencia.jpg'; 
const SpainPlan = () => {
  
  const [totalCost, setTotalCost] = useState(0);
  const [fromCity, setFromCity] = useState('BCN'); // Default from Barcelona
  const [departDate, setDepartDate] = useState('2025-06-21'); // Default date
  const [flightDetails, setFlightDetails] = useState([]);

  // Available departure cities
  const cities = [
    { id: 'BCN', name: 'Barcelona' },
    { id: 'PARI', name: 'Paris' },
    { id: 'NYC', name: 'New York' },
    { id: 'LON', name: 'London' },
  ];

  // Places to visit in Spain
  const placesToVisit = [
    {
      name: 'Barcelona',
      description: 'A vibrant city with unique architecture, beaches, and cultural richness.',
      activities: ['Cultural visit', 'Beach relaxation', 'Architecture tours', 'Shopping'],
      image: barcelona,
    },
    {
      name: 'Madrid',
      description: 'The capital city, famous for its historic palaces and lively squares.',
      activities: ['Museum tours', 'Royal palace visit', 'Food tours', 'Flamenco performances'],
      image: madrid,
    },
    {
        name: 'Seville',
        description: 'A historic city known for its stunning Moorish architecture, flamenco culture, and the Alcázar palace.',
        activities: ['Flamenco shows', 'Alcázar visit', 'Cathedral and Giralda Tower', 'Tapas tours'],
        image: seville, // Image for Seville
      },
      {
        name: 'Valencia',
        description: 'A city that blends futuristic architecture with medieval old town charm, and known for its beaches.',
        activities: ['City of Arts and Sciences', 'Beach visits', 'Historic center exploration', 'Paella tasting'],
        image: valencia, // Image for Valencia
      },
    // Add other cities with images here
  ];

  useEffect(() => {
    const getFlights = async () => {
      try {
        const data = await fetchFlights(fromCity, departDate); // Use the API function
        setFlightDetails(data);
        calculateTotalCost(data);
      } catch (error) {
        console.error('Error fetching flights:', error);
      }
    };

    if (fromCity && departDate) {
      getFlights();
    }
  }, [fromCity, departDate]);

  const calculateTotalCost = (flightData) => {
    const flightCost = flightData[0]?.price || 0;
    const hotelCost = 200; // Placeholder for hotel cost
    const total = flightCost + hotelCost;
    setTotalCost(total);
  };


  return (
    <div className="country-plan">
      {/* Header Image */}
      <header className="header-image">
        <img src={headerImage} alt="Spain Trip Header" />
      </header>

      <div className="content">
        <h1>Spain Trip Itinerary</h1>

        {/* Form to choose departure city and date */}
        <div className="input-form">
          <label>
            Departure City:
            <select value={fromCity} onChange={(e) => setFromCity(e.target.value)}>
              {cities.map((city) => (
                <option key={city.id} value={city.id}>
                  {city.name}
                </option>
              ))}
            </select>
          </label>
          <br />
          <label>
            Departure Date:
            <input
              type="date"
              value={departDate}
              onChange={(e) => setDepartDate(e.target.value)}
            />
          </label>
        </div>

        {/* Display flight details */}
        <h2>Flights</h2>
        <ul>
          {flightDetails.length > 0 ? (
            flightDetails.map((flight, index) => (
              <li key={index}>
                From {flight.fromEntityId} to {flight.toEntityId} - ${flight.price}
              </li>
            ))
          ) : (
            <p>Loading flights...</p>
          )}
        </ul>

        {/* Hotel Recommendations */}
        <h2>Hotel Recommendations</h2>
        <div className="hotel-list">
          <div className="hotel-card">
            <h3>Luxury Hotel: The Luxury Stay</h3>
            <p>Price: $400-800 per night</p>
          </div>
          <div className="hotel-card">
            <h3>Mid-Range Hotel: Hotel Plaza</h3>
            <p>Price: $180-350 per night</p>
          </div>
        </div>

        {/* Places to Visit */}
        <h2>Places to Visit in Spain</h2>
        <div className="places-list">
          {placesToVisit.map((place, index) => (
            <div key={index} className="place-card">
              <img src={place.image} alt={place.name} className="place-image" />
              <h3>{place.name}</h3>
              <p>{place.description}</p>
              <p><strong>Activities:</strong> {place.activities.join(', ')}</p>
            </div>
          ))}
        </div>

        {/* Estimated Total Cost */}
        <h2>Estimated Total Cost</h2>
        <p>$${totalCost}</p>
      </div>
    </div>
  );
};

export default SpainPlan;
