import React, { useState, useEffect } from 'react';
import axios from 'axios';
import headerImage from '../images/header.jpg'; 
import './GreecePlan.css';

const GreecePlan = () => {
  const [flights, setFlights] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [fromCity, setFromCity] = useState('BCN'); // Default fromEntityId (Barcelona)
  const [departDate, setDepartDate] = useState('2025-06-21'); // Default date

  const [flightDetails, setFlightDetails] = useState([]);

  // Available departure cities
  const cities = [
    { id: 'BCN', name: 'Barcelona' },
    { id: 'PARI', name: 'Paris' },
    { id: 'NYC', name: 'New York' },
    { id: 'LON', name: 'London' },
  ];

  // Expanded places to visit in Greece
  const placesToVisit = [
    {
      name: 'Athens',
      description: 'The ancient capital, home to iconic landmarks like the Parthenon and the Acropolis.',
      activities: ['Historical exploration', 'Museum visits', 'Hiking to Acropolis', 'Cultural tours'],
    },
    {
      name: 'Santorini',
      description: 'Famous for its whitewashed buildings, blue-domed churches, and stunning sunsets.',
      activities: ['Sunset viewing', 'Boat tours', 'Luxury relaxation', 'Beach activities'],
    },
    {
      name: 'Mykonos',
      description: 'A vibrant island known for its beaches, nightlife, and picturesque villages.',
      activities: ['Beach relaxation', 'Nightlife', 'Sightseeing', 'Coastal hiking'],
    },
    {
      name: 'Crete',
      description: 'The largest Greek island, known for its history, beaches, and natural beauty.',
      activities: ['Hiking in Samaria Gorge', 'Beach relaxation', 'Historical exploration'],
    },
    {
      name: 'Rhodes',
      description: 'A beautiful island known for its medieval old town and sandy beaches.',
      activities: ['Historical tours', 'Beach relaxation', 'Sightseeing', 'Ancient ruins'],
    },
    {
      name: 'Corfu',
      description: 'An island with a blend of Venetian, French, and British influences, offering lush green landscapes.',
      activities: ['Beach relaxation', 'Cultural exploration', 'Hiking', 'Exploring ancient fortresses'],
    },
    {
      name: 'Naxos',
      description: 'Known for its beautiful beaches, ancient ruins, and quaint villages.',
      activities: ['Hiking', 'Beach activities', 'Cultural exploration'],
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
          flights: [
            { fromEntityId: fromCity, toEntityId: 'ATH', departDate: departDate },
          ],
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
    const hotelCost = 250; // Placeholder for hotel cost
    const total = flightCost + hotelCost;
    setTotalCost(total);
  };

  return (
    <div id="itinerary" className="country-plan">
      <div className="header" style={{ backgroundImage: `url(${headerImage})` }}>
        <h1>Explore Greece: Your Perfect Trip</h1>
      </div>

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

      {/* Flight Details */}
      <h2>Flights</h2>
      <ul className="flight-details">
        {flightDetails.length > 0 ? (
          flightDetails.map((flight, index) => (
            <li key={index} className="flight-card">
              <div>
                <p><strong>From:</strong> {flight.fromEntityId}</p>
                <p><strong>To:</strong> {flight.toEntityId}</p>
                <p><strong>Price:</strong> ${flight.price}</p>
              </div>
            </li>
          ))
        ) : (
          <p>Loading flights...</p>
        )}
      </ul>

      {/* Hotel Recommendations */}
      <h2>Hotel Recommendations</h2>
      <div className="hotel-list">
        <div className="hotel">
          <h3>Luxury Hotel: The Residence</h3>
          <p>Price: $350 per night</p>
        </div>
        <div className="hotel">
          <h3>Mid-Range Hotel: Hotel Belvedere</h3>
          <p>Price: $130 per night</p>
        </div>
      </div>

      {/* Places to Visit */}
      <h2>Places to Visit in Greece</h2>
      <div className="places-grid">
        {placesToVisit.map((place, index) => (
          <div key={index} className="place-card">
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
  );
};

export default GreecePlan;
