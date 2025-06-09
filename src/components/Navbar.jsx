import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { Home, BadgeCheck, BookOpenText, PhoneCall, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img className="h-20 w-full" src={logo} alt="Logo" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2 text-primary font-semibold hover:text-hoverColor transition-colors duration-200">
              <Home size={18} />
              <span>Home</span>
            </Link>
            <Link to="/why-us" className="flex items-center space-x-2 text-gray-700 font-semibold hover:text-hoverColor transition-colors duration-200">
              <BadgeCheck size={18} />
              <span>Why Choose Us</span>
            </Link>
            <Link to="/blog" className="flex items-center space-x-2 text-gray-700 font-semibold hover:text-hoverColor transition-colors duration-200">
              <BookOpenText size={18} />
              <span>Blog</span>
            </Link>
            <Link to="/contact" className="flex items-center space-x-2 text-gray-700 font-semibold hover:text-hoverColor transition-colors duration-200">
              <PhoneCall size={18} />
              <span>Contact</span>
            </Link>

            {/* Signup & Login Buttons */}
            <div className="flex items-center space-x-4 ml-6">
              <Link to="/signup" className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-hoverColor transition-colors duration-200">
                Sign Up
              </Link>
              <Link to="/login" className="px-4 py-2 text-sm font-medium text-primary border border-primary rounded-md hover:bg-gray-100 transition-colors duration-200">
                Login
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-hoverColor hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-200"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? <Menu className="h-6 w-6" /> : <X className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link to="/" className="flex items-center space-x-3 px-3 py-2 rounded-md text-base font-semibold text-primary bg-gray-50">
              <Home size={18} />
              <span>Home</span>
            </Link>
            <Link to="/why-us" className="flex items-center space-x-3 px-3 py-2 rounded-md text-base font-semibold text-gray-700 hover:text-hoverColor hover:bg-gray-50">
              <BadgeCheck size={18} />
              <span>Why Choose Us</span>
            </Link>
            <Link to="/blog" className="flex items-center space-x-3 px-3 py-2 rounded-md text-base font-semibold text-gray-700 hover:text-hoverColor hover:bg-gray-50">
              <BookOpenText size={18} />
              <span>Blog</span>
            </Link>
            <Link to="/contact" className="flex items-center space-x-3 px-3 py-2 rounded-md text-base font-semibold text-gray-700 hover:text-hoverColor hover:bg-gray-50">
              <PhoneCall size={18} />
              <span>Contact</span>
            </Link>

            {/* Mobile Sign Up & Login */}
            <Link to="/signup" className="block w-full text-center px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-hoverColor">
              Sign Up
            </Link>
            <Link to="/login" className="block w-full text-center px-4 py-2 text-sm font-medium text-primary border border-primary rounded-md hover:bg-gray-100">
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
