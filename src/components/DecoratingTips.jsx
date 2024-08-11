import React from 'react';
import './DecoratingTips.css';

const DecoratingTips = ({ tips }) => {
  return (
    <div className="decorating-tips">
      <h2>Decorating Tips and Trends</h2>
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

export default DecoratingTips;
