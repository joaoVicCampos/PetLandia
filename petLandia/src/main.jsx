import React from 'react'
import './main.css'
import ReactDOM from 'react-dom/client'
import Header from './Components/Header/index.jsx'
import Home from './Routes/Home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode >
)

