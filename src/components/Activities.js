import React from 'react';
import './Activities.css'; 
import hiking from '../images/hiking.jpg';
import river from '../images/river.jpg';
import wildlife from '../images/wildlife.jfif'; 

const Activities = () => {
  return (
    <div className="intro-container">
      <h2 className="intro-title">Explore the Mediterranean  Adventure Awaits!</h2>
      <p className="intro-text">
          From the sun-kissed beaches of Spain to the rugged mountains of Greece, the Mediterranean is a treasure trove of natural wonders. Whether you're hiking through lush trails, kayaking along serene rivers, or discovering vibrant wildlife, each country offers unique experiences that will leave you in awe. Dive into the heart of the Mediterranean and create unforgettable memories.
      </p>
      
      <div className="intro-icons">
        <div className="icon-item">
          <img src={hiking} alt="Hiking Trails" className="icon-img"/>
          <p>Hiking Trails</p>
        </div>
        <div className="icon-item">
          <img src={river} alt="River Tours" className="icon-img"/>
          <p>River Tours</p>
        </div>
        <div className="icon-item">
          <img src={wildlife} alt="Vineyard Visits" className="icon-img"/>
          <p>Vineyard Visits</p>
        </div>
      </div>
    </div>
  );
};

export default Activities;
