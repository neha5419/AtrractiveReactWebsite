import React from 'react';
import './BeforeAfter.css';

const BeforeAfterComparison = ({ beforeImage, afterImage, description }) => {
  return (
    <div className="case-study">
      <h3>Living Room Transformation</h3>
      <div className="comparison-container">
        <div className="image-wrapper">
          <img src={beforeImage} alt="Before" className="before-image" />
        </div>
        <div className="image-wrapper after">
          <img src={afterImage} alt="After" className="after-image" />
        </div>
      </div>
      <p className="description">{description}</p>
    </div>
  );
};

export default BeforeAfterComparison;
