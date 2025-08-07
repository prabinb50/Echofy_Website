import React from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div
      className="relative w-full bg-gradient-to-br from-gray-900 via-green-900 to-gray-800 overflow-hidden"
      style={{ backgroundImage: "url('/footer-bg.jpg')" }}
    >
      {/* floating decorative elements */}
      <img
        src="/footer-shape.png"
        alt="floating decoration"
        className="absolute top-0 left-10 w-40 animate-[floatShape_4s_ease-in-out_infinite] opacity-70 brightness-150"
      />

      <img
        src="/footer-line.png"
        alt="decorative line"
        className="absolute bottom-0 right-0 w-80 opacity-20"
      />

      {/* social section with speech bubble */}
      <div className="relative mx-auto max-w-6xl top-20">
        <div
          className=" text-white py-6 px-8 rounded-2xl mx-8 mt-8 relative overflow-hidden"
          style={{
            backgroundImage: "url('/footer-social.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* reduced green overlay to show background image */}
          <div className="absolute inset-0 bg-lime-500 bg-opacity-30 rounded-2xl"></div>

          {/* floating leaf icon in the middle with big/small animation */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <svg
              className="w-16 h-16 text-lime-300"
              fill="currentColor"
              viewBox="0 0 24 24"
              style={{
                animation: 'leafPulse 2s ease-in-out infinite'
              }}
            >
              <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
            </svg>
          </div>

          {/* floating leaf shape attached to right side */}
          <img
            src="/footer-social-shape.png"
            alt="floating leaf shape"
            className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-16 h-16 animate-[floatLeafRight_3s_ease-in-out_infinite] z-10"
          />

          {/* speech bubble tail */}
          <div className="absolute bottom-0 right-16 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-lime-500 transform translate-y-full z-20"></div>

          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 relative z-10">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-bold">Stay With Us On Social</h2>
              {/* decorative leaf icon */}
            </div>

            <div className="flex items-center gap-4">
              <span className="font-semibold text-lg">FOLLOW US :</span>
              <div className="flex gap-3">
                {[
                  { Icon: FaFacebookF },
                  { Icon: FaXTwitter },
                  { Icon: FaLinkedinIn },
                  { Icon: FaPinterestP },
                ].map(({ Icon }, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-full border border-white hover:bg-white hover:text-gray-800 transition-all duration-300 cursor-pointer animate-[floatSocial_2s_ease-in-out_infinite]"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  >
                    <Icon size={16} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* main footer content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 px-8 py-16 text-white">
          {/* column 1 - logo & contact */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              {/* <div className="w-10 h-10 bg-lime-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg text-center">e</span>
              </div>

              <h3 className="text-3xl font-bold text-white">Echofy</h3> */}

              <img
                src="/logo.png"
                alt="Echofy Logo"
                className="object-cover"
                draggable="false"
              />
            </div>

            <p className="text-gray-300 leading-relaxed">
              Proactively restore timely alignments after client environmentals
            </p>

            <div className="border-t border-gray-600 pt-4 mt-6">
              <h4 className="text-white font-semibold mb-3 text-xl">Contact</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-lime-400">📞</span>

                  <span className="text-gray-300">+977 9841120853</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-lime-400">✉️</span>

                  <span className="text-gray-300">echofy@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* column 2 - company */}
          <div>
            <h4 className="font-bold text-xl text-white mb-6">Company</h4>
            <ul className="space-y-3">
              {[
                "Home",
                "About Us",
                "Our Services",
                "Meet Our Team",
                "Latest Blog",
              ].map((item, i) => (
                <li
                  key={i}
                  className="text-gray-300 hover:text-lime-400 transition-colors cursor-pointer opacity-80 flex items-center gap-2"
                >
                  <span className="text-lime-400">›</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* column 3 - quick links */}
          <div>
            <h4 className="font-bold text-xl text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                "Testimonials",
                "Contact Us",
                "Donations",
                "Faq",
                "Careers",
              ].map((item, i) => (
                <li
                  key={i}
                  className="text-gray-300 hover:text-lime-400 transition-colors cursor-pointer opacity-80 flex items-center gap-2"
                >
                  <span className="text-lime-400">›</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* column 4 - newsletter */}
          <div>
            <h4 className="font-bold text-xl text-white mb-6">Newsletter</h4>
            <p className="text-gray-300 opacity-80 mb-6">
              Subscribe Our Newsletter
            </p>

            <div className="space-y-4">
              <input
                type="email"
                placeholder="Enter Your E-Mail*"
                className="w-full p-4 rounded-full placeholder-white opacity-90 border border-[#79B900] focus:outline-none focus:ring-1 focus:ring-white transition-all duration-300"
              />

              <button className="relative group inline-flex items-center gap-2 justify-center py-4 rounded-full cursor-pointer text-white overflow-hidden bg-lime-500 border border-lime-500 w-full">
                <span className="absolute inset-0 bg-[#001819] w-0 group-hover:w-full transition-all duration-500 ease-in-out rounded-full z-0 "></span>

                <div className="flex items-center gap-2 relative z-10 transition-all duration-300 text-white group-hover:text-white">
                  <p className="font-medium">SUBSCRIBE</p>
                  <span>→</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* footer bottom */}
        <div className="border-t border-gray-700 mx-8">
          <div className="text-center text-sm text-gray-400 py-6">
            © Copyrights 2024 Echofy All rights reserved by{" "}
            <span className="text-lime-400 font-semibold">
              Dream-IT Solution
            </span>
          </div>
        </div>
      </div>

      {/* custom animations */}
      <style>{`
        /* Enhanced floating animations with multi-directional movement */
        @keyframes floatShape {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(-10px, -15px) rotate(5deg); }
          50% { transform: translate(5px, -10px) rotate(-3deg); }
          75% { transform: translate(-5px, 5px) rotate(2deg); }
        }
        
        @keyframes floatLeafRight {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(15px, -10px) rotate(-5deg); }
          50% { transform: translate(-8px, -20px) rotate(8deg); }
          75% { transform: translate(10px, -5px) rotate(-2deg); }
        }

        /* Middle leaf animation with big/small pulsing effect */
        @keyframes leafPulse {
          0%, 100% { 
            transform: scale(1) rotate(0deg); 
            opacity: 0.8;
          }
          50% { 
            transform: scale(1.3) rotate(5deg); 
            opacity: 1;
          }
        }
  
        @keyframes floatLeft {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(-10px); }
        }
        @keyframes floatRight {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(10px); }
        }
        @keyframes floatSocial {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
      `}</style>
    </div>
  );
};

export default Footer;
