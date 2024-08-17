import React from "react";
import Cards from "./Cards";

const MainContent = () => {
  return (
    <main className="flex-grow bg-[#f7f7f8] text-center">
      <div className="bg-[#bfc4fd] py-12">
        <h1 className="text-6xl font-semibold text-[#272b35] mb-8">
          How can we help?
        </h1>
        <div className="flex justify-center mb-16">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 rounded-l-md border border-r-0 border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent w-1/3"
          />
          <button className="bg-white border border-l-0 border-gray-300 px-4 py-2 rounded-r-md hover:bg-gray-50 transition ease-in-out duration-300">
            →
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 p-8 max-w-5xl mx-auto my-24">
        <Cards />
      </div>
    </main>
  );
};

export default MainContent;
