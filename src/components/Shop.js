import React from 'react';
import '../styles/shop.css';
import logo from '../public/Home_MeubelHouse_Logos05.png';
import cart from '../public/grocery-store.png';
import arrow from '../public/SignUp_Vector.png';


export default function Shop() {
    return (
        <div>
            <Navbar />
            <LoginSection />
        </div>
    );
}

    const Navbar = () => {
        return (
        <div className="shop-navbar">
            <div className="shop-navbar-left">
                <a href="/home">
                    <img src={logo} alt="Logo" className="shop-logo" />
                </a>
                <span className="shop-navbar-title">
                    <a href="/home">Essentia</a>
                </span>
            </div>
            <div className="shop-navbar-right">
                <img src={cart} alt="Cart" className="shop-navbar-icon1" />                
            </div>
        </div>
        );
      };
      
      const LoginSection = () => {
        return (
            <div className="shop-section">
            <div className="shop-overlay"></div>
            <img src={logo} alt="Logo" className="logo1" />
            <span className='shop-text'>Shop</span>
            <span className='Home'>Home</span>
            <span className='shop2'>Shop</span>
            <img className='Vector' src={arrow} alt="Arrow" />
          </div>
        );
      };
