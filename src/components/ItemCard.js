import React from 'react';
import '../styles/itemcard.css'
import {useCart} from 'react-use-cart'

const ItemCard = (props) => {

    const {addItem} = useCart();

    return (
        <div className='card'>
            <div className='front'>
                <img src={props.img} className='image1' alt="Product" />
            </div>
            <div className='back'>
                <h1 className='back-text-1'>{props.title}</h1>
                <p className='back-text-2'>Price: ${props.price}</p>
                <button className="add-to-cart-button" onClick={() => addItem(props.item)}>Add to Cart</button>
            </div>
        </div>
    );
};

export default ItemCard;
