import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { LoginContextProvider } from './context/login-context';
import { OrderDataContextProvider } from './context/orderData-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <OrderDataContextProvider>
        <LoginContextProvider>
          <App />
        </LoginContextProvider>
      </OrderDataContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
