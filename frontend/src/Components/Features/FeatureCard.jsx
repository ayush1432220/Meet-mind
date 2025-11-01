import React, { useEffect } from "react";
import { Check, ArrowRight, Mic, BookText, ClipboardList, Search, Share2 } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

import intellegent from "../../assets/intellegent.png";
import item from "../../assets/item.png";
import meeting from "../../assets/meeting.png";
import collaboration from "../../assets/collaboration.png";
import tran from "../../assets/tran.png";

const FeaturesCard = ({
  icon: Icon,
  title,
  description,
  features,
  image,
  isReversed = false,
}) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      data-aos="fade-up"
      className={`flex flex-col lg:flex-row ${
        isReversed ? "lg:flex-row-reverse" : ""
      } items-center justify-between w-full max-w-6xl mx-auto my-12 
      rounded-3xl bg-[#f0f3f7] p-6 lg:p-10 
      shadow-[10px_10px_20px_#cdd5e0,-10px_-10px_20px_#ffffff]
      transform transition-transform duration-500 hover:scale-[1.02]`}
    >
      {/* === Left Side (Text) === */}
      <div
        className={`flex flex-col justify-center ${
          isReversed ? "lg:pl-10" : "lg:pr-10"
        } text-left space-y-5`}
      >
        {/* Icon + Title */}
        <div className="flex items-center space-x-3">
          <div className="bg-green-400 p-3 rounded-2xl shadow-inner">
            <Icon className="w-6 h-6 text-green-900" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
            <p className="text-gray-500 text-sm">{description}</p>
          </div>
        </div>

        {/* Features List */}
        <ul className="space-y-3 mt-3">
          {features.map((feature, i) => (
            <li
              key={i}
              data-aos="fade-right"
              data-aos-delay={200 * i}
              className="flex items-start text-gray-600"
            >
              <div className="flex-shrink-0 bg-green-400 p-1.5 rounded-full shadow-[inset_1px_1px_3px_#cfd6e3,inset_-1px_-1px_3px_#ffffff]">
                <Check className="w-4 h-4 text-white" />
              </div>
              <p className="leading-relaxed ml-3">{feature}</p>
            </li>
          ))}
        </ul>

        {/* Learn More Button */}
        <button
          className="mt-4 w-45 inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white 
          font-medium px-5 py-2.5 rounded-full text-sm 
          shadow-[4px_4px_8px_#cfd6e3,-4px_-4px_8px_#ffffff] 
          transition-all duration-300 hover:scale-105"
        >
          <ArrowRight className="w-4 h-4 mr-2" />
          Learn More
        </button>
      </div>

      {/* === Right Side (Image) === */}
      <div
        data-aos="zoom-in"
        className="mt-8 lg:mt-0 w-full lg:w-[45%] rounded-2xl overflow-hidden 
        shadow-[6px_6px_14px_#cfd6e3,-6px_-6px_14px_#ffffff]"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-2xl transition-transform duration-700"
        />
      </div>
    </div>
  );
};

// === Example Usage ===
const Card = () => {
  return (
    <div className="min-h-screen bg-[#e8edf5] py-16 px-4">
      <FeaturesCard
        icon={Mic}
        title="AI-Powered Transcription"
        description="Real-time speech-to-text with industry-leading accuracy"
        features={[
          "99.2% accuracy rate across 50+ languages including English, Spanish, French, and more",
          "Real-time transcription with minimal latency (under 200ms)",
          "Automatic punctuation, capitalization, and formatting",
          "Custom vocabulary and terminology support",
          "Advanced noise reduction and clarity optimization",
        ]}
        image={tran}
      />

      <FeaturesCard
        icon={BookText}
        title="Smart Meeting Summaries"
        description="Automatically generated insights and key takeaways"
        features={[
          "AI-generated executive summaries with key decision points",
          "Automatic extraction of topics and themes",
          "Sentiment analysis and meeting mood detection",
          "Customizable templates for different meeting types",
          "Export options: PDF, Word, Markdown, HTML",
        ]}
        image={meeting}
        isReversed
      />

      <FeaturesCard
        icon={ClipboardList}
        title="Action Item Management"
        description="Intelligent task extraction and follow-up tracking"
        features={[
          "Automatic action item detection using NLP algorithms",
          "Smart deadline and priority assignment",
          "Progress tracking and automated reminders",
          "Integration with management platforms",
          "Completion rate analytics and insights",
        ]}
        image={item}
      />

      <FeaturesCard
        icon={Search}
        title="Intelligent Search"
        description="Find any discussion point across all meetings instantly"
        features={[
          "Semantic search across transcripts and summaries",
          "Advanced keyword filtering with Boolean operators",
          "Time-stamped results with playback",
          "Context-aware suggestions and content discovery",
          "Cross-meeting pattern and trend identification",
        ]}
        image={intellegent}
        isReversed
      />

      <FeaturesCard
        icon={Share2}
        title="Collaboration & Sharing"
        description="Seamless sharing and team collaboration features"
        features={[
          "Secure meeting sharing with granular permission controls",
          "Real-time collaborative editing and annotation system",
          "Comment threads and discussion tracking on transcripts",
          "Multi-format export with customizable branding options",
          "Version control and change tracking for meeting documents",
        ]}
        image={collaboration}
      />
    </div>
  );
};

export default Card;
