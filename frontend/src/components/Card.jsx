import React from "react";

const Card = ({ title, description }) => {
  return (
    <div className="bg-gray-100 border-2 h-44 rounded-lg cursor-pointer transform hover:-translate-y-1 hover:shadow-lg transition ease-in-out duration-300">
      <h2 className="font-bold border-b-2 py-2 pb-1 px-7 text-xl text-[#272b35] text-left mb-2">
        {title}
      </h2>
      <p className="font-medium text-lg text-gray-500 px-7 py-1 text-left">{description}</p>
    </div>
  );
};

export default Card;
