import { ArrowUpRight } from "lucide-react";
import { motion, useMotionValue } from "motion/react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const services = [
  {
    id: 1,
    title: "Make a Donation",
    description: "Contribute today to help fund treatments, research, and essential support services for those battling cancer.",
    targetId: "donate",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2V22M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.3185 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    footer: (
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5">
          {/* Apple Pay mock */}
          <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
            <svg viewBox="0 0 384 512" className="w-3 h-3 text-white" fill="currentColor"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
          </div>
          {/* Google Pay mock */}
          <div className="w-6 h-6 bg-white border border-gray-200 rounded-full flex items-center justify-center">
            <svg viewBox="0 0 488 512" className="w-3 h-3" fill="#4285F4"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>
          </div>
          {/* PayPal mock */}
          <div className="w-6 h-6 bg-[#00457C] rounded-full flex items-center justify-center">
            <svg viewBox="0 0 384 512" className="w-3 h-3 text-white" fill="currentColor"><path d="M111.4 295.9l-35.4 0c-5.8 0-10.9-4.3-11.8-10.1L2.7 18.2C1.6 10.4 7.6 3.2 15.5 3.2l139.1 0c43.3 0 76.5 10.3 93.3 43.4 11.2 22.1 12.7 48.7 4.2 74.3-15.2 45.7-53.8 68.2-101.5 68.2l-21.7 0c-7.6 0-14.1 5.5-15.3 13.1l-2.2 13.8z"/></svg>
          </div>
        </div>
        <span className="text-[11px] font-bold text-gray-900 uppercase tracking-wider">Payment Options</span>
      </div>
    )
  },
  {
    id: 2,
    title: "Get Support",
    description: "Access vital resources, financial aid, and counseling for cancer patients and their families in their time of need.",
    targetId: "get-help",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    footer: (
      <div className="flex items-center gap-3">
        <span className="text-xs font-bold text-gray-500 tracking-wide"># Financial Aid</span>
        <span className="text-xs font-bold text-gray-500 tracking-wide"># Therapy</span>
      </div>
    )
  },
  {
    id: 3,
    title: "Become a Volunteer",
    description: "Join our team of volunteers to support cancer patients, assist with community outreach, and make a positive impact.",
    targetId: "volunteer",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19 8v6M22 11h-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    footer: (
      <div className="flex items-center">
        <div className="flex -space-x-2 mr-3">
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64&q=80" alt="Volunteer" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
          <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64&q=80" alt="Volunteer" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&h=64&q=80" alt="Volunteer" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
        </div>
        <span className="text-[11px] font-bold text-gray-900 uppercase tracking-wider">Join Our Team</span>
      </div>
    )
  }
];

export function WhatWeDo({ showLearnMore = true }: { showLearnMore?: boolean }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.offsetWidth * 0.85 + 16;
      scrollRef.current.scrollTo({
        left: activeIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  }, [activeIndex]);

  const handleScrollClick = (id: string) => {
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
    <section className="py-24 md:py-32 bg-white text-[#0B2545]">
      <div className="container mx-auto px-6 max-w-[1300px]">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#E8F5E9] text-[#2E7D32] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-8"
          >
            What We Do
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 max-w-3xl leading-[1.1] mb-10"
          >
            Providing Hope And Help During Challenging Times
          </motion.h2>

          {showLearnMore && (
            <motion.button
              onClick={() => navigate('/what-we-do')}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center space-x-3 group"
            >
              <span className="text-xs font-bold tracking-widest uppercase text-gray-900">Learn More</span>
              <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-gray-900 transition-colors">
                <ArrowUpRight className="w-4 h-4 text-gray-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.button>
          )}
        </div>

        {/* Cards Section */}
        <div className="relative overflow-hidden">
          {/* Unified Grid for Mobile and Desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 }}
                key={service.id}
                onClick={() => handleScrollClick(service.targetId)}
                className="bg-white rounded-[32px] md:rounded-[40px] p-8 md:p-10 border border-gray-200 flex flex-col h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-8 md:mb-12 bg-black text-white shadow-md">
                  {service.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">{service.title}</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-8 md:mb-12 flex-grow">{service.description}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 md:border-none">
                  <div className="scale-90 md:scale-100 origin-left">{service.footer}</div>
                  <div className="w-10 h-10 shrink-0 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-gray-900 group-hover:border-gray-900 group-hover:text-white transition-colors text-gray-400">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
