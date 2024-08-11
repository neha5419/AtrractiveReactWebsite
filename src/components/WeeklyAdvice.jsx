import React, { useState } from 'react';
import './WeeklyAdvice.css';

const WeeklyAdvice = ({ adviceList }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ratings, setRatings] = useState(Array(adviceList.length).fill(null));

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % adviceList.length);
  };

  const handleRating = (rating) => {
    const newRatings = [...ratings];
    newRatings[currentIndex] = rating;
    setRatings(newRatings);
  };

  const currentAdvice = adviceList[currentIndex];

  return (
    <div className="weekly-advice">
      <h2>Weekly Advice from Top Designers</h2>
      <div className="advice-card">
        <img src={currentAdvice.image} alt={currentAdvice.designer} className="designer-image" />
        <div className="advice-content">
          <h3>{currentAdvice.designer}</h3>
          <p>"{currentAdvice.tip}"</p>
          <div className="rating-section">
            <p><strong>Your Rating:</strong></p>
            <button
              className={`rating-button ${ratings[currentIndex] === 'up' ? 'selected' : ''}`}
              onClick={() => handleRating('up')}
            >
              👍
            </button>
            <button
              className={`rating-button ${ratings[currentIndex] === 'down' ? 'selected' : ''}`}
              onClick={() => handleRating('down')}
            >
              👎
            </button>
          </div>
          <div className="schedule-info">
            <p><strong>Next Update:</strong> {currentAdvice.nextUpdate}</p>
            <button className="schedule-button" onClick={() => alert('Schedule an interview with ' + currentAdvice.designer)}>
              Schedule Interview
            </button>
          </div>
          <button className="next-button" onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default WeeklyAdvice;
