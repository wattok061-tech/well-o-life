import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Heart } from "lucide-react";
import { PatientDonationForm } from "./PatientDonationForm";
import { stories } from "../data/stories";
import { useEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function PatientDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const story = stories.find(s => s.id === Number(id)) || stories[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#F9F8F6] text-[#0B2545] pt-24 md:pt-32 pb-12 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          
          {/* Back Button */}
          <button 
            onClick={() => navigate(-1)} 
            className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-gray-500 hover:text-gray-900 transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Story & Details */}
            <div className="lg:col-span-7 space-y-10">
              <div>
                <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.1] mb-4 text-gray-900">
                  Help {story.name.split(',')[0]} Conquer {story.diagnosis.split('with ')[1] || 'Their Illness'}
                </h1>
                <p className="text-lg font-medium text-[#C69C38]">
                  {story.diagnosis}
                </p>
              </div>

              <div className="rounded-[2rem] overflow-hidden shadow-sm border border-gray-100">
                <img 
                  src={story.image} 
                  alt={story.name} 
                  className="w-full h-[400px] md:h-[500px] object-cover" 
                  referrerPolicy="no-referrer" 
                />
              </div>

              <div className="prose prose-lg max-w-none text-gray-600">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About {story.name.split(',')[0]}</h2>
                <p className="mb-8 leading-relaxed">{story.story}</p>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">The Journey</h3>
                <p className="mb-8 leading-relaxed">{story.journey}</p>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">Dreams for the Future</h3>
                <p className="leading-relaxed">{story.dreams}</p>
              </div>
            </div>

            {/* Right Column: Donation Form & Progress */}
            <div className="lg:col-span-5 sticky top-32 space-y-6">
              
              {/* Progress Card */}
              <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <span className="text-3xl font-black text-gray-900">{story.raised}</span>
                    <span className="text-gray-500 ml-2 font-medium">raised of {story.goal}</span>
                  </div>
                </div>
                
                <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden mb-4">
                  <div 
                    className="bg-[#C69C38] h-full rounded-full transition-all duration-1000" 
                    style={{ width: `${story.progress}%` }}
                  ></div>
                </div>
                
                <div className="flex justify-between text-sm font-bold text-gray-500">
                  <span>{story.percent} Funded</span>
                  <span>11,542 Supporters</span>
                </div>
              </div>

              {/* Form or Success State */}
              {story.progress >= 100 ? (
                <div className="bg-white rounded-[2rem] p-10 shadow-sm border border-gray-100 text-center flex flex-col items-center justify-center">
                  <div className="w-20 h-20 bg-[#C69C38]/10 rounded-full flex items-center justify-center mb-6">
                    <Heart className="w-10 h-10 text-[#C69C38] fill-[#C69C38]" />
                  </div>
                  <h2 className="text-3xl font-black text-gray-900 mb-4 tracking-tight uppercase">Goal Reached!</h2>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    Thanks to the incredible generosity of our community, {story.name.split(',')[0]}'s treatment is fully funded.
                  </p>
                  <button 
                    onClick={() => navigate('/news-events')}
                    className="w-full bg-[#0B2545] hover:bg-gray-800 text-white rounded-full py-4 font-bold text-sm uppercase tracking-widest transition-colors"
                  >
                    Help Another Patient
                  </button>
                </div>
              ) : (
                <PatientDonationForm patientName={story.name.split(',')[0]} />
              )}
              
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
