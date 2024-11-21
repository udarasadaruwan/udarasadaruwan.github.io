import React, { useState } from 'react';
import './Navbar.css';  // Remember to create this file for styling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-top">
        <div className="navbar-logo">
          <a href="#hero">
            <div className="logo-back">
              <h1 className="logo">US.</h1>
            </div>
          </a>
        </div>

        <button className="navbar-toggle" onClick={toggleMenu}>
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li><a href="#hero" onClick={toggleMenu}>Home</a></li>
        <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
        <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
        <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
