import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts, addProduct, updateProduct, deleteProduct } from "../services/api";

export const getProducts = createAsyncThunk("products/getProducts", async () => {
  const response = await fetchProducts();
  return response.data;
});

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(getProducts.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default productSlice.reducer;
