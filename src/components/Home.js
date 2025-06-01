import React from "react";
import Sidebar from './Sidebar';
import About from './About';
import "./Home.css";
import Skills from'./Skills';
import ContactSection from './ContactSection';

const Home = () => {
  return (
    <div className="universal">
      <div className="wrapper">
        <div className="side">
          <Sidebar />
        </div>
        <div className="about">
          <About />
          <Skills />
          <ContactSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
