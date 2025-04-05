import React from "react";

const Navbar = ({children}) => {
  return (
    <nav className="bg-yellow-500 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold">
              BigWinFitness
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-4">
            <a href="#home" className="hover:text-yellow-200">
              Home
            </a>
            <a href="#about" className="hover:text-yellow-200">
              About
            </a>
            <a href="#services" className="hover:text-yellow-200">
              Services
            </a>
            <a href="#contact" className="hover:text-yellow-200">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-white hover:text-yellow-200 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {children}
    </nav>
  );
};

export default Navbar;