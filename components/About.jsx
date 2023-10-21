import React from "react";
import Image from "next/image";
import Link from "next/link";
import InterviewImg from "../public/assets/interview.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          {/* <h2 className='py-4'>Who I Am</h2> */}
          <p>
            Mockkart is your go-to platform for honing your data science
            interview skills. Whether you are a seasoned data scientist looking
            to sharpen your knowledge or a beginner preparing for your first
            interview, Mockkart offers a comprehensive range of mock interview
            resources. Our carefully crafted practice questions, real-world
            scenarios, and expert feedback will help you excel in data science
            interviews. Join our community of aspiring data scientists and
            professionals, and take the next step in your data science carrer
            with confidence.
          </p>
          <p className="py-2 text-gray-600">
            At Mockkart, we specialize in refining your expertise in niche data
            science domains, including machine learning, data analytics, data
            science, computer vision, NLP, and deep learning. Our platform
            offers comprehensive mock interview sessions, supplemented by
            immediate constructive feedback and a detailed analysis of your
            interview performance through video review. Additionally, we provide
            expert guidance in resume building and enhancement, ensuring you are
            well-prepared to excel in your chosen field.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={InterviewImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
