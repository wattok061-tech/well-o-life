import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const metrics = [
  {
    id: 0,
    value: "31,546",
    label: "People Received Help",
    bgColor: "#ffffff",
    curveColor: "#FDF3E1",
  },
  {
    id: 1,
    value: "215",
    label: "Events Organized",
    bgColor: "#FDF3E1",
    curveColor: "#ffffff",
  },
  {
    id: 2,
    value: "$36,546,840",
    label: "Raised in Donations",
    bgColor: "#ffffff",
    curveColor: "#FDF3E1",
  },
];

export function Impact() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % metrics.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const currentMetric = metrics[currentIndex];

  return (
    <motion.section
      animate={{ backgroundColor: currentMetric.bgColor }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="pt-24 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10 pb-32 md:pb-48">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <div className="inline-flex items-center bg-black/5 px-4 py-2 rounded-lg mb-8">
            <span className="text-[12px] font-bold text-gray-900 tracking-wider uppercase">
              Our Impact
            </span>
          </div>

          <h2 className="text-[36px] md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight max-w-3xl leading-[1.1]">
            Together, We're Making <br className="hidden md:block" /> A
            Difference
          </h2>
        </div>

        <div className="relative h-[180px] md:h-[220px] lg:h-[260px] flex items-center justify-center w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentMetric.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute flex flex-col items-center w-full"
            >
              <span className="text-[64px] md:text-[110px] lg:text-[150px] font-extrabold text-[#22C55E] mb-2 md:mb-4 tracking-tighter leading-none whitespace-nowrap">
                {currentMetric.value}
              </span>
              <span className="text-[18px] md:text-2xl font-bold text-gray-900">
                {currentMetric.label}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Curved shape at the bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none translate-y-[1px]">
        <svg
          viewBox="0 0 1440 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block"
        >
          <motion.path
            animate={{ fill: currentMetric.curveColor }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            d="M0 150C0 150 340 0 720 0C1100 0 1440 150 1440 150H0Z"
          />
        </svg>
      </div>
    </motion.section>
  );
}
