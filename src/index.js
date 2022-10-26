import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import {NavbarContextProvider } from './context/useContext';

import { AuthContextProvider } from './context/authContext';
import App from './App';
import { ProductContextProvider } from './context/productContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductContextProvider>
    <AuthContextProvider>
    <NavbarContextProvider>
      <App/>
    </NavbarContextProvider>
    </AuthContextProvider>
    </ProductContextProvider>
  </React.StrictMode>
);