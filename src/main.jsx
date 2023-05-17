import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import {
  AddServices,
  FixedCosts,
  SalePoint,
  Storage,
  PrincipalStorage,
  Supplier,
  NewLot
} from './pages';
import './index.css';
import AddProduct from './components/AddProduct';
import { BASE_URL_API, axiosError, axiosSuccess } from '@/libs';
import Libro from '@/pages/Libro/index.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/GastosFijos',
    element: <FixedCosts />
  },
  {
    path: '/Inventario',
    element: <Storage />
  },
  {
    path: '/AddProduct',
    element: <AddProduct />
  },
  {
    path: '/PuntoVenta',
    element: <SalePoint />
  },
  {
    path: '/Servicios',
    element: <AddServices />
  },
  {
    path: '/Inicio',
    element: <PrincipalStorage />
  },
  {
    path: '/Proveedor',
    element: <Supplier />
  },
  {
    path: '/NuevoLote',
    element: <NewLot />
  },
  {
    path: '/Libro',
    element: <Libro />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
