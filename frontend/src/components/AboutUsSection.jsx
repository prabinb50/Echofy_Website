import React from "react";
import { MdEco } from "react-icons/md";
import { BiSolidLeaf, BiLeaf } from "react-icons/bi";

const AboutUsSection = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat py-16"
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
      <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
          {/* image section */}
          <div className="relative">
            {/* background container */}
            <div className="relative bg-gradient-to-br from-blue-100 to-green-100 rounded-3xl p-8 overflow-hidden">
              {/* main image */}
              <div className="relative z-10 pt-8">
                <img
                  src="/about.png"
                  alt="Environmental sustainable future"
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* award badge */}
              <div className="absolute bottom-8 left-3 text-white px-7 py-3 rounded-xl flex items-center space-x-3 z-10 gentle-bounce">
                <img src="/about-award.png" alt="Award" className="w-68 h-25" />
              </div>
            </div>
          </div>

          {/* content section */}
          <div className="space-y-8 relative">
            {/* floating leaf - top right */}
            <BiLeaf className="hidden md:block absolute -top-12 -right-5 w-20 h-30 text-[#79B900] opacity-70 pulse-scale z-0" />

            {/* decorative shape - bottom right */}
            <img
              src="/about-shape.png"
              alt="About shape"
              className="hidden md:block absolute -bottom-7 right-80 w-20 h-auto opacity-60 horizontal-sway z-0"
            />

            {/* title section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 mb-4">
                <MdEco className="w-6 h-6 text-[#79B900]" />
                <span className="text-[#79B900] font-semibold uppercase tracking-wide text-base md:text-lg lg:text-xl">
                  About Echofy
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight text-left mb-8">
                Environmental Sustainable<br />Forever Green Future
              </h1>
            </div>

            {/* features list */}
            <div className="space-y-6">
              {/* economic benefits feature */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <img
                    src="/about-icon.png"
                    alt="Economic benefits icon"
                    className="w-6 h-6"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Economic Benefits
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Alternative innovation after ethical to network
                    environmental<br /> whiteboard transparent growth natural done.
                  </p>
                </div>
              </div>

              {/* safe environment feature */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <img
                    src="/about-icon2.png"
                    alt="Safe environment icon"
                    className="w-6 h-6"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Safe Environment
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Alternative innovation after ethical to network
                    environmental<br /> whiteboard transparent growth natural done.
                  </p>
                </div>
              </div>
            </div>
            <hr className="border-gray-400 opacity-45 my-5 w-150" />

            {/* button */}
            <div className="pt-4 relative z-10">
              <div className="relative group inline-flex items-center gap-2 py-4 px-8 rounded-full cursor-pointer text-white overflow-hidden bg-lime-500 border border-lime-500">
                <span className="absolute inset-0 bg-black w-0 group-hover:w-full transition-all duration-500 ease-in-out rounded-full z-0"></span>

                <div className="flex items-center gap-2 relative z-10 transition-all duration-300 text-white group-hover:text-white">
                  <span className="font-semibold">More About</span>
                  <BiSolidLeaf className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
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
