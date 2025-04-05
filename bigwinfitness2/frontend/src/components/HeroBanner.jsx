import React from "react";
import bgImage from "../assets/christian-mikhael-78gHd4C9aR8-unsplash.jpg";

const HeroBanner = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-black text-center px-4 sm:px-6">
      <div className="absolute bg-yellow-400 inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="absolute inset-0 bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 sm:p-8 max-w-lg sm:max-w-2xl bg-white/30 rounded-xl sm:rounded-2xl text-brown">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Welcome to Your Next<br /> Big Win
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-6 leading-relaxed">
          Explore the world with us and experience the beauty of nature like never before.
        </p>
        <button className="px-4 sm:px-6 py-2 sm:py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg shadow-lg transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;