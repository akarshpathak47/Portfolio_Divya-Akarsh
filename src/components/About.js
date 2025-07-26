import React from 'react';
import './About.css';
import akarsh from './images/akarsh.jpg';
import resume from './images/resume.pdf';

const About = () => {
  return (
    <section className="about-section" id='about'>
      <div className="about-top">
        <div className="profile-pic">
          <img src={akarsh} alt="Akarsh Pathak" />
        </div>
        <div className="intro-text">
          <h1>👋 Hi, I'm <span>Divya Akarsh Pathak</span></h1>
          <p>
            I’m a passionate IT enthusiast who loves building creative and scalable web applications.
            I specialize in <strong>ReactJS, JavaScript, C++</strong>, and I’m diving deep into <strong>AI/ML</strong> technologies.
          </p>
          <p>
            Currently pursuing my B.Tech in IT at MMMUT,Gkp with a CGPA of 7.68 and SGPA of 8.23 till 6th sem, I enjoy turning problems into elegant, efficient code.
          </p>
          <p>
            When I’m not coding, you’ll find me writing, playing cricket, or exploring the latest tech trends.
          </p>

          <div className="buttons">
            <a href={resume} className="btn primary" download>📄 Download Resume</a>
            <a href="https://www.linkedin.com/in/akarsh-pathak-463834283/" className="btn secondary" target="_blank" rel="noreferrer">💼 LinkedIn</a>
            <a href="https://github.com/akarshpathak47" className="btn secondary" target="_blank" rel="noreferrer">💻 GitHub</a>
          </div>
        </div>
      </div>

      

        <div className="info-block">
          <h2>🎓 Education</h2>
          <div className="timeline">
            <div className="timeline-item">
              <span  />
              <div className="timeline-content">
                <h4>B.Tech IT (2022–2026)</h4>
                <p>MMMUT – CGPA: 7.68</p>
              </div>
            </div>
            <div className="timeline-item">
              <span  />
              <div className="timeline-content">
                <h4>Senior Secondary (2021)</h4>
                <p>87.20%</p>
              </div>
            </div>
            <div className="timeline-item">
              <span />
              <div className="timeline-content">
                <h4>Secondary (2019)</h4>
                <p>92.0%</p>
              </div>
            </div>
          </div>
        </div>
     
    </section>
  );
};

export default About;
