import React from 'react'
import himani from '../images/himani.jpg';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


import { FaHome, FaUser, FaFileAlt, FaImages, FaConciergeBell, FaBars, FaEnvelope } from 'react-icons/fa';


const socialLinks = [
    { href: 'https://github.com/HimaniRajput-2003', src: 'https://img.icons8.com/ios-filled/50/ffffff/github.png', alt: 'Github' },
    { href: '#', src: 'https://img.icons8.com/ios-filled/50/ffffff/facebook.png', alt: 'Facebook' },
    { href: 'https://www.instagram.com/himani_rajput03?igsh=MWpvdnV1MGRuaXJ2MQ==', src: 'https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png', alt: 'Instagram' },
    
    { href: 'https://www.linkedin.com/in/himani-rajput-094637267/', src: 'https://img.icons8.com/ios-filled/50/ffffff/linkedin.png', alt: 'LinkedIn' }
  ];
  
const menuItems = [
  { icon: <FaHome />, label: 'Home', href: 'home' },
  { icon: <FaUser />, label: 'About', href: 'about' },
  { icon: <FaFileAlt />, label: 'Resume', route: '/resume' },
  { icon: <FaBars />, label: 'Skills', href: 'skills' },
  { icon: <FaEnvelope />, label: 'Contact', href: 'contact' },
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
      {menuItems.map((item, index) =>
    item.route ? (
      <Link key={index} to={item.route} className="menu-link">
        <span className="icon">{item.icon}</span>
        <span>{item.label}</span>
      </Link>
    ) : (
      <HashLink
        key={index}
        smooth
        to={`/#${item.href}`}
        className="menu-link"
      >
        <span className="icon">{item.icon}</span>
        <span>{item.label}</span>
      </HashLink>
    )
  )}
    </div>
    </div>
     
    );
}
export default Sidebar;