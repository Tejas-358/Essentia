import React, { useState } from 'react';
import '../styles/shop.css';
import { Link } from 'react-router-dom';
import logo from '../public/Home_MeubelHouse_Logos05.png';
import cart from '../public/grocery-store.png';
import arrow from '../public/SignUp_Vector.png';
import data from './data';
import ItemCard from './ItemCard';
import { useLocation } from 'react-router-dom';

export default function Shop() {

    const location = useLocation();
    const { username } = location.state;

    return (
        <div>
            <Navbar />
            <ShopSection />
            <WelcomeMessage username={username}/>
            <CardFlip />
            <CheckoutButton />
        </div>
    );
}

const Navbar = () => {

    return (
        <div className="shop-navbar">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>
            <div className="shop-navbar-left">
                <a href="/home">
                    <img src={logo} alt="Logo" className="shop-logo" />
                </a>
                <span className="shop-navbar-title">Essentia</span>
            </div>
            <div className="shop-navbar-right">
                <a href='/cart'>
                    <img src={cart}  alt="Cart" className="shop-navbar-icon1" />
                </a>
            </div>
        </div>
    );
};

const ShopSection = () => {
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

const CardFlip = () => {
    console.warn(data.productData)
    return (
        
        <div className='card-container'>
            {data.productData.map((item, index)=>{
                return(
                    <ItemCard 
                    img={item.img}
                    title={item.title}  
                    price= {item.price} 
                    item = {item} 
                    key = {index}/>
                )
            })}
        </div>
    );
};


const CheckoutButton = () => {
    return (
        <div className="checkout-button-container">
            <Link to="/cart">
                <button className="checkout-button">View Cart</button>
            </Link>
        </div>
    );
};

const WelcomeMessage = ({ username }) => {
    return (
        <div className="welcome-message">
            <p>Welcome {username}!</p>
        </div>
    );
};

