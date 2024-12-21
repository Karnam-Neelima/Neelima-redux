import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { getProducts } from "../features/productSlice";
import { updateProduct } from "../services/api";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const EditProduct = ({ product, onClose }) => {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && price) {
      await updateProduct(product.id, { name, price: parseFloat(price) });
      dispatch(getProducts()); // Refresh product list
      onClose();
    }
  };

  return (
    <div>
      <h2>Edit Product</h2>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Update Product</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </Form>
    </div>
  );
};

export default EditProduct;
