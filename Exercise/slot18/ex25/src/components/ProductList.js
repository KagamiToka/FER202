import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions';

const ProductList = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <div className="container mt-4">
      <h2>Product List</h2>
      {products.map((p) => (
        <div key={p.id} className="card mb-3">
          <div className="card-body">
            <h5>{p.name}</h5>
            <p>${p.price}</p>
            <p>Catalogs: {p.catalogs.join(', ')}</p>
            <button className="btn btn-primary" onClick={() => dispatch(addToCart(p))}>
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
