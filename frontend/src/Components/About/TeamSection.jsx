import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function TeamSection() {
  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-founder",
      desc: "Former VP of AI at Google, leading the vision for intelligent meeting solutions",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-founder",
      desc: "Ex-Microsoft AI researcher with 15+ years in machine learning and NLP",
      img: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of AI Research",
      desc: "PhD in Computer Science from Stanford, specializing in speech recognition",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "David Kim",
      role: "VP of Engineering",
      desc: "Former lead engineer at Zoom, expert in real-time communication systems",
      img: "https://randomuser.me/api/portraits/men/66.jpg",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });
  }, []);

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#fff5f1] via-[#fff9f6] to-[#fffdfc] text-center">
      {/* Heading */}
      <h2
        className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
        data-aos="fade-down"
      >
        Meet Our Team
      </h2>
      <p
        className="text-gray-600 text-lg mb-12"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        Passionate experts dedicated to transforming how teams communicate
      </p>

      {/* Team Cards */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
      >
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.08)] 
            hover:shadow-[0_10px_40px_rgba(0,0,0,0.12)] 
            transition-all duration-300 transform hover:-translate-y-2"
            data-aos="fade-up"
            data-aos-delay={index * 200} // each one appears sequentially
          >
            {/* Image */}
            <img
              src={member.img}
              alt={member.name}
              className="w-24 h-24 object-cover rounded-full mx-auto mb-5 border-4 border-white shadow-md"
            />

            {/* Name */}
            <h3 className="text-xl font-semibold text-gray-900 mb-1">
              {member.name}
            </h3>

            {/* Role */}
            <p className="text-[#ff6600] font-semibold mb-3">{member.role}</p>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {member.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamSection;
