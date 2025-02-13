import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-primary">
            Rokomed Pharma
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-primary">About</Link>
            <Link to="/products" className="text-gray-700 hover:text-primary">Products</Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 