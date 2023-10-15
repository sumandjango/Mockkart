import React from "react";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div id="footer" className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        <div className="mb-6">
          <p className="text-2xl font-bold">Mockkart</p>
        </div>
        <div className="mb-4 flex space-x-4">
        <a
            href="mailto:sumanprasadofficially@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <AiOutlineMail size={24} />
          </a>
        </div>
        <p className="text-gray-400 text-sm mb-2">
          &copy; {new Date().getFullYear()} Mockkart
        </p>
        <p className="text-gray-400 text-sm">All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
