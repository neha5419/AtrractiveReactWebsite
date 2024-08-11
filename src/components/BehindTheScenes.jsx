import React from 'react';
import './BehindScene.css';

const BehindTheScenes = ({ title, description, image }) => {
  return (
    <div className="behind-the-scenes">
      <h3 className="title">{title}</h3>
      <div className="content">
        <img src={image} alt={title} className="scene-image" />
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default BehindTheScenes;
