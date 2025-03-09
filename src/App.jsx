import React from 'react';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Services from './Component/services/services'; 
import Contact from './Component/contact/contact'; 
import Footer from './Component/footer/footer'; 
 

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Contact /> 
      <Footer/>
    </div>
  );
};

export default App;
