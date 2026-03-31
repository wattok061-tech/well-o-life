import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-brand-dark">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=2000&h=1500" 
          alt="Charity and Hope" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a3328]/80 via-brand-dark/60 to-brand-dark"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6"
        >
          <span className="text-brand-mint font-sans text-xs md:text-sm font-bold tracking-[0.3em] uppercase">
            Well of Life Ministries
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-6xl md:text-8xl lg:text-9xl font-serif text-white mb-8 leading-[0.9] tracking-tight"
        >
          Providing Hope.<br />
          <span className="italic text-brand-bg/90">Changing Lives.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-xl text-white/80 font-sans max-w-2xl mb-12 font-light"
        >
          Join us in our mission to bring essential resources, support, and care to communities in need. Your contribution makes a world of difference.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <button className="group flex items-center justify-center space-x-3 bg-brand-green hover:bg-brand-mint text-white px-10 py-5 rounded-full font-sans font-semibold tracking-wide transition-all duration-300">
            <span>Donate Now</span>
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>
          
          <button className="text-white hover:text-brand-mint font-sans text-sm tracking-[0.2em] uppercase font-semibold transition-colors underline underline-offset-8 decoration-white/30 hover:decoration-brand-mint">
            Get Help
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10"
      >
        <span className="text-white/50 text-[10px] font-sans tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-brand-mint"
          />
        </div>
      </motion.div>
    </section>
  );
}
