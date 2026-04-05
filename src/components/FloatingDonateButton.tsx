import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { HandHeart, MessageCircle } from "lucide-react";

export function FloatingDonateButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
          {/* WhatsApp Button */}
          <motion.a
            href="https://wa.me/256800123456"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] flex items-center justify-center border border-white/10"
          >
            <MessageCircle className="w-6 h-6" />
          </motion.a>

          {/* Donate Button */}
          <motion.a
            href="/#donate"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-br from-[#0B2545] via-[#1E3A8A] to-[#0B2545] text-white px-7 py-4 rounded-full shadow-[0_10px_40px_rgba(11,37,69,0.5)] flex items-center gap-3 border border-white/10 backdrop-blur-xl group overflow-hidden"
          >
            {/* Animated background shine */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />

            <div className="relative flex items-center justify-center z-10">
              <div className="bg-gradient-to-br from-[#C69C38] to-[#D97706] p-2 rounded-full shadow-inner">
                <HandHeart className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
            </div>
            
            <span className="font-bold text-sm uppercase tracking-[0.2em] drop-shadow-md z-10 text-white/90 group-hover:text-white transition-colors">
              Donate Now
            </span>
            
            {/* Outer glow ring effect */}
            <div className="absolute inset-0 rounded-full border border-[#C69C38]/50 opacity-0 group-hover:animate-ping" style={{ animationDuration: '2.5s' }}></div>
          </motion.a>
        </div>
      )}
    </AnimatePresence>
  );
}
