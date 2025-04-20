// src/Confirmation.tsx
import React from 'react';

const ConfirmationPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-green-600">Registration Successful</h1>
        <p className="mt-4 text-center text-gray-600">
          Thank you for registering! A confirmation email has been sent to your inbox.
        </p>
        <div className="mt-6">
          <a href="/" className="text-orange-500 hover:underline">
            Go to Homepage
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;