import Image from "next/image";
import React from "react";
import Stepfirst from "../public/assets/step1.jpg";
import Stepsecond from "../public/assets/step2.jpg";
import Stepthiird from "../public/assets/step3.jpg";
const Works = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          How it Works?
        </p>
        <div
          style={{
            backgroundColor: "#f3f6f9",
            borderRadius: "20px",
            padding: "20px",
          }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className="p-50 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
              style={{ background: "hsl(216, 50%, 16%)" }}
            >
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="flex flex-col items-center justify-center">
                  <h3 style={{ color: "white", fontSize: "20px" }}>
                    STEP
                    <span
                      className="text-[#a7d7ff]"
                      style={{ fontSize: "20px" }}
                    >
                      {" "}
                      1
                    </span>
                  </h3>
                </div>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "14px",
                    marginLeft: "20px",
                    color: "hsl(215, 51%, 70%)",
                  }}
                >
                  Browse and Book mock interviews whenever you like  
                </p><br />
                <p style={{
                    fontSize: "14px",
                    marginLeft: "20px",
                    color: "white",
                  }}>
                    Find interviewers from top companies, matching your targeted position.
                </p>
              </div>
              <div className="m-auto" style={{ marginLeft: "20px" }}>
                <Image
                  src={Stepfirst}
                  width={325}
                  height={150}
                  style={{ borderRadius: "22px", boxSizing: "border-box" }}
                  alt="/"
                />
              </div>
            </div>
            <div
              className="p-50 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
              style={{ background: "hsl(216, 50%, 16%)" }}
            >
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="flex flex-col items-center justify-center">
                  <h3 style={{ color: "white", fontSize: "20px" }}>
                    STEP
                    <span
                      className="text-[#a7d7ff]"
                      style={{ fontSize: "20px" }}
                    >
                      {" "}
                      2
                    </span>
                  </h3>
                </div>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "14px",
                    marginLeft: "20px",
                    color: "hsl(215, 51%, 70%)",
                  }}
                >
                  Meet with your interviewer virtually and Participate in your session
                </p><br />
                <p style={{
                    fontSize: "14px",
                    marginLeft: "20px",
                    color: "white",
                  }}>
                    Join the call with your interviewers and mentors on the scheduled time.
                    The format and style of the mock interviews mirror the expectations of a typical job interview.
                </p>
              </div><br />
              <div className="m-auto" style={{ marginLeft: "20px" }}>
                <Image
                  src={Stepsecond}
                  width={325}
                  height={150}
                  style={{ borderRadius: "22px", boxSizing: "border-box" }}
                  alt="/"
                />
              </div>
            </div>
            <div
              className="p-50 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
              style={{ background: "hsl(216, 50%, 16%)" }}
            >
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="flex flex-col items-center justify-center">
                  <h3 style={{ color: "white", fontSize: "20px" }}>
                    STEP
                    <span
                      className="text-[#a7d7ff]"
                      style={{ fontSize: "20px" }}
                    >
                      {" "}
                      3
                    </span>
                  </h3>
                </div>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "14px",
                    marginLeft: "20px",
                    color: "hsl(215, 51%, 70%)",
                  }}
                >
                  Get detailed, top-notch reliable feedback 
                </p><br />
                <p style={{
                    fontSize: "14px",
                    marginLeft: "20px",
                    color: "white",
                  }}>
                Work on enhancing your skills in the areas that require improvement, guided by the feedback provided. 
                Engage in learning and practice to strengthen your abilities, ultimately bringing you closer to achieving your dream job!
                </p>
              </div>
              <div className="m-auto" style={{ marginLeft: "20px" }}>
                <Image
                  src={Stepthiird}
                  width={325}
                  height={150}
                  style={{ borderRadius: "22px", boxSizing: "border-box" }}
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

export default Works;
