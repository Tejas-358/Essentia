import React from 'react';
import { useCart } from 'react-use-cart'; // Importing useCart hook for managing cart state
import '../styles/cart.css'; // Importing styles
import logo from '../public/Home_MeubelHouse_Logos05.png'; // Importing logo
import arrow from '../public/SignUp_Vector.png'; // Importing arrow icon
import Navbar from './Navbar'; // Importing Navbar component

export default function Cart() {
  // Destructuring cart state and functions from useCart hook
  const {
    isEmpty,
    totalItems,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart
  } = useCart();

  // If cart is empty, display a message
  if (isEmpty) {
    return (
      <section>
        <Navbar />
        <CartSection />
        <h1>Your Cart is Empty!</h1>
      </section>
    );
  }

  // If cart is not empty, display cart items and total
  return (
    <section>
      <Navbar />
      <CartSection />
      <div className="cart-container">
        <div className="left-container">
          <div className="left-top">
            {/* Table headers */}
            <span className='product'>Product</span>
            <span className='name'>Name</span>
            <span className='price'>Price</span>
            <span className='quantity'>Quantity</span>
            <span className='subtotal'>Subtotal</span>
          </div>
          <div className="left-bottom">
            <table className='table2'> 
              <tbody>
                {/* Mapping over cart items and rendering each cart item */}
                {items.map((item, index) => (
                  <CartItem key={index} item={item} updateItemQuantity={updateItemQuantity} removeItem={removeItem} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="right-container">
          {/* Cart total */}
          <span className='heading'> Cart Total </span>
          <br/>
          <p className='cart-total1'>Total Items: {totalItems}</p>
          <br/>
          <p className='cart-total2'>Total Price: ${cartTotal}</p>
          {/* Buttons for clearing cart and checking out */}
          <div className="buttons-wrapper">
            <button onClick={emptyCart}>Clear Cart</button>
            <button className='CheckOut'>Check Out</button>
          </div>
        </div>
      </div>
    </section>
  );
}

// CartSection component
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

// CartItem component
const CartItem = ({ item, updateItemQuantity, removeItem }) => {
  return (
    <tr className="cart-item">
      {/* Displaying cart item details */}
      <td className="product-image">
        <img src={item.img} alt="Product" />
      </td>
      <td className="product-title">{item.title}</td>
      <td className="product-price">${item.price}</td>
      <td className="product-quantity">{item.quantity}</td>
      <td className="product-subtotal">${Math.round(item.quantity * item.price)}</td>
      {/* Buttons to update quantity and remove item */}
      <td className="product-actions">
        <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} className='minus'>-</button>
        <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className='plus'>+</button>
        <button onClick={() => removeItem(item.id)} className='remove'>Remove Item</button>
      </td>
    </tr>
  );
};
