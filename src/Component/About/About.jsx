import React from 'react';
import './About.css';
import a2 from '../../assets/a2.png'; // Replace with your pet image path

const About = () => {
  return (
    <section id="about">
    <div className="about">
      <div className="image-section">
        <img src={a2} alt="Pet Care" className="about-image" />
      </div>
      <div className="text-section2">
        <h2>About Us</h2>
        <p>
          Welcome to our Pet Care Center! We are passionate about keeping your pets happy, healthy, and well cared for. 
          From grooming to veterinary services, we provide everything your furry friends need under one roof. Our team is 
          dedicated to delivering the best care and love for your pets because they deserve nothing less.
        </p>
      </div>
    </div></section>
  );
};

export default About;
