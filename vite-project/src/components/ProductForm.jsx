import React, { useState, useEffect } from 'react';

const ProductForm = ({ product, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: product?.name || '',
    price: product?.price || ''
  });

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        price: product.price
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Call onSubmit passed from App component
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Save Product</button>
    </form>
  );
};

export default ProductForm;
