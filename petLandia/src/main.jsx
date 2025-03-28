import React from 'react'
import './main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router';
import Header from './Components/Header/index.jsx'
import Home from './Pages/Home/Home.jsx'
import Products from './Pages/Products.jsx'
import Adoption from './Pages/Adoption.jsx'
import Checkout from './Pages/Checkout.jsx'
import Register from './Pages/Register.jsx'
import Login from './Pages/Login.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/registro' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/produtos' element={<Products />} />
        <Route path='/adote' element={<Adoption />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode >
)

