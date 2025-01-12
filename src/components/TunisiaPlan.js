import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TunisiaPlan.css';
import headerImage from '../images/header.jpg'; // Import the same header image
import Soussa from '../images/Sousse.jpg';
import Djerba from '../images/Djerba.jpg';
import tunis from '../images/tunis1.jpg';
import Douz from '../images/douz.jpg';
const TunisiaPlan = () => {
  const [flights, setFlights] = useState([]);
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

  // Places to visit in Tunisia
  const placesToVisit = [
    {
      name: 'Tunis',
      description: 'The capital city of Tunisia, known for its rich history and vibrant culture.',
      activities: ['Cultural exploration', 'Sightseeing', 'Visiting ancient ruins', 'Shopping'],
      image: tunis,
    },
    {
      name: 'Sousse',
      description: 'A historic city along the coast, known for its ancient Medina and beautiful beaches.',
      activities: ['Beach relaxation', 'Old Medina tour', 'Visiting the Ribat', 'Local cuisine'],
      image: Soussa,
    },
    {
      name: 'Djerba',
      description: 'An island off the southern coast, famous for its beaches and Mediterranean culture.',
      activities: ['Beach activities', 'Water sports', 'Cultural tours', 'Visiting Houmt Souk'],
      image: Djerba,
    },
    {
        name: 'Douz', 
        description: 'A desert town in the heart of Tunisia, known for its access to the Sahara Desert and camel treks.',
        activities: ['Camel treks in the Sahara', 'Desert exploration', 'Stargazing', 'Visit the Desert Festival'],
        image: Douz, 
      },
  ];

  useEffect(() => {
    const fetchFlights = async () => {
      const response = await axios.post(
        'https://sky-scanner3.p.rapidapi.com/flights/search-multi-city',
        {
          market: 'US',
          locale: 'en-US',
          currency: 'USD',
          adults: 1,
          children: 0,
          infants: 0,
          cabinclass: 'economy',
          stops: ['direct', '1stop', '2stops'],
          sort: 'cheapest_first',
          airlines: [-32753, -32695],
          flights: [{ fromEntityId: fromCity, toEntityId: 'TUN', departDate: departDate }],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'x-rapidapi-host': 'sky-scanner3.p.rapidapi.com',
            'x-rapidapi-key': '6c0197e667mshe3ae4cf333d67a8p178ee6jsnbe828bef6ac9',
          },
        }
      );
      setFlightDetails(response.data);
      calculateTotalCost(response.data);
    };

    if (fromCity && departDate) {
      fetchFlights();
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
        <img src={headerImage} alt="Tunisia Trip Header" />
      </header>

      <div className="content">
        <h1>Tunisia Trip Itinerary</h1>

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
            <p>Price: $350 per night</p>
          </div>
          <div className="hotel-card">
            <h3>Mid-Range Hotel: Hotel Plaza</h3>
            <p>Price: $150 per night</p>
          </div>
        </div>

        {/* Places to Visit */}
        <h2>Places to Visit in Tunisia</h2>
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
        <p>${totalCost}</p>
      </div>
    </div>
  );
};

export default TunisiaPlan;
