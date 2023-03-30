import React from 'react';
import './Cart.css';

// const Cart = (props) => {  // works with option 1 & 2
const Cart = ({cart}) => {
    // const cart = props.cart; // Option 1 (cart value/product)
    // const {cart} =props; // Options 2

    // console.log(cart);

    let total = 0;
    for (const product of cart){
        total = total + product.price;
    }

    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: $5</p>
            <p>Tax: $114</p>
            <h3>Grand Total: $</h3>
        </div>
    );
};

export default Cart;