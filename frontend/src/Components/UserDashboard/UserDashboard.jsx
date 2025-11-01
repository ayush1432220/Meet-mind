import React, { useState } from "react";
import {
  FaCalendarAlt,
  FaClock,
  FaCheckSquare,
  FaUsers,
  FaMicrophone,
  FaUpload,
  FaCog,
  FaChartBar,
  FaSearch,
  FaPlus,
  FaHistory,
} from "react-icons/fa";

// ======== Mock Data =========
const stats = [
  { title: "Total Meetings", value: 156, change: "+12%", icon: <FaCalendarAlt /> },
  { title: "Hours Saved", value: 89, change: "+23%", icon: <FaClock /> },
  { title: "Action Items", value: 342, change: "+8%", icon: <FaCheckSquare /> },
  { title: "Team Members", value: 24, change: "+4%", icon: <FaUsers /> },
];

const recentMeetings = [
  {
    title: "Product Strategy Review Q1 2024",
    desc: "Comprehensive review of Q1 roadmap and AI product goals.",
    date: "2024-01-15",
    duration: "75 min",
    people: "8 people",
    status: "completed",
    actions: 3,
  },
  {
    title: "Weekly Engineering Standup",
    desc: "Sprint 23 updates and deployment review.",
    date: "2024-01-14",
    duration: "30 min",
    people: "12 people",
    status: "completed",
    actions: 5,
  },
  {
    title: "Marketing Campaign Planning",
    desc: "Brainstorm for upcoming social and email campaigns.",
    date: "2024-01-12",
    duration: "120 min",
    people: "10 people",
    status: "processing",
    actions: 12,
  },
];

const analyticsData = [
  { metric: "AI Summary Generated", value: 124, change: "+15%" },
  { metric: "Meetings Analyzed", value: 98, change: "+12%" },
  { metric: "Insights Found", value: 42, change: "+9%" },
];

const upcomingMeetings = [
  { title: "Design Review", time: "2:00 PM", duration: "60 min", people: "6 people", type: "Design" },
  { title: "Client Check-in - TechCorp", time: "4:30 PM", duration: "45 min", people: "4 people", type: "Client" },
  { title: "Sprint Planning", time: "Tomorrow 9:00 AM", duration: "120 min", people: "12 people", type: "Planning" },
];

const activities = [
  { color: "bg-green-500", text: "Meeting transcribed - Strategy Review" },
  { color: "bg-blue-500", text: "Summary generated - Standup" },
  { color: "bg-yellow-500", text: "Action items assigned - Campaign" },
];

function UserDashboard() {
  const [activeTab, setActiveTab] = useState("recent");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMeetings = recentMeetings.filter((m) =>
    m.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-8 mt-20 bg-[#f4f6fb] min-h-screen text-gray-800">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-500 mt-1">
          Welcome back! Here's your meeting overview and AI insights.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center p-6 bg-white rounded-2xl 
            shadow-[0_0_20px_rgba(99,102,241,0.2)] 
            transition-transform duration-300 hover:scale-[1.03]"
          >
            <div>
              <h4 className="text-gray-500 text-sm">{item.title}</h4>
              <h2 className="text-3xl font-bold text-gray-800">{item.value}</h2>
              <p className="text-green-600 text-sm font-semibold">{item.change}</p>
            </div>
            <div className="text-white text-2xl p-3 rounded-xl 
              bg-gradient-to-br from-indigo-500 to-purple-600 shadow-md">
              {item.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-[0_0_25px_rgba(99,102,241,0.15)]">
  {/* Tabs */}
  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
    
    {/* Scrollable / Evenly Distributed Tabs */}
    <div
      className="flex overflow-x-auto no-scrollbar gap-3 bg-[#f4f6fb] shadow-inner 
      rounded-full px-3 py-2 w-full md:max-w-xl lg:justify-between"
    >
      {[
        { key: "recent", label: "Recent", icon: <FaHistory /> },
        { key: "analytics", label: "Analytics", icon: <FaChartBar /> },
        { key: "search", label: "Search", icon: <FaSearch /> },
      ].map((tab) => (
        <button
          key={tab.key}
          onClick={() => setActiveTab(tab.key)}
          className={`flex items-center justify-center gap-2 flex-shrink-0 
          px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 
          whitespace-nowrap flex-1 lg:flex-none
          ${
            activeTab === tab.key
              ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md scale-[1.05]"
              : "text-gray-600 hover:text-gray-800"
          }`}
        >
          {tab.icon}
          {tab.label}
        </button>
      ))}
    </div>

    {/* New Meeting Button */}
    <button
      className="flex items-center justify-center gap-2 bg-white px-5 py-2 rounded-full 
      shadow-[0_0_10px_rgba(99,102,241,0.2)]
      font-semibold text-gray-700 hover:shadow-inner transition w-full md:w-auto"
    >
      <FaPlus className="text-gray-500" /> New Meeting
    </button>
  </div>

  {/* Tab Content */}
  {activeTab === "recent" && (
    <>
      <h3 className="text-lg font-semibold mb-4">Recent Meetings</h3>
      <div className="flex flex-col gap-5">
        {recentMeetings.map((m, i) => (
          <div
            key={i}
            className="p-5 rounded-2xl bg-[#f9faff]
            shadow-[0_0_18px_rgba(99,102,241,0.15)]
            hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="flex justify-between items-center flex-wrap gap-2">
              <h4 className="text-gray-800 font-semibold">{m.title}</h4>
              <span
                className={`text-xs px-3 py-1 rounded-full font-medium ${
                  m.status === "completed"
                    ? "bg-gradient-to-r from-green-400 to-green-500 text-white"
                    : "bg-gradient-to-r from-yellow-400 to-yellow-500 text-white"
                }`}
              >
                {m.status}
              </span>
            </div>
            <p className="text-gray-500 text-sm mt-1 mb-2">{m.desc}</p>
            <div className="text-gray-400 text-sm flex flex-wrap gap-3 items-center">
              <span>📅 {m.date}</span>
              <span>⏱ {m.duration}</span>
              <span>👥 {m.people}</span>
            </div>
            <p className="text-blue-600 text-sm font-medium mt-2">
              {m.actions} action items
            </p>
          </div>
        ))}
      </div>
    </>
  )}

  {activeTab === "analytics" && (
    <>
      <h3 className="text-lg font-semibold mb-4">Analytics Overview</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {analyticsData.map((a, i) => (
          <div
            key={i}
            className="p-6 text-center rounded-2xl bg-[#f9faff]
            shadow-[0_0_18px_rgba(99,102,241,0.15)]
            hover:scale-[1.03] transition-transform duration-300"
          >
            <h4 className="font-semibold text-gray-700">{a.metric}</h4>
            <p className="text-2xl font-bold mt-2 text-gray-800">{a.value}</p>
            <span className="text-green-600 text-sm">{a.change}</span>
          </div>
        ))}
      </div>
    </>
  )}

  {activeTab === "search" && (
    <>
      <h3 className="text-lg font-semibold mb-4">Search Meetings</h3>
      <input
        type="text"
        placeholder="Search meetings..."
        className="w-full p-3 rounded-xl shadow-inner mb-5 outline-none text-sm"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="flex flex-col gap-5">
        {filteredMeetings.length > 0 ? (
          filteredMeetings.map((m, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-[#f9faff]
              shadow-[0_0_18px_rgba(99,102,241,0.15)]
              hover:scale-[1.02] transition-transform duration-300"
            >
              <h4 className="text-gray-800 font-semibold">{m.title}</h4>
              <p className="text-gray-500 text-sm mt-1">{m.desc}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No results found.</p>
        )}
      </div>
    </>
  )}
</div>


        {/* Right Section */}
        <div className="flex flex-col gap-6">
          {/* Upcoming Meetings */}
          <div className="bg-white rounded-2xl shadow-[0_0_25px_rgba(99,102,241,0.15)] p-6 hover:scale-[1.02] transition-transform duration-300">
            <h3 className="text-lg font-semibold mb-4">Upcoming Meetings</h3>
            <div className="flex flex-col gap-4">
              {upcomingMeetings.map((m, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-[#f9faff] shadow-[0_0_15px_rgba(99,102,241,0.15)]"
                >
                  <h4 className="text-gray-800 font-medium">{m.title}</h4>
                  <p className="text-gray-500 text-sm">
                    {m.time} • {m.duration}
                  </p>
                  <div className="flex justify-between text-sm mt-2">
                    <span className="text-blue-600 font-medium">{m.people}</span>
                    <span className="text-gray-400">{m.type}</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-2 bg-[#f4f6fb] rounded-full shadow-inner text-gray-700 font-semibold hover:shadow-md">
              📅 View Full Calendar
            </button>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-2xl shadow-[0_0_25px_rgba(99,102,241,0.15)] p-6">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="flex flex-col gap-3">
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2.5 rounded-xl shadow hover:scale-[1.02] transition">
                <FaMicrophone className="inline-block mr-2" />
                Start Recording
              </button>
              <button className="py-2.5 rounded-xl bg-[#f4f6fb] shadow-inner font-medium hover:shadow-md transition">
                <FaUpload className="inline-block mr-2" />
                Upload Audio
              </button>
              <button className="py-2.5 rounded-xl bg-[#f4f6fb] shadow-inner font-medium hover:shadow-md transition">
                <FaCog className="inline-block mr-2" />
                Settings
              </button>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-2xl shadow-[0_0_25px_rgba(99,102,241,0.15)] p-6">
            <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
            <ul className="space-y-2">
              {activities.map((a, i) => (
                <li key={i} className="flex items-center text-sm text-gray-600">
                  <span className={`w-2.5 h-2.5 rounded-full mr-3 ${a.color}`}></span>
                  {a.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
