import React from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const socialLinks = [
  { Icon: FaFacebookF, label: "Facebook" },
  { Icon: FaXTwitter, label: "Twitter / X" },
  { Icon: FaLinkedinIn, label: "LinkedIn" },
  { Icon: FaPinterestP, label: "Pinterest" },
];

const Footer = () => {
  return (
    <footer
      className="relative w-full bg-gradient-to-br from-gray-900 via-green-900 to-gray-800 overflow-hidden"
      style={{ backgroundImage: "url('/footer-bg.jpg')" }}
    >
      {/* decorative floating shapes */}
      <img
        src="/footer-shape.png"
        alt=""
        className="absolute top-0 left-5 w-25 md:w-30 lg:w-35 animate-[floatShape_4s_ease-in-out_infinite] opacity-70 brightness-150 pointer-events-none"
      />

      <img
        src="/footer-line.png"
        alt=""
        className="absolute bottom-0 right-0 w-48 md:w-80 opacity-20 pointer-events-none"
      />

      {/* social section */}
      <div className="relative w-11/12 mx-auto max-w-6xl pt-15 md:pt-17">
        <div
          className="relative text-white py-6 px-6 md:px-8 rounded-2xl overflow-hidden"
          style={{
            backgroundImage: "url('/footer-social.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* floating leaf icon  */}
          <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <svg
              className="w-14 h-14 text-lime-400 motion-safe:animate-[leafPulse_2s_ease-in-out_infinite]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
            </svg>
          </div>

          {/* floating leaf shape */}
          <img
            src="/footer-social-shape.png"
            alt=""
            className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-12 md:w-16 motion-safe:animate-[floatLeafRight_3s_ease-in-out_infinite] z-10"
          />

          {/* speech bubble tail */}
          <div className="absolute bottom-0 right-12 md:right-16 w-0 h-0 border-l-[14px]  md:border-l-[20px] border-l-transparent border-r-[14px] md:border-r-[20px] border-r-transparent border-t-[14px] md:border-t-[20px] border-t-lime-500 transform translate-y-full z-20"></div>

          {/* social content */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 relative z-10 text-center lg:text-left">
            <h2 className="text-lg md:text-2xl font-bold">
              Stay With Us On Social
            </h2>

            <div className="flex items-center gap-3 md:gap-4">
              <span className="font-semibold text-sm md:text-lg">
                FOLLOW US:
              </span>

              <div className="flex gap-2 md:gap-3">
                {socialLinks.map(({ Icon, label }, i) => (
                  <Link
                    to={"/"}
                    key={i}
                    aria-label={label}
                    className="p-2 md:p-3 rounded-full border border-white hover:bg-white hover:text-gray-800 transition-all duration-300 cursor-pointer motion-safe:animate-[floatSocial_2s_ease-in-out_infinite]"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  >
                    <Icon size={16} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-6 lg:px-0 py-12 md:py-16 text-white">
          {/* column 1 - logo and contact */}
          <div>
            <div className="mb-6">
              <img
                src="/logo.png"
                alt="Echofy Logo"
                className="object-cover w-28 md:w-32"
                draggable="false"
              />
            </div>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Proactively restore timely alignments after client environmentals
            </p>

            <div className="border-t border-gray-600 pt-4 mt-6">
              <h4 className="text-white font-semibold mb-3 text-lg md:text-xl">
                Contact
              </h4>

              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm md:text-base">
                  <span className="text-lime-400">📞</span>

                  <a href="tel:+1234567890" className="text-gray-300 hover:text-lime-400">
                    +123 (4567) 890
                  </a>
                </li>

                <li className="flex items-center gap-2 text-sm md:text-base">
                  <span className="text-lime-400">✉️</span>

                  <a
                    href="mailto:example@gmail.com"
                    className="text-gray-300 hover:text-lime-400"
                  >
                    example@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* column 2 - company */}
          <div>
            <h4 className="font-bold text-lg md:text-xl mb-6">Company</h4>

            <ul className="space-y-3">
              {["Home", "About Us", "Our Services", "Meet Our Team", "Latest Blog"].map(
                (item, i) => (
                  <li
                    key={i}
                    className="text-gray-300 hover:text-lime-400 transition-colors cursor-pointer flex items-center gap-2"
                  >
                    <span className="text-lime-400">›</span>

                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* column 3 - quick links */}
          <div>
            <h4 className="font-bold text-lg md:text-xl mb-6">Quick Links</h4>

            <ul className="space-y-3">
              {["Testimonials", "Contact Us", "Donations", "Faq", "Careers"].map(
                (item, i) => (
                  <li
                    key={i}
                    className="text-gray-300 hover:text-lime-400 transition-colors cursor-pointer flex items-center gap-2"
                  >
                    <span className="text-lime-400">›</span>

                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* column 4 - newsletter */}
          <div>
            <h4 className="font-bold text-lg md:text-xl mb-6">Newsletter</h4>

            <p className="text-gray-300 text-sm md:text-base mb-6">
              Subscribe to Our Newsletter
            </p>

            <form className="space-y-4">
              <label htmlFor="newsletter" className="sr-only">
                Email Address
              </label>

              <input
                type="email"
                id="newsletter"
                placeholder="Enter Your E-Mail*"
                className="w-full p-3 md:p-4 rounded-full text-sm md:text-base placeholder-white opacity-90 border border-[#79B900] focus:outline-none focus:ring-1 focus:ring-white"
              />

              <button
                type="submit"
                className="relative group inline-flex items-center justify-center py-3 md:py-4 rounded-full cursor-pointer text-white overflow-hidden bg-lime-500 border border-lime-500 w-full"
              >
                <span className="absolute inset-0 bg-[#001819] w-0 group-hover:w-full transition-all duration-500 ease-in-out rounded-full"></span>

                <span className="relative z-10">SUBSCRIBE →</span>
              </button>
            </form>
          </div>
        </div>

        {/* footer bottom */}
        <div className="border-t border-gray-700">
          <div className="text-center text-xs md:text-base text-white py-6">
            © 2024 Echofy. Designed and Developed by{" "}

            <Link to="https://github.com/prabinb50" className="text-lime-400 opacity-70">Prabin Joshi</Link>
          </div>
        </div>
      </div>

      {/* animations */}
      <style>{`
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
        @keyframes leafPulse {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.8; }
          50% { transform: scale(1.3) rotate(5deg); opacity: 1; }
        }
        @keyframes floatSocial {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
