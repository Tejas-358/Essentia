
import React from 'react';
import logo from '../public/Home_MeubelHouse_Logos05.png';
import '../styles/navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <a href="/home">
          <img src={logo} alt="Logo" className="logo" />
        </a>
        <span className="title">
          <a href="/home">Essentia</a>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
