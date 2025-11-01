import React, { useEffect } from "react";
import { Check, Users, Briefcase, BarChart, Globe } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const teams = [
  {
    icon: Users,
    title: "Product Development Teams",
    description:
      "Streamline sprint planning, retrospectives, and stakeholder reviews",
    points: [
      "Faster decision making",
      "Better requirement tracking",
      "Improved team alignment",
    ],
  },
  {
    icon: Briefcase,
    title: "Sales & Client Meetings",
    description:
      "Capture client requirements and follow-up actions automatically",
    points: [
      "Never miss client requests",
      "Automated CRM updates",
      "Improved client satisfaction",
    ],
  },
  {
    icon: BarChart,
    title: "Executive Leadership",
    description:
      "Get concise summaries of all team meetings and decisions",
    points: [
      "Strategic oversight",
      "Quick decision reviews",
      "Team performance insights",
    ],
  },
  {
    icon: Globe,
    title: "Remote Teams",
    description:
      "Bridge communication gaps across time zones and languages",
    points: [
      "Async collaboration",
      "Multi-language support",
      "Timezone-friendly summaries",
    ],
  },
];

const TeamsSection = () => {
  // ✅ Initialize AOS once
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <section className="bg-[#f0f3f7] py-20 px-4 text-center">
      {/* === Heading === */}
      <h2
        data-aos="fade-up"
        className="text-3xl md:text-4xl font-bold text-gray-900 drop-shadow-sm"
      >
        Perfect for Every Team
      </h2>
      <p
        data-aos="fade-up"
        data-aos-delay="150"
        className="text-gray-600 mt-2 max-w-2xl mx-auto text-base leading-relaxed"
      >
        See how different teams use{" "}
        <span className="font-semibold text-gray-800">MeetMind AI</span> to
        transform their meeting experience
      </p>

      {/* === Cards Grid === */}
      <div
        className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto"
      >
        {teams.map((team, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 150}
            className="relative bg-[#f5f7fb] p-7 rounded-3xl text-left
                       shadow-[0_0_25px_#a3bffa66,8px_8px_18px_#ccd2db,-8px_-8px_18px_#ffffff]
                       border border-white/40 transition-all duration-500 
                       hover:scale-[1.03] hover:shadow-[0_0_35px_#93b6ff,8px_8px_18px_#ccd2db,-8px_-8px_18px_#ffffff]"
          >
            {/* Permanent subtle glow layer */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-transparent via-transparent to-[#a3bffa33] pointer-events-none"></div>

            {/* === Header === */}
            <div className="flex items-start space-x-4">
              <div
                className="bg-gradient-to-br from-emerald-500 to-teal-600 p-3 rounded-2xl 
                              shadow-[inset_2px_2px_4px_#3b7c64,inset_-2px_-2px_6px_#57c8a4]
                              ring-1 ring-emerald-400/30"
              >
                <team.icon className="w-5 h-5 text-white" />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {team.title}
                </h3>
                <p className="text-gray-500 text-sm leading-snug">
                  {team.description}
                </p>
              </div>
            </div>

            {/* === Points === */}
            <ul className="mt-5 space-y-3">
              {team.points.map((point, i) => (
                <li
                  key={i}
                  className="flex items-center text-gray-700 text-sm bg-white/50 
                             rounded-full py-1.5 px-3 shadow-[inset_1px_1px_3px_#e1e7ef,inset_-1px_-1px_3px_#ffffff]"
                >
                  <div
                    className="flex-shrink-0 bg-gradient-to-br from-green-400 to-green-500 
                                  p-1.5 rounded-full mr-2 shadow-[0_0_8px_#6ee7b7]"
                  >
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamsSection;
