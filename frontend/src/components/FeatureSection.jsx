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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % allFeatures.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + allFeatures.length) % allFeatures.length
    );
  };

  return (
    <section
      className="w-full bg-[#f8fbf4] py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/service-bg.jpg)" }}
    >
      <div className="w-11/12 mx-auto mt-10 mb-10">
        {/* header */}
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
            <div className="flex gap-3 mr-8">
              <button
                onClick={prevSlide}
                className="bg-lime-500 text-white rounded-full p-4 transition-all duration-300"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="bg-gray-200 text-lime-600 rounded-full p-4 transition-all duration-300"
              >
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
          <hr className="border-gray-300 opacity-60 w-[90%]" />
        </div>

        {/* cards container */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
          >
            {/* render cards in loop */}
            {[...allFeatures, ...allFeatures, ...allFeatures].map(
              (feature, idx) => (
                <div key={idx} className="w-1/3 flex-shrink-0 px-5">
                  <div className="group bg-[#f5f3f0] rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-700 hover:shadow-2xl hover:bg-gray-900 cursor-pointer relative">
                    {/* image */}
                    <div className="relative p-4 transition-all duration-700">
                      <div className="relative w-full h-65 rounded-xl overflow-hidden">
                        <img
                          src={feature.img || "/placeholder.svg"}
                          alt={feature.title}
                          className="w-full h-full object-cover transition-all duration-700"
                        />
                      </div>
                    </div>

                    {/* content */}
                    <div className="p-6 transition-all duration-700 group-hover:text-white relative">
                      <div className="flex items-center justify-between mb-4">
                        <div className="bg-lime-50 group-hover:bg-black rounded-full p-3 transition-all duration-700">
                          <div className="transition-all duration-700 group-hover:text-lime-600">
                            {feature.icon}
                          </div>
                        </div>
                        <button className="bg-gray-50 group-hover:bg-lime-500 text-gray-600 group-hover:text-white rounded-full p-2 transition-all duration-700 transform group-hover:scale-110">
                          <ArrowUpRight className="w-9 h-9 transition-all duration-700" />
                        </button>
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 group-hover:text-white mb-2 transition-all duration-700">
                        {feature.title}
                      </h3>
                      <div className="w-8 h-1 bg-lime-500 rounded mb-4 transition-all duration-700 group-hover:w-16"></div>
                      <p className="text-gray-600 group-hover:text-gray-300 text-lg leading-relaxed transition-all duration-700">
                        {feature.desc}
                      </p>

                      {/* Service shape decoration sliding in from bottom */}
                      <div className="absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-all duration-700 delay-500 z-10">
                        <div className="w-20 h-20">
                          <img
                            src="/service-shape.png"
                            alt="Service Shape"
                            className="w-full h-full object-contain rotate-180 scale-x-[-1]"
                          />
                        </div>
                      </div>
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
