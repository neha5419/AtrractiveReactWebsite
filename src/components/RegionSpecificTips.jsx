import React from 'react';
import './RegionSpecificTips.css';

const RegionSpecificTips = ({ tips }) => {
  return (
    <div className="region-specific-tips">
      <h2>Region-Specific Design Tips</h2>
      <div className="tips-container">
        {tips.map((tip, index) => (
          <div key={index} className="tip-card">
            <img src={tip.image} alt={tip.title} className="tip-image" />
            <div className="tip-content">
              <h3 className="tip-title">{tip.title}</h3>
              <p className="tip-description">{tip.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegionSpecificTips;
