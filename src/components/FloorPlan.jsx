import React from 'react';
import './FloorPlan.css';

const FloorPlan = ({ examples }) => {
  return (
    <div className="floor-plan">
      <h2>Creating a Floor Plan</h2>
      <div className="floor-plan-gallery">
        {examples.map((example, index) => (
          <div key={index} className="floor-plan-card">
            <img src={example.image} alt={example.title} className="floor-plan-image" />
            <div className="overlay">
              <div className="overlay-content">
                <h3>{example.title}</h3>
                <p>{example.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FloorPlan;
