import React from 'react';
import './Navbar.css';

const Navbar = ({ websiteName }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>{websiteName}</h1>
      
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#tips">Tips</a></li>
        <li><a href="#region-tips">Region-Specific Tips</a></li>
        <li><a href="#donts">Decorating Don'ts</a></li>
        <li><a href="#floor-plan">Creating a Floor Plan</a></li>
        <li><a href="#organization">Organization</a></li>
        <li><a href="#contact">Advice</a></li>
        <li><a href="#blog-posts">Blog</a></li>
        <li><a href="#about">About Team</a></li>
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
