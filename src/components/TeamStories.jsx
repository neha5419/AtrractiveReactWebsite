import React from 'react';
import './TeamStories.css';

const TeamStories = ({ teamMembers }) => {
  return (
    <section className="team-stories">
      <h2>Meet Our Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-member-card" key={index}>
            <img src={member.image} alt={member.name} className="team-image" />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
            <p className="team-story">{member.story}</p>
            <a href={member.interviewLink} className="interview-link">Read Interview</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamStories;
