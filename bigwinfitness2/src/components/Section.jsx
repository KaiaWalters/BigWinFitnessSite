
import React from "react";
import LoginForm from "./Form";

const Section = () => {
  return (
    <div className="w-full h-screen flex flex-col md:flex-row">
         <div className="w-full md:w-1/2 sm:w-1 bg-green-900 p-6 m-0 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Why work with us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in</p>
      </div>
      <div className="w-full md:w-1/2 sm:w-1 bg-white p-6 m-0 text-black">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Join us today</h1>
        <LoginForm/>
      </div>
    </div>
  );
};

export default Section;