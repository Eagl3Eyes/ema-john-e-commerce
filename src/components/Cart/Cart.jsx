import React from 'react';
import './Cart.css';

// const Cart = (props) => {  // works with option 1 & 2
const Cart = ({ cart }) => {
    // const cart = props.cart; // Option 1 (cart value/product)
    // const {cart} =props; // Options 2

    // console.log(cart);

    // cart calculation
    let totalPrice = 0;
    let totalShipping = 0;
    for (const product of cart) {
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
    }

    // calculate tax
    const tax = totalPrice * 7 / 100;

    // grand total cal
    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;