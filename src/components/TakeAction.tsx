import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Heart, Users, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function TakeAction() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section id="volunteer" className="py-24 md:py-32 bg-[#F3EFE7] text-[#111111]">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Main CTA Box (Spans 2 columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-[#111111] rounded-[2.5rem] p-8 sm:p-12 min-h-[500px] relative overflow-hidden flex flex-col justify-between"
          >
            <div className="relative z-10">
              <div className="inline-flex items-center space-x-2 bg-white/10 text-white px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-10 border border-white/10">
                <Globe className="w-4 h-4" />
                <span>Take Action</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-black text-white leading-[1.05] mb-8 tracking-tighter uppercase">
                Join Us In Making<br />A Difference.
              </h2>
              
              <p className="text-gray-400 text-lg max-w-md leading-relaxed">
                Your time, resources, and voice can change lives. Choose how you want to make an impact and help us build a better future.
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 mt-12">
              <button 
                onClick={() => navigate('/get-involved')}
                className="w-full sm:w-auto bg-[#10B981] hover:bg-[#0EA5E9] text-white px-10 py-4 rounded-full font-bold tracking-widest uppercase transition-colors"
              >
                Volunteer Now
              </button>
              <button 
                onClick={() => navigate('/get-involved')}
                className="w-full sm:w-auto group flex items-center justify-center space-x-3 px-8 py-4 rounded-full font-bold text-white border border-white/20 hover:bg-white/10 transition-colors"
              >
                <span className="tracking-widest uppercase text-sm">Learn More</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Tall Image Box (Spans 1 column) */}
          <motion.div 
            onClick={() => navigate('/get-involved')}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-1 rounded-[2.5rem] min-h-[400px] overflow-hidden relative cursor-pointer flex flex-col justify-end group"
          >
            <img 
              src="https://picsum.photos/seed/volunteer2/800/1200" 
              alt="Volunteer" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-10" />
            <div className="relative z-20 p-8 flex items-end justify-between w-full">
              <h3 className="text-white font-black text-3xl leading-tight tracking-tighter uppercase">Become a<br/>Volunteer</h3>
              <div className="w-14 h-14 shrink-0 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:bg-[#10B981] transition-all duration-300">
                <ArrowUpRight className="w-6 h-6" />
              </div>
            </div>
          </motion.div>

          {/* Stacked Small Boxes (Spans 1 column) */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            
            {/* Donate Box */}
            <motion.a 
              href="/#donate"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex-1 bg-[#10B981] rounded-[2.5rem] p-8 min-h-[250px] relative overflow-hidden group cursor-pointer flex flex-col justify-between shadow-lg"
            >
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-white mb-4">
                <Heart className="w-7 h-7" />
              </div>
              <div className="relative z-10">
                <h3 className="text-white font-black text-3xl mb-3 tracking-tighter uppercase">Make a<br/>Donation</h3>
                <div className="flex items-center text-white text-sm font-bold uppercase tracking-widest">
                  <span>Give Now</span>
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </motion.a>

            {/* Partner Box */}
            <motion.div 
              onClick={() => navigate('/get-involved')}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex-1 bg-white rounded-[2.5rem] p-8 min-h-[250px] relative overflow-hidden group cursor-pointer flex flex-col justify-between border border-gray-100 shadow-sm"
            >
              <div className="w-14 h-14 rounded-full bg-[#F3EFE7] flex items-center justify-center text-[#111111] mb-4">
                <Users className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-[#111111] font-black text-3xl mb-3 tracking-tighter uppercase">Partner<br/>With Us</h3>
                <div className="flex items-center text-[#10B981] text-sm font-bold uppercase tracking-widest">
                  <span>Collaborate</span>
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
