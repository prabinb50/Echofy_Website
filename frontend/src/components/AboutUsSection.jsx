import React from "react";
import { GiMapleLeaf } from "react-icons/gi";
import { BiSolidLeaf, BiLeaf } from "react-icons/bi";

const AboutUsSection = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat py-12 md:py-16 lg:py-20"
      style={{ backgroundImage: "url(/about-bg.jpg)" }}
    >
      {/* animation styles */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes gentleBounce {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .float-animation {
          animation: float 2s ease-in-out infinite;
        }
        
        .gentle-bounce {
          animation: gentleBounce 2s ease-in-out infinite;
        }
        
        .scale-animation {
          animation: scale 2.5s ease-in-out infinite;
        }
        
        .pulse-scale {
          animation: pulseScale 2s ease infinite;
        }
        
        @keyframes pulseScale {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.5);
          }
        }
        
        .horizontal-sway {
          animation: sway 2s ease-in-out infinite;
        }
        
        @keyframes sway {
          0%, 100% {
            transform: translateX(0px);
          }
          50% {
            transform: translateX(10px);
          }
        }
        
        @keyframes scale {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }
      `}</style>
      <div className="w-11/12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* image section */}
          <div className="relative">
            {/* main image */}
      <div className="mt-4 mb-8 sm:mb-10">
              <img
                src="/about.png"
                alt="Environmental sustainable future"
        draggable="false"
        className="w-full max-w-md md:max-w-lg lg:max-w-full mx-auto h-auto object-cover drop-shadow-md"
              />
            </div>

            {/* award badge */}
            <div className="absolute -bottom-6 sm:bottom-4 left-2 sm:left-4 px-4 py-2 sm:px-6 sm:py-3 rounded-xl z-10 float-animation">
              <img src="/about-award.png" alt="Award" className="w-36 sm:w-48 md:w-56 h-auto" draggable="false" />
            </div>
          </div>

          {/* content section */}
          <div className="space-y-8 relative max-w-xl mx-auto lg:mx-0">
            {/* floating leaf - top right */}
            <BiLeaf className="hidden md:block absolute -top-10 -right-0 w-10 h-10 lg:w-14 lg:h-14 text-[#79B900] opacity-60 pulse-scale z-0" />

            {/* decorative shape - bottom right */}
            <img
              src="/about-shape.png"
              alt="About decorative shape"
              className="hidden md:block absolute -bottom-4 right-4 w-16 lg:w-20 h-auto opacity-50 horizontal-sway z-0"
            />

            {/* title section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                {/* <MdEco className="w-6 h-6 text-[#79B900]" /> */}
                <GiMapleLeaf className="w-6 h-6 text-[#79B900]" />

                <span className="text-[#79B900] font-medium uppercase">
                  About Echofy
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold opacity-85 leading-snug sm:leading-tight text-left mb-6 sm:mb-8">
                Environmental Sustainable<br />
                Forever Green Future
              </h1>
            </div>

            {/* features list */}
            <div className="space-y-6">
              {/* economic benefits feature */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shadow-sm">
                  <img
                    src="/about-icon.png"
                    alt="Economic benefits icon"
                    className="w-6 h-6"
                  />
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold opacity-85 mb-1 sm:mb-2">
                    Economic Benefits
                  </h3>

                  <p className="text-sm sm:text-base leading-relaxed opacity-60">
                    Alternative innovation after ethical to network environmental whiteboard
                    transparent growth natural done.
                  </p>
                </div>
              </div>

              {/* safe environment feature */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shadow-sm">
                  <img
                    src="/about-icon2.png"
                    alt="Safe environment icon"
                    className="w-6 h-6"
                  />
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold opacity-85 mb-1 sm:mb-2">
                    Safe Environment
                  </h3>

                  <p className="text-sm sm:text-base leading-relaxed opacity-60">
                    Alternative innovation after ethical to network environmental whiteboard
                    transparent growth natural done.
                  </p>
                </div>
              </div>
            </div>

            <hr className="border-gray-700/20 my-6" />

            {/* button */}
            <div className="pt-2 relative z-10">
              <div className="relative group inline-flex items-center gap-2 py-3 px-7 rounded-full cursor-pointer text-white overflow-hidden bg-lime-500 border border-lime-500 shadow-md">
                <span className="absolute inset-0 bg-black w-0 group-hover:w-full transition-all duration-500 ease-in-out rounded-full z-0"></span>

                <div className="flex items-center gap-2 relative z-10 transition-all duration-300 text-white group-hover:text-white">
                  <span className="font-semibold text-sm sm:text-base">More About</span>

                  <BiSolidLeaf className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
