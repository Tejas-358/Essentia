import React from 'react';
import { useCart } from 'react-use-cart';
import '../styles/cart.css';
import logo from '../public/Home_MeubelHouse_Logos05.png';
import arrow from '../public/SignUp_Vector.png';
import Navbar from './Navbar';

export default function Cart() {

  const {
    isEmpty,
    totalUniqueItems,
    totalItems,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart
  } = useCart();

  if (isEmpty) 
  {
    return (
      <section>
        <Navbar />
        <CartSection />
        <h1>You Cart is Empty!</h1>
      </section>
  )
  }

  return (
    <section>
      <Navbar />
      <CartSection />
      {/* <h5>Cart ({totalUniqueItems}) Total Items: ({totalItems})</h5> */}
      <div className="cart-container">
        <div className="left-container">
          <div className="left-top">
            <span className='product'>Product</span>
            <span className='name'>Name</span>
            <span className='price'>Price</span>
            <span className='quantity'>Quantity</span>
            <span className='subtotal'>Subtotal</span>
          </div>
          <div className="left-bottom">
            <table className='table2'> 
              <tbody>
                {items.map((item, index) => (
                  <CartItem key={index} item={item} updateItemQuantity={updateItemQuantity} removeItem={removeItem} />
                ))}
              </tbody>
            </table>
          </div>

        </div>
        <div className="right-container">
          <span className='heading'>Cart Total</span>
          <br/>
          <span className='cart-total'>Total Price: {cartTotal}</span>
          <div className="buttons-wrapper">
            <button onClick={emptyCart}>Clear Cart</button>
            <button className='CheckOut'>Check Out</button>
          </div>
        </div>
      </div>
    </section>
  )
}

const CartSection = () => {
  return (
    <div className="cart-section">
      <div className="cart-overlay"></div>
      <img src={logo} alt="Logo" className="logo1_3" />
      <span className='cart-text'>Cart</span>
      <span className='Home'>Home</span>
      <span className='cart2'>Cart</span>
      <img className='Vector' src={arrow} alt="Arrow" />
    </div>
  );
};

const CartItem = ({ item, updateItemQuantity, removeItem }) => {
  return (
    <tr className="cart-item">
      <td className="product-image">
        <img src={item.img} alt="Product" />
      </td>
      <td className="product-title">{item.title}</td>
      <td className="product-price">${item.price}</td>
      <td className="product-quantity">{item.quantity}</td>
      <td className="product-subtotal">${Math.round(item.quantity * item.price)}</td>
      <td className="product-actions">
        <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} className='minus'>-</button>
        <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className='plus'>+</button>
        <button onClick={() => removeItem(item.id)} className='remove'>Remove Item</button>
      </td>
    </tr>
  );
};

