import React from "react";

const Header = () => {
  return (
    <div className="bg-gray-100 py-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center justify-center md:justify-start">
          <img
            src="/path-to-your-logo1.png"
            alt="Food Tribune"
            className="h-10 mx-4"
          />
        </div>
        <div className="text-center">
          <img
            src="/path-to-your-logo2.png"
            alt="Express Logo"
            className="h-12"
          />
        </div>
        <div className="flex items-center justify-center md:justify-end">
          <img
            src="/path-to-your-logo3.png"
            alt="Cricket Pakistan"
            className="h-10 mx-4"
          />
        </div>
      </div>
      <div className="bg-gray-200 mt-4 py-2">
        <div className="container mx-auto flex flex-wrap justify-center space-x-6">
          <a href="#news" className="text-gray-600 hover:text-black">
            EXPRESS NEWS
          </a>
          <a href="#tribune" className="text-gray-600 hover:text-black">
            THE EXPRESS TRIBUNE
          </a>
          <a href="#food" className="text-gray-600 hover:text-black">
            FOOD TRIBUNE
          </a>
          <a href="#urdu-paper" className="text-gray-600 hover:text-black">
            URDU E-PAPER
          </a>
          <a href="#english-paper" className="text-gray-600 hover:text-black">
            ENGLISH E-PAPER
          </a>
          <a href="#live" className="text-gray-600 hover:text-black">
            WATCH EXPRESS NEWS LIVE
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
