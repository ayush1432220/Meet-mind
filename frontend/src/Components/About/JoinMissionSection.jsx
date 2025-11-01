import React from "react";
import { FaBriefcase, FaBell } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function JoinMissionSection() {
  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });
  }, []);

  return (
    <section className="bg-gradient-to-br from-[#fff5f1] via-[#fff8f6] to-[#fffdfb] py-24 px-6">
      <div
        className="max-w-4xl mx-auto bg-[#eef2f7] rounded-3xl shadow-[10px_10px_25px_#d1d9e6,-10px_-10px_25px_#ffffff] 
        py-16 px-8 text-center"
        data-aos="fade-up"
      >
        <h2
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
          data-aos="fade-down"
        >
          Join Our Mission
        </h2>
        <p
          className="text-gray-600 text-lg md:text-xl mb-10"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Be part of the team that's revolutionizing how the world communicates.
        </p>

        <div
          className="flex flex-col sm:flex-row justify-center gap-6"
          data-aos="zoom-in"
          data-aos-delay="250"
        >
          {/* Button 1 */}
          <button
            className="flex items-center justify-center gap-2 py-3 px-8 rounded-full text-white font-semibold 
            bg-gradient-to-r from-orange-500 to-pink-600 
            shadow-[4px_4px_12px_rgba(0,0,0,0.1)] 
            hover:scale-[1.05] hover:shadow-[inset_3px_3px_8px_rgba(0,0,0,0.1)] 
            transition-all duration-300"
          >
            <FaBriefcase className="text-lg" />
            View Open Positions
          </button>

          {/* Button 2 */}
          <button
            className="flex items-center justify-center gap-2 py-3 px-8 rounded-full text-white font-semibold 
            bg-gradient-to-r from-blue-600 to-blue-500
            shadow-[4px_4px_12px_rgba(0,0,0,0.1)]
            hover:scale-[1.05] hover:shadow-[inset_3px_3px_8px_rgba(0,0,0,0.1)] 
            transition-all duration-300"
          >
            <FaBell className="text-lg" />
            Try Meetmind AI
          </button>
        </div>
      </div>
    </section>
  );
}

export default JoinMissionSection;
