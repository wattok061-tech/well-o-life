import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const stories = [
  {
    id: 1,
    name: "Anna Gunn, 7",
    diagnosis: "Diagnosed with Stage 2 Brain Cancer",
    raised: "$8,356.20",
    percent: "28%",
    progress: 28,
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Marcus Chen, 10",
    diagnosis: "Diagnosed with Leukemia",
    raised: "$12,450.00",
    percent: "45%",
    progress: 45,
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "David Miller, 14",
    diagnosis: "Diagnosed with Osteosarcoma",
    raised: "$21,000.00",
    percent: "70%",
    progress: 70,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    name: "Emily Davis, 8",
    diagnosis: "Diagnosed with Cystic Fibrosis",
    raised: "$15,890.00",
    percent: "52%",
    progress: 52,
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    name: "Leo Thompson, 6",
    diagnosis: "Diagnosed with Neuroblastoma",
    raised: "$9,200.00",
    percent: "31%",
    progress: 31,
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80"
  }
];

export function InspiringStories() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 md:py-32 bg-[#FDF8F0] text-[#1A1A1A] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-[1400px]">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl mb-10 leading-[1.1]"
          >
            Inspiring Journeys<br />Of Strength And Hope
          </motion.h2>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center space-x-3 text-xs font-bold uppercase tracking-[0.2em] hover:text-gray-600 transition-colors group"
          >
            <span>See All Stories</span>
            <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-gray-400 transition-colors">
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </motion.button>
        </div>

        {/* Expanding Accordion Gallery */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 h-[800px] md:h-[650px] w-full max-w-[1200px] mx-auto">
          {stories.map((story, index) => {
            const isActive = activeIndex === index;
            
            return (
              <div
                key={story.id}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                className={`relative rounded-[32px] overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
                  ${isActive 
                    ? 'flex-[6] md:flex-[10] grayscale-0 shadow-2xl' 
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
                  className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-700 
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
                  className={`absolute bottom-0 left-0 w-full md:w-[480px] p-6 md:p-10 flex flex-col justify-end transition-all duration-700 ease-out
                    ${isActive ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-12 pointer-events-none'}
                  `}
                >
                  <h3 className="font-bold text-3xl md:text-4xl text-white mb-2 drop-shadow-lg">{story.name}</h3>
                  <p className="text-white/90 text-sm md:text-base mb-6 drop-shadow-md">{story.diagnosis}</p>

                  {/* Glassmorphism Info Card */}
                  <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-xl">
                    <div className="w-full bg-black/20 h-2 rounded-full overflow-hidden mb-3">
                      <div 
                        className="bg-[#22C55E] h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ width: isActive ? `${story.progress}%` : '0%' }}
                      ></div>
                    </div>
                    
                    <div className="flex justify-between items-center text-white mb-6">
                      <span className="font-bold tracking-wide">{story.raised}</span>
                      <span className="font-bold">{story.percent}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <button className="bg-[#22C55E] text-white px-6 py-3.5 rounded-full font-bold text-xs tracking-widest uppercase hover:bg-[#16a34a] transition-colors flex-1 shadow-lg shadow-green-500/20">
                        Donate Now
                      </button>
                      <button className="w-12 h-12 shrink-0 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
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
