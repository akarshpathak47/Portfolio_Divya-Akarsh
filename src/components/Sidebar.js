import React from 'react'
import himani from '../images/himani.jpg';
import './Sidebar.css';
import { Link } from 'react-router-dom';



import { FaHome, FaUser, FaFileAlt, FaImages, FaConciergeBell, FaBars, FaEnvelope } from 'react-icons/fa';


const socialLinks = [
    { href: '#', src: 'https://img.icons8.com/ios-filled/50/ffffff/twitterx.png', alt: 'X' },
    { href: '#', src: 'https://img.icons8.com/ios-filled/50/ffffff/facebook.png', alt: 'Facebook' },
    { href: '#', src: 'https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png', alt: 'Instagram' },
    { href: '#', src: 'https://img.icons8.com/ios-filled/50/ffffff/skype.png', alt: 'Skype' },
    { href: '#', src: 'https://img.icons8.com/ios-filled/50/ffffff/linkedin.png', alt: 'LinkedIn' }
  ];
  
const menuItems = [
  { icon: <FaHome />, label: 'Home', href: '#' },
  { icon: <FaUser />, label: 'About', href: '#about' },
  { icon: <FaFileAlt />, label: 'Resume', route: '/resume' }, // use 'route' for routing
  { icon: <FaBars />, label: 'Skills', href: '#skills' },
  { icon: <FaEnvelope />, label: 'Contact', href: '#contact' },
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
      <a key={index} href={item.href} className="menu-link">
        <span className="icon">{item.icon}</span>
        <span>{item.label}</span>
      </a>
    )
  )}
    </div>
    </div>
     
    );
}
export default Sidebar;