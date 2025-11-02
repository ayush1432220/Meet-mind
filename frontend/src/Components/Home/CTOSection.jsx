import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Sparkles, CalendarDays, X } from "lucide-react";
import axios from "axios";

function CTOSection() {
  const [showForm, setShowForm] = useState(false);
  const [meeting, setMeeting] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`✅ Meeting Scheduled: ${meeting}`);
    setMeeting("");
    setShowForm(false);
  };

  return (
    <div className="relative bg-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div
          data-aos="fade-up"
          className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 md:p-16 text-center"
        >
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6"
          >
            Ready to Transform Your Meetings?
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto"
          >
            Join thousands of teams already using <b>Meetmind AI</b> to make
            their meetings more productive and efficient.
          </p>

          <div
            data-aos="zoom-in-up"
            data-aos-delay="300"
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            {/* --- Start Free Trial --- */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full shadow-md flex items-center justify-center text-lg transition-all duration-300 hover:scale-105">
              <Sparkles className="w-6 h-6 mr-2" />
              Start Free Trial
            </button>

            {/* --- Schedule Meeting Button --- */}
            <button
              onClick={() => setShowForm(true)}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-full shadow-md flex items-center justify-center text-lg transition-all duration-300 hover:scale-105"
            >
              <CalendarDays className="w-6 h-6 mr-2 text-blue-600" />
              Schedule Meeting
            </button>
          </div>
        </div>
      </div>

      {/* ================= POPUP FORM ================= */}
      {showForm && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div
            data-aos="zoom-in"
            className="relative bg-[#E0E5ED] rounded-2xl p-8 w-96 
            shadow-[8px_8px_16px_#b8bcc2,-8px_-8px_16px_#ffffff]"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
              📅 Schedule Your Meeting
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <input
                type="text"
                value={meeting}
                onChange={(e) => setMeeting(e.target.value)}
                placeholder="Enter meeting title..."
                className="p-3 rounded-xl text-gray-700 font-medium bg-[#E0E5ED]
                  shadow-[inset_4px_4px_6px_#b8bcc2,inset_-4px_-4px_6px_#ffffff]
                  focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-300"
                required
              />

              <button
                type="submit"
                onClick={axios.post(`${process.env.REQ_API_URL}/meetings/process`,
                  { meetingId: meeting }
                )}
                className="bg-gradient-to-r from-pink-500 to-pink-400 text-white py-2 
                  rounded-xl font-semibold shadow-[4px_4px_8px_#b8bcc2,-4px_-4px_8px_#ffffff]
                  hover:shadow-[inset_3px_3px_6px_#b8bcc2,inset_-3px_-3px_6px_#ffffff]
                  transition-all duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default CTOSection;