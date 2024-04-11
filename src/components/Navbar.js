import React from 'react';
import '../styles/navbar.css'
import ImgAsset from '../public'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/home" className="navbar-brand">
          <img src={ImgAsset.Home_MeubelHouse_Logos05} alt="Essentia"/>
        </a>
        <span className='navbar-text'>Essentia</span>
      </div>
      <div className="navbar-right">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="#" className="nav-link">Shop</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
            <img className='Vector' src = {ImgAsset.Header_Vector}/>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
            <img className='Vector_1' src = {ImgAsset.Header_Vector_1} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;