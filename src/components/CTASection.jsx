import React from 'react';
import './CTASection.css';

const CTASection = () => {
  return (
    <section className="cta-section">
      <h2>Ready to Transform Your Space?</h2>
      <p>Contact us today to start your project or get a free consultation!</p>
      <div className="cta-buttons">
        <a href="https://www.linkedin.com/in/neha-phadtare-97a31a20b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="cta-button">Get in Touch</a>
        <a href="#newsletter" className="cta-button">Subscribe to Our Newsletter</a>
      </div>
    </section>
  );
};

export default CTASection;
