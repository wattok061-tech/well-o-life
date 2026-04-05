import { motion } from "motion/react";
import { ArrowRight, Instagram, Twitter, Facebook } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollClick = (e: React.MouseEvent, id: string) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      e.preventDefault();
      navigate(`/#${id}`);
    }
  };

  return (
    <footer className="bg-[#0B2545] text-white pt-24 overflow-hidden relative flex flex-col">
      
      {/* Top Section: Dark Background */}
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center mb-32">
        
        {/* Left: Hand-drawn element or small text */}
        <div className="mb-12 md:mb-0">
          <p className="mt-6 font-sans text-sm text-gray-400 max-w-xs">
            Providing hope and help during challenging times. Join us in making a difference.
          </p>
        </div>

        {/* Right: Social Links Stacked */}
        <div className="flex flex-col w-full md:w-auto border-t border-white/20 md:border-none">
          <a href="#" className="flex items-center space-x-4 py-4 border-b border-white/20 hover:text-[#C69C38] transition-colors group">
            <Instagram className="w-5 h-5" />
            <span className="font-sans text-sm tracking-widest uppercase">welloflife.org</span>
            <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
          </a>
          <a href="#" className="flex items-center space-x-4 py-4 border-b border-white/20 hover:text-[#C69C38] transition-colors group">
            <Facebook className="w-5 h-5" />
            <span className="font-sans text-sm tracking-widest uppercase">welloflife_official</span>
            <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
          </a>
          <a href="#" className="flex items-center space-x-4 py-4 border-b border-white/20 hover:text-[#C69C38] transition-colors group">
            <Twitter className="w-5 h-5" />
            <span className="font-sans text-sm tracking-widest uppercase">welloflife_org</span>
            <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
          </a>
        </div>
      </div>

      {/* Middle Section: Massive Typography & Overlapping Image */}
      <div className="relative w-full flex justify-center items-end mt-auto z-0">
        {/* Massive Text */}
        <div className="w-full text-center leading-[0.75] select-none overflow-hidden px-4">
          <h2 className="font-sans font-black text-[12vw] sm:text-[9vw] md:text-[7vw] tracking-tighter text-white/95 m-0 p-0 whitespace-normal md:whitespace-nowrap">
            WELL OF LIFE INT. MINISTRY
          </h2>
        </div>

        {/* Overlapping 3D/Cutout Image */}
        
      </div>

      {/* Bottom Section: Lime Green Background */}
      <div className="bg-[#C69C38] w-full relative z-30 pt-12 pb-8 px-6 md:px-12">
        <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
          
          {/* Left: Logo & Copyright */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2 text-white">
              <span className="font-sans font-black text-2xl tracking-tighter">WELL OF LIFE INT. MINISTRY</span>
            </div>
            <p className="text-white/80 font-sans text-xs font-semibold">
              welloflife©, all rights reserved, {new Date().getFullYear()}
            </p>
          </div>

          {/* Center: Links Grid */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-2 text-white font-sans text-sm font-bold uppercase tracking-wider">
            <a href="#" className="hover:text-[#0B2545] transition-colors">About Project</a>
            <a href="#" className="hover:text-[#0B2545] transition-colors">Our Mission</a>
            <a href="#" className="hover:text-[#0B2545] transition-colors">Get Involved</a>
            <a href="#" className="hover:text-[#0B2545] transition-colors">Social Networks</a>
            <a href="#" className="hover:text-[#0B2545] transition-colors">Contact</a>
            <a href="#" className="hover:text-[#0B2545] transition-colors">FAQ</a>
          </div>

          {/* Right: CTA Button */}
          <div className="w-full lg:w-auto flex justify-start lg:justify-end">
            <a href="/#donate" onClick={(e) => handleScrollClick(e, 'donate')} className="group flex items-center justify-between space-x-4 bg-white text-[#0B2545] px-6 py-3 rounded-full font-sans font-bold text-sm tracking-widest uppercase hover:bg-[#0B2545] hover:text-white transition-all duration-300 w-full lg:w-auto">
              <span>Donate Now</span>
              <div className="w-8 h-8 bg-[#0B2545]/10 group-hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
