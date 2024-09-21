import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './Pages/Login';
import Home from './Pages/Home'; 

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} /> {/* Login Page */}
        <Route path="/home" element={<Home />} /> {/* Home Page */}
      </Routes>
    </Router>
  );
};

export default App;
