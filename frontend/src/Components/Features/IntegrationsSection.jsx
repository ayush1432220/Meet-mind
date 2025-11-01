import React from "react";
import {
  SiZoom,
  SiGooglemeet,
  SiSlack,
  SiNotion,
  SiTrello,
  SiAsana,
  SiJira,
  // SiMicrosoftazure, 
} from "react-icons/si";



const integrations = [
  {
    name: "Zoom",
    description: "Direct integration with Zoom meetings",
    color: "#0E71EB",
    icon: <SiZoom className="text-white text-2xl" />,
  },
//   {
//     name: "Microsoft Teams",
//     description: "Seamless Teams integration",
//     color: "#7B83EB",
//     icon: <SiMicrosoftazure className="text-white text-2xl" />,
// },

  {
    name: "Google Meet",
    description: "Google Workspace integration",
    color: "#00A651",
    icon: <SiGooglemeet className="text-white text-2xl" />,
  },
  {
    name: "Slack",
    description: "Team communication hub",
    color: "#E01E5A",
    icon: <SiSlack className="text-white text-2xl" />,
  },
  {
    name: "Notion",
    description: "Knowledge management system",
    color: "#2F3437",
    icon: <SiNotion className="text-white text-2xl" />,
  },
  {
    name: "Trello",
    description: "Project management boards",
    color: "#0079BF",
    icon: <SiTrello className="text-white text-2xl" />,
  },
  {
    name: "Asana",
    description: "Task and project tracking",
    color: "#FCB900",
    icon: <SiAsana className="text-white text-2xl" />,
  },
  {
    name: "Jira",
    description: "Issue and project tracking",
    color: "#0052CC",
    icon: <SiJira className="text-white text-2xl" />,
  },
];

const IntegrationsSection = () => {
  return (
    <section className="bg-[#f5f6fa] py-10 px-6 text-center">
      {/* === Heading === */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
        Seamless Integrations
      </h2>
      <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-base leading-relaxed">
        Connect with your favorite tools and platforms for a unified workflow
      </p>

      {/* === Integration Cards === */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {integrations.map((tool, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-8 shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff]
                       transition-transform duration-300 hover:scale-[1.03]"
          >
            <div
              className="w-12 h-12 mx-auto flex items-center justify-center rounded-2xl mb-5"
              style={{ backgroundColor: tool.color }}
            >
              {tool.icon}
            </div>
            <h3 className="font-semibold text-gray-900 text-lg">{tool.name}</h3>
            <p className="text-gray-500 text-sm mt-1">{tool.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IntegrationsSection;
