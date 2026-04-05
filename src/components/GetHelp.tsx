import { useState } from "react";
import { Phone, MapPin, CheckCircle, X } from "lucide-react";
import { Accordion } from "./Accordion";

const helpCategories = [
  { id: 'medical', label: 'Medical Care' },
  { id: 'basic', label: 'Basic Needs' },
  { id: 'education', label: 'Education' },
  { id: 'other', label: 'Other' },
];

const faqs = [
  { title: "How do I apply for assistance?", content: "You can fill out the form on this page with your details and story. Our team will review it and contact you." },
  { title: "Is there a fee for help?", content: "No, all our support services are provided free of charge to those in need." },
  { title: "How long does it take to get a response?", content: "We aim to respond to all requests within 48 hours." },
];

export function GetHelp() {
  const [selectedCategory, setSelectedCategory] = useState('medical');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="get-help" className="py-16 md:py-32 bg-white text-[#0B2545] relative">
      <div className="container mx-auto px-6 max-w-5xl">
        
        <div className="mb-12 md:mb-20 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-gray-900">
            Request Assistance
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Whether you are facing a medical emergency, struggling with basic needs, or require other forms of assistance, you don't have to face it alone. Share your story, and our support team will reach out.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-20 mb-16 md:mb-20">
          
          {/* Left Column: Form */}
          <div className="md:w-2/3">
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              
              {/* Category Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">How can we help?</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {helpCategories.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`py-3 rounded-lg border font-medium text-sm transition-colors ${
                        selectedCategory === cat.id 
                          ? 'border-[#16A34A] bg-[#16A34A]/5 text-[#16A34A]' 
                          : 'border-gray-200 text-gray-600 hover:border-gray-300'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="John Doe"
                    className="w-full border border-gray-200 rounded-lg py-3 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#16A34A]/20 focus:border-[#16A34A] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">+256</span>
                    <input 
                      type="tel" 
                      required
                      placeholder="700 000 000"
                      className="w-full border border-gray-200 rounded-lg py-3 pl-16 pr-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#16A34A]/20 focus:border-[#16A34A] transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Conditional Field based on category */}
              {selectedCategory === 'medical' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Diagnosis / Condition</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g., Stage 2 Leukemia"
                    className="w-full border border-gray-200 rounded-lg py-3 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#16A34A]/20 focus:border-[#16A34A] transition-all"
                  />
                </div>
              )}
              
              {selectedCategory === 'other' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Briefly describe</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g., Legal assistance, Transport..."
                    className="w-full border border-gray-200 rounded-lg py-3 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#16A34A]/20 focus:border-[#16A34A] transition-all"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Story</label>
                <textarea 
                  required
                  placeholder="Tell us about your situation in detail..."
                  className="w-full border border-gray-200 rounded-lg py-3 px-4 text-gray-900 min-h-[160px] resize-y focus:outline-none focus:ring-2 focus:ring-[#16A34A]/20 focus:border-[#16A34A] transition-all"
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-[#16A34A] hover:bg-[#15803d] text-white rounded-lg py-4 font-semibold transition-colors flex justify-center items-center mt-4">
                Submit Request
              </button>
              
            </form>
          </div>

          {/* Right Column: Contact Info */}
          <div className="md:w-1/3">
            <div className="bg-[#F9F8F6] rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <MapPin className="w-5 h-5 text-[#16A34A]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Head Office</h4>
                    <p className="text-gray-600 mt-1 text-sm leading-relaxed">Kampala, Uganda<br/>Serving all regions</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <Phone className="w-5 h-5 text-[#16A34A]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Phone Support</h4>
                    <p className="text-gray-600 mt-1 text-sm leading-relaxed">+256 800 123 456<br/>Mon-Fri, 8am - 5pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h3>
          {faqs.map((faq, index) => (
            <Accordion key={index} title={faq.title}>{faq.content}</Accordion>
          ))}
        </div>
      </div>

      {/* Success Modal */}
      {isSubmitted && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full relative shadow-2xl">
            <button 
              onClick={() => setIsSubmitted(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="text-center">
              <CheckCircle className="w-16 h-16 text-[#16A34A] mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted</h3>
              <p className="text-gray-600 mb-8">We have received your request and our team is reviewing it. We will be in touch shortly.</p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="w-full bg-[#16A34A] hover:bg-[#15803d] text-white rounded-lg py-3 font-semibold transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
