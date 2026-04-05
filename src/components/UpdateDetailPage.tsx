import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Calendar, Share2, Check } from "lucide-react";
import { updates } from "../data/updates";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { useEffect, useState } from "react";

export function UpdateDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isSharing, setIsSharing] = useState(false);
  const [showToast, setShowToast] = useState(false);
  
  const update = updates.find(u => u.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!update) {
    return (
      <div className="min-h-screen bg-[#F4EFE6] flex flex-col items-center justify-center text-[#0B2545]">
        <h1 className="text-4xl font-bold mb-4">Update Not Found</h1>
        <button 
          onClick={() => navigate(-1)}
          className="text-[#C69C38] hover:underline flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" /> Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F4EFE6] text-[#0B2545] flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 md:pt-32 pb-12 md:pb-20">
        <article className="container mx-auto px-6 md:px-12 max-w-4xl">
          {/* Back Button */}
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 text-gray-500 hover:text-gray-900 transition-colors mb-8 group"
          >
            <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-gray-900 transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold tracking-widest uppercase">Back</span>
          </button>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 text-sm text-gray-500 font-medium mb-6">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {update.date}
              </span>
              <span className="w-1 h-1 rounded-full bg-gray-300"></span>
              <span className="uppercase tracking-widest text-xs font-bold text-[#C69C38]">News & Updates</span>
            </div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-gray-900 mb-8"
            >
              {update.title}
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="w-full aspect-[16/9] rounded-[40px] overflow-hidden relative shadow-2xl"
            >
              <img 
                src={update.image} 
                alt={update.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </header>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="prose prose-lg md:prose-xl max-w-none prose-p:text-gray-600 prose-p:leading-relaxed prose-headings:text-gray-900"
          >
            <p className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed mb-8">
              {update.content}
            </p>
            
            {/* Placeholder for more content to make it look like a full article */}
            <p>
              Our community continues to grow and adapt to the challenges we face. The dedication shown by individuals like those highlighted in this update is what makes our mission possible. Every day, we see the profound impact that compassion and organized effort can have on the lives of those who need it most.
            </p>
            <p>
              As we look to the future, we remain committed to expanding our reach and deepening our support structures. We invite you to join us in this journey, whether through volunteering, donating, or simply sharing our stories with your network. Together, we are building a Well Of Life Int. Ministry that sustains us all.
            </p>
          </motion.div>

          {/* Share Section */}
          <div className="mt-16 pt-8 border-t border-gray-200 flex items-center justify-between">
            <span className="text-sm font-bold tracking-widest uppercase text-gray-500">Share this update</span>
            <div className="flex gap-4">
              <button 
                onClick={async () => {
                  if (isSharing) return;
                  
                  if (navigator.share) {
                    try {
                      setIsSharing(true);
                      await navigator.share({
                        title: update.title,
                        text: update.content,
                        url: window.location.href,
                      });
                    } catch (error) {
                      console.error('Error sharing:', error);
                    } finally {
                      setIsSharing(false);
                    }
                  } else {
                    // Fallback: copy to clipboard
                    navigator.clipboard.writeText(window.location.href)
                      .then(() => {
                        setShowToast(true);
                        setTimeout(() => setShowToast(false), 3000);
                      })
                      .catch(console.error);
                  }
                }}
                disabled={isSharing}
                className={`w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center transition-colors ${isSharing ? 'opacity-50 cursor-not-allowed text-gray-400' : 'text-gray-500 hover:text-gray-900 hover:border-gray-900'}`}
                aria-label="Share this update"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </article>
      </main>

      {/* Small Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-gray-900 text-white px-4 py-2.5 rounded-full shadow-xl"
          >
            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
              <Check className="w-3 h-3 text-white" />
            </div>
            <span className="text-sm font-medium pr-1">Link copied</span>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
