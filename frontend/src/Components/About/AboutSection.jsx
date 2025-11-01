import React, { useEffect } from "react";
import { FaUsers, FaEnvelope } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "../../assets/About.png";

function AboutSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // animation happens only once
      offset: 100, // trigger point
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section
      className="flex flex-col lg:flex-row items-center justify-between 
      px-6 lg:px-20 xl:px-28 py-24 bg-gradient-to-br 
      from-[#fff5f5] via-[#fff9f6] to-[#fffdfc]"
    >
      {/* Left Content */}
      <div
        data-aos="fade-right"
        className="max-w-2xl text-center lg:text-left space-y-6"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
          Revolutionizing{" "}
          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-fuchsia-600 bg-clip-text text-transparent">
            Meetings
          </span>{" "}
          with AI
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-gray-600 text-base md:text-lg leading-relaxed"
        >
          We're on a mission to make every meeting more productive, insightful, 
          and actionable through the power of artificial intelligence.
        </p>

        {/* Buttons */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex flex-wrap justify-center lg:justify-start gap-4 pt-3"
        >
          <button
            className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-600 
            text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-[1.05] 
            transition-all duration-300"
          >
            <FaUsers className="text-lg" /> Join Our Team
          </button>

          <button
            className="flex items-center gap-2 bg-white text-gray-800 font-semibold 
            px-6 py-3 rounded-full shadow-[4px_4px_12px_rgba(0,0,0,0.1)] 
            hover:shadow-inner transition-all duration-300"
          >
            <FaEnvelope className="text-gray-600 text-lg" /> Contact Us
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div
        data-aos="fade-left"
        className="mt-12 lg:mt-0 lg:w-[45%] w-full flex justify-center"
      >
        <div
          className="bg-[#f8faff] p-3 md:p-5 rounded-2xl 
          shadow-[0_10px_30px_rgba(0,0,0,0.08)] 
          hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] transition-all duration-500"
        >
          <img
            src={About}
            alt="AI Meeting Control Room"
            className="rounded-xl w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
