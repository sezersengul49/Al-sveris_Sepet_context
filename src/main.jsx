import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js'
import { ProductProvider } from './components/context/productContext.jsx';
import { BasketProvider } from './components/context/BasketContext.jsx';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BasketProvider>
     <ProductProvider>
     <App />
     <ToastContainer autoClose= {1000} />
     </ProductProvider>
     </BasketProvider>
   
  </React.StrictMode>,
)
