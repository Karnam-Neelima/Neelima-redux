import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { getProducts } from "../features/productSlice";
import { addProduct } from "../services/api";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && price) {
      await addProduct({ name, price: parseFloat(price) });
      dispatch(getProducts()); // Refresh product list
      setName("");
      setPrice("");
    }
  };

  return (
    <div>
      <h2>Add Product</h2>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Add Product</button>
      </Form>
    </div>
  );
};

export default AddProduct;
