import React from 'react';
import './services.css';
import s from '../../assets/s.png';
const Services = () => {
  const servicesData = [
    {
      title: 'Pet Grooming',
      details: [
        'Bathing and drying',
        'Nail trimming',
        'Haircuts and styling',
      ],
    },
    {
      title: 'Veterinary Care',
      details: [
        'Vaccination services',
        'Routine check-ups',
        'Emergency treatments',
      ],
    },
    {
      title: 'Pet Sitting',
      details: [
        'Daily feeding and walking',
        'Medication administration',
        'Overnight stays',
      ],
    },
    {
      title: 'Training',
      details: [
        'Obedience training',
        'Behavior correction',
        'Puppy socialization',
      ],
    },
  ];

  return (
    <section id="services">
    <div className="services-container">
      <h1>Our Services</h1>
      <p>Explore the wide range of services we offer for your beloved pets.</p>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-circle" key={index}>
            <h2>{service.title}</h2>
            <ul className="service-details">
              {service.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="services-image">
        
          <img src={s} alt="Decorative"   />
      </div>
    </div></section>
  );
};

export default Services;
