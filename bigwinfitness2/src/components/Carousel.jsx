import React from "react";

const Carousel = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-green-900 text-white text-center px-6">

      {/* Content */}
      <div className="relative z-10 max-w-2xl">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">Hit your weekly goals with...</h2>
        <h3 className="text-lg md:text-xl mb-6">A variety of activities</h3>
        <div className="relative z-10 max-w-2xl">
            CONTENT
        </div>
      </div>
    </div>
  );
};

export default Carousel;