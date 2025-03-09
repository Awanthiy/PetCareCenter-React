import React from "react";
import "./Footer.css";
import pet2 from "../../assets/pet2.png";

const Footer = () => {
  return (
    <footer className="footer">
      {/* First Column: Logo */}
      <div className="footer-column">
        <img src={pet2} alt="Pet Shop Logo" className="footer-logo" />
      </div>
       
      {/* Second Column: Navigation Tabs */}
      <div className="footer-column">
        <h3>Quick Links</h3>
        <ul className="footer-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      
      {/* Fourth Column: Contact Details */}
      <div className="footer-column">
        <h3>Contact Us</h3>
        <p>Phone: +1-800-PET-LOVE</p>
        <p>Email: info@petshop.com</p>
        <p>Address: 123 Pet Street, Pet City, PC 45678</p>
      </div>
    </footer>
  );
};

export default Footer;
