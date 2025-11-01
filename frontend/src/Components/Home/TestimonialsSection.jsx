import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "MeetMind AI has revolutionized how our team handles meetings. We save 3 hours per week on note-taking and follow-ups.",
    avatar: "/sarah-chen.jpg",
    name: "Sarah Chen",
    title: "Product Manager at TechCorp",
  },
  {
    quote:
      "The AI summaries are incredibly accurate. It captures nuances and action items that I would have missed.",
    avatar: "/marcus-johnson.jpg",
    name: "Marcus Johnson",
    title: "CEO at StartupXYZ",
  },
  {
    quote:
      "Multi-language support is a game-changer for our global team. Everyone can participate naturally.",
    avatar: "/elena-rodriguez.jpg",
    name: "Elena Rodriguez",
    title: "Operations Director",
  },
];

function TestimonialsSection() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true, offset: 100 });
  }, []);

  return (
    <section className="bg-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Header */}
        <h2
          data-aos="fade-up"
          className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4"
        >
          Trusted by Industry Leaders
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="150"
          className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto"
        >
          See how teams worldwide are transforming their meeting experience
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              data-aos="zoom-in-up"
              data-aos-delay={index * 150}
              className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Avatar */}
              <div className="relative w-20 h-20 rounded-full overflow-hidden mb-6 border-4 border-white shadow-md">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Quote icon */}
              <Quote className="w-8 h-8 text-blue-600 mb-4 opacity-70" />

              {/* Quote Text */}
              <p className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                “{testimonial.quote}”
              </p>

              {/* Person Info */}
              <p className="text-lg font-semibold text-gray-900">
                {testimonial.name}
              </p>
              <p className="text-base text-gray-500 mt-1">
                {testimonial.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
