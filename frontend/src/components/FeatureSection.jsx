"use client";
import { useState, useRef, useCallback } from "react";
import {
  Recycle,
  Droplets,
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { GiMapleLeaf } from "react-icons/gi";
import { TiLeaf } from "react-icons/ti";

const allFeatures = [
  {
    title: "Tree Plantation",
    desc: "Alternative innovation to ethical network environmental whiteboard",
    icon: <TiLeaf className="w-10 h-10 text-lime-600" />,
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

// create extended array for seamless looping
const extendedFeatures = [
  ...allFeatures,
  ...allFeatures,
  ...allFeatures
];

const FeatureSection = () => {
  const [currentIndex, setCurrentIndex] = useState(allFeatures.length);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const trackRef = useRef(null);

  const goToSlide = useCallback((index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
  }, [isTransitioning]);

  // next slide handler
  const nextSlide = () => {
    goToSlide(currentIndex + 1);
  };

  // previous slide handler
  const prevSlide = () => {
    goToSlide(currentIndex - 1);
  };

  // Handle transition end to create infinite loop
  const handleTransitionEnd = () => {
    setIsTransitioning(false);

    // If we're at the end of first copy, jump to start of second copy
    if (currentIndex >= allFeatures.length * 2) {
      setCurrentIndex(allFeatures.length);
    }
    // If we're before the first copy, jump to end of second copy
    if (currentIndex < allFeatures.length) {
      setCurrentIndex(allFeatures.length * 2 - 1);
    }
  };

  return (
    <section className="w-full bg-[#f8fbf4] py-12 md:py-16 lg:py-20" style={{ backgroundImage: "url(/service-bg.jpg)" }}>
      <div className="w-11/12 max-w-7xl mx-auto">
        {/* header section */}
        <div className="mb-12 md:mb-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
            <div className="space-y-4 md:space-y-5">
              {/* icon and label section */}
              <div className="flex items-center gap-3">
                {/* leaf icon */}
                <GiMapleLeaf className="w-6 h-6 text-[#79B900]" />

                {/* label text */}
                <span className="text-[#79B900] font-semibold text-sm md:text-base">
                  OUR SERVICES
                </span>
              </div>

              {/* heading texts */}
              <div className='opacity-85 font-bold text-2xl md:text-3xl lg:text-4xl leading-snug md:leading-tight'>
                <h1 className="mb-1 md:mb-0">Echofy Provide Environment</h1>
                <h1>Best Leading Services</h1>
              </div>
            </div>

            {/* navigation buttons */}
            <div className="flex gap-3 md:mr-4 self-start md:self-auto order-first md:order-none">
              <button
                onClick={prevSlide}
                className="bg-lime-500 text-white rounded-full p-3 md:p-4 cursor-pointer hover:bg-lime-600 transition disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextSlide}
                className="bg-gray-200 text-lime-600 rounded-full p-3 md:p-4 cursor-pointer hover:bg-gray-300 transition disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          <hr className="border-gray-300 opacity-60 w-[97%]" />
        </div>

        {/* cards carousel */}
        <div className="relative overflow-hidden">
          <div
            ref={trackRef}
            onTransitionEnd={handleTransitionEnd}
            className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-out' : ''}`}
            style={{
              transform: `translateX(-${currentIndex * (100 / 3)}%)`
            }}
          >
            {/* render extended cards */}
            {extendedFeatures.map((feature, idx) => (
              <div key={idx} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-2 sm:px-4 md:px-5">
                <div className="group bg-[#f5f3f0] rounded-2xl border border-gray-100 overflow-hidden hover:bg-gray-900 cursor-pointer h-full flex flex-col">
                  {/* image section */}
                  <div className="relative p-4">
                    <div className="relative w-full h-56 sm:h-60 md:h-64 rounded-xl overflow-hidden">
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
                  <div className="p-5 sm:p-6 group-hover:text-white relative flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-4 gap-3">
                      <div className="bg-lime-50 group-hover:bg-black rounded-full p-3 shrink-0">
                        <div className="group-hover:text-lime-600">
                          {feature.icon}
                        </div>
                      </div>

                      <button className="bg-gray-50 group-hover:bg-lime-500 text-gray-600 group-hover:text-white rounded-full p-2 shrink-0">
                        <ArrowUpRight className="w-7 h-7 md:w-8 md:h-8" />
                      </button>
                    </div>

                    <h3 className="text-xl md:text-2xl font-semibold opacity-85 group-hover:text-white mb-2">
                      {feature.title}
                    </h3>

                    <div className="w-8 h-1 bg-lime-500 rounded mb-4 group-hover:w-16 transition-all"></div>

                    <p className="leading-relaxed opacity-60 group-hover:text-gray-300 text-sm md:text-base mb-4">
                      {feature.desc}
                    </p>

                    {/* service shape decoration sliding in from bottom */}
                    <div className="absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all duration-700 delay-100">
                      <div className="w-16 h-16 md:w-20 md:h-20">
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
            ))}
          </div>
          {/* dots for mobile */}
          <div className="flex md:hidden justify-center mt-6 gap-2">
            {allFeatures.map((_, i) => {
              // Calculate logical index for dot highlighting
              const logicalIndex = ((currentIndex - allFeatures.length) % allFeatures.length + allFeatures.length) % allFeatures.length;
              return (
                <button
                  key={i}
                  onClick={() => goToSlide(allFeatures.length + i)}
                  className={`w-3 h-3 rounded-full transition ${currentIndex === i ? 'bg-lime-500' : 'bg-gray-300'}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section >
  );
};

export default FeatureSection;