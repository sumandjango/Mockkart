import Image from "next/image";
import React from "react";
import Github from "../public/assets/skills/github1.png";
import MachineLearning from "../public/assets/skills/ml.png";
import Fullstack from "../public/assets/skills/webdevelopment.png";
import koshalsigh from "../public/assets/koshal.jpeg";
import Priyankssharma from "../public/assets/priyankasharma.jpg";
import Abhishek from "../public/assets/abhishekkumar.jpg";
import Tiger from "../public/assets/tigerlogo.png"
import Solytics from "../public/assets/solytics.jpg"
import Affine from "../public/assets/affine_logo.jpg"
const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2" >
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
        Our interviewers and mentors
        </p>
        <div style={{ backgroundColor: '#0C1A1A', borderRadius: '20px', padding: '20px' }}>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8" >
          <div className="p-50 shadow-xl rounded-xl hover:scale-105 ease-in duration-300" style={{ background: 'hsl(216, 50%, 16%)' }}>
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={koshalsigh}
                  width={60}
                  height={60}
                  style={{ borderRadius: "50%" }}
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 style={{color: 'white'}}>Koshal Singh</h3>
                <p style={{color: 'white'}}>Senior Analyst</p>
              </div>
            </div>
            <div>
              <p style={{ fontSize: "11px", marginLeft: "20px",color: '#FFA500' }}>
              Koshal Singh holds the position of Senior Analyst at Tiger Analytics, where he brings his expertise to the field. Prior to his role at Tiger Analytics, he served as an Associate Data Scientist at Alunoz Technologies Pvt Ltd. 
              With a robust industry tenure of over two years, Koshal has developed a depth of experience and has actively engaged in mentoring and conducting interviews as part of his professional responsibilities.
              </p>
            </div>
            <div className="m-auto" style={{ marginLeft: '20px' }}>
                <Image
                  src={Tiger}
                  width={60}
                  height={60}
                  style={{ borderRadius: "50%" }}
                  alt="/"
                />
              </div>
          </div>
          <div className="p-50 shadow-xl rounded-xl hover:scale-105 ease-in duration-300" style={{ background: 'hsl(216, 50%, 16%)' }}>
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Priyankssharma}
                  width={60}
                  height={60}
                  style={{ borderRadius: "50%" }}
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 style={{color: 'white'}}>Priyanka Sharma</h3>
                <p style={{color: 'white'}}>Data Scientist</p>
              </div>
            </div>
            <div>
              <p style={{ fontSize: "11px", marginLeft: "20px" , color: '#FFA500'}}>
              Priyanka Sharma currently serves as a Data Scientist at Solytics Partners, leveraging her valuable expertise in the field. 
              With an industry experience exceeding 1.5 years, Priyanka has demonstrated a commitment to both interviewing prospective candidates and providing mentorship to others in her professional capacity.
              </p>
            </div>
            <div className="m-auto" style={{ marginLeft: '20px' }}>
                <Image
                  src={Solytics}
                  width={60}
                  height={60}
                  style={{ borderRadius: "50%" }}
                  alt="/"
                />
              </div>
          </div>
          <div className="p-50 shadow-xl rounded-xl hover:scale-105 ease-in duration-300" style={{ background: 'hsl(216, 50%, 16%)' }}>
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Abhishek}
                  width={60}
                  height={60}
                  style={{ borderRadius: "50%" }}
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 style={{color: 'white'}}>Abhishek</h3>
                <p style={{color: 'white'}}>Senior Associate - Data Scientist</p>
              </div>
            </div>
            <div>
              <p style={{ fontSize: "11px", marginLeft: "20px",color: '#FFA500' }}>
              Abhishek holds the position of Senior Associate Data Scientist at Affine Analytics, where he contributes his extensive industry experience, exceeding 2 years. 
              Prior to his current role, he served as a Machine Learning Engineer at Focus Edumatics Pvt Ltd. In addition to his core responsibilities, Abhishek actively allocates his time to engage in the interviewing and mentorship of individuals within the professional sphere.
              </p>
            </div>
            <div className="m-auto" style={{ marginLeft: '20px' }}>
                <Image
                  src={Affine}
                  width={60}
                  height={60}
                  style={{ borderRadius: "50%" }}
                  alt="/"
                />
              </div>
          </div>
          
        </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
