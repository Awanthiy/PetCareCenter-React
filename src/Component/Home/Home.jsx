import React from 'react';
import "./Home.css";
import bg3 from '../../assets/bg3.png'; // Puppy image

const Home = () => {
  return (
    <section id="home">
    <div className="home">
      <div className="content">
        <div className="text-section">
          <h5 className="welcome-text">Welcome to Pet Shop</h5>
          <h1 className="main-heading">WE PROVIDE BEST PET PRODUCE  </h1>
          <button className="sign-in-button">Sign In</button>
        </div>
        <div className="image-section">
          <img src={bg3} alt="Puppy" className="puppy-image" />
        </div>
      </div>
    </div></section>
  );
};

export default Home;
