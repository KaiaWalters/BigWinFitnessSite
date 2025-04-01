import React from "react";

const HeroBanner = () => {
  return (
    <div className="relative h-screen flex items-center justify-center  text-white text-center px-6">
      {/* Background Image */}
      <div className="absolute bg-yellow-400 inset-0 bg-cover bg-center">
        <div className="absolute inset-0 bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Your Next Adventure</h1>
        <p className="text-lg md:text-xl mb-6">Explore the world with us and experience the beauty of nature like never before.</p>
        <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-lg transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;