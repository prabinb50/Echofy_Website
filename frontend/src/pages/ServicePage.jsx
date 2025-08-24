import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import {
  FaCheckCircle,
  FaDownload,
  FaPhone,
  FaEnvelope,
  FaArrowRight,
  FaLeaf,
  FaFolder,
  FaFilePdf,
} from "react-icons/fa";

const categories = [
  {
    key: "ocean",
    name: "Ocean Cleaning",
    image: "/service-details-thumb.jpg",
  },
  {
    key: "dust",
    name: "Dust Recycling",
    image: "/service-thumb2.png",
  },
  {
    key: "plant",
    name: "Plant Seedlings",
    image: "/service-thumb3.png",
  },
  {
    key: "renewable",
    name: "Renewable Energy",
    image: "/service-thumb3.png",
  },
  {
    key: "environmental",
    name: "Environmental",
    image: "/service-thumb2.png",
  },
  {
    key: "forest",
    name: "Forest Cleaning",
    image: "/service-details-thumb.jpg",
  },
];

export default function ServicePage() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [activeDownload, setActiveDownload] = useState(null);
  return (
    <div>
      {/* hero section */}
      <div className="relative">
        <img
          src="/breadcrumb-bg.jpg"
          alt="Green nature background"
          draggable="false"
          loading="lazy"
          className="object-cover w-full h-[440px]"
        />

        <div className="absolute inset-0">
          <Navbar />
          <hr className="text-white opacity-20" />
        </div>

        {/* page title + breadcrumb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center z-20 mt-4">
          <h1 className="text-white font-bold text-5xl">Service Us</h1>

          <nav aria-label="breadcrumb" className="flex items-center gap-2 mt-4">
            <NavLink
              to="/"
              className="flex items-center gap-2 hover:text-lime-500 transition-colors duration-300"
            >
              <IoHome className="text-lime-500" aria-hidden="true" />
              <span className="text-white">Echofy</span>
            </NavLink>

            <IoIosArrowRoundForward
              className="text-white"
              size={28}
              aria-hidden="true"
            />
            <span className="text-white opacity-80">Services</span>
            <IoIosArrowRoundForward
              className="text-white"
              size={28}
              aria-hidden="true"
            />
            <span className="text-white opacity-80">Ocean Cleaning</span>
          </nav>
        </div>
      </div>
      <div className="bg-gray-50 min-h-screen py-10 mt-15">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* main Content */}
          <div className="lg:col-span-2">
            {/* service Image */}
            <img
              src={activeCategory.image}
              alt={activeCategory.name}
              className="rounded-xl w-full h-[480px] object-cover mb-12"
            />

            {/* title & Description */}
            <h1 className="text-2xl md:text-3xl font-bold mb-4">
              {activeCategory.name} Services
            </h1>
            <p className="text-white-700 mb-4">
              Alternative innovation to ethical network environmental whiteboard
              pursue compelling results premier methods empowerment.
              Dramatically architect go forward opportunities before
              user-centric partner Credibly implement exceptional
            </p>
            <p className="text-gray-700 mb-8">
              Continually fashion orthogonal leadership skills whereas wireless
              metrics. Uniquely syndicate exceptio opportunities with
              interdependent users. Globally enhance fully tested meta-services
              rather than pan solutions. Proactively integrate client-integrate
              go forward architectures and turnkey meta-services. Interactively
              harness integrated ROI whereas frictionless products.
            </p>

            {/* features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-[#F6F8FA] rounded-xl p-8 flex items-center gap-6 shadow-sm">
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white mr-6">
                  {/* replace with eco icon if available, else FaLeaf */}
                  <FaLeaf className="text-[#8BC34A] text-4xl" />
                </div>
                <div>
                  <h3 className="font-bold text-2xl mb-2 text-[#00241B]">Proper Washing</h3>
                  <p className="text-lg text-gray-600">
                    Ethical network environmental architect go forward opportunu credibly implement
                  </p>
                </div>
              </div>
              <div className="bg-[#F6F8FA] rounded-xl p-8 flex items-center gap-6 shadow-sm">
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white mr-6">
                  {/* FaLeaf */}
                  <FaLeaf className="text-[#8BC34A] text-4xl" />
                </div>
                <div>
                  <h3 className="font-bold text-2xl mb-2 text-[#00241B]">Proper cleeny</h3>
                  <p className="text-lg text-gray-600">
                    Ethical network environmental architect go forward opportunu credibly implement
                  </p>
                </div>
              </div>
            </div>

            {/* highlighted Banner */}
            <div className="bg-[#8BC34A] rounded-lg flex items-center px-10 py-8 mb-8 gap-8">
              <div className="flex items-center justify-center w-24 h-24">
                {/* FaLeaf */}
                <FaLeaf className="text-white text-5xl" />
              </div>
              <div className="border-l border-white h-16 mx-6"></div>
              <span className="text-white font-medium text-2xl italic">
                Competently architect intermandated deliverables client niches continually underwhelm
              </span>
            </div>

            {/* benefits Section */}
            <h2 className="text-xl font-bold mb-4">What the Benifits?</h2>
            <p className="text-gray-700 mb-6">
              Alternative innovation to ethical network environmental whiteboard
              pursue compelling results for premier methods empowerment.
              Dramatically architect go forward opportunities
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <img
                  src="/services-details-benifis-thumb-2.png"
                  alt="Green Environment"
                  className="rounded-xl w-full h-[180px] object-cover"
                />
                <div className="absolute left-4 bottom-4 bg-white rounded-lg shadow p-4 w-[80%]">
                  <h3 className="font-semibold mb-2">Green Environment</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-center gap-2">
                      <FaCheckCircle className="text-[#8BC34A]" /> New Modern
                      Equipments
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheckCircle className="text-[#8BC34A]" /> Expert's
                      Volunteers
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/services-details-benifis-thumb-1.png"
                  alt="Renewable Energy"
                  className="rounded-xl w-full h-[180px] object-cover"
                />
                <div className="absolute left-4 bottom-4 bg-white rounded-lg shadow p-4 w-[80%]">
                  <h3 className="font-semibold mb-2">Renewable Energy</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-center gap-2">
                      <FaCheckCircle className="text-[#8BC34A]" /> New Modern
                      Equipments
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheckCircle className="text-[#8BC34A]" /> Expert's
                      Volunteers
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 rounded-xl p-8 -mt-8 min-h-screen">
            {/* categories */}
            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="font-bold mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.map((cat) => {
                  const isActive = cat.key === activeCategory.key;
                  return (
                    <li
                      key={cat.key}
                      className={`group relative overflow-hidden rounded flex items-center justify-between h-12 px-4 font-medium text-base cursor-pointer border border-gray-100 transition-all duration-300
                        ${isActive ? "text-white" : "text-gray-700"}`}
                      onClick={() => setActiveCategory(cat)}
                    >
                      {/* green sweep background */}
                      <span
                        className={`absolute left-0 top-0 h-full w-full bg-[#8BC34A] z-0 transition-transform duration-300 ${
                          isActive
                            ? "translate-x-0"
                            : "-translate-x-full group-hover:translate-x-0"
                        }`}
                        style={{ borderRadius: "0.75rem" }}
                      ></span>
                      <span className="flex items-center gap-2 z-10 transition-colors duration-300">
                        <FaFolder
                          className={`text-lg transition-colors duration-300 ${
                            isActive
                              ? "text-white"
                              : "text-[#8BC34A] group-hover:text-white"
                          }`}
                        />
                        {cat.name}
                      </span>
                      <span
                        className={`z-10 transition-opacity duration-300 ${
                          isActive
                            ? "opacity-100 text-white"
                            : "opacity-0 group-hover:opacity-100 group-hover:text-white"
                        }`}
                      >
                        <FaArrowRight />
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* downloads */}
            <div className="bg-gray-100 rounded-lg p-6 shadow">
              <h3 className="font-bold mb-4">Downloads</h3>
              <ul className="space-y-2">
                <li
                  className={`group relative overflow-hidden flex items-center justify-between px-5 py-3 font-medium cursor-pointer rounded-lg transition-all duration-300 bg-[#00241B]`}
                  onMouseEnter={() => setActiveDownload('report')}
                  onMouseLeave={() => setActiveDownload(null)}
                >
                  {/* green sweep background */}
                  <span
                    className={`absolute left-0 top-0 h-full w-full bg-[#8BC34A] z-0 transition-transform duration-300 ${
                      activeDownload === 'report' ? 'translate-x-0' : '-translate-x-full group-hover:translate-x-0'
                    }`}
                    style={{ borderRadius: '0.5rem' }}
                  ></span>
                  <span className={`flex items-center gap-3 z-10 transition-colors duration-300 ${activeDownload === 'report' ? 'text-white' : 'text-white'}`}>
                    <FaFilePdf className={`text-xl ${activeDownload === 'report' ? 'text-white' : 'text-white'} transition-colors duration-300`} />
                    <span className={`${activeDownload === 'report' ? 'text-white' : 'text-white'} transition-colors duration-300`}>Service Report</span>
                  </span>
                  <FaDownload className={`text-xl z-10 transition-colors duration-300 ${activeDownload === 'report' ? 'text-white' : 'text-white'}`} />
                </li>
                <li
                  className={`group relative overflow-hidden flex items-center justify-between px-5 py-3 font-medium cursor-pointer rounded-lg transition-all duration-300 bg-[#00241B]`}
                  onMouseEnter={() => setActiveDownload('list')}
                  onMouseLeave={() => setActiveDownload(null)}
                >
                  {/* green sweep background */}
                  <span
                    className={`absolute left-0 top-0 h-full w-full bg-[#8BC34A] z-0 transition-transform duration-300 ${
                      activeDownload === 'list' ? 'translate-x-0' : '-translate-x-full group-hover:translate-x-0'
                    }`}
                    style={{ borderRadius: '0.5rem' }}
                  ></span>
                  <span className={`flex items-center gap-3 z-10 transition-colors duration-300 ${activeDownload === 'list' ? 'text-white' : 'text-white'}`}>
                    <FaFilePdf className={`text-xl ${activeDownload === 'list' ? 'text-white' : 'text-white'} transition-colors duration-300`} />
                    <span className={`${activeDownload === 'list' ? 'text-white' : 'text-white'} transition-colors duration-300`}>Service List</span>
                  </span>
                  <FaDownload className={`text-xl z-10 transition-colors duration-300 ${activeDownload === 'list' ? 'text-white' : 'text-white'}`} />
                </li>
              </ul>
            </div>

            {/* contact Card */}
            <div className="bg-[#00241B] rounded-xl p-8 shadow-lg relative overflow-hidden flex flex-col items-center justify-center min-h-[340px]">
              <img
                src="/sidebar-bg.jpg"
                alt="Contact"
                className="absolute inset-0 w-full h-full object-cover opacity-30 rounded-xl"
              />
              <div className="relative z-10 w-full flex flex-col items-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
                    <FaPhone className="text-[#8BC34A] text-4xl" />
                  </div>
                </div>
                <h4 className="text-white font-bold mb-2 text-center text-lg">Call Us Anytime</h4>
                <p className="text-white text-center mb-1 text-2xl font-bold">+123 (4567) 890</p>
                <p className="text-white text-center mb-4 text-base flex items-center gap-2">
                  <FaEnvelope className="text-[#8BC34A] text-xl" /> example@gmail.com
                </p>
                <button className="bg-[#8BC34A] text-white px-8 py-3 rounded font-medium flex items-center gap-2 w-full justify-center text-lg mt-2">
                  Contact Us <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
