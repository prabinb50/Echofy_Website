"use client";

import { useState } from "react";
import {
  Leaf,
  Recycle,
  Droplets,
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

// service features data
const allFeatures = [
  {
    title: "Tree Plantation",
    desc: "Alternative innovation to ethical network environmental whiteboard",
    icon: <Leaf className="w-10 h-10 text-lime-600" />,
    img: "/service-thumb.png",
  },
  {
    title: "Dust Recycling",
    desc: "Alternative innovation to ethical network environmental whiteboard",
    icon: <Recycle className="w-10 h-10 text-lime-600" />,
    img: "/service-thumb2.png",
  },
  {
    title: "Cleaning Ocean",
    desc: "Alternative innovation to ethical network environmental whiteboard",
    icon: <Droplets className="w-10 h-10 text-lime-600" />,
    img: "/service-thumb3.png",
  },
];

const FeatureSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // next slide handler
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % allFeatures.length);
  };

  // previous slide handler
  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + allFeatures.length) % allFeatures.length
    );
  };

  return (
    <section className="w-full bg-[#f8fbf4] py-20" style={{ backgroundImage: "url(/service-bg.jpg)" }}>
      <div className="w-11/12 mx-auto mt-10 mb-10">
        {/* header section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <div className="flex-1 pr-2">
              <div className="flex items-center gap-3 mb-4">
                <Leaf className="w-6 h-6 text-lime-600" />
                <span className="text-[#79B900] font-semibold uppercase tracking-wide text-sm">
                  OUR SERVICES
                </span>
              </div>
              <h2 className="text-4xl md:text-4xl font-bold text-gray-900 leading-tight">
                Echofy Provide Environment
                <br />
                Best Leading Services
              </h2>
            </div>
            {/* navigation buttons */}
            <div className="flex gap-3 mr-8">
              <button
                onClick={prevSlide}
                className="bg-lime-500 text-white rounded-full p-4"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="bg-gray-200 text-lime-600 rounded-full p-4"
              >
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
          <hr className="border-gray-300 opacity-60 w-[90%]" />
        </div>

        {/* cards carousel */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700"
            style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
          >
            {/* render cards in loop */}
            {[...allFeatures, ...allFeatures, ...allFeatures].map(
              (feature, idx) => (
                <div key={idx} className="w-1/3 flex-shrink-0 px-5">
                  <div className="group bg-[#f5f3f0] rounded-2xl border border-gray-100 overflow-hidden hover:bg-gray-900 cursor-pointer">
                    {/* image section */}
                    <div className="relative p-4">
                      <div className="relative w-full h-65 rounded-xl overflow-hidden">
                        <img
                          src={feature.img}
                          alt={feature.title}
                          className="w-full h-full object-cover"
                        />
                        {/* green sweep animation */}
                        <div className="absolute top-0 left-1/2 w-0 h-full bg-[#79B900] transition-all duration-500 group-hover:w-full group-hover:left-0 group-hover:opacity-0"></div>
                      </div>
                    </div>

                    {/* content section */}
                    <div className="p-6 group-hover:text-white">
                      <div className="flex items-center justify-between mb-4">
                        <div className="bg-lime-50 group-hover:bg-black rounded-full p-3">
                          <div className="group-hover:text-lime-600">
                            {feature.icon}
                          </div>
                        </div>
                        <button className="bg-gray-50 group-hover:bg-lime-500 text-gray-600 group-hover:text-white rounded-full p-2">
                          <ArrowUpRight className="w-9 h-9" />
                        </button>
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 group-hover:text-white mb-2">
                        {feature.title}
                      </h3>
                      <div className="w-8 h-1 bg-lime-500 rounded mb-4 group-hover:w-16"></div>
                      <p className="text-gray-600 group-hover:text-gray-300 text-lg leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
