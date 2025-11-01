import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function StatsSection() {
  const stats = [
    { value: 500000, suffix: "+", label: "Hours Transcribed" },
    { value: 100000, suffix: "+", label: "Happy Users" },
    { value: 50, suffix: "+", label: "Countries" },
    { value: 99.9, suffix: "%", label: "Uptime" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          stats.forEach((stat, i) => animateCount(i, stat.value));
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const animateCount = (index, targetValue) => {
    let start = 0;
    const duration = 1500;
    const stepTime = 20;
    const increment = targetValue / (duration / stepTime);

    const counter = setInterval(() => {
      start += increment;
      if (start >= targetValue) {
        start = targetValue;
        clearInterval(counter);
      }
      setCounts((prev) => {
        const updated = [...prev];
        updated[index] = start;
        return updated;
      });
    }, stepTime);
  };

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-br from-[#fff5f1] via-[#fff9f6] to-[#fffdfc] py-20 px-6"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {stats.map((stat, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 200}
            className="relative bg-[#e8ecf2] rounded-2xl py-12 px-6 flex flex-col items-center justify-center
              transition-all duration-300 transform hover:-translate-y-2
              shadow-[0_10px_25px_rgba(0,0,0,0.15),inset_0_2px_4px_rgba(255,255,255,0.6)]
              before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br 
              before:from-[rgba(255,255,255,0.8)] before:to-[rgba(255,255,255,0.3)] 
              before:shadow-[inset_0_4px_6px_rgba(255,255,255,0.4)] before:-z-10
              after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[6px]
              after:rounded-b-2xl after:bg-gradient-to-r from-pink-400 to-orange-400"
          >
            <h3 className="text-4xl font-extrabold text-gray-900 mb-2 tracking-wide drop-shadow-[0_2px_3px_rgba(0,0,0,0.15)]">
              {counts[index] >= stat.value
                ? stat.value.toLocaleString() + stat.suffix
                : Math.floor(counts[index]).toLocaleString() + stat.suffix}
            </h3>
            <p className="text-gray-600 text-lg">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsSection;

