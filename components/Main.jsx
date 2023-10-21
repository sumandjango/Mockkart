import Link from "next/link";
import React from "react";


const Main = () => {
  return (
   <div id="home" className="w-full bg-brand">
    <div className="max-w-7xl mx-auto flex flex-col-reverse items-center justify-between md:flex-row">
      <div className="w-full md:w-1/2 p-4 md:p-0">
        <div className="bg-white bg-opacity-80 p-8 rounded-lg mb-4 md:mb-1">
          <h1 className="text-gray-500 text-3xl md:text-4xl lg:text-6xl py-4">
            HELLO DATA CHAMP<span className="text-[#5651e5]"> WE</span>
          </h1>
          <h1 className="text-gray-500 text-2xl md:text-3xl lg:text-4xl py-2">
            Elevatel Your Data Science Interview Game With Mockkart!
          </h1>
        </div>
      </div>
      <div className="w-full md:w-1/2 mt-16 md:mt-0">
        <img src="/assets/main.jpg" alt="" className="w-full" />
      </div>
    </div>
   </div>
  );
};

export default Main;
