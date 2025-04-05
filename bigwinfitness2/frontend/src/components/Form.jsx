import React from "react";

const LoginForm = () => {
  return (
    <div className="relative w-full flex items-center justify-center text-black px-6">
      <form className="w-full max-w-sm p-8 rounded-lg shadow-lg border border-yellow-500">
        <h2 className="text-2xl font-bold mb-6 text-yellow-400">Welcome Back</h2>

        {/* Name Input */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold text-yellow-400">
            Name
          </label>
          <input 
            type="text" 
            id="name" 
            className="w-full mt-1 p-3 bg-white-700 text-black border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Enter your name"
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold text-yellow-400">
            Email
          </label>
          <input 
            type="email" 
            id="email" 
            className="w-full mt-1 p-3 bg-white-700 text-black border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Enter your email"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <button className="w-1/2 bg-yellow-400 text-white-900 font-bold py-2 px-4 rounded-lg shadow-md hover:bg-yellow-500 transition">
            Log in
          </button>
          <button className="w-1/2 ml-2 bg-orange-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-orange-600 transition">
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm; 
