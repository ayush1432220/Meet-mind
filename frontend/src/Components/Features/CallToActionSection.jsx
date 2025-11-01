import React from "react";
import { FaBell } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";

const CallToActionSection = () => {
  return (
    <section className="flex justify-center items-center py-10 bg-[#f4f6fb]">
      <div
        className="bg-white rounded-2xl shadow-[8px_8px_20px_#d1d9e6,-8px_-8px_20px_#ffffff]
                   px-8 md:px-16 py-12 text-center max-w-3xl w-full"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Experience the Future of Meetings
        </h2>
        <p className="text-gray-600 mt-3 mb-8 text-base">
          Try all features free for 14 days. No credit card required.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <button
            className="flex items-center gap-2 bg-[#2563eb] text-white font-semibold px-6 py-3 
                       rounded-full shadow-[4px_4px_10px_#b8c6e0,-4px_-4px_10px_#ffffff]
                       hover:shadow-[inset_4px_4px_10px_#1e40af,inset_-4px_-4px_10px_#3b82f6]
                       transition duration-300"
          >
            <FaBell className="text-white" />
            Start Free Trial
          </button>

          <button
            className="flex items-center gap-2 bg-[#f5f6fa] text-gray-800 font-semibold px-6 py-3 
                       rounded-full shadow-[4px_4px_10px_#d1d9e6,-4px_-4px_10px_#ffffff]
                       hover:shadow-[inset_4px_4px_10px_#d1d9e6,inset_-4px_-4px_10px_#ffffff]
                       transition duration-300"
          >
            <FaCalendarAlt className="text-gray-700" />
            Schedule Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
