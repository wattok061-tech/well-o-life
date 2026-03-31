import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const updates = [
  {
    id: "01",
    date: "June 12, 2025",
    category: "Medical Care",
    title: "Adam Williams Celebrates Successful Remission",
    image: "https://picsum.photos/seed/medical/1600/1200",
  },
  {
    id: "02",
    date: "June 5, 2025",
    category: "Community",
    title: "Our Team Expands to 50 Members Already",
    image: "https://picsum.photos/seed/teamwork/1600/1200",
  },
  {
    id: "03",
    date: "June 2, 2025",
    category: "Mental Health",
    title: "Another Successful Therapeutic Session",
    image: "https://picsum.photos/seed/therapy/1600/1200",
  },
  {
    id: "04",
    date: "May 29, 2025",
    category: "Volunteers",
    title: "A Volunteer Who Inspires All Our Crew",
    image: "https://picsum.photos/seed/volunteer/1600/1200",
  },
  {
    id: "05",
    date: "May 15, 2025",
    category: "Infrastructure",
    title: "New Community Center Breaks Ground in Kampala",
    image: "https://picsum.photos/seed/building/1600/1200",
  }
];

export function Updates() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 md:py-32 bg-[#0A0A0A] text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-[1400px]">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 md:mb-24 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-[#22C55E] font-bold tracking-widest uppercase text-sm mb-6 block">
              Latest News
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              Updates From Well of Life Ministries
            </h2>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group flex items-center space-x-3 border border-white/20 rounded-full px-8 py-4 hover:bg-white hover:text-black transition-all duration-300 w-max"
          >
            <span className="text-sm font-bold uppercase tracking-wider">See All Updates</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>

        {/* Interactive Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left: Interactive List */}
          <div className="lg:col-span-5 flex flex-col border-t border-white/10">
            {updates.map((update, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={update.id}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onClick={() => setActiveIndex(idx)}
                  className={`group relative py-8 border-b border-white/10 cursor-pointer transition-all duration-500 ${
                    isActive ? 'pl-8' : 'hover:pl-4'
                  }`}
                >
                  {/* Active Indicator Line */}
                  <div 
                    className={`absolute left-0 top-0 bottom-0 w-1 bg-[#22C55E] transition-all duration-500 origin-top ${
                      isActive ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
                    }`}
                  />

                  <div className="flex items-center justify-between">
                    <div className={`transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-40 group-hover:opacity-70'}`}>
                      <div className="flex items-center space-x-4 mb-3">
                        <span className="text-xs font-mono tracking-widest text-[#22C55E]">{update.id}</span>
                        <span className="text-xs font-bold uppercase tracking-wider">{update.category}</span>
                        <span className="text-xs text-white/50 hidden sm:inline-block">{update.date}</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold leading-snug max-w-md">
                        {update.title}
                      </h3>
                    </div>
                    
                    <div className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ml-4 ${
                      isActive ? 'bg-[#22C55E] text-white rotate-0' : 'bg-white/5 text-white/40 -rotate-45 group-hover:bg-white/10'
                    }`}>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Massive Featured Image */}
          <div className="lg:col-span-7 relative h-[400px] md:h-[600px] lg:h-[750px] rounded-[40px] overflow-hidden order-first lg:order-last mb-8 lg:mb-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 w-full h-full"
              >
                <div className="absolute inset-0 bg-black/10 z-10" /> {/* Subtle overlay for contrast */}
                <img 
                  src={updates[activeIndex].image} 
                  alt={updates[activeIndex].title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
