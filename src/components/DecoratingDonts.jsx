import React from 'react';
import './DecoratingDonts.css';

const DecoratingDonts = ({ donts }) => {
  return (
    <div className="decorating-donts">
      <h2>Decorating Don'ts</h2>
      <div className="donts-container">
        {donts.map((dont, index) => (
          <div key={index} className="dont-card">
            <img src={dont.image} alt={dont.title} className="dont-image" />
            <div className="dont-content">
              <h3 className="dont-title">{dont.title}</h3>
              <p className="dont-description">{dont.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DecoratingDonts;
