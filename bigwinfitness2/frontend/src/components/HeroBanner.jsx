import React from "react";
import bgImage from "../assets/homePage/images/home_isthataturtle_excellent.jpg"
import { Link } from "react-router-dom";
import 'animate.css';

const HeroBanner = () => {
  return (
    <div className="relative h-[855px] flex text-white text-center px-4 sm:px-6">
      <div className="absolute bg-yellow-400 inset-0 bg-cover bg-left" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="absolute inset-0 bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative content-center z-10 p-6 sm:p-8 max-w-lg sm:max-w-2xl bg-brown/30 rounded-xl sm:rounded-2xl">
        <h1 className="animate__animated animate__fadeInLeft text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Welcome to Your Next<br /> Big Win
        </h1>
        <div className="animate__animated animate__fadeIn animate__delay-1s">
          <p className="text-base sm:text-lg md:text-xl mb-6 leading-relaxed">
            Explore the world with us and experience the beauty of nature like never before.
          </p>
          <Link to={'/register'}className="px-4 sm:px-6 py-2 sm:py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg shadow-lg transition duration-300">
            Get Started
          </Link>
        </div>
      
      </div>
    </div>
  );
};

export default HeroBanner;