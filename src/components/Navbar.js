import React from 'react';
import logo from '../public/Home_MeubelHouse_Logos05.png'; // Importing logo
import '../styles/navbar.css'; // Importing styles

// Navbar component
const Navbar = () => {
  return (
    <div className="navbar"> {/* Navbar container */}
      <div className="navbar-left"> {/* Left section of the navbar */}
        <a href="/home">
          <img src={logo} alt="Logo" className="logo" /> {/* Logo */}
        </a>
        <span className="title">
          <a href="/home">Essentia</a> {/* Title */}
        </span>
      </div>
    </div>
  );
};

export default Navbar; // Exporting Navbar component
