import './App.css';
import React, { useEffect } from 'react';
import Header from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/admin/Dashboard';
import ProductsList from './components/admin/ProductsList';
import NewProduct from './components/admin/newProduct';
import store from "./store"
import { UpdateProduct } from './components/admin/UpdateProduct';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Header />
        <div className='container container-fluid'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/productList" element={<ProductsList />} />
            <Route path="/nuevoProducto" element={<NewProduct />} />
            <Route path="/search/:keyword" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />}/>

          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
