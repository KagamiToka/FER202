import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/actions';

const ProductForm = () => {
  const [form, setForm] = useState({
    id: '',
    name: '',
    price: '',
    description: '',
    catalogs: '',
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      ...form,
      price: parseFloat(form.price),
      catalogs: form.catalogs.split(',').map((c) => c.trim()),
    };
    dispatch(addProduct(newProduct));
    alert('Product added!');
    setForm({ id: '', name: '', price: '', description: '', catalogs: '' });
  };

  return (
    <div className="container mt-4">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>ID</label>
          <input type="text" className="form-control" name="id" value={form.id} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Name</label>
          <input type="text" className="form-control" name="name" value={form.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Price</label>
          <input type="number" className="form-control" name="price" value={form.price} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Description</label>
          <textarea className="form-control" name="description" value={form.description} onChange={handleChange}></textarea>
        </div>
        <div className="mb-3">
          <label>Catalogs (comma-separated)</label>
          <input type="text" className="form-control" name="catalogs" value={form.catalogs} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-success">Add Product</button>
      </form>
    </div>
  );
};

export default ProductForm;
