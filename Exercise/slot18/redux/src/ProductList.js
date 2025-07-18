import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, updateCart, removeFromCart } from './cartSlice';

const products = [
  {
    id: '123456',
    name: 'Example Product',
    price: 9.99,
    description: 'This is an example product.',
    catalogs: ['catalog1', 'catalog2'],
  },
  {
    id: '789012',
    name: 'Another Product',
    price: 19.99,
    description: 'Another example.',
    catalogs: ['catalog3'],
  },
];

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Product List</h2>
      {products.map(product => (
        <div key={product.id} style={{ border: '1px solid gray', marginBottom: '10px' }}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <p>Catalogs: {product.catalogs.join(', ')}</p>
          <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
          <button onClick={() => dispatch(updateCart({ ...product, name: product.name + ' (Updated)' }))}>Update to Cart</button>
          <button onClick={() => dispatch(removeFromCart(product.id))}>Delete from Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
