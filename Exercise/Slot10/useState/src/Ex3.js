import React, { useState } from 'react';

export function ProductList() {
    const [products, setProducts] = useState([
        {id: 1, name: 'Coca Cola'},
        {id: 2, name: 'Pepsi'},
        {id: 3, name: 'PepCoca'}
    ]);

    const [selectedProduct, setSelectedProduct] = useState([]);

    const handleCheckBoxChange = (event) => {
        const productId = parseInt(event.target.value, 10);
        if(event.target.checked) {
            setSelectedProduct([...selectedProduct,productId]);
        } else {
            setSelectedProduct(selectedProduct.filter(id => id !== productId));
        }
    };

    return(
        <div>
            {products.map(product => (
                <div key={product.id}>
                    <input 
                        type='checkbox'
                        id={product.id}
                        value={product.id}
                        checked={selectedProduct.includes(product.id)}
                        onChange={handleCheckBoxChange}
                    />
                    <label htmlFor={product.id}>{product.name}</label>
                </div>
            ))}
            {selectedProduct.length > 0 && (
                <p>Bạn đã chọn các sản phẩm: {selectedProduct.map(id => products.find(p => p.id === id).name).join(', ')}</p>
            )}
        </div>
    );
}