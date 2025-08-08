import React from "react";
import { BiLeaf } from "react-icons/bi";

const ScrollMarquee = () => {
  return (
    <div className="bg-[#79B900] h-16 sm:h-20 md:h-24 overflow-hidden flex items-center">
      <style>{`
        .marquee-container {
          position: relative;
          width: 100vw;
          height: 100%;
          overflow: hidden;
        }
        .marquee {
          display: flex;
          width: max-content;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          animation: marquee 15s linear infinite;
        }
        @keyframes marquee {
          0% {
            left: 0;
          }
          100% {
            left: -50%;
          }
        }
      `}</style>

      <div className="marquee-container h-full select-none">
        <div className="marquee text-white font-medium text-lg sm:text-xl md:text-2xl tracking-wide items-center h-full">
          {Array.from({ length: 4 }).map((_, idx) => (
            <React.Fragment key={idx}>
              <span className="mx-4 whitespace-nowrap">Animal-Protection</span>
              <BiLeaf className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 mx-2 sm:mx-4 text-white" />
              <span className="mx-4 whitespace-nowrap">Environment</span>
              <BiLeaf className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 mx-2 sm:mx-4 text-white" />
              <span className="mx-4 whitespace-nowrap">Ocean-Cleaning</span>
              <BiLeaf className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 mx-2 sm:mx-4 text-white" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollMarquee;
