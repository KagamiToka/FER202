import React from 'react';
import { useSelector } from 'react-redux';

function Cart() {
  const cartItems = useSelector(state => state.cart.cartItems);

  const total = cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.map(item => (
        <div key={item.id}>
          <p>{item.name} - ${item.price}</p>
        </div>
      ))}
      <h3>Total: ${total}</h3>
    </div>
  );
}

export default Cart;
