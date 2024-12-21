import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import DeleteProduct from "./DeleteProduct";

const ProductList = () => {
  const { items } = useSelector((state) => state.products);
  const [editProduct, setEditProduct] = useState(null);
  const [deleteProductId, setDeleteProductId] = useState(null);

  return (
    <div>
      <h2>Product List</h2>
      <AddProduct />
      <ul>
        {items.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => setEditProduct(product)}>Edit</button>
            <button onClick={() => setDeleteProductId(product.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {editProduct && (
        <EditProduct product={editProduct} onClose={() => setEditProduct(null)} />
      )}
      {deleteProductId && (
        <DeleteProduct productId={deleteProductId} onClose={() => setDeleteProductId(null)} />
      )}
    </div>
  );
};

export default ProductList;
