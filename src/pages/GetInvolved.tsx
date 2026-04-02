import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { PageWrapper } from "../components/PageWrapper";
import { motion } from "motion/react";
import { ArrowUpRight, Users, Briefcase, HeartHandshake, CheckCircle2 } from "lucide-react";

export function GetInvolved() {
  const [formType, setFormType] = useState("volunteer");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <>
      <Navbar />
      <PageWrapper>
        {/* Warm beige background matching the reference */}
        <main className="bg-[#F3EFE7] min-h-screen text-[#111111] pb-24">
          
          {/* Hero Section - Mobile First Typography with Inline Image */}
          <section className="pt-32 pb-12 px-4 sm:px-6 md:px-12 flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full max-w-5xl flex flex-col items-center"
            >
              {/* Small Tag */}
              <div className="bg-[#E8F5E9] text-[#10B981] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-8">
                Get Involved
              </div>

              {/* Massive Typography with Inline Pill Image */}
              <div className="flex flex-col items-center justify-center w-full">
                <h1 className="text-[16vw] sm:text-[12vw] md:text-[9vw] lg:text-[110px] font-black tracking-tighter leading-[0.85] uppercase">
                  Make Your
                </h1>
                
                <div className="flex items-center justify-center gap-2 sm:gap-4 my-2 sm:my-4 w-full">
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                    className="w-[40vw] sm:w-[30vw] md:w-[250px] h-[12vw] sm:h-[9vw] md:h-[80px] rounded-full overflow-hidden shrink-0"
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1593113514676-5fa3368252f5?auto=format&fit=crop&q=80&w=800" 
                      alt="Volunteers" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                  <h1 className="text-[16vw] sm:text-[12vw] md:text-[9vw] lg:text-[110px] font-black tracking-tighter leading-[0.85] uppercase">
                    Impact
                  </h1>
                </div>
              </div>

              <p className="mt-8 text-base sm:text-lg md:text-xl text-gray-600 font-medium max-w-2xl px-4">
                Whether you have a few hours a month or want to build a long-term partnership, there is a place for you here.
              </p>
            </motion.div>
          </section>

          {/* Pathways Section - Reference Card Style */}
          <section className="py-8 px-4 sm:px-6 md:px-12">
            <div className="container mx-auto max-w-6xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                
                {/* Card 1: Volunteering */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-[2.5rem] p-8 sm:p-10 flex flex-col relative group cursor-pointer hover:shadow-xl transition-shadow duration-300"
                  onClick={() => {
                    setFormType('volunteer');
                    document.getElementById('action-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <div className="w-12 h-12 bg-[#F3EFE7] rounded-full flex items-center justify-center mb-6 text-[#111]">
                    <Users className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 tracking-tight">Become a Volunteer</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-16">
                    Join our team to support cancer patients. We need Patient Drivers, Event Organizers, and Social Media helpers.
                  </p>
                  <div className="absolute bottom-8 right-8 w-12 h-12 border border-gray-200 rounded-full flex items-center justify-center group-hover:bg-[#10B981] group-hover:border-[#10B981] group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </motion.div>

                {/* Card 2: Corporate */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-white rounded-[2.5rem] p-8 sm:p-10 flex flex-col relative group cursor-pointer hover:shadow-xl transition-shadow duration-300"
                  onClick={() => {
                    setFormType('partner');
                    document.getElementById('action-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <div className="w-12 h-12 bg-[#F3EFE7] rounded-full flex items-center justify-center mb-6 text-[#111]">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 tracking-tight">Partner With Us</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-16">
                    Align your business with a meaningful cause through event sponsorships, donation matching, or pro-bono services.
                  </p>
                  <div className="absolute bottom-8 right-8 w-12 h-12 border border-gray-200 rounded-full flex items-center justify-center group-hover:bg-[#10B981] group-hover:border-[#10B981] group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </motion.div>

                {/* Card 3: Fundraise */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-[2.5rem] p-8 sm:p-10 flex flex-col relative group cursor-pointer hover:shadow-xl transition-shadow duration-300"
                  onClick={() => {
                    setFormType('fundraise');
                    document.getElementById('action-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <div className="w-12 h-12 bg-[#F3EFE7] rounded-full flex items-center justify-center mb-6 text-[#111]">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 tracking-tight">Start a Fundraiser</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-16">
                    Turn your passion into purpose. Donate your birthday or run a marathon to mobilize your network for our mission.
                  </p>
                  <div className="absolute bottom-8 right-8 w-12 h-12 border border-gray-200 rounded-full flex items-center justify-center group-hover:bg-[#10B981] group-hover:border-[#10B981] group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </motion.div>

              </div>
            </div>
          </section>

          {/* Action Form - Reference Style (Clean, White, Rounded) */}
          <section id="action-form" className="py-12 px-4 sm:px-6 md:px-12">
            <div className="container mx-auto max-w-2xl">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[2.5rem] p-6 sm:p-10 shadow-sm"
              >
                <div className="text-center mb-8">
                  <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-2">Join Our Team</h2>
                  <p className="text-gray-500 text-sm">Fill out the details below to get started.</p>
                </div>

                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-20 h-20 bg-[#E8F5E9] rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-[#10B981]" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                    <p className="text-gray-500">We've received your application and will be in touch shortly.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    
                    {/* Toggle/Select for Type */}
                    <div className="bg-[#F3EFE7] p-1.5 rounded-full flex relative mb-8">
                      <button 
                        type="button"
                        onClick={() => setFormType('volunteer')}
                        className={`flex-1 py-3 rounded-full text-sm font-bold transition-all ${formType === 'volunteer' ? 'bg-white shadow-sm text-[#111]' : 'text-gray-500 hover:text-[#111]'}`}
                      >
                        Volunteer
                      </button>
                      <button 
                        type="button"
                        onClick={() => setFormType('partner')}
                        className={`flex-1 py-3 rounded-full text-sm font-bold transition-all ${formType === 'partner' ? 'bg-white shadow-sm text-[#111]' : 'text-gray-500 hover:text-[#111]'}`}
                      >
                        Partner
                      </button>
                      <button 
                        type="button"
                        onClick={() => setFormType('fundraise')}
                        className={`flex-1 py-3 rounded-full text-sm font-bold transition-all ${formType === 'fundraise' ? 'bg-white shadow-sm text-[#111]' : 'text-gray-500 hover:text-[#111]'}`}
                      >
                        Fundraise
                      </button>
                    </div>

                    {/* Dynamic Role Selection for Volunteers */}
                    {formType === 'volunteer' && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mb-4">
                        <select defaultValue="" className="w-full bg-white border border-gray-200 rounded-2xl py-4 px-5 text-gray-900 text-sm font-medium focus:outline-none focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981] transition-all appearance-none cursor-pointer">
                          <option value="" disabled>Select a role...</option>
                          <option value="driver">Patient Driver</option>
                          <option value="event">Event Organizer</option>
                          <option value="social">Social Media & Comms</option>
                          <option value="medical">Medical Professional (Pro-Bono)</option>
                          <option value="other">General / Other Skills</option>
                        </select>
                      </motion.div>
                    )}

                    {/* Inputs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <input required type="text" placeholder="First Name" className="w-full bg-white border border-gray-200 rounded-2xl py-4 px-5 text-gray-900 text-sm font-medium focus:outline-none focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981] transition-all placeholder-gray-400" />
                      <input required type="text" placeholder="Last Name" className="w-full bg-white border border-gray-200 rounded-2xl py-4 px-5 text-gray-900 text-sm font-medium focus:outline-none focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981] transition-all placeholder-gray-400" />
                    </div>

                    <input required type="email" placeholder="Email Address" className="w-full bg-white border border-gray-200 rounded-2xl py-4 px-5 text-gray-900 text-sm font-medium focus:outline-none focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981] transition-all placeholder-gray-400" />
                    
                    <input type="tel" placeholder="Phone Number (Optional)" className="w-full bg-white border border-gray-200 rounded-2xl py-4 px-5 text-gray-900 text-sm font-medium focus:outline-none focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981] transition-all placeholder-gray-400" />

                    <textarea 
                      rows={3} 
                      placeholder={formType === 'partner' ? "Tell us about your company..." : "Tell us a bit about yourself..."}
                      className="w-full bg-white border border-gray-200 rounded-2xl py-4 px-5 text-gray-900 text-sm font-medium focus:outline-none focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981] transition-all placeholder-gray-400 resize-none"
                    ></textarea>

                    {/* Submit Button */}
                    <button type="submit" className="w-full bg-[#10B981] text-white rounded-full py-4 font-bold text-sm tracking-wide hover:bg-[#0EA5E9] transition-colors mt-4 flex items-center justify-center gap-2">
                      SUBMIT APPLICATION
                    </button>

                  </form>
                )}
              </motion.div>
            </div>
          </section>

        </main>
      </PageWrapper>
      <Footer />
    </>
  );
}
