import React from 'react';
import '../styles/shop.css';
import logo from '../public/Home_MeubelHouse_Logos05.png';
import cart from '../public/grocery-store.png';
import arrow from '../public/SignUp_Vector.png';
import wj1 from '../public/j1.jpeg'
import wj2 from '../public/j2.jpeg'
import ws1 from '../public/s1.jpeg'
import ws2 from '../public/s2.jpeg'
import wh1 from '../public/w1.jpeg'
import wh2 from '../public/w2.jpeg'
import mj1 from '../public/mj1.jpeg'
import mj2 from '../public/mj2.jpeg'
import ms1 from '../public/ms1.jpeg'
import ms2 from '../public/ms2.jpeg'
import mh1 from '../public/mw1.jpeg'
import mh2 from '../public/mw2.jpeg'



export default function Shop() {
    return (
        <div>
            <Navbar />
            <ShopSection />
            <CardFlip/>
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
    return (
        <div>
            <FirstDiv />
            <SecondDiv />
            <ThirdDiv />
        </div>
        
    )
}

const FirstDiv = () => {
    return (
      <div>
        <div class="container1">
              <div className='card'>
                  <div className='front'>
                      <img src={wj1} className='image1'></img>
                  </div>
                  <div className='back'>
                      <h1 className='back-text-1'>High-Waisted Cargo Wide Fit</h1>
                      <p className='back-text-2'>Price: $33.90</p>
                      <button className="add-to-cart-button">Add to Cart</button>
                  </div>
              </div>
              <div className='card'>
                  <div className='front'>
                      <img src={wj2} className='image2'></img>
                  </div>
                  <div className='back'>
                      <h1 className='back-text-1'>High-Waisted Cargo Wide Fit</h1>
                      <p className='back-text-2'>Price: $33.90</p>
                      <button className="add-to-cart-button">Add to Cart</button>
                  </div>
              </div>
              <div className='card'>
                  <div className='front'>
                      <img src={ws1} className='image3'></img>
                  </div>
                  <div className='back'>
                      <h1 className='back-text-1'>High-Waisted Cargo Wide Fit</h1>
                      <p className='back-text-2'>Price: $33.90</p>
                      <button className="add-to-cart-button">Add to Cart</button>
                  </div>
              </div>
              <div className='card'>
                  <div className='front'>
                      <img src={ws2} className='image4'></img>
                  </div>
                  <div className='back'>
                      <h1 className='back-text-1'>High-Waisted Cargo Wide Fit</h1>
                      <p className='back-text-2'>Price: $33.90</p>
                      <button className="add-to-cart-button">Add to Cart</button>
                  </div>
              </div>
          </div>
      </div>
    )
  }
  

  const SecondDiv = () => {
    return (
      <div>
        <div class="container2">
              <div className='card'>
                  <div className='front'>
                      <img src={wh1} className='image5'></img>
                  </div>
                  <div className='back'>
                      <h1 className='back-text-1'>High-Waisted Cargo Wide Fit</h1>
                      <p className='back-text-2'>Price: $33.90</p>
                      <button className="add-to-cart-button">Add to Cart</button>
                  </div>
              </div>
              <div className='card'>
                  <div className='front'>
                      <img src={wh2} className='image6'></img>
                  </div>
                  <div className='back'>
                      <h1 className='back-text-1'>High-Waisted Cargo Wide Fit</h1>
                      <p className='back-text-2'>Price: $33.90</p>
                      <button className="add-to-cart-button">Add to Cart</button>
                  </div>
              </div>
              <div className='card'>
                  <div className='front'>
                      <img src={mj1} className='image7'></img>
                  </div>
                  <div className='back'>
                      <h1 className='back-text-1'>High-Waisted Cargo Wide Fit</h1>
                      <p className='back-text-2'>Price: $33.90</p>
                      <button className="add-to-cart-button">Add to Cart</button>
                  </div>
              </div>
              <div className='card'>
                  <div className='front'>
                      <img src={mj2} className='image8'></img>
                  </div>
                  <div className='back'>
                      <h1 className='back-text-1'>High-Waisted Cargo Wide Fit</h1>
                      <p className='back-text-2'>Price: $33.90</p>
                      <button className="add-to-cart-button">Add to Cart</button>
                  </div>
              </div>
          </div>
      </div>
    )
  }


  const ThirdDiv = () => {
    return (
      <div>
        <div class="container3">
              <div className='card'>
                  <div className='front'>
                      <img src={ms1} className='image9'></img>
                  </div>
                  <div className='back'>
                      <h1 className='back-text-1'>High-Waisted Cargo Wide Fit</h1>
                      <p className='back-text-2'>Price: $33.90</p>
                      <button className="add-to-cart-button">Add to Cart</button>
                  </div>
              </div>
              <div className='card'>
                  <div className='front'>
                      <img src={ms2} className='image10'></img>
                  </div>
                  <div className='back'>
                      <h1 className='back-text-1'>High-Waisted Cargo Wide Fit</h1>
                      <p className='back-text-2'>Price: $33.90</p>
                      <button className="add-to-cart-button">Add to Cart</button>
                  </div>
              </div>
              <div className='card'>
                  <div className='front'>
                      <img src={mh1} className='image11'></img>
                  </div>
                  <div className='back'>
                      <h1 className='back-text-1'>High-Waisted Cargo Wide Fit</h1>
                      <p className='back-text-2'>Price: $33.90</p>
                      <button className="add-to-cart-button">Add to Cart</button>
                  </div>
              </div>
              <div className='card'>
                  <div className='front'>
                      <img src={mh2} className='image12'></img>
                  </div>
                  <div className='back'>
                      <h1 className='back-text-1'>High-Waisted Cargo Wide Fit</h1>
                      <p className='back-text-2'>Price: $33.90</p>
                      <button className="add-to-cart-button">Add to Cart</button>
                  </div>
              </div>
          </div>
      </div>
    )
  }

