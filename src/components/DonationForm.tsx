import { useState } from "react";
import { ShieldCheck } from "lucide-react";

export function DonationForm() {
  const [isMonthly, setIsMonthly] = useState(false);
  const [amount, setAmount] = useState("500");
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const presets = ["500", "10000", "50000", "100000"];

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const numericAmount = Number(amount);
  const isValidAmount = numericAmount >= 500;

  return (
    <section id="donate" className="py-16 md:py-32 bg-[#F3EFE7] text-[#0B2545]">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        
        <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden flex flex-col lg:flex-row">
          
          {/* Left Side - Info */}
          <div className="lg:w-5/12 bg-[#F3EFE7] p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tighter mb-6 text-[#0B2545]">
                Make a donation
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Your contribution directly supports our community programs. Every shilling helps us bring hope and essential services to those who need it most.
              </p>
            </div>
            
            <div className="mt-12 flex items-center space-x-3 text-[#0B2545] font-bold text-sm uppercase tracking-widest">
              <ShieldCheck className="w-5 h-5 text-[#C69C38]" />
              <span>Secure, encrypted payment</span>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:w-7/12 p-8 sm:p-12">
            {/* Frequency Toggle */}
            <div className="flex space-x-8 border-b border-gray-200 mb-6 md:mb-8">
              <button 
                onClick={() => setIsMonthly(false)}
                className={`pb-3 text-sm font-bold uppercase tracking-widest transition-colors relative ${!isMonthly ? 'text-[#0B2545]' : 'text-gray-400 hover:text-gray-600'}`}
              >
                Give Once
                {!isMonthly && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C69C38]" />}
              </button>
              <button 
                onClick={() => setIsMonthly(true)}
                className={`pb-3 text-sm font-bold uppercase tracking-widest transition-colors relative ${isMonthly ? 'text-[#0B2545]' : 'text-gray-400 hover:text-gray-600'}`}
              >
                Monthly
                {isMonthly && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C69C38]" />}
              </button>
            </div>

            {/* Amount Selection */}
            <div className="mb-6 md:mb-8">
              <label className="block text-sm font-bold text-[#0B2545] mb-3 md:mb-4 uppercase tracking-widest">Select Amount (UGX)</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-3">
                {presets.map((preset) => (
                  <button 
                    key={preset}
                    onClick={() => setAmount(preset)}
                    className={`py-4 rounded-full border font-bold text-sm uppercase tracking-widest transition-all ${
                      amount === preset 
                        ? 'border-[#C69C38] bg-[#C69C38] text-white' 
                        : 'border-gray-200 text-gray-600 hover:border-[#0B2545]'
                    }`}
                  >
                    {Number(preset).toLocaleString()}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Amount */}
            <div className="mb-6 md:mb-8">
              <label className="block text-sm font-bold text-[#0B2545] mb-2 uppercase tracking-widest">Custom Amount</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                  <span className="text-gray-500 font-bold">UGX</span>
                </div>
                <input 
                  type="number" 
                  min="500"
                  value={amount}
                  onChange={handleAmountChange}
                  className="w-full border border-gray-200 rounded-full py-4 pl-20 pr-6 text-[#0B2545] focus:outline-none focus:border-[#C69C38] transition-all"
                />
              </div>
              {!isValidAmount && amount !== "" && (
                <p className="text-red-500 text-xs mt-2 font-bold">Minimum donation amount is UGX 500</p>
              )}
            </div>

            {/* Name */}
            <div className="mb-6 md:mb-8">
              <label className="block text-sm font-bold text-[#0B2545] mb-2 uppercase tracking-widest">Your Name (Optional)</label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="How should we address you?"
                className="w-full border border-gray-200 rounded-full py-4 px-6 text-[#0B2545] focus:outline-none focus:border-[#C69C38] transition-all"
              />
            </div>

            {/* Submit Button */}
            <button 
              onClick={handleSubmit}
              disabled={!isValidAmount}
              className="w-full bg-[#C69C38] hover:bg-[#1E3A8A] disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-full py-4 font-bold text-sm uppercase tracking-widest transition-colors flex justify-center items-center"
            >
              Donate UGX {amount ? numericAmount.toLocaleString() : '0'} {isMonthly ? 'Monthly' : ''}
            </button>
          </div>
        </div>
      </div>

      {/* Thank You Modal */}
      {isSubmitted && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-[2rem] p-8 max-w-sm w-full text-center shadow-2xl">
            <div className="w-16 h-16 bg-[#C69C38]/10 rounded-full flex items-center justify-center mb-4 mx-auto">
              <ShieldCheck className="w-8 h-8 text-[#C69C38]" />
            </div>
            <h3 className="text-xl font-black text-[#0B2545] mb-2 uppercase tracking-tighter">Thank you!</h3>
            <p className="text-gray-600 text-sm mb-6">
              Your generous donation of UGX {numericAmount.toLocaleString()} {isMonthly ? 'monthly' : 'one-time'} has been received. Thank you, {name || 'kind friend'}, for your support!
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="w-full bg-[#C69C38] hover:bg-[#1E3A8A] text-white rounded-full py-3 font-bold text-xs uppercase tracking-widest transition-colors"
            >
              Make another donation
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
