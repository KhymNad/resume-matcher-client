import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import HomeProvider from './context/HomeProvider';

function App() {
  return (
    <Router>
      <HomeProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          {/* Add more routes here if needed */}
        </Routes>
      </HomeProvider>
    </Router>
  );
}

export default App;
