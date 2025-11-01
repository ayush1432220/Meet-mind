import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const statsData = [
  { value: 10000000, label: "Minutes Transcribed", suffix: "+" },
  { value: 50000, label: "Active Users", suffix: "+" },
  { value: 99.2, label: "Accuracy Rate", suffix: "%" },
  { value: 50, label: "Languages Supported", suffix: "+" },
];

function StatsSection() {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    });

    const handleScroll = () => {
      const elements = document.querySelectorAll("[data-aos='fade-up']");
      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100 && counts[index] === 0) {
          animateCount(index, statsData[index].value, 2000);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [counts]);

  const animateCount = (index, endValue, duration) => {
    let start = 0;
    const startTime = performance.now();

    const updateCount = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(progress * endValue);
      setCounts((prev) => {
        const newCounts = [...prev];
        newCounts[index] = value;
        return newCounts;
      });
      if (progress < 1) requestAnimationFrame(updateCount);
      else
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = endValue;
          return newCounts;
        });
    };

    requestAnimationFrame(updateCount);
  };

  return (
    <section className="relative bg-[#F1F4F9] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {statsData.map((stat, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className="relative group bg-white rounded-2xl p-10 text-center transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative z-10">
                <p className="text-4xl font-extrabold text-gray-900 tracking-tight">
                  {counts[index].toLocaleString()}
                  {stat.suffix}
                </p>
                <p className="mt-2 text-base font-medium text-gray-600">
                  {stat.label}
                </p>
              </div>

              <div className="absolute inset-0 rounded-2xl shadow-[0_0_25px_rgba(79,70,229,0.25)] group-hover:shadow-[0_0_45px_rgba(79,70,229,0.5)] transition-shadow duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
