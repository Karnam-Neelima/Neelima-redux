import axios from 'axios';

// Fetch products
export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3000/products');
    dispatch({ type: 'SET_PRODUCTS', payload: response.data });
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

// Add product
export const addProduct = (product) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:3000/products', product);
    dispatch({ type: 'ADD_PRODUCT', payload: response.data });
  } catch (error) {
    console.error('Error adding product:', error);
  }
};

// Delete product
export const deleteProduct = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:3000/products/${id}`);
    dispatch({ type: 'DELETE_PRODUCT', payload: id });
  } catch (error) {
    console.error('Error deleting product:', error);
  }
};
