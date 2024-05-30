// Cart.js
import React from 'react';
import CartItem from './CartItem';

function Cart({ cart, updateCart }) {
  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.map(item => (
        <CartItem key={item.id} item={item} updateCart={updateCart} />
      ))}
      <div>Total: ${totalAmount}</div>
    </div>
  );
}

export default Cart;
