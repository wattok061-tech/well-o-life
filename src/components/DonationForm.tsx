import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Check } from "lucide-react";

export function DonationForm() {
  const [isMonthly, setIsMonthly] = useState(true);
  const [amount, setAmount] = useState("550");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [name, setName] = useState("Adam Cooper Jr.");
  const [agreedToTerms, setAgreedToTerms] = useState(true);

  const presets = ["10", "25", "50", "100"];

  return (
    <section className="relative py-24 md:py-32 bg-[#F3EBE1] text-[#1A1A1A] overflow-hidden min-h-screen flex flex-col items-center justify-center">
      
      {/* Background Hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
        {/* Left Heart */}
        <svg 
          className="absolute -left-20 md:left-10 top-1/2 -translate-y-1/2 w-[600px] h-[600px] text-[#FDF8F0] opacity-70" 
          viewBox="0 0 24 24" 
          fill="currentColor"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
        {/* Right Heart */}
        <svg 
          className="absolute -right-20 md:right-10 top-1/2 -translate-y-1/3 w-[800px] h-[800px] text-[#FDF8F0] opacity-70" 
          viewBox="0 0 24 24" 
          fill="currentColor"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        
        {/* Main Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white rounded-[40px] p-8 md:p-12 w-full max-w-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)]"
        >
          <h2 className="text-2xl font-bold text-center mb-8">Choose amount</h2>

          {/* Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-10">
            <span className={`text-sm font-semibold transition-colors ${!isMonthly ? 'text-gray-900' : 'text-gray-400'}`}>
              One-Time Donation
            </span>
            <button 
              onClick={() => setIsMonthly(!isMonthly)}
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 ease-in-out flex items-center px-1 ${isMonthly ? 'bg-[#E8F5E9]' : 'bg-gray-200'}`}
            >
              <div 
                className={`w-5 h-5 rounded-full shadow-sm transition-transform duration-300 ease-in-out ${isMonthly ? 'translate-x-7 bg-[#22C55E]' : 'translate-x-0 bg-white'}`} 
              />
            </button>
            <span className={`text-sm font-semibold transition-colors ${isMonthly ? 'text-gray-900' : 'text-gray-400'}`}>
              Monthly Support <span className="text-[#22C55E]">♥</span>
            </span>
          </div>

          {/* Amount Input */}
          <div className="relative mb-6">
            <div className="flex items-center bg-[#F8F9FA] rounded-2xl p-2 pl-6 border border-transparent focus-within:border-gray-200 transition-colors">
              <input 
                type="text" 
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="bg-transparent text-xl font-medium outline-none w-full text-gray-900"
              />
              <div className="flex items-center bg-white rounded-xl px-4 py-2 shadow-sm border border-gray-100 cursor-pointer">
                <span className="font-bold text-sm mr-1">USD</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Presets */}
          <div className="grid grid-cols-4 gap-3 mb-8">
            {presets.map((preset) => (
              <button 
                key={preset}
                onClick={() => setAmount(preset)}
                className={`py-3 rounded-full border text-sm font-bold transition-colors ${amount === preset ? 'border-[#22C55E] text-[#22C55E] bg-[#F0FDF4]' : 'border-gray-200 text-gray-900 hover:border-gray-300'}`}
              >
                <span className="text-gray-400 font-normal mr-0.5">$</span>{preset}
              </button>
            ))}
          </div>

          {/* Form Fields */}
          <div className="space-y-6 mb-10">
            {/* Anonymous Checkbox */}
            <label className="flex items-center space-x-3 cursor-pointer group">
              <div className={`w-6 h-6 rounded-md border flex items-center justify-center transition-colors ${isAnonymous ? 'bg-[#22C55E] border-[#22C55E]' : 'border-gray-300 group-hover:border-gray-400'}`}>
                {isAnonymous && <Check className="w-4 h-4 text-white" strokeWidth={3} />}
              </div>
              <span className="text-sm font-bold text-gray-800">Donate Anonymously</span>
              <input 
                type="checkbox" 
                className="hidden" 
                checked={isAnonymous}
                onChange={(e) => setIsAnonymous(e.target.checked)}
              />
            </label>

            {/* Name Input */}
            <div className={`transition-all duration-300 overflow-hidden ${isAnonymous ? 'h-0 opacity-0' : 'h-auto opacity-100'}`}>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="w-full border border-gray-200 rounded-2xl p-4 text-gray-900 font-medium outline-none focus:border-gray-300 transition-colors"
              />
            </div>

            {/* Terms Checkbox */}
            <label className="flex items-center space-x-3 cursor-pointer group">
              <div className={`w-6 h-6 rounded-md border flex items-center justify-center transition-colors ${agreedToTerms ? 'bg-[#22C55E] border-[#22C55E]' : 'border-gray-300 group-hover:border-gray-400'}`}>
                {agreedToTerms && <Check className="w-4 h-4 text-white" strokeWidth={3} />}
              </div>
              <span className="text-sm font-bold text-gray-800">I Agree To The Terms</span>
              <input 
                type="checkbox" 
                className="hidden" 
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
              />
            </label>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 bg-[#22C55E] hover:bg-[#16a34a] text-white rounded-full py-4 font-bold text-sm tracking-widest uppercase transition-colors shadow-sm">
              Donate
            </button>
            <button className="flex-1 bg-[#E8F5E9] hover:bg-[#C8E6C9] text-[#2E7D32] rounded-full py-4 font-bold text-sm tracking-widest uppercase transition-colors">
              Use QR Code
            </button>
          </div>
        </motion.div>

        {/* Footer Link */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 flex items-center space-x-4"
        >
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-800">Trouble with payment?</span>
          <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white hover:border-white transition-all shadow-sm">
            <ArrowUpRight className="w-4 h-4 text-gray-800" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
