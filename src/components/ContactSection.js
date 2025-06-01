import React from 'react';
import './ContactSection.css';

export default function ContactSection() {
  return (
    <div className="contact-section">
      <h2 className="contact-heading">Contact</h2>
      <div className="contact-box">
        <h3>Send a Note</h3>
        <form className="contact-form">
          <label>Full Name</label>
          <input type="text" placeholder="Enter Your Name" />

          <label>E-mail Address</label>
          <input type="email" placeholder="Enter Your Email-Address" />

          <label>Message</label>
          <textarea placeholder="Write your message here" rows="4" />

          <button type="submit">Send</button>
        </form>
      </div>
      <div className="contact-icons">
        <a href="https://www.linkedin.com/in/himani-rajput-094637267/" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="LinkedIn" />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png" alt="Instagram" />
        </a>
      </div>
    </div>
  );
}
