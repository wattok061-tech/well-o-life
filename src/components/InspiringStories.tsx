import { useState, useRef } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useStories } from "../hooks/useStories";

export function InspiringStories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);
  const { stories, loading, error } = useStories();

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const itemWidth = scrollRef.current.offsetWidth;
      // Approximate index based on scroll
      setActiveIndex(Math.round(scrollLeft / (itemWidth * 0.8)));
    }
  };

  if (loading) return <section className="py-24 bg-[#F3EFE7] text-center">Loading stories...</section>;
  if (error) return <section className="py-24 bg-[#F3EFE7] text-center text-red-600">{error}</section>;

  return (
    <section className="py-24 md:py-32 bg-[#F3EFE7] text-[#0B2545] overflow-hidden">
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
            <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-[#0B2545] transition-colors">
              <ArrowUpRight className="w-4 h-4 text-[#0B2545]" />
            </div>
          </motion.button>
        </div>

        {/* Expanding Accordion Gallery */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex flex-row overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-3 md:gap-4 h-[400px] md:h-[450px] w-full max-w-5xl mx-auto pb-4 md:pb-0 -mx-4 px-4 md:mx-auto md:px-0 scrollbar-hide"
        >
          {stories.map((story, index) => {
            const isActive = activeIndex === index;
            
            return (
              <motion.div
                key={story.id}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => {
                  if (isActive) {
                    navigate(`/patient/${story.id}`);
                  } else {
                    setActiveIndex(index);
                  }
                }}
                animate={{
                  flex: isActive ? 10 : 1,
                  width: isActive ? '85vw' : '15vw',
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 30,
                }}
                className={`shrink-0 snap-center relative rounded-[2.5rem] overflow-hidden cursor-pointer
                  ${isActive 
                    ? 'shadow-2xl' 
                    : 'md:min-w-[80px] grayscale opacity-60 hover:opacity-100 hover:grayscale-[50%]'
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

                {/* Inactive State: Vertical Text (Desktop & Mobile) */}
                <div 
                  className={`absolute inset-0 flex items-end justify-center pb-10 transition-opacity duration-300 
                    ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100 delay-300'}
                  `}
                >
                  <span className="rotate-180 [writing-mode:vertical-rl] font-bold text-white text-lg md:text-xl tracking-wider whitespace-nowrap drop-shadow-md">
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
                        className="bg-[#C69C38] h-full rounded-full transition-all duration-1000 ease-out"
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
                            ? 'bg-white text-[#0B2545] hover:bg-gray-100' 
                            : 'bg-[#C69C38] text-white hover:bg-[#1E3A8A]'
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

              </motion.div>
            );
          })}
        </div>
        
        {/* Navigation Dots for Mobile */}
        <div className="flex justify-center gap-2 mt-8 md:hidden">
          {stories.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? "w-8 bg-[#C69C38]" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
