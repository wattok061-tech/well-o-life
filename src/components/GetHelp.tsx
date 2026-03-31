import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, MapPin, ArrowRight } from "lucide-react";

const helpCategories = [
  { id: 'medical', label: 'Medical Care' },
  { id: 'basic', label: 'Basic Needs' },
  { id: 'education', label: 'Education' },
  { id: 'other', label: 'Other' },
];

export function GetHelp() {
  const [selectedCategory, setSelectedCategory] = useState('medical');

  return (
    <section className="py-24 md:py-32 bg-white text-[#1A1A1A] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col"
          >
            <span className="text-[#22C55E] font-bold tracking-widest uppercase text-sm mb-6">
              Request Assistance
            </span>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-[1.1]">
              We Are Here<br />To Support You.
            </h2>
            
            <p className="text-gray-500 text-lg mb-12 leading-relaxed">
              Whether you are facing a medical emergency, struggling with basic needs, or require other forms of assistance, you don't have to face it alone. Share your story, and our support team will reach out.
            </p>

            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center shrink-0 text-gray-900 border border-gray-100">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Head Office</h4>
                  <p className="text-gray-500 mt-1">Kampala, Serving all regions</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center shrink-0 text-gray-900 border border-gray-100">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Contact Number</h4>
                  <p className="text-gray-500 mt-1">+256 800 123 456</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7 bg-[#FDF8F0] rounded-[40px] p-8 md:p-14"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              
              {/* Category Selection (Pills) */}
              <div className="space-y-4">
                <label className="text-sm font-bold text-gray-900 uppercase tracking-wider">How can we help?</label>
                <div className="flex flex-wrap gap-3">
                  {helpCategories.map((cat) => {
                    const isSelected = selectedCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                          isSelected 
                            ? 'bg-[#22C55E] text-white shadow-lg shadow-green-500/20' 
                            : 'bg-white text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        {cat.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-sm font-bold text-gray-900 uppercase tracking-wider">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#22C55E] focus:outline-none transition-all placeholder:text-gray-400"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-gray-900 uppercase tracking-wider">Phone Number</label>
                  <div className="relative">
                    <span className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-900 font-bold">+256</span>
                    <input 
                      type="tel" 
                      placeholder="700 000 000"
                      className="w-full bg-white rounded-2xl pl-20 pr-6 py-4 focus:ring-2 focus:ring-[#22C55E] focus:outline-none transition-all placeholder:text-gray-400"
                    />
                  </div>
                </div>
              </div>

              {/* Conditional Field based on category */}
              <AnimatePresence mode="wait">
                {selectedCategory === 'medical' && (
                  <motion.div 
                    key="medical"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-3 overflow-hidden"
                  >
                    <label className="text-sm font-bold text-gray-900 uppercase tracking-wider">Diagnosis / Condition</label>
                    <input 
                      type="text" 
                      placeholder="e.g., Stage 2 Leukemia"
                      className="w-full bg-white rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#22C55E] focus:outline-none transition-all placeholder:text-gray-400"
                    />
                  </motion.div>
                )}
                {selectedCategory === 'other' && (
                  <motion.div 
                    key="other"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-3 overflow-hidden"
                  >
                    <label className="text-sm font-bold text-gray-900 uppercase tracking-wider">Briefly describe</label>
                    <input 
                      type="text" 
                      placeholder="e.g., Legal assistance, Transport..."
                      className="w-full bg-white rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#22C55E] focus:outline-none transition-all placeholder:text-gray-400"
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="space-y-3">
                <label className="text-sm font-bold text-gray-900 uppercase tracking-wider">Your Story</label>
                <textarea 
                  placeholder="Tell us about your situation in detail..."
                  className="w-full bg-white rounded-2xl px-6 py-5 min-h-[160px] resize-y focus:ring-2 focus:ring-[#22C55E] focus:outline-none transition-all placeholder:text-gray-400"
                ></textarea>
              </div>

              <button className="group w-full bg-[#1A1A1A] text-white rounded-full py-5 font-bold tracking-widest uppercase hover:bg-[#22C55E] transition-colors flex items-center justify-center space-x-3 mt-4">
                <span>Submit Request</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
