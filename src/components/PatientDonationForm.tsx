import { useState } from "react";
import { Share2, Facebook, Twitter, MessageCircle, X, ShieldCheck } from "lucide-react";

export function PatientDonationForm({ patientName }: { patientName: string }) {
  const [isMonthly, setIsMonthly] = useState(false);
  const [amount, setAmount] = useState("500");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const presets = ["500", "10000", "50000", "100000"];

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleDonate = () => {
    setSubmitted(true);
  };

  const numericAmount = Number(amount);
  const isValidAmount = numericAmount >= 500;

  const shareText = `I just donated to support ${patientName}'s journey! Join me in making a difference.`;
  const shareUrl = window.location.href;

  return (
    <>
      <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
        {/* Frequency Toggle */}
        <div className="flex space-x-8 border-b border-gray-200 mb-8">
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
        <div className="mb-8">
          <label className="block text-sm font-bold text-[#0B2545] mb-4 uppercase tracking-widest">Select Amount (UGX)</label>
          <div className="grid grid-cols-2 gap-3">
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
        <div className="mb-8">
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
        <div className="mb-8">
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
          onClick={handleDonate}
          disabled={!isValidAmount}
          className="w-full bg-[#C69C38] hover:bg-[#1E3A8A] disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-full py-4 font-bold text-sm uppercase tracking-widest transition-colors flex justify-center items-center"
        >
          Support {patientName}
        </button>
      </div>

      {/* Success Modal */}
      {submitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white text-gray-900 rounded-[2rem] p-8 shadow-2xl max-w-sm w-full text-center relative">
            <button onClick={() => setSubmitted(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
              <X className="w-5 h-5" />
            </button>
            <div className="w-16 h-16 bg-[#C69C38]/10 rounded-full flex items-center justify-center mb-4 mx-auto">
              <ShieldCheck className="w-8 h-8 text-[#C69C38]" />
            </div>
            <h2 className="text-xl font-black text-[#0B2545] mb-2 uppercase tracking-tighter">Thank You!</h2>
            <p className="text-gray-600 text-sm mb-6">
              Your generous donation of UGX {numericAmount.toLocaleString()} {isMonthly ? 'monthly' : 'one-time'} makes a real difference for {patientName}. Thank you, {name || 'kind friend'}!
            </p>
            
            <div className="flex items-center justify-center gap-3 mb-4">
              <Share2 className="w-4 h-4 text-[#C69C38]" />
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#0B2545]">Spread the Hope</h3>
            </div>
            
            <div className="flex justify-center gap-3">
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                <Facebook className="w-5 h-5 text-blue-600" />
              </a>
              <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                <Twitter className="w-5 h-5 text-sky-500" />
              </a>
              <a href={`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                <MessageCircle className="w-5 h-5 text-green-500" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
