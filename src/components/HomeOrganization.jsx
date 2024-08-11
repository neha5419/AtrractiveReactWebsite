import React from 'react';
import './HomeOrganization.css';

const HomeOrganization = ({ ideas }) => {
  return (
    <div className="home-organization">
      <h2>Home Organization Ideas</h2>
      <div className="ideas-container">
        {ideas.map((idea, index) => (
          <div key={index} className="idea-card">
            <img src={idea.image} alt={idea.title} className="idea-image" />
            <div className="idea-content">
              <h3>{idea.title}</h3>
              <p>{idea.description}</p>
              <button className="idea-button" onClick={() => alert(idea.details)}>
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeOrganization;
