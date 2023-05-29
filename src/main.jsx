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
import Nav from './components/Nav';

import { SWRConfig } from 'swr'
import { apiVet } from './services/api/instaceApi'


const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Nav>
        <App />
      </Nav>
    )
  },
  {
    path: '/inventario',
    element: (
      <Nav>
        <Storage />
      </Nav>
    )
  },
  {
    path: '/AddProduct',
    element: (
      <Nav>
        <AddProduct />
      </Nav>
    )
  },
  {
    path: '/PuntoVenta',
    element: (
      <Nav>
        <SalePoint />
      </Nav>
    )
  },
  {
    path: '/Servicios',
    element: (
      <Nav>
        <AddServices />
      </Nav>
    )
  },
  {
    path: '/Inicio',
    element: (
      <Nav>
        <PrincipalStorage />
      </Nav>
    )
  },
  {
    path: '/Proveedor',
    element: (
      <Nav>
        <Supplier />
      </Nav>
    )
  },
  {
    path: '/NuevoLote',
    element: (
      <Nav>
        <NewLot />
      </Nav>
    )
  },
  {
    path: '/Libro',
    element: (
      <Nav>
        <Libro />
      </Nav>
    )
  },
  {
    path: 'pago-gastos-fijos',
    element: (
      <Nav>
        <FixedCosts />
      </Nav>
    )
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SWRConfig value={{ fetcher: (url) => apiVet.get(url).then(({data}) => data).catch(axiosError) }}>
      <RouterProvider router={router} />
    </SWRConfig>
  </React.StrictMode>
);
