import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-gradient-to-r from-red-900 to-black px-4  sm:block">
    <div className="flex justify-between items-center text-center py-6 border-t-2 border-gray-300/40">
      <span className="text-sm text-gray-400">
        @copyright 2024 Mshauri
      </span>
      <div className="flex items-center justify-center gap-4 mb-4">
        <a href="#">
          <FaInstagram className="text-2xl  text-gray-400" />  
        </a>
        <a href="#">
          <FaFacebook className="text-2xl  text-gray-400" />
        </a>
        <a href="#">
          <FaLinkedin className="text-2xl  text-gray-400" />
        </a>
      </div>

      <span className="text-sm text-gray-400 ">
        <ul className="flex gap-3">
          <li className="hover:text-white">Privacy Policy</li>
          <li className="hover:text-white">Terms & Conditions</li>
        </ul>
      </span>
    </div>
  </div>
  );
};

export default Footer;
