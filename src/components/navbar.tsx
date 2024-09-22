import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-800">BrandName</h1>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link to="/cart" className="text-gray-800 hover:text-gray-600">
              Cart
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen
                      ? "M6 18L18 6M6 6l12 12" // X icon when open
                      : "M4 6h16M4 12h16M4 18h16" // Hamburger menu when closed
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <Link to="/cart" className="block px-4 py-2 text-sm text-gray-800">
            Cart
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
