import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { stories } from "../data/stories";

export function InspiringStories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  return (
    <section className="py-24 md:py-32 bg-[#F3EFE7] text-[#111111] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-black tracking-tighter max-w-3xl mb-8 leading-[1.1]"
          >
            Inspiring Journeys<br />Of Strength And Hope
          </motion.h2>

          <motion.button
            onClick={() => navigate('/news-events')}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center space-x-3 text-xs font-bold uppercase tracking-widest hover:text-gray-600 transition-colors group"
          >
            <span>See All Stories</span>
            <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-[#111111] transition-colors">
              <ArrowUpRight className="w-4 h-4 text-[#111111]" />
            </div>
          </motion.button>
        </div>

        {/* Expanding Accordion Gallery */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 h-[500px] md:h-[450px] w-full max-w-5xl mx-auto">
          {stories.map((story, index) => {
            const isActive = activeIndex === index;
            
            return (
              <div
                key={story.id}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => {
                  if (isActive) {
                    navigate(`/patient/${story.id}`);
                  } else {
                    setActiveIndex(index);
                  }
                }}
                className={`relative rounded-[2.5rem] overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
                  ${isActive 
                    ? 'flex-[6] md:flex-[10] shadow-2xl' 
                    : 'flex-[1] md:min-w-[80px] grayscale opacity-60 hover:opacity-100 hover:grayscale-[50%]'
                  }
                `}
              >
                {/* Background Image */}
                <img 
                  src={story.image} 
                  alt={story.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Dark Gradient Overlay for Active Card */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent transition-opacity duration-700 
                    ${isActive ? 'opacity-100' : 'opacity-0'}
                  `} 
                />

                {/* Inactive State: Vertical Text (Desktop) */}
                <div 
                  className={`hidden md:flex absolute inset-0 items-end justify-center pb-10 transition-opacity duration-300 
                    ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100 delay-300'}
                  `}
                >
                  <span className="rotate-180 [writing-mode:vertical-rl] font-bold text-white text-xl tracking-wider whitespace-nowrap drop-shadow-md">
                    {story.name.split(',')[0]}
                  </span>
                </div>

                {/* Inactive State: Horizontal Text (Mobile) */}
                <div 
                  className={`md:hidden absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300 
                    ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100 delay-300'}
                  `}
                >
                  <span className="font-bold text-white text-lg tracking-wider whitespace-nowrap drop-shadow-md">
                    {story.name.split(',')[0]}
                  </span>
                </div>

                {/* Active State: Content */}
                <div 
                  className={`absolute bottom-0 left-0 w-full md:w-[400px] p-6 md:p-8 flex flex-col justify-end transition-all duration-700 ease-out
                    ${isActive ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-12 pointer-events-none'}
                  `}
                >
                  <h3 className="font-black text-3xl md:text-4xl text-white mb-2 tracking-tighter">{story.name}</h3>
                  <p className="text-white/90 text-sm md:text-base mb-6">{story.diagnosis}</p>

                  {/* Info Card */}
                  <div className="bg-white/10 backdrop-blur-md rounded-[2rem] p-6 border border-white/20 shadow-xl">
                    <div className="w-full bg-black/20 h-2 rounded-full overflow-hidden mb-3">
                      <div 
                        className="bg-[#10B981] h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ width: isActive ? `${story.progress}%` : '0%' }}
                      ></div>
                    </div>
                    
                    <div className="flex justify-between items-center text-white mb-6">
                      <span className="font-bold tracking-wide">{story.raised}</span>
                      <span className="font-bold">{story.percent}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/patient/${story.id}`);
                        }}
                        className={`px-6 py-3.5 rounded-full font-bold text-xs tracking-widest uppercase transition-colors flex-1 text-center inline-block ${
                          story.progress >= 100 
                            ? 'bg-white text-[#111111] hover:bg-gray-100' 
                            : 'bg-[#10B981] text-white hover:bg-[#0EA5E9]'
                        }`}
                      >
                        {story.progress >= 100 ? 'Fully Funded' : `Support ${story.name.split(',')[0]}`}
                      </button>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/patient/${story.id}`);
                        }}
                        className="w-12 h-12 shrink-0 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
