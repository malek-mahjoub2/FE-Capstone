import React, { useState, useEffect } from 'react';
import { fetchFlights } from '../api/flight';
import './ItalyPlan.css';
import headerImage from '../images/header.jpg'; // Import the header image

const ItalyPlan = () => {

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

  // Places to visit in Italy
  const placesToVisit = [
    { name: 'Rome', description: 'The Eternal City, rich with ancient ruins, art, and history.', activities: ['Visit the Colosseum', 'Roman Forum', 'Vatican Museums', 'Cultural tours'] },
    { name: 'Venice', description: 'A unique city of canals, romantic gondola rides, and magnificent architecture.', activities: ['Canal tours', 'Romantic walks', 'St. Mark’s Square', 'Cultural exploration'] },
    { name: 'Amalfi Coast', description: 'A stunning coastal region with picturesque villages, cliffs, and blue waters.', activities: ['Scenic drives', 'Hiking', 'Beach relaxation', 'Boating'] },
    { name: 'Cinque Terre', description: 'A UNESCO World Heritage Site with colorful villages perched on cliffs.', activities: ['Hiking', 'Boat tours', 'Seaside relaxation', 'Wine tasting'] },
    { name: 'Sicily', description: 'A Mediterranean island with ancient ruins, beaches, and stunning volcanoes.', activities: ['Archaeological tours', 'Hiking Mount Etna', 'Beach relaxation'] },
    { name: 'Florence', description: 'The cradle of the Renaissance, home to art, museums, and architecture.', activities: ['Art tours', 'Museum visits', 'Sightseeing', 'Duomo visit'] },
    { name: 'Capri', description: 'A Mediterranean island famous for its luxury and breathtaking coastal views.', activities: ['Boat tours', 'Sightseeing', 'Beach relaxation'] },
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
    <main>
    <div className="country-plan">
      {/* Header Image */}
      <header className="header-image">
        <img src={headerImage} alt="Italy Trip Header" />
      </header>

      <div className="content">
        <h1>Italy Trip Itinerary</h1>

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
            <input type="date" value={departDate} onChange={(e) => setDepartDate(e.target.value)} />
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
            <h3>Luxury Hotel: The Luxury Palazzo</h3>
            <p>Price: $450 per night</p>
          </div>
          <div className="hotel-card">
            <h3>Mid-Range Hotel: Hotel Roma</h3>
            <p>Price: $170 per night</p>
          </div>
        </div>

        {/* Places to Visit */}
        <h2>Places to Visit in Italy</h2>
        <div className="places-list">
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
    </div>
    </main>
  );
};

export default ItalyPlan;
