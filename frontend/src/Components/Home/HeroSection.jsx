import React, { useEffect } from "react";
import { Play, PlayCircle } from "lucide-react";
import TeamMeeting from "../../assets/TeamMeeting.png";
import AOS from "aos";
import "aos/dist/aos.css";

function HeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation speed
      once: true, // animate only once per scroll
      offset: 120, // trigger offset
    });
  }, []);

  return (
    <section className="relative w-full bg-[#F1F4F9] min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 pt-10 overflow-hidden">
      <div className="max-w-9xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

        {/* === LEFT CONTENT === */}
        <div
          className="flex flex-col items-center md:items-start text-center md:text-left"
          data-aos="fade-up"
        >
          <h1
            className="text-[42px] sm:text-5xl lg:text-[64px] font-extrabold text-gray-900 leading-tight tracking-tight"
            data-aos="fade-right"
          >
            Transform Your <br />
            <span className="bg-gradient-to-r from-[#2563EB] to-[#9333EA] text-transparent bg-clip-text">
              Meetings
            </span>{" "}
            <br />
            with AI
          </h1>

          <p
            className="text-gray-600 mt-6 text-lg max-w-md"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Meetmind AI automatically transcribes, summarizes, and extracts
            actionable insights from your meetings. Never miss important details again.
          </p>

          {/* === BUTTONS === */}
          <div
            className="flex flex-col sm:flex-row gap-4 mt-10"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            {/* Primary glowing button */}
            <button className="relative flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#2563EB] to-[#9333EA] text-white font-semibold rounded-full shadow-[0_0_25px_rgba(79,70,229,0.6)] hover:shadow-[0_0_45px_rgba(79,70,229,0.9)] transition-all duration-300 hover:scale-[1.05]">
              <Play className="w-5 h-5" />
              Start Free Trial
            </button>

            {/* Secondary button */}
            <button className="relative flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-gray-800 font-semibold rounded-full border border-gray-200 shadow-[0_0_18px_rgba(0,0,0,0.05)] hover:shadow-[0_0_30px_rgba(147,51,234,0.2)] hover:scale-[1.05] transition-all duration-300">
              <PlayCircle className="w-5 h-5 text-[#2563EB]" />
              Watch Demo
            </button>
          </div>
        </div>

        {/* === RIGHT SIDE === */}
        <div
          className="relative flex justify-center"
          data-aos="zoom-in-up"
          data-aos-delay="500"
        >
          <div className="relative bg-white p-4 rounded-[28px] shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
            <div className="relative aspect-video w-full sm:w-[420px] md:w-[480px] lg:w-[520px] rounded-2xl overflow-hidden">
              <img
                src={TeamMeeting}
                alt="Meeting illustration"
                className="w-full h-full object-cover"
              />

              {/* === Play Button Overlay === */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-r from-[#2563EB] to-[#9333EA] shadow-[0_0_45px_rgba(79,70,229,0.7)] hover:shadow-[0_0_70px_rgba(79,70,229,0.9)] transition-all duration-300 hover:scale-110">
                  <div className="absolute inset-[4px] bg-white/10 rounded-full flex items-center justify-center">
                    <Play className="w-10 h-10 text-white" />
                  </div>
                </button>
              </div>
            </div>

            {/* Outer Glow */}
            <div className="absolute -inset-3 rounded-[30px] bg-gradient-to-r from-[#2563EB]/20 to-[#9333EA]/20 blur-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
