import React, { useState } from 'react';

export function SelectedProductRadio() {
  const [products] = useState([
    { id: 1, name: 'Sản phẩm A' },
    { id: 2, name: 'Sản phẩm B' },
    { id: 3, name: 'Sản phẩm C' }
  ]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleChange = (e) => {
    setSelectedProduct(parseInt(e.target.value, 10));
  };

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <input
            type="radio"
            name="product"
            value={product.id}
            id={`product-${product.id}`}
            checked={selectedProduct === product.id}
            onChange={handleChange}
          />
          <label htmlFor={`product-${product.id}`}>{product.name}</label>
        </div>
      ))}

      {selectedProduct && (
        <p>Bạn đã chọn: {products.find(p => p.id === selectedProduct).name}</p>
      )}
    </div>
  );
}