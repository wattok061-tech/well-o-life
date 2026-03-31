import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone } from "lucide-react";

const PremiumMenuIcon = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className="relative w-6 h-[14.5px] flex flex-col justify-between items-end">
      <motion.span 
        animate={isOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
        className="w-6 h-[1.5px] bg-current block origin-center transition-all duration-300"
      />
      <motion.span 
        animate={isOpen ? { width: 0, opacity: 0 } : { width: "100%", opacity: 1 }}
        className="w-6 h-[1.5px] bg-current block transition-all duration-300"
      />
      <motion.span 
        animate={isOpen ? { rotate: -45, y: -6.5, width: "100%" } : { rotate: 0, y: 0, width: "75%" }}
        className="w-[18px] h-[1.5px] bg-current block origin-center transition-all duration-300"
      />
    </div>
  );
};

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 flex items-center justify-between text-white bg-brand-dark/60 backdrop-blur-lg border-b border-white/10"
      >
        <div className="flex-1">
          <a href="#" className="font-serif text-2xl tracking-widest uppercase font-bold">Well of Life</a>
        </div>
        
        <div className="hidden lg:flex flex-auto justify-center space-x-10 xl:space-x-16 text-[11px] font-semibold tracking-[0.2em] uppercase whitespace-nowrap">
          <a href="#" className="hover:text-brand-mint transition-colors">Who We Are</a>
          <a href="#" className="hover:text-brand-mint transition-colors">What We Do</a>
          <a href="#" className="hover:text-brand-mint transition-colors">News & Events</a>
          <a href="#" className="hover:text-brand-mint transition-colors">Get Involved</a>
        </div>

        <div className="flex-1 flex justify-end items-center space-x-4">
          <button className="hidden lg:flex items-center justify-center w-11 h-11 rounded-full border border-white/20 hover:border-brand-mint hover:text-brand-mint transition-colors">
            <Phone className="w-4 h-4" />
          </button>
          <button className="hidden lg:flex items-center justify-center px-8 py-3 rounded-full border border-white/20 hover:border-brand-mint hover:text-brand-mint transition-colors text-[11px] font-semibold tracking-[0.2em] uppercase">
            Donate
          </button>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex lg:hidden items-center justify-center w-12 h-12 rounded-full border border-white/30 hover:border-brand-mint hover:text-brand-mint transition-colors focus:outline-none ml-2" 
            aria-label="Menu"
          >
            <PremiumMenuIcon isOpen={isMenuOpen} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 w-full md:w-[450px] bg-brand-dark z-40 pt-32 pb-16 px-12 border-l border-white/10 shadow-2xl flex flex-col"
            >
              <div className="flex flex-col space-y-8 text-white mt-12 relative z-10">
                <motion.a 
                  whileHover={{ x: 10 }}
                  href="#" 
                  className="text-3xl md:text-4xl font-serif font-light tracking-wide hover:text-brand-mint transition-colors flex items-center group cursor-pointer"
                >
                  <span className="text-sm font-sans text-gray-500 mr-6 group-hover:text-brand-mint transition-colors">01</span>
                  Who We Are
                </motion.a>
                <motion.a 
                  whileHover={{ x: 10 }}
                  href="#" 
                  className="text-3xl md:text-4xl font-serif font-light tracking-wide hover:text-brand-mint transition-colors flex items-center group cursor-pointer"
                >
                  <span className="text-sm font-sans text-gray-500 mr-6 group-hover:text-brand-mint transition-colors">02</span>
                  What We Do
                </motion.a>
                <motion.a 
                  whileHover={{ x: 10 }}
                  href="#" 
                  className="text-3xl md:text-4xl font-serif font-light tracking-wide hover:text-brand-mint transition-colors flex items-center group cursor-pointer"
                >
                  <span className="text-sm font-sans text-gray-500 mr-6 group-hover:text-brand-mint transition-colors">03</span>
                  News & Events
                </motion.a>
                <motion.a 
                  whileHover={{ x: 10 }}
                  href="#" 
                  className="text-3xl md:text-4xl font-serif font-light tracking-wide hover:text-brand-mint transition-colors flex items-center group cursor-pointer"
                >
                  <span className="text-sm font-sans text-gray-500 mr-6 group-hover:text-brand-mint transition-colors">04</span>
                  Get Involved
                </motion.a>
                
                <div className="h-px w-full bg-white/10 my-8"></div>
                
                <motion.a 
                  whileHover={{ x: 10 }}
                  href="#" 
                  className="text-3xl md:text-4xl font-serif italic text-brand-mint hover:text-white transition-colors flex items-center group cursor-pointer"
                >
                  <span className="text-sm font-sans text-brand-mint/50 mr-6 group-hover:text-white/50 transition-colors">05</span>
                  Donate
                </motion.a>
              </div>
              
              <div className="mt-auto pt-12">
                <p className="text-sm text-gray-500 font-sans uppercase tracking-widest mb-4">Get in touch</p>
                <a href="mailto:hello@welloflife.org" className="text-xl font-serif hover:text-brand-mint transition-colors">hello@welloflife.org</a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
