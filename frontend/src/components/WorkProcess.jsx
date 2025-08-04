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
      <div className="w-11/12 mx-auto">
        {/* header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <GiMapleLeaf className="w-4 h-4 text-lime-500" />
            <span className="text-lime-600 font-semibold uppercase tracking-wide text-sm">
              WORKING PROCESS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Process To Safe Environment
          </h2>
        </div>

        {/* process Steps */}
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          {processSteps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="w-32 h-32 bg-lime-50 rounded-full flex items-center justify-center relative">
                    <img
                      src={step.processIcon}
                      alt={`Process ${step.id}`}
                      className="w-20 h-24 object-contain"
                    />
                  </div>
                  <div className="absolute inset-0 w-40 h-40 rounded-full border-2 border-dashed border-lime-400 animate-spin -top-4 -left-4"></div>
                </div>

                <div className="max-w-xs">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
              
              {index < processSteps.length - 1 && (
                <div className="mx-8 mb-16">
                  <img
                    src={index === 0 ? "/process-arrow.png" : "/process-arrow2.png"}
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
