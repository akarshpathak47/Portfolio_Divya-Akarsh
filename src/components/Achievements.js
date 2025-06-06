import React from 'react';
import './Achievements.css';
import flipkartImg from './images/Flipkart.jpg';
import tvsImg from './images/TVS credit Cerificate.jpg';

const certificates = [
  {
    type: 'image',
    title: 'Flipkart GRiD 6.0 - E-Commerce & Tech Quiz',
    src: flipkartImg,
    description: 'Participated in Level 1 of Flipkart GRiD 6.0 - Software Development Track organized by Flipkart.',
  },
  {
    type: 'image',
    title: 'TVS Credit EPIC 6.0 - Analytics Challenge',
    src: tvsImg,
    description: 'Participated in TVS Credit EPIC 6.0 Analytics Challenge as Team akarshpathak47.',
  },
  {
    type: 'pdf',
    title: 'Deep Learning - IIT Ropar (NPTEL)',
    src: '/pdfs/Deep_Learning_IIT_Ropar.pdf',
    description: 'Completed a 12-week NPTEL course on Deep Learning with 70/100 overall score.',
  },
  {
    type: 'pdf',
    title: 'Computer Vision - NPTEL',
    src: '/pdfs/Computer_Vision_NPTEL.pdf',
    description: 'Completed a 12-week NPTEL course on Computer Vision with 61/100 overall score.',
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="achievements-section">
      <h2>Achievements & Certificates</h2>
      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <div key={index} className="certificate-card">
            <h4>{cert.title}</h4>
            <p className="description">{cert.description}</p>
            {cert.type === 'image' && (
              <img src={cert.src} alt={cert.title} className="certificate-img" />
            )}
            {cert.type === 'pdf' && (
              <a
                href={cert.src}
                target="_blank"
                rel="noopener noreferrer"
                className="pdf-link"
              >
                View PDF
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
