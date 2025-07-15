import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import styles from './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <div className={styles.app}>
          <Route path="/" element={<Home />} />
        </div>
        {/* Add more routes here if needed */}
      </Routes>
    </Router>
  );
}

export default App;
