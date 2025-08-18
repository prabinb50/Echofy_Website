import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { FaMapMarkerAlt, FaPhone, FaHeadset, FaLeaf } from "react-icons/fa";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <>
      <div className="relative">
        {/* background image */}
        <img
          src="/breadcrumb-bg.jpg"
          alt="Breadcrumb Background"
          draggable="false"
          loading="lazy"
          className="object-cover w-full h-[440px]"
        />

        <div className="absolute inset-0">
          {/* navbar */}
          <Navbar />

          {/* horizontal line */}
          <hr className="text-white opacity-20" />
        </div>

        {/* centered text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center z-20 mt-4">
          <h1 className="text-white font-bold text-5xl">Contact Us</h1>

          {/* breadcrumb */}
          <nav
            aria-label="breadcrumb"
            className="flex items-center justify-between gap-2 mt-4"
          >
            <div className="flex items-center gap-2 cursor-pointer">
              <IoHome color="#79B900" aria-hidden="true" />

              <span className="text-white hover:text-[#79B900] transition-colors duration-300">
                Echofy
              </span>
            </div>

            <IoIosArrowRoundForward
              color="white"
              size={28}
              aria-hidden="true"
            />
            <span className="text-white opacity-80 cursor-pointer">
              About Us
            </span>
          </nav>
        </div>
      </div>

      {/* contact content */}
      <div className="min-h-screen bg-gray-50 py-12">
        {showAlert && (
          <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50">
            ✓ Message sent successfully!
          </div>
        )}

        <div className="max-w-6xl mx-auto px-4">
          {/* contact Info Cards */}
          <div className="bg-[#8BC34A] rounded-lg p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* office Address */}
              <div className="text-center text-white">
                <div className="rounded-full bg-white px-2 py-2 sm:px-2.5 sm:py-2.5 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:border-2 before:border-white before:opacity-70 before:-z-10 before:rounded-full before:animate-ping cursor-pointer hover:bg-black hover:before:animate-none group inline-block mb-4">
                  <FaMapMarkerAlt className="text-[#355250] text-xl group-hover:text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Office Address</h3>
                <p className="text-sm">200 Newyork 17, West Side Right</p>
                <p className="text-sm">Sandigo, USA</p>
              </div>

              {/* make A Call */}
              <div className="text-center text-white border-l border-r border-white/20 px-4">
                <div className="rounded-full bg-white px-2 py-2 sm:px-2.5 sm:py-2.5 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:border-2 before:border-white before:opacity-70 before:-z-10 before:rounded-full before:animate-ping cursor-pointer hover:bg-black hover:before:animate-none group inline-block mb-4">
                  <FaPhone className="text-[#355250] text-xl group-hover:text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Make A Call</h3>
                <p className="text-sm">(+880) 32 4567 890</p>
                <p className="text-sm">(+880) 32 4567 670</p>
              </div>

              {/* 24/7 Online Support */}
              <div className="text-center text-white">
                <div className="rounded-full bg-white px-2 py-2 sm:px-2.5 sm:py-2.5 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:border-2 before:border-white before:opacity-70 before:-z-10 before:rounded-full before:animate-ping cursor-pointer hover:bg-black hover:before:animate-none group inline-block mb-4">
                  <FaHeadset className="text-[#355250] text-xl group-hover:text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  24/7 Online Support
                </h3>
                <p className="text-sm">support@gmail.com</p>
                <p className="text-sm">info@gmail.com</p>
              </div>
            </div>
          </div>

          {/* map and Contact Form Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-10">
            {/* Google Maps */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg h-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387203.11012209195!2d-74.60334146958495!3d40.69546251466727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2snp!4v1755448179853!5m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* contact Form */}
            <div className="bg-white rounded-lg p-8 shadow-lg h-[600px] flex flex-col ">
              <div className="mb-6">
                <div className="flex items-center space-x-2">
                  <FaLeaf className="text-[#8BC34A] text-sm" />
                  <span className="text-[#8BC34A] text-sm font-medium">
                    GET IN TOUCH
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mt-2">
                  Write Us Something
                </h2>
              </div>

              <form
                className="space-y-4 flex-1 flex flex-col"
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name*"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8BC34A] focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Your Number"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8BC34A] focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder="Your E-Mail*"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8BC34A] focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Your Address"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8BC34A] focus:border-transparent"
                  />
                </div>

                <textarea
                  placeholder="Write A Message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8BC34A] focus:border-transparent resize-none flex-1"
                />

                <div className="flex items-center space-x-2 mb-6">
                  <input type="checkbox" id="terms" className="rounded" />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I agree with the Terms & Conditions
                  </label>
                </div>

                <button
                  type="submit"
                  className="relative group inline-flex items-center gap-2 px-8 py-3 rounded-lg cursor-pointer text-white overflow-hidden bg-[#8BC34A] border border-[#8BC34A] shadow-md self-start"
                >
                  <span className="absolute inset-0 bg-black w-0 group-hover:w-full transition-all duration-500 ease-in-out rounded-lg z-0"></span>
                  <div className="flex items-center gap-2 relative z-10 transition-all duration-300 text-white group-hover:text-white">
                    <span>Submit Message</span>
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
