import React from 'react';
import '../styles/itemcard.css'; // Importing styles
import { useCart } from 'react-use-cart'; // Importing useCart hook

const ItemCard = (props) => {
    const { addItem } = useCart(); // Destructuring addItem function from useCart hook

    return (
        <div className='card'>
            <div className='front'>  {/* Front side of the card with product image */}
                <img src={props.img} className='image1' alt="Product" />
            </div>
            <div className='back'>   {/* Back side of the card with product details */}
                
                <h1 className='back-text-1'>{props.title}</h1> {/* Product title */}
                <p className='back-text-2'>Price: ${props.price}</p> {/* Product price */}
                {/* Button to add item to cart */}
                <button className="add-to-cart-button" onClick={() => addItem(props.item)}>Add to Cart</button>
            </div>
        </div>
    );
};

export default ItemCard;
