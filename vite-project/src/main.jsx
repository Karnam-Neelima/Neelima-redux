// index.js or index.jsx (depending on your setup)
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store'; // Make sure the path is correct to your store file

// Wrap the App component with the Provider and pass the store to it
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
