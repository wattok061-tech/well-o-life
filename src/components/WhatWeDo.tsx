import { motion } from "motion/react";
import { ArrowUpRight, DollarSign, HeartHandshake, User } from "lucide-react";
import { useState, useRef } from "react";

export function WhatWeDo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollPosition = scrollRef.current.scrollLeft;
    const cardWidth = scrollRef.current.children[0].clientWidth;
    // Add half card width to trigger index change halfway through swipe
    const newIndex = Math.round(scrollPosition / cardWidth);
    setActiveIndex(newIndex);
  };

  return (
    <section className="py-16 md:py-32 bg-white text-[#1A1A1A] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#F2FCEE] text-[#4CAF50] px-3 py-1 rounded-full text-[11px] font-bold tracking-wider mb-5 uppercase"
          >
            What We Do
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[32px] md:text-5xl lg:text-[56px] font-extrabold tracking-tight max-w-[300px] md:max-w-3xl mb-6 leading-[1.1]"
          >
            Providing Hope And Help During Challenging Times
          </motion.h2>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-2 text-[12px] font-bold uppercase tracking-[0.1em] hover:text-[#4CAF50] transition-colors group"
          >
            <span>Learn More</span>
            <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-[#4CAF50] transition-colors">
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </motion.button>
        </div>

        {/* Cards Grid / Swipeable Mobile List */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-3 gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-6 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[32px] p-6 md:p-8 flex flex-col h-full transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl cursor-pointer w-[85vw] max-w-[320px] md:w-auto md:max-w-none snap-center shrink-0"
          >
            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <DollarSign className="w-4 h-4 text-gray-900" strokeWidth={2} />
            </div>
            <h3 className="text-[20px] md:text-[24px] font-bold mb-3 text-gray-900 leading-tight">Make a Donation</h3>
            <p className="text-[14px] md:text-[15px] text-gray-600 mb-8 flex-grow leading-[1.5]">
              Contribute today to help fund treatments, research, and essential support services for those battling cancer.
            </p>
            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple Pay" className="h-3.5 w-auto opacity-80 mix-blend-multiply" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google Pay" className="h-3.5 w-auto opacity-80 mix-blend-multiply" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-3.5 w-auto opacity-80 mix-blend-multiply" />
                </div>
                <span className="text-[11px] md:text-[12px] font-semibold text-gray-600">Payment Options</span>
              </div>
              <button className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center group-hover:border-gray-300 group-hover:bg-gray-50 transition-colors shrink-0 ml-2">
                <ArrowUpRight className="w-4 h-4 text-gray-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </button>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="group bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[32px] p-6 md:p-8 flex flex-col h-full transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl cursor-pointer w-[85vw] max-w-[320px] md:w-auto md:max-w-none snap-center shrink-0"
          >
            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <HeartHandshake className="w-4 h-4 text-gray-900" strokeWidth={2} />
            </div>
            <h3 className="text-[20px] md:text-[24px] font-bold mb-3 text-gray-900 leading-tight">Get Support</h3>
            <p className="text-[14px] md:text-[15px] text-gray-600 mb-8 flex-grow leading-[1.5]">
              Access vital resources, financial aid, and counseling for cancer patients and their families in their time of need.
            </p>
            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center space-x-2 text-[11px] md:text-[12px] font-semibold text-gray-600">
                <span># Financial Aid</span>
                <span># Therapy</span>
              </div>
              <button className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center group-hover:border-gray-300 group-hover:bg-gray-50 transition-colors shrink-0 ml-2">
                <ArrowUpRight className="w-4 h-4 text-gray-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </button>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="group bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[32px] p-6 md:p-8 flex flex-col h-full transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl cursor-pointer w-[85vw] max-w-[320px] md:w-auto md:max-w-none snap-center shrink-0"
          >
            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <User className="w-4 h-4 text-gray-900" strokeWidth={2} />
            </div>
            <h3 className="text-[20px] md:text-[24px] font-bold mb-3 text-gray-900 leading-tight">Become a Volunteer</h3>
            <p className="text-[14px] md:text-[15px] text-gray-600 mb-8 flex-grow leading-[1.5]">
              Join our team of volunteers to support cancer patients, assist with community outreach, and make a positive impact.
            </p>
            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-2">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80" alt="Volunteer" className="w-6 h-6 rounded-full border-2 border-white object-cover relative z-30 shadow-sm" />
                  <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&h=100&q=80" alt="Volunteer" className="w-6 h-6 rounded-full border-2 border-white object-cover relative z-20 shadow-sm" />
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80" alt="Volunteer" className="w-6 h-6 rounded-full border-2 border-white object-cover relative z-10 shadow-sm" />
                </div>
                <span className="text-[11px] md:text-[12px] font-semibold text-gray-600">Join Our Team</span>
              </div>
              <button className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center group-hover:border-gray-300 group-hover:bg-gray-50 transition-colors shrink-0 ml-2">
                <ArrowUpRight className="w-4 h-4 text-gray-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </button>
            </div>
          </motion.div>

        </div>

        {/* Pagination Dots (Mobile Only) */}
        <div className="flex justify-center space-x-2 mt-6 md:hidden">
          {[0, 1, 2].map((index) => (
            <div 
              key={index}
              className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                activeIndex === index ? 'bg-[#22C55E]' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
