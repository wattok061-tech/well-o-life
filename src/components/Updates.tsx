import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { updates } from "../data/updates";

const positionStyles = [
  { aspect: "aspect-[4/3] sm:aspect-[3/4]", width: "w-full sm:flex-1 min-w-0", opacity: "opacity-100 block" },
  { aspect: "aspect-square", width: "sm:flex-1 min-w-0", opacity: "opacity-100 hidden sm:flex" },
  { aspect: "aspect-square", width: "md:flex-1 min-w-0", opacity: "opacity-100 hidden md:flex" },
  { aspect: "aspect-[16/9]", width: "lg:flex-[1.5] min-w-0", opacity: "opacity-100 hidden lg:flex" },
];

export function Updates({ showAll = false }: { showAll?: boolean }) {
  if (showAll) {
    return (
      <section className="py-20 md:py-32 bg-[#F4EFE6] text-[#0B2545]">
        <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-16 text-center text-gray-900">
            All Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {updates.map((update) => (
              <Link to={`/update/${update.id}`} key={update.id} className="flex flex-col group cursor-pointer">
                <div className="w-full aspect-[16/9] mb-5 overflow-hidden relative rounded-[40px]">
                  <img 
                    src={update.image} 
                    alt={update.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-sm text-gray-400 mb-2 font-medium">{update.date}</span>
                <h3 className="text-lg md:text-xl font-bold leading-snug text-gray-800 group-hover:text-[#C69C38] transition-colors">
                  {update.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const [startIndex, setStartIndex] = useState(0);

  const next = () => {
    setStartIndex((prev) => (prev + 1) % updates.length);
  };

  const prev = () => {
    setStartIndex((prev) => (prev - 1 + updates.length) % updates.length);
  };

  // Get 4 visible items, wrapping around if necessary
  const visibleItems = [];
  for (let i = 0; i < 4; i++) {
    const index = (startIndex + i) % updates.length;
    visibleItems.push({ ...updates[index], posIndex: i });
  }

  return (
    <section className="py-24 md:py-32 bg-[#F3EFE7] text-[#0B2545] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-black tracking-tighter mb-8 leading-[1.1]"
          >
            Updates From Well Of Life Int. Ministry
          </motion.h2>
          
          <Link
            to="/news-events"
            className="flex items-center space-x-3 group"
          >
            <span className="text-xs font-bold tracking-widest uppercase text-[#0B2545]">See All</span>
            <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-[#0B2545] transition-colors">
              <ArrowUpRight className="w-4 h-4 text-[#0B2545]" />
            </div>
          </Link>
        </div>

        {/* Carousel */}
        <div className="relative w-full overflow-hidden pb-8">
          <AnimatePresence mode="wait">
            <motion.div 
              key={startIndex}
              initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              exit={{ opacity: 0, filter: "blur(4px)", y: -10 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="flex gap-4 md:gap-6 items-start w-full"
            >
              {visibleItems.map((update, idx) => {
                const style = positionStyles[idx];
                return (
                  <Link 
                    to={`/update/${update.id}`}
                    key={`${update.id}-${update.posIndex}`}
                    className={`${style.width} ${style.opacity} flex flex-col group cursor-pointer transition-all duration-500`}
                  >
                    {/* Image Container */}
                    <div className={`w-full ${style.aspect} mb-6 overflow-hidden relative rounded-[2.5rem] transition-all duration-300`}>
                      <img 
                        src={update.image} 
                        alt={update.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    
                    {/* Text Content */}
                    <span className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-widest">{update.date}</span>
                    <h3 className="text-lg font-bold leading-snug text-[#0B2545] group-hover:text-[#C69C38] transition-colors">
                      {update.title}
                    </h3>
                  </Link>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-end items-center space-x-4 mt-8">
          <button 
            onClick={prev}
            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-[#0B2545] hover:border-[#0B2545] transition-colors focus:outline-none"
            aria-label="Previous updates"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={next}
            className="w-12 h-12 rounded-full bg-[#C69C38] text-white flex items-center justify-center hover:bg-[#1E3A8A] transition-colors shadow-lg focus:outline-none"
            aria-label="Next updates"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
