// import Image from "next/image";
// import React from "react";
// import Youtube from "../public/assets/youtubeicon.png";
// import Linkdein from "../public/assets/linkedinicon.png";
// import Instagram from "../public/assets/instagramicon.png";
// import Gmail from "../public/assets/gmailicon.png";

// const Social = () => {
//   return (
//     <div id="skills" className="w-full lg:h-screen p-2">
//       <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
//         <p className="text-xl tracking-widest uppercase text-[#5651e5]">
//           Join Us On
//         </p>
//         <div
//           style={{
//             backgroundColor: "#f3f6f9",
//             borderRadius: "20px",
//             padding: "20px",
//           }}
//         >
//           <div className="grid grid-cols-4 lg:grid-cols-3 gap-8">
//             <div className="m-auto" style={{ marginLeft: "20px" }}>
//               <a href="https://www.youtube.com/@sumanitian/" target="_blank">
//                 <Image
//                   src={Youtube}
//                   // position="absolute"
//                   // inset={0}
//                   // box-sizing="border-box"
//                   // padding={0}
//                   // border="none"
//                   // margin="auto"
//                   // display="block"
//                   width={100}
//                   height={100}
//                   // min-width={100}
//                   // max-width={100}
//                   // min-height={100}
//                   // max-height={100}
//                 />
//               </a>

//               <p
//                 style={{
//                   fontWeight: "600",
//                   marginLeft: "20px",
//                   color: "rgb(255, 0, 0)",
//                   fontFamily: "Rubik,sans-serif",
//                 }}
//               >
//                 Youtube
//               </p>
//               <p
//                 style={{
//                   fontWeight: "600",
//                   marginLeft: "20px",
//                   color: "#262626",
//                   fontFamily: "Rubik,sans-serif",
//                 }}
//               >
//                 sumanitian
//               </p>
//             </div>

//             <div className="m-auto" style={{ marginLeft: "20px" }}>
//               <a href="https://www.linkedin.com/in/sumanitian/" target="_blank">
//                 <Image
//                   src={Linkdein}
//                   // position="absolute"
//                   // inset={0}
//                   // box-sizing="border-box"
//                   // padding={0}
//                   // border="none"
//                   // margin="auto"
//                   // display="block"
//                   width={100}
//                   height={100}
//                   // min-width={100}
//                   // max-width={100}
//                   // min-height={100}
//                   // max-height={100}
//                 />
//               </a>

//               <p
//                 style={{
//                   fontWeight: "600",
//                   marginLeft: "20px",
//                   color: "rgb(0, 119, 181)",
//                   fontFamily: "Rubik,sans-serif",
//                 }}
//               >
//                 LinkedIn
//               </p>
//               <p
//                 style={{
//                   fontWeight: "600",
//                   marginLeft: "20px",
//                   color: "#262626",
//                   fontFamily: "Rubik,sans-serif",
//                 }}
//               >
//                 sumanitian
//               </p>
//             </div>

//             <div className="m-auto" style={{ marginLeft: "20px" }}>
//               <a href="https://www.instagram.com/sumanitian/" target="_blank">
//                 <Image
//                   src={Instagram}
//                   // position="absolute"
//                   // inset={0}
//                   // box-sizing="border-box"
//                   // padding={0}
//                   // border="none"
//                   // margin="auto"
//                   // display="block"
//                   width={100}
//                   height={100}
//                   // min-width={100}
//                   // max-width={100}
//                   // min-height={100}
//                   // max-height={100}
//                 />
//               </a>

//               <p
//                 style={{
//                   fontWeight: "600",
//                   marginLeft: "20px",
//                   color: "rgb(150, 47, 191)",
//                   fontFamily: "Rubik,sans-serif",
//                 }}
//               >
//                 Instagram
//               </p>
//               <p
//                 style={{
//                   fontWeight: "600",
//                   marginLeft: "20px",
//                   color: "#262626",
//                   fontFamily: "Rubik,sans-serif",
//                 }}
//               >
//                 sumanitian
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Social;


import Image from "next/image";
import React from "react";
import Youtube from "../public/assets/youtubeicon.png";
import Linkdein from "../public/assets/linkedinicon.png";
import Instagram from "../public/assets/instagramicon.png";
import Gmail from "../public/assets/gmailicon.png";

const Social = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Join Us On
        </p>
        <div
          style={{
            backgroundColor: "#f3f6f9",
            borderRadius: "20px",
            padding: "20px",
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="m-auto text-center">
              <a href="https://www.youtube.com/@sumanitian/" target="_blank" rel="noopener noreferrer">
                <Image src={Youtube} width={100} height={100} />
              </a>
              <p
                style={{
                  fontWeight: "600",
                  color: "rgb(255, 0, 0)",
                  fontFamily: "Rubik, sans-serif",
                }}
              >
                Youtube
              </p>
              <p
                style={{
                  fontWeight: "600",
                  color: "#262626",
                  fontFamily: "Rubik, sans-serif",
                }}
              >
                sumanitian
              </p>
            </div>

            <div className="m-auto text-center">
              <a href="https://www.linkedin.com/in/sumanitian/" target="_blank" rel="noopener noreferrer">
                <Image src={Linkdein} width={100} height={100} />
              </a>
              <p
                style={{
                  fontWeight: "600",
                  color: "rgb(0, 119, 181)",
                  fontFamily: "Rubik, sans-serif",
                }}
              >
                LinkedIn
              </p>
              <p
                style={{
                  fontWeight: "600",
                  color: "#262626",
                  fontFamily: "Rubik, sans-serif",
                }}
              >
                sumanitian
              </p>
            </div>

            <div className="m-auto text-center">
              <a href="https://www.instagram.com/sumanitian/" target="_blank" rel="noopener noreferrer">
                <Image src={Instagram} width={100} height={100} />
              </a>
              <p
                style={{
                  fontWeight: "600",
                  color: "rgb(150, 47, 191)",
                  fontFamily: "Rubik, sans-serif",
                }}
              >
                Instagram
              </p>
              <p
                style={{
                  fontWeight: "600",
                  color: "#262626",
                  fontFamily: "Rubik, sans-serif",
                }}
              >
                sumanitian
              </p>
            </div>

            <div className="m-auto text-center">
              <a href="mailto:mockkart@gmail.com" target="_blank" rel="noopener noreferrer">
                <Image src={Gmail} width={100} height={100} />
              </a>
              <p
                style={{
                  fontWeight: "600",
                  color: "#FF5733",
                  fontFamily: "Rubik, sans-serif",
                }}
              >
                Gmail
              </p>
              <p
                style={{
                  fontWeight: "600",
                  color: "#262626",
                  fontFamily: "Rubik, sans-serif",
                }}
              >
                mockkart@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;


