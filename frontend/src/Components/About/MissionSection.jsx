import React from "react";
import { FaLightbulb, FaShieldAlt, FaUsersCog, FaRocket } from "react-icons/fa";

 function MissionSection() {
  const missionData = [
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      text: "We push the boundaries of AI technology to create solutions that truly matter",
    },
    {
      icon: <FaShieldAlt />,
      title: "Privacy First",
      text: "Your data security and privacy are our top priorities in everything we build",
    },
    {
      icon: <FaUsersCog />,
      title: "Collaboration",
      text: "We believe great ideas come from diverse teams working together",
    },
    {
      icon: <FaRocket />,
      title: "Excellence",
      text: "We strive for perfection in every feature and interaction we create",
    },
  ];

  return (
    <section className="py-20 px-6 bg-[#fff5f1] text-center">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
        Our Mission
      </h2>
      <p className="max-w-3xl mx-auto text-gray-600 mb-14 text-lg leading-relaxed">
        To eliminate the friction in human communication by creating AI that
        understands, processes, and enhances every conversation. We believe
        that when meetings become more efficient, teams become more innovative.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {missionData.map((item, index) => (
          <div
            key={index}
            className="bg-[#f4f6fb] rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.08)] 
            hover:shadow-[0_12px_30px_rgba(0,0,0,0.1)] transition-all duration-300 
            w-full max-w-[260px] p-8 flex flex-col items-center text-center"
          >
            {/* Gradient Icon */}
            <div className="bg-gradient-to-br from-orange-500 to-pink-500 text-white 
              p-4 rounded-2xl text-3xl mb-5 shadow-md flex items-center justify-center">
              {item.icon}
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default MissionSection;