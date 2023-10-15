import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";

import {
  FaGithub,
  FaLinkedinIn,
  AiFillMediumCircle,
  FaMedium,
  FaYoutube,
} from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          {/* <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p> */}
          <h1 className="py-4 text-gray-700">
            HELLO DATA CHAMP<span className="text-[#5651e5]"> WE</span>
          </h1>
          <h1 className="py-2 text-gray-700">
            Elevate Your Data Science Interview Game with Mockkart!
          </h1>
          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
            Mockkart is your goto platform for honing your data science
            interview skills. Whether you are a seasoned data scientist looking
            to sharpen your knowledge or a beginner preparing for your first
            interview, Mockkart offers a comprehensive range of mock
            interview resources. Our carefully crafted practice questions, real
            world scenarios, and expert feedback will help you excel in data
            science interviews. Join our community of aspiring data scientists
            and professionals, and take the next step in your data science
            career with confidence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
