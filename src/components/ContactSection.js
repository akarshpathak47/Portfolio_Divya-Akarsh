import React, { useState } from 'react';
import './ContactSection.css';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send form data using fetch to FormSubmit
    const response = await fetch('https://formsubmit.co/ajax/rajputhimani2003@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      alert('Thank you for contacting!');
      setFormData({ name: '', email: '', message: '' }); // clear form
    } else {
      alert('Something went wrong. Please try again!');
    }
  };

  return (
    <div className="contact-section">
      <h2 className="contact-heading">Contact</h2>
      <div className="contact-box">
        <h3>Send a Note</h3>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>E-mail Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email-Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Message</label>
          <textarea
            name="message"
            placeholder="Write your message here"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send</button>
        </form>
      </div>

      <div className="contact-icons">
        <a
          href="https://www.linkedin.com/in/himani-rajput-094637267/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="LinkedIn" />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png" alt="Instagram" />
        </a>
      </div>
    </div>
  );
}
