
import React from "react";
import LoginForm from "./Form";

const Section = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-gray-900 text-white text-center px-6">
      <div className="relative z-10 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Join us today</h1>
        <LoginForm/>
      </div>

      <div className="relative z-10 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Why work with us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in</p>
      </div>
    </div>
  );
};

export default Section;