import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Navigation links
  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Features", to: "/features" },
    { name: "Dashboard", to: "/dashboard" },
    { name: "About", to: "/about" },
  ];

  return (
    <div className="w-full fixed top-0 left-0 z-50 bg-[#E0E5ED]">
      <nav className="relative w-full bg-[#ffff] shadow-[inset_1px_1px_4px_#d1d9e6,inset_-1px_-1px_4px_#ffffff] backdrop-blur-md">
        <div className="flex items-center justify-between max-w-screen-xl mx-auto px-6 py-3">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer">
            <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-[#f5f6fa] shadow-[4px_4px_10px_#d1d9e6,-4px_-4px_10px_#ffffff] overflow-hidden">
              <img
                src={logo}
                alt="Meetmind AI Logo"
                className="h-10 w-10 object-contain"
              />
            </div>
            <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 font-semibold text-lg">
              Meetmind AI
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className={`relative text-[15px] font-medium transition-all duration-300 ease-in-out transform 
                  ${
                    link.name === "Home"
                      ? "text-blue-600 font-semibold scale-105"
                      : "text-gray-600 hover:text-blue-600 hover:scale-105"
                  } 
                  active:scale-95 active:text-blue-700`}
              >
                {link.name}
                <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* ✅ Sign in button navigates to /login */}
            <Link
              to="/login"
              className="py-2.5 px-6 rounded-full font-semibold text-gray-700 
              bg-[#f5f6fa] shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff]
              hover:shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff]
              active:scale-95 transition-all duration-300 ease-in-out"
            >
              Sign in
            </Link>

            <button
              className="py-2.5 px-6 rounded-full font-semibold text-white 
              bg-gradient-to-br from-blue-500 to-blue-700
              shadow-[6px_6px_14px_#c8d0e7,-6px_-6px_14px_#ffffff]
              hover:shadow-[0_0_20px_4px_rgba(59,130,246,0.45),inset_3px_3px_6px_#c8d0e7,inset_-3px_-3px_6px_#ffffff]
              hover:scale-[1.03] active:scale-95
              transition-all duration-300 ease-in-out"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <div className="relative w-6 h-6 flex flex-col justify-between items-center">
                <span
                  className={`block h-0.5 w-full bg-gray-800 rounded-sm transition-all duration-300 ${
                    isOpen ? "rotate-45 translate-y-2.5" : ""
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-full bg-gray-800 rounded-sm transition-all duration-300 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-full bg-gray-800 rounded-sm transition-all duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-2.5" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`md:hidden absolute w-full bg-[#f5f6fa] shadow-[inset_2px_2px_8px_#d1d9e6,inset_-2px_-2px_8px_#ffffff] transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}

            <div className="flex flex-col space-y-3 w-[80%] pt-3 border-t border-gray-300">
              {/* ✅ Mobile Sign in link */}
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="py-2.5 px-5 rounded-xl font-semibold text-gray-700 bg-[#f5f6fa]
                shadow-[4px_4px_8px_#d1d9e6,-4px_-4px_8px_#ffffff]
                hover:shadow-[inset_3px_3px_6px_#d1d9e6,inset_-3px_-3px_6px_#ffffff]
                transition-all duration-300 text-center"
              >
                Sign in
              </Link>

              <button
                className="py-2.5 px-5 rounded-xl font-semibold text-white bg-gradient-to-br from-blue-500 to-blue-700
                shadow-[4px_4px_12px_#c8d0e7,-4px_-4px_12px_#ffffff]
                hover:shadow-[inset_3px_3px_6px_#c8d0e7,inset_-3px_-3px_6px_#ffffff]
                transition-all duration-300"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;