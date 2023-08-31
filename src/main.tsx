import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Product from './product'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ProductsProvider from './context/ProductsProvider';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/product/:id",
    element: <Product />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProductsProvider>
      <RouterProvider router={router} />
    </ProductsProvider>
  </React.StrictMode>,
)
