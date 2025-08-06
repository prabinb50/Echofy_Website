"use client";
import { Globe, Recycle, TreePine } from "lucide-react";
import { GiMapleLeaf } from "react-icons/gi";

const processSteps = [
  {
    id: 1,
    title: "Collection Dust",
    desc: "Proactively drive maintainable value next mission-critical infrastructures eggplant new environmental nature",
    icon: <Globe className="w-8 h-8 text-lime-600" />,
    processIcon: "/process-icon.png",
  },
  {
    id: 2,
    title: "Dust Recycling",
    desc: "Proactively drive maintainable value next mission-critical infrastructures eggplant new environmental nature",
    icon: <Recycle className="w-8 h-8 text-lime-600" />,
    processIcon: "/process-icon.png",
  },
  {
    id: 3,
    title: "Cleaning Environment",
    desc: "Proactively drive maintainable value next mission-critical infrastructures eggplant new environmental nature",
    icon: <TreePine className="w-8 h-8 text-lime-600" />,
    processIcon: "/process-icon.png",
  },
];

const WorkProcess = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="w-11/12 mx-auto space-y-15">
        {/* header */}
        <div className="text-center space-y-5">
          <div className="flex items-center justify-center gap-2">
            <GiMapleLeaf className="w-6 h-6 text-[#79B900]" />

            <span className="text-[#79B900] font-medium">
              WORKING PROCESS
            </span>
          </div>

          <h1 className="opacity-85 font-bold text-4xl leading-tight">
            Process To Safe Environment
          </h1>
        </div>

        {/* process Steps */}
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          {processSteps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              {/* step Circle */}
              <div className="flex flex-col items-center text-center">
                {/* spinning Dashed Circle */}
                <div className="relative mb-6 overflow-visible">
                  {/* inner Circle with Icon (static) */}
                  <div className="w-32 h-32 bg-lime-50 rounded-full relative mx-auto overflow-visible">
                    {step.processIcon ? (
                      <img
                        src={step.processIcon}
                        alt="Process Icon"
                        className="absolute w-36 h-55 object-contain z-20  "
                        style={{
                          maxWidth: "none",
                          maxHeight: "none",
                          top: "-55px",
                          left: "50%",
                          transform: "translateX(-50%)",
                        }}
                      />
                    ) : (
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lime-600">
                        {step.icon}
                      </div>
                    )}
                  </div>

                  {/* spinning Dashed Circle Overlay - Larger with space */}
                  <div
                    className="absolute inset-0 w-40 h-40 rounded-full border-2 border-dashed border-lime-400 animate-spin top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    style={{ animationDuration: "8s" }}
                  ></div>
                </div>

                {/* content */}
                <div className="max-w-xs">
                  <h3 className="text-xl font-bold opacity-85 mb-3">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>

              {/* arrow */}
              {index < processSteps.length - 1 && (
                <div className="mx-8 mb-16">
                  <img
                    src={
                      index === 0 ? "/process-arrow.png" : "/process-arrow2.png"
                    }
                    alt="Arrow"
                    className="w-40 h-8 mb-10"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;