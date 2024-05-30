// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const updateCart = (product, quantity) => {
    // Update cart logic
  };

  return (
    <Router>
      <div className="App">
        <Navbar cart={cart} />
        <Routes>
          <Route path="/" element={<ProductList addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} updateCart={updateCart} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
