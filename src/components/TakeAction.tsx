import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Heart, Users, Globe } from "lucide-react";

export function TakeAction() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section className="py-24 md:py-32 bg-[#FDF8F0] text-[#1A1A1A]">
      <div className="container mx-auto px-4 md:px-6 max-w-[1400px]">
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6">
          
          {/* Main CTA Box (Spans 2 columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="lg:col-span-2 bg-[#0A0A0A] rounded-[40px] p-10 lg:p-14 min-h-[500px] lg:min-h-[600px] relative overflow-hidden flex flex-col justify-between group"
          >
            {/* Smooth Mouse Tracking Glow */}
            <div 
              className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-0"
              style={{
                opacity: isHovered ? 1 : 0,
                background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(34,197,94,0.15), transparent 40%)`
              }}
            />
            
            <div className="relative z-10">
              <div className="inline-flex items-center space-x-2 bg-white/10 text-white/90 px-5 py-2.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-10 backdrop-blur-md border border-white/10">
                <Globe className="w-4 h-4" />
                <span>Take Action</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-white leading-[1.05] mb-6 tracking-tight">
                Join Us In Making<br />A Difference.
              </h2>
              
              <p className="text-gray-400 text-lg md:text-xl max-w-md leading-relaxed">
                Your time, resources, and voice can change lives. Choose how you want to make an impact and help us build a better future.
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 mt-12">
              <button className="w-full sm:w-auto bg-[#22C55E] text-white px-8 py-4 rounded-full font-bold tracking-wide hover:bg-[#1ea34d] transition-colors shadow-lg shadow-green-500/20">
                VOLUNTEER NOW
              </button>
              <button className="w-full sm:w-auto group/btn flex items-center justify-center space-x-3 px-8 py-4 rounded-full font-bold text-white border border-white/20 hover:bg-white/10 transition-colors">
                <span className="tracking-wide uppercase text-sm">Learn More</span>
                <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Tall Image Box (Spans 1 column) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-1 rounded-[40px] min-h-[400px] lg:min-h-[600px] overflow-hidden relative group cursor-pointer flex flex-col justify-end"
          >
            <img 
              src="https://picsum.photos/seed/volunteer2/800/1200" 
              alt="Volunteer" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
            <div className="relative z-20 p-8 flex items-end justify-between w-full">
              <h3 className="text-white font-bold text-3xl leading-tight">Become a<br/>Volunteer</h3>
              <div className="w-14 h-14 shrink-0 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#22C55E] group-hover:scale-110 transition-all duration-300">
                <ArrowUpRight className="w-6 h-6 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </motion.div>

          {/* Stacked Small Boxes (Spans 1 column) */}
          <div className="lg:col-span-1 flex flex-col gap-4 lg:gap-6">
            
            {/* Donate Box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex-1 bg-[#22C55E] rounded-[40px] p-8 min-h-[250px] relative overflow-hidden group cursor-pointer flex flex-col justify-between shadow-xl shadow-green-500/10"
            >
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-white mb-4 backdrop-blur-sm">
                <Heart className="w-7 h-7" />
              </div>
              <div className="relative z-10">
                <h3 className="text-white font-bold text-3xl mb-3">Make a<br/>Donation</h3>
                <div className="flex items-center text-white/90 text-sm font-bold uppercase tracking-widest group-hover:text-white transition-colors">
                  <span>Give Now</span>
                  <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
              {/* Decorative animated blur */}
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-white/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
            </motion.div>

            {/* Partner Box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex-1 bg-white rounded-[40px] p-8 min-h-[250px] relative overflow-hidden group cursor-pointer flex flex-col justify-between border border-gray-100 shadow-xl shadow-black/5"
            >
              <div className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center text-gray-900 mb-4 border border-gray-100 group-hover:bg-gray-100 transition-colors">
                <Users className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-gray-900 font-bold text-3xl mb-3">Partner<br/>With Us</h3>
                <div className="flex items-center text-[#22C55E] text-sm font-bold uppercase tracking-widest">
                  <span>Collaborate</span>
                  <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
