import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Mic,
  FileText,
  Users,
  CalendarDays,
  Search,
  Share2,
} from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Real-time Transcription",
    description:
      "AI-powered speech-to-text with 99% accuracy across 50+ languages.",
  },
  {
    icon: FileText,
    title: "Smart Summaries",
    description:
      "Automatically generate concise meeting summaries with key points and action items.",
  },
  {
    icon: Users,
    title: "Speaker Recognition",
    description:
      "Identify and track different speakers throughout the meeting.",
  },
  {
    icon: CalendarDays,
    title: "Action Items",
    description:
      "Extract and organize tasks, deadlines, and follow-ups automatically.",
  },
  {
    icon: Search,
    title: "Smart Search",
    description:
      "Find any discussion point across all your meetings instantly.",
  },
  {
    icon: Share2,
    title: "Easy Sharing",
    description:
      "Share meeting insights with team members and stakeholders easily.",
  },
];

function FeaturesSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="bg-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h2
          data-aos="fade-up"
          className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4"
        >
          Powerful AI Features
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="150"
          className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto"
        >
          Experience the future of meeting productivity with our advanced AI
          capabilities.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150} // Sequential delay for smooth reveal
              className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center 
              transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 shadow-md">
                <feature.icon className="h-8 w-8 text-white" strokeWidth={1.8} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-base text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;
