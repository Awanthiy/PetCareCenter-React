import React, { useState } from 'react';
import axios from 'axios';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      alert(response.data.message);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      alert('Failed to send message');
    }
  };

  return (
    <section id="contact">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Please fill out the form below to get in touch with us.</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" value={formData.subject} onChange={handleChange} placeholder="Enter subject" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" value={formData.message} onChange={handleChange} placeholder="Enter your message" rows="5" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
