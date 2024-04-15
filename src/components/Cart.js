import React from 'react'
import { useCart } from 'react-use-cart'
import '../styles/cart.css'

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
  if (isEmpty) return <h1>Your Cart is Empty</h1>

  return (
    <section>
      <div>
        <div>
          {console.warn(items)}
          <h5>Cart ({totalUniqueItems}) Total Items: ({totalItems})</h5>
          <table className='table'>
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img src={item.img} style={{ height: '6rem' }} />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>Quantity({item.quantity})</td>
                    <td>
                      <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                      <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>+</button>
                      <button onClick={() => removeItem(item.id)}>Remove Item</button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <div>
          <h2>Total Price: {cartTotal}</h2>
        </div>
        <div>
          <button onClick={emptyCart}>Clear Cart</button>
          <button>Buy Now</button>
        </div>
      </div>
    </section >
  )
}
