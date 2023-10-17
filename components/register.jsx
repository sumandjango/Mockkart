import React from "react";
import Image from "next/image";
import Link from "next/link";
// import InterviewImg from '../public/assets/interview.jpg';
import Contactimg from "../public/assets/contact.jpg";

const Register = () => {
  const googleFormLink = "https://forms.gle/CcTeH8sP6adWqqZU9"
  return (
    <div
      id="register"
      className="w-full md:h-screen p-2 flex items-center py-16"
    >
      <div className="max-w-[1240px] m-auto">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#f1c40f",
            borderRadius: "20px",
            padding: "20px",
          }}
        >
          <div style={{ flex: 1 }}>
            <p className="uppercase text-xl tracking-widest text-[#5651e5]">
              Register
            </p>
            <p className="py-2 text-gray-600">
              Secure your place in our exclusive mock interview sessions. Select
              your preferred date and time, specify the data science field you
              would like to focus on, and complete the registration process
              seamlessly within no cost. Ensure you are well prepared for your
              next data science interview by reserving your slot today with
              Mockkart.
            </p>
            <a href={googleFormLink} target="_blank" rel="noopener noreferrer">
            <button className="button-86 w-full p-4 text-gray-100 mt-4">
              Get Started For Free
            </button>
            </a>
            
          </div>
          <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl">
              <Image src={Contactimg} className="rounded-xl" alt="/" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
