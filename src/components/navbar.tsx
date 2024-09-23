// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-white font-bold">
          Home
        </Link>
        <div>
          <Link to="/products" className="text-white px-4">
            Products
          </Link>
          <Link to="/cart" className="text-white px-4">
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
