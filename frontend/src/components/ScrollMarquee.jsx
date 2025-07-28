import React from "react";
import { BiLeaf } from "react-icons/bi";

const ScrollMarquee = () => {
  return (
    <div className="bg-[#79B900] h-24 overflow-hidden flex items-center">
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
          animation: marquee 40s linear infinite;
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

      <div className="marquee-container h-full">
        <div className="marquee text-white font-normal text-2xl  tracking-wide items-center h-full">
          {Array.from({ length: 6 }).map((_, idx) => (
            <React.Fragment key={idx}>
              <span className="mx-4 font-bold">Animal-Protection</span>
              <BiLeaf className="w-10 h-10 mx-4 text-white" />
              <span className="mx-4 font-bold">Environment</span>
              <BiLeaf className="w-10 h-10 mx-4 text-white" />
              <span className="mx-4 font-bold">Ocean-Cleaning</span>
              <BiLeaf className="w-10 h-10 text-white" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollMarquee;
