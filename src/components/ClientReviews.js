import React, { useState } from 'react';
import Women1 from '../images/women1.jpg';
import Harrison from '../images/Harrison.jpg';
import Robin from '../images/robin-heintze.1024x1024.jpg';
import './ClientReviews.css'; // Make sure the CSS file exists and is correctly imported

// Example client data (Replace with actual data)
const clientReviews = [
  {
    name: 'Fatima Ogunleye',
    image: Women1,
    review: 'Steve was incredibly helpful and nothing was too much trouble. I highly recommend Travel Planners if you’re looking to book a holiday',
  },
  {
    name: 'Amadou Makgatho',
    image: Robin,
    review: 'This is our first time booking through Travel Planners we have found Paul extremely helpful and professional. Nothing was too much trouble',
  },
  {
    name: 'Alice Johnson',
    image: Harrison,
    review: 'This is my third time using travel planners to plan a holiday and I’m always happy with the results!',
  },
];

const ClientReviews = () => {
  const [currentClientIndex, setCurrentClientIndex] = useState(0);

  // Function to go to the next review
  const nextClient = () => {
    setCurrentClientIndex((prevIndex) =>
      prevIndex === clientReviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous review
  const prevClient = () => {
    setCurrentClientIndex((prevIndex) =>
      prevIndex === 0 ? clientReviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="client-reviews">
      <h2>What Our Clients Say About Us</h2>
      <div className="reviews-container">
        <div className="review-card">
          <div className="client-image-container">
            <img
              src={clientReviews[currentClientIndex].image}
              alt={clientReviews[currentClientIndex].name}
              className="client-image"
            />
          </div>
          <div className="client-review">
            <p>{clientReviews[currentClientIndex].review}</p>
          </div>
          <div className="client-name">
            <strong>{clientReviews[currentClientIndex].name}</strong>
          </div>
        </div>
      </div>
      <div className="navigation-dots">
        {clientReviews.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentClientIndex ? 'active' : ''}`}
            onClick={() => setCurrentClientIndex(index)}
          ></span>
        ))}
      </div>
      <div className="navigation-buttons">
        <button onClick={prevClient}>&lt;</button>
        <button onClick={nextClient}>&gt;</button>
      </div>
    </section>
  );
};

export default ClientReviews;
