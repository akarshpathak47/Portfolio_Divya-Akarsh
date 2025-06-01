import React from 'react'
import himani from '../images/himani.jpg';
import './Sidebar.css';
import { FaHome, FaUser, FaFileAlt, FaImages, FaConciergeBell, FaBars, FaEnvelope } from 'react-icons/fa';

import { Link } from 'react-router-dom';
const socialLinks = [
    { href: '#', src: 'https://img.icons8.com/ios-filled/50/ffffff/twitterx.png', alt: 'X' },
    { href: '#', src: 'https://img.icons8.com/ios-filled/50/ffffff/facebook.png', alt: 'Facebook' },
    { href: '#', src: 'https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png', alt: 'Instagram' },
    { href: '#', src: 'https://img.icons8.com/ios-filled/50/ffffff/skype.png', alt: 'Skype' },
    { href: '#', src: 'https://img.icons8.com/ios-filled/50/ffffff/linkedin.png', alt: 'LinkedIn' }
  ];
  
  const menuItems = [
    { icon: <FaHome />, label: 'Home' },
    { icon: <FaUser />, label: 'About' },
    { icon: <FaFileAlt />, label: 'Resume' },
   
    { icon: <FaBars />, label: 'Skills' },
    { icon: <FaEnvelope />, label: 'Contact' }
  ];




function Sidebar(){
    return(<div class="sidebar">
        <div class="imgdiv">
        <img  class="sideimg" src={himani} alt="himani"></img>
        <div class="texthim">Himani Rajput</div>
        </div>
        <div className="social-icons">
      {socialLinks.map((link, index) => (
        <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
          <img src={link.src} alt={link.alt} />
        </a>
      ))}
    </div>
    <div className="sidebar-menu">
      {menuItems.map((item, index) => (
        <a key={index} href="/About" className="menu-item">
          {item.icon}
          <span>{item.label}</span>
        </a>
      ))}
    </div>
    </div>
     
    );
}
export default Sidebar;