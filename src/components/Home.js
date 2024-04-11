import React from 'react';
import '../styles/home.css';
import first from '../public/first.png';
import second from '../public/second.png';
import third from '../public/third.png';
import fourth from '../public/fourth.png';
import logo from '../public/Home_MeubelHouse_Logos05.png'
import login from '../public/Home_Vector.png'

export default function Home() {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-left">
          <a href="/home">
            <img src={logo} alt="Logo" className="logo" />
          </a>
          <span className="navbar-title">
            <a href="/home">Essentia</a>
          </span>
        </div>
        <div className="navbar-center">
          <span className="navbar-link">
            <a href="/shop">Shop</a>
          </span>
        </div>
        <div className="navbar-right">
          <a href="/login">
            <img src={login} alt="Login" className="navbar-icon1" />
          </a>
        </div>
      </div>
      <div className="container">
        <div className='first'>
          <div className="image-container">
            <img className="firstimg" src={first} alt="First Image" />
            <span className='text1_1'>Breezy Elegance: The Cotton Linen Stand Collar Shirt</span>
            <span className="text1_2">Crafted with a higher cotton content, it boasts an incredibly soft feel against your skin.  The roomy fit makes it versatile - wear it on its own for a relaxed look, or layer it over a tee for added sophistication. </span>
            <span className='text1_3'>$39.90</span>
          </div>
        </div>
        <div className='second'>
          <div className="image-container">
            <img className="secondimg" src={second} alt="Second Image" />
            <span className='text2_1'>Timeless Versatility: The Gray Sleeveless Sweater</span>
            <span className="text2_2">The sleeveless design offers versatility - layer it over a button-down for a preppy vibe, or pair it with a crisp t-shirt for a casual yet polished look.</span>
            <span className='text2_3'>$41.50</span>
          </div>
        </div>
        <div className='third'>
          <div className="image-container">
            <img className="thirdimg" src={third} alt="Third Image" />
            <span className='text3_1'>Classic Cool: The Cotton Black Collarless T-Shirt</span>
            <span className="text3_2">The  cotton black t-shirt is a wardrobe cornerstone you can't live without. This black tee offers a timeless look that pairs effortlessly with everything.</span>
            <span className='text3_3'>$39.90</span>
          </div>
        </div>
        <div className='fourth'>
          <div className="image-container">
            <img className="fourthimg" src={fourth} alt="Fourth Image" />
            <span className='text4_1'>Minimal Astehtic: Pleated Wide Textured Pants</span>
            <span className="text4_2">The subtle texture adds a touch of dimension to the classic black chino, creating a polished and put-together look.</span>
            <span className='text4_3'>$37.50</span>
          </div>
        </div>
      </div>
    </div>
  );
}
