import React from "react";
import { footerdata } from "../constants/footerdata";
import logo from "../assets/abstract.png";

const Footer = () => {
  return (
    <footer className="bg-[#272b35] text-white py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-8 px-8">
        {footerdata.map((data, id) => (
          <div key={id}>
            <h3 className="font-semibold mb-4">{data.section}</h3>
            <ul>
              {data.content.map((list, id) => (
                <li key={id}>
                  <a href="#" className="hover:underline">
                    {list}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h3 className="font-semibold mb-4"></h3>
          <ul>
            <div className="text-center mt-60">
              <img src={logo} alt="Abstract Logo" className="h-6 w-6" />
              <p>
                © Copyright 2022 Abstract Studio Design, Inc. All rights
                reserved
              </p>
            </div>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
