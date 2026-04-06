import { ArrowUpRight } from "lucide-react";
import { motion, useMotionValue } from "motion/react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const services = [
  {
    id: 1,
    title: "Make a Donation",
    description: "Contribute today to help fund essential support services, community programs, and resources for those in need.",
    targetId: "donate",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2V22M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.3185 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    footer: (
      <div className="flex items-center gap-3">
        <div className="w-12 h-6 bg-[#635BFF] rounded flex items-center justify-center">
          <svg viewBox="0 0 60 24" className="w-8 h-4 text-white" fill="currentColor"><path d="M59.7 13.2c-.3-1.6-1.5-2.3-3.7-3.3-2.2-1-3.6-1.7-3.6-2.7 0-.9.9-1.5 2.5-1.5 1.4 0 3 .4 4.3 1.1l.6-3.2c-1.3-.6-2.8-1-4.3-1-4.5 0-7.5 2.5-7.5 6.1 0 2.3 1.3 3.6 4.3 5 2.8 1.3 3.6 1.9 3.6 2.8 0 1.2-1.1 1.7-2.8 1.7-2 0-3.9-.6-5.7-1.5l-.7 3.3c1.7.8 4.2 1.3 6.5 1.3 4.8 0 8.1-2.4 8.1-6.4 0-1.5-.4-2.7-1.3-3.6zM42.4 17.5c-1.4 0-2.5-1.2-2.5-2.7V6.6h-3.3V4.2h3.3V1.6l3.8-2.2v4.8h3.9v2.4h-3.9v7.8c0 1.6 1.1 2.7 2.5 2.7.7 0 1.3-.1 1.8-.3l.5 3.1c-.7.3-1.6.5-2.5.5zM29.5 17.5c-1.4 0-2.5-1.2-2.5-2.7V6.6h-3.3V4.2h3.3V1.6l3.8-2.2v4.8h3.9v2.4h-3.9v7.8c0 1.6 1.1 2.7 2.5 2.7.7 0 1.3-.1 1.8-.3l.5 3.1c-.7.3-1.6.5-2.5.5zM16.5 17.5c-1.4 0-2.5-1.2-2.5-2.7V6.6H10.7V4.2h3.3V1.6l3.8-2.2v4.8h3.9v2.4h-3.9v7.8c0 1.6 1.1 2.7 2.5 2.7.7 0 1.3-.1 1.8-.3l.5 3.1c-.7.3-1.6.5-2.5.5zM4.9 17.5c-1.4 0-2.5-1.2-2.5-2.7V6.6H.7V4.2h3.3V1.6l3.8-2.2v4.8h3.9v2.4H7.8v7.8c0 1.6 1.1 2.7 2.5 2.7.7 0 1.3-.1 1.8-.3l.5 3.1c-.7.3-1.6.5-2.5.5z"/></svg>
        </div>
        <span className="text-[11px] font-bold text-gray-900 uppercase tracking-wider">Secure Payment</span>
      </div>
    )
  },
  {
    id: 2,
    title: "Get Support",
    description: "Access vital resources, financial aid, and counseling for individuals and families in their time of need.",
    targetId: "get-help",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    footer: (
      <div className="flex items-center gap-3">
        <span className="text-xs font-bold text-gray-500 tracking-wide"># Financial Aid</span>
        <span className="text-xs font-bold text-gray-500 tracking-wide"># Counseling</span>
      </div>
    )
  },
  {
    id: 3,
    title: "Become a Volunteer",
    description: "Join our team of volunteers to support our community outreach, assist those in need, and make a positive impact.",
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
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
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
