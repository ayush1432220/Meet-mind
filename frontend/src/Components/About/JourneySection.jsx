import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function JourneySection() {
  const journeyData = [
    {
      year: "2021",
      text: "Company founded by AI veterans from Google and Microsoft",
    },
    {
      year: "2022",
      text: "Launched beta with 1,000+ early adopters",
    },
    {
      year: "2023",
      text: "Reached 50,000+ active users and $10M Series A funding",
    },
    {
      year: "2024",
      text: "Expanded to 50+ languages and enterprise solutions",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 900, once: true, offset: 100 });
  }, []);

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#fff5f1] via-[#fff9f6] to-[#fffdfb] text-center">
      {/* Heading */}
      <h2
        className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3"
        data-aos="fade-down"
      >
        Our Journey
      </h2>
      <p
        className="text-gray-600 text-lg mb-14"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        From a small startup to a leading AI company
      </p>

      {/* Timeline Cards */}
      <div className="flex flex-col gap-6 max-w-4xl mx-auto">
        {journeyData.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-6 bg-[#f4f6fb] p-6 rounded-2xl 
            shadow-[0_10px_25px_rgba(0,0,0,0.08)] 
            hover:shadow-[0_12px_30px_rgba(0,0,0,0.1)] 
            transition-all duration-300"
            data-aos="fade-right"
            data-aos-delay={index * 200} // each appears one-by-one
          >
            {/* Year Badge */}
            <div
              className="flex-shrink-0 bg-gradient-to-br from-orange-500 to-pink-500 
              text-white font-semibold text-lg w-16 h-16 flex items-center 
              justify-center rounded-full shadow-md"
            >
              {item.year}
            </div>

            {/* Text */}
            <p className="text-gray-800 text-base md:text-lg text-left">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default JourneySection;
