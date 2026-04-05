import { motion } from "motion/react";
import { ArrowUpRight, ArrowDown } from "lucide-react";

export function Hero() {
  const handleScrollClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-screen pt-32 pb-8 flex flex-col justify-between overflow-hidden bg-[#F4EFE6] text-[#0B2545]">
      
      {/* Main Content */}
      <div className="w-full px-6 md:px-12 flex-1 flex flex-col justify-center mt-10 md:mt-20">
        
        {/* Massive Heading */}
        <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center items-center text-[14vw] sm:text-[12vw] md:text-[11vw] lg:text-[130px] xl:text-[160px] leading-[0.95] font-black tracking-tighter w-full px-2"
          >
            {/* Line 1 */}
            <div className="flex flex-row flex-wrap justify-center items-center gap-x-2 md:gap-x-5 w-full">
              <span className="shrink-0">Well Of Life</span>
            </div>
            
            {/* Line 2 with inline image */}
            <div className="mt-2 md:mt-0 flex flex-row flex-wrap justify-center items-center gap-x-2 md:gap-x-5 w-full">
              {/* Pill Image - Inline */}
              <motion.div 
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "auto", opacity: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="h-[14vw] sm:h-[12vw] lg:h-[140px] xl:h-[160px] w-[30vw] sm:w-[26vw] lg:w-[300px] xl:w-[340px] rounded-[100px] overflow-hidden shrink-0"
              >
                <img 
                  src="https://images.unsplash.com/photo-1529209076408-5a115ec9f1c6?auto=format&fit=crop&q=80&w=800" 
                  alt="Support" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              
              <span className="shrink-0">Int. Ministry</span>
            </div>
          </motion.div>
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center gap-4 mt-12 md:mt-16"
        >
          <a href="/#donate" onClick={(e) => handleScrollClick(e, 'donate')} className="bg-gradient-to-r from-[#C69C38] to-[#D97706] text-white px-10 py-4 rounded-full text-sm font-bold tracking-[0.1em] uppercase transition-all duration-300 hover:scale-105 shadow-[0_8px_30px_rgba(198,156,56,0.4)] inline-block">
            Donate
          </a>
          
          <a href="/#get-help" onClick={(e) => handleScrollClick(e, 'get-help')} className="flex items-center space-x-2 transition-colors group">
            <span className="text-sm font-bold tracking-[0.1em] uppercase text-[#0B2545] border-b-2 border-[#0B2545] group-hover:border-transparent transition-all">I Need Help</span>
            <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-[#0B2545] group-hover:bg-[#0B2545] group-hover:text-white transition-all shadow-sm">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </a>
        </motion.div>
      </div>

      {/* Bottom Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="container mx-auto px-6 md:px-12 mt-20 overflow-hidden"
      >
        <div className="relative flex overflow-hidden py-8 border-t border-gray-300/50">
          <div className="flex items-center animate-marquee w-max">
            {/* Content duplicated to ensure seamless loop on all screen sizes */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="flex items-center gap-8 md:gap-16 shrink-0 pr-8 md:pr-16">
                <div className="flex items-center space-x-3 text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500">
                  <div className="w-4 h-4 grid grid-cols-2 gap-[2px] opacity-60">
                    <div className="bg-current rounded-sm"></div>
                    <div className="bg-current rounded-sm"></div>
                    <div className="bg-current rounded-sm"></div>
                    <div className="bg-current rounded-sm"></div>
                  </div>
                  <span>Quick Donate</span>
                </div>
                
                {/* Logos */}
                <div className="flex items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                  <span className="font-serif font-bold text-xl tracking-tight">gofundme</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-serif">C</span>
                    <span className="font-sans font-bold text-[8px] leading-tight tracking-wider">CANCER<br/>RESEARCH<br/>UK</span>
                  </div>
                  <span className="font-sans font-medium text-xl tracking-tight">Medtronic</span>
                </div>

                <button onClick={(e) => handleScrollClick(e, 'what-we-do')} className="flex items-center space-x-3 text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500 hover:text-black transition-colors group">
                  <span>Scroll Down</span>
                  <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-gray-900 transition-colors">
                    <ArrowDown className="w-3 h-3" />
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

    </section>
  );
}
