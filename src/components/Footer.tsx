import { motion } from "motion/react";
import { ArrowRight, Instagram, Twitter, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-24 overflow-hidden relative flex flex-col">
      
      {/* Top Section: Dark Background */}
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center mb-32">
        
        {/* Left: Hand-drawn element or small text */}
        <div className="mb-12 md:mb-0">
          <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white opacity-80">
            <path d="M50 85C50 85 15 55 15 35C15 20 30 15 40 25C50 35 50 35 50 35C50 35 50 35 60 25C70 15 85 20 85 35C85 55 50 85 50 85Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <p className="mt-6 font-sans text-sm text-gray-400 max-w-xs">
            Providing hope and help during challenging times. Join us in making a difference.
          </p>
        </div>

        {/* Right: Social Links Stacked */}
        <div className="flex flex-col w-full md:w-auto border-t border-white/20 md:border-none">
          <a href="#" className="flex items-center space-x-4 py-4 border-b border-white/20 hover:text-brand-mint transition-colors group">
            <Instagram className="w-5 h-5" />
            <span className="font-sans text-sm tracking-widest uppercase">welloflife.org</span>
            <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
          </a>
          <a href="#" className="flex items-center space-x-4 py-4 border-b border-white/20 hover:text-brand-mint transition-colors group">
            <Facebook className="w-5 h-5" />
            <span className="font-sans text-sm tracking-widest uppercase">welloflife_official</span>
            <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
          </a>
          <a href="#" className="flex items-center space-x-4 py-4 border-b border-white/20 hover:text-brand-mint transition-colors group">
            <Twitter className="w-5 h-5" />
            <span className="font-sans text-sm tracking-widest uppercase">welloflife_org</span>
            <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
          </a>
        </div>
      </div>

      {/* Middle Section: Massive Typography & Overlapping Image */}
      <div className="relative w-full flex justify-center items-end mt-auto z-0">
        {/* Massive Text */}
        <div className="w-full text-center leading-[0.75] select-none overflow-hidden">
          <h2 className="font-sans font-black text-[18vw] tracking-tighter text-white/95 m-0 p-0 whitespace-nowrap">
            WELL OF LIFE
          </h2>
        </div>

        {/* Overlapping 3D/Cutout Image */}
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-1/2 -translate-x-1/2 bottom-0 z-20 w-[60vw] max-w-[500px] pointer-events-none drop-shadow-2xl"
        >
          {/* Using a transparent PNG of a community/charity theme to simulate the 3D character effect */}
          <img 
            src="https://images.unsplash.com/photo-1593113514676-5fa3368252f5?auto=format&fit=crop&q=80&w=800&h=1000" 
            alt="Community Help" 
            className="w-full h-auto object-cover rounded-t-full mask-image-gradient"
            style={{ maskImage: 'linear-gradient(to top, black 60%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to top, black 80%, transparent 100%)' }}
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>

      {/* Bottom Section: Lime Green Background */}
      <div className="bg-brand-green w-full relative z-30 pt-12 pb-8 px-6 md:px-12">
        <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
          
          {/* Left: Logo & Copyright */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2 text-white">
              <div className="w-8 h-8 rounded-full bg-white text-brand-green flex items-center justify-center font-serif italic font-bold text-lg">
                W
              </div>
              <span className="font-sans font-black text-2xl tracking-tighter">WELL OF LIFE</span>
            </div>
            <p className="text-white/80 font-sans text-xs font-semibold">
              well of life©, all rights reserved, {new Date().getFullYear()}
            </p>
          </div>

          {/* Center: Links Grid */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-2 text-white font-sans text-sm font-bold uppercase tracking-wider">
            <a href="#" className="hover:text-brand-dark transition-colors">About Project</a>
            <a href="#" className="hover:text-brand-dark transition-colors">Our Mission</a>
            <a href="#" className="hover:text-brand-dark transition-colors">Get Involved</a>
            <a href="#" className="hover:text-brand-dark transition-colors">Social Networks</a>
            <a href="#" className="hover:text-brand-dark transition-colors">Contact</a>
            <a href="#" className="hover:text-brand-dark transition-colors">FAQ</a>
          </div>

          {/* Right: CTA Button */}
          <div className="w-full lg:w-auto flex justify-start lg:justify-end">
            <button className="group flex items-center justify-between space-x-4 bg-white text-brand-dark px-6 py-3 rounded-full font-sans font-bold text-sm tracking-widest uppercase hover:bg-brand-dark hover:text-white transition-all duration-300 w-full lg:w-auto">
              <span>Donate Now</span>
              <div className="w-8 h-8 bg-brand-dark/10 group-hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          </div>

        </div>
      </div>

      {/* Decorative Scribbles/Textures (Simulated with SVG) */}
      <div className="absolute top-20 left-10 opacity-20 pointer-events-none z-0 hidden md:block">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 180C40 150 80 120 150 160C180 170 190 140 170 100C150 60 100 80 80 40C70 20 100 10 140 20" stroke="white" strokeWidth="4" strokeLinecap="round"/>
          <path d="M40 160L60 140M140 140L160 160" stroke="white" strokeWidth="4" strokeLinecap="round"/>
        </svg>
      </div>

    </footer>
  );
}
