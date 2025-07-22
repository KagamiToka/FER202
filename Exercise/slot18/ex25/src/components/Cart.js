import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="container mt-4">
      <h2>Cart</h2>
      {cart.map((item, index) => (
        <div key={index} className="border-bottom pb-2 mb-2">
          <h5>{item.name}</h5>
          <p>${item.price}</p>
          <p>Catalogs: {item.catalogs.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
