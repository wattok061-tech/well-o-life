import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Users, Briefcase, Newspaper, Heart, MessageCircle } from "lucide-react";

export function SideRail({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void }) {
  return (
    <motion.div
      className="fixed right-0 top-0 bottom-0 z-50 flex flex-col items-center justify-center gap-6 p-4 bg-[#F4EFE6]/80 backdrop-blur-lg border-l border-gray-200/50 md:hidden"
      initial={{ x: "100%" }}
      animate={{ x: isOpen ? 0 : "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* Close Button */}
      <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 p-2">
        <span className="text-2xl">&times;</span>
      </button>

      {/* WhatsApp */}
      <a href="https://wa.me/256800123456" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-[#25D366] text-white shadow-lg">
        <MessageCircle className="w-6 h-6" />
      </a>
      
      {/* Nav Links */}
      <Link to="/who-we-are" onClick={() => setIsOpen(false)} className="p-3 rounded-full bg-white/50 text-gray-900 shadow-sm"><Users className="w-6 h-6" /></Link>
      <Link to="/what-we-do" onClick={() => setIsOpen(false)} className="p-3 rounded-full bg-white/50 text-gray-900 shadow-sm"><Briefcase className="w-6 h-6" /></Link>
      <Link to="/news-events" onClick={() => setIsOpen(false)} className="p-3 rounded-full bg-white/50 text-gray-900 shadow-sm"><Newspaper className="w-6 h-6" /></Link>
      <Link to="/get-involved" onClick={() => setIsOpen(false)} className="p-3 rounded-full bg-white/50 text-gray-900 shadow-sm"><Heart className="w-6 h-6" /></Link>
    </motion.div>
  );
}
