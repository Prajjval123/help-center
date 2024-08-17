import React from "react";

const Header = () => {
  return (
    <header className="bg-black text-white flex justify-between items-center p-4 pl-20 pr-40">
      <div className="flex items-center space-x-2 cursor-pointer">
        <img
          src="https://via.placeholder.com/24"
          alt="Abstract Logo"
          className="h-6 w-6"
        />
        <span className="text-lg font-semibold">Abstract | Help Center</span>
      </div>
      <button className="bg-gray-800 border border-white hover:bg-gray-700 px-4 py-2 rounded transition ease-in-out duration-300">
        Submit a request
      </button>
    </header>
  );
};

export default Header;
