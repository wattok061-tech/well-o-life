import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

import { Link, useNavigate, useLocation } from "react-router-dom";

const PremiumMenuIcon = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className="relative w-5 h-[12px] flex flex-col justify-between items-end">
      <motion.span 
        animate={isOpen ? { rotate: 45, y: 5.25 } : { rotate: 0, y: 0 }}
        className="w-full h-[1.5px] bg-current block origin-center transition-all duration-300"
      />
      <motion.span 
        animate={isOpen ? { width: 0, opacity: 0 } : { width: "100%", opacity: 1 }}
        className="w-full h-[1.5px] bg-current block transition-all duration-300"
      />
      <motion.span 
        animate={isOpen ? { rotate: -45, y: -5.25, width: "100%" } : { rotate: 0, y: 0 }}
        className={`h-[1.5px] bg-current block origin-center transition-all duration-300 ${isOpen ? 'w-full' : 'w-[60%] group-hover:w-full'}`}
      />
    </div>
  );
};

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isInitialMount = useRef(true);

  // Handle scrolling to hash when navigating from another page
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      // Skip scrolling on initial load so the page always starts at the Hero section
      return;
    }

    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  const handleScrollClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/#${id}`);
    }
  };

  return (
    <>
      <nav 
        className="fixed top-0 left-0 right-0 z-50 px-6 py-3 md:py-4 md:px-12 flex items-center justify-between text-[#0B2545] bg-[#F4EFE6] border-b border-gray-200/50"
      >
        <div className="flex-1 flex items-center space-x-3 min-w-0">
          <Link to="/" className="flex items-center">
            <img src="https://image2url.com/r2/default/images/1775252332512-3703e842-faaf-4e69-93df-d7bf3765bb9d.png" alt="Well Of Life Ministries" className="h-16 sm:h-20 md:h-24 w-auto object-contain scale-110 origin-left" />
          </Link>
        </div>
        
        <div className="hidden lg:flex flex-auto justify-center space-x-10 xl:space-x-16 text-xs font-bold tracking-[0.2em] uppercase whitespace-nowrap">
          <Link to="/who-we-are" className="hover:text-[#C69C38] transition-colors">Who We Are</Link>
          <Link to="/what-we-do" className="hover:text-[#C69C38] transition-colors">What We Do</Link>
          <Link to="/news-events" className="hover:text-[#C69C38] transition-colors">News & Stories</Link>
          <Link to="/get-involved" className="hover:text-[#C69C38] transition-colors">Get Involved</Link>
        </div>

        <div className="flex-1 flex justify-end items-center space-x-4">
          <a href="/#donate" onClick={(e) => handleScrollClick(e, 'donate')} className="hidden lg:flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-r from-[#C69C38] to-[#D97706] text-white hover:shadow-[0_0_20px_rgba(198,156,56,0.5)] hover:scale-105 transition-all duration-300 text-xs font-bold tracking-[0.2em] uppercase">
            Donate
          </a>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex lg:hidden items-center justify-center w-12 h-12 rounded-full border border-[#0B2545]/20 hover:border-[#0B2545] hover:bg-[#0B2545] hover:text-[#F4EFE6] transition-all duration-300 focus:outline-none ml-2 group" 
            aria-label="Menu"
          >
            <PremiumMenuIcon isOpen={isMenuOpen} />
          </button>
        </div>
      </nav>

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
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="text-3xl md:text-4xl font-serif font-light tracking-wide hover:text-brand-accent transition-colors flex items-center group cursor-pointer"
                >
                  <span className="text-sm font-sans text-gray-500 mr-6 group-hover:text-brand-accent transition-colors">01</span>
                  <Link to="/who-we-are" onClick={() => setIsMenuOpen(false)}>Who We Are</Link>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="text-3xl md:text-4xl font-serif font-light tracking-wide hover:text-brand-accent transition-colors flex items-center group cursor-pointer"
                >
                  <span className="text-sm font-sans text-gray-500 mr-6 group-hover:text-brand-accent transition-colors">02</span>
                  <Link to="/what-we-do" onClick={() => setIsMenuOpen(false)}>What We Do</Link>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="text-3xl md:text-4xl font-serif font-light tracking-wide hover:text-brand-accent transition-colors flex items-center group cursor-pointer"
                >
                  <span className="text-sm font-sans text-gray-500 mr-6 group-hover:text-brand-accent transition-colors">03</span>
                  <Link to="/news-events" onClick={() => setIsMenuOpen(false)}>News & Stories</Link>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="text-3xl md:text-4xl font-serif font-light tracking-wide hover:text-brand-accent transition-colors flex items-center group cursor-pointer"
                >
                  <span className="text-sm font-sans text-gray-500 mr-6 group-hover:text-brand-accent transition-colors">04</span>
                  <Link to="/get-involved" onClick={() => setIsMenuOpen(false)}>Get Involved</Link>
                </motion.div>
                
                <div className="h-px w-full bg-white/10 my-8"></div>
                
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="text-3xl md:text-4xl font-serif italic text-brand-accent hover:text-white transition-colors flex items-center group cursor-pointer"
                >
                  <span className="text-sm font-sans text-brand-accent/50 mr-6 group-hover:text-white/50 transition-colors">05</span>
                  <a href="/#donate" onClick={(e) => handleScrollClick(e, 'donate')}>Donate</a>
                </motion.div>
              </div>
              
              <div className="mt-auto pt-12">
                <p className="text-sm text-gray-500 font-sans uppercase tracking-widest mb-4">Get in touch</p>
                <div className="flex flex-col space-y-4">
                  <a href="mailto:hello@welloflife.org" className="text-xl font-serif hover:text-brand-accent transition-colors">hello@welloflife.org</a>
                  <a href="https://wa.me/256800123456" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-xl font-serif hover:text-[#25D366] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    <span>Message on WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
