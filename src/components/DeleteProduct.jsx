import React from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../features/productSlice";
import { deleteProduct } from "../services/api";

const DeleteProduct = ({ productId, onClose }) => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    await deleteProduct(productId);
    dispatch(getProducts()); // Refresh product list
    onClose();
  };

  return (
    <div>
      <h2>Delete Product</h2>
      <p>Are you sure you want to delete this product?</p>
      <button onClick={handleDelete}>Yes, Delete</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default DeleteProduct;
