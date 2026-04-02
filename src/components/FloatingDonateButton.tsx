import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Heart } from "lucide-react";

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
        <motion.a
          href="/#donate"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-6 right-6 z-50 bg-[#22C55E] text-white p-4 rounded-full shadow-lg flex items-center gap-2 md:hidden"
        >
          <Heart className="w-5 h-5 fill-current" />
          <span className="font-bold text-sm uppercase tracking-wider">Donate</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
