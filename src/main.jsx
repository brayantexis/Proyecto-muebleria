import React from 'react'
import ReactDOM from 'react-dom/client'
import Product from './Product'
import Categoria from './Categoria'
import Dashboard_Users from "./Dashboard_Users";
import SalEnt from './SalEnt';
import Login from "./Login";
import Welcome from "./Welcome"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Categoria/>
    <Product/>
    <Dashboard_Users/>
    <SalEnt/>
    <Login/>
    <Welcome/>
  </React.StrictMode>,

)
