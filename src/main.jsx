import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { ThemeProvider } from "./contexts/ThemeContext"; // Import ThemeProvider
import productReducer from "./features/productSlice";
import App from "./App";

const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider> {/* Wrap the entire app in ThemeProvider */}
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
