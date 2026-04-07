import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { PageWrapper } from "../components/PageWrapper";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { useNews } from "../hooks/useNews";
import { useStories } from "../hooks/useStories";

export function NewsEvents() {
  const [activeTab, setActiveTab] = useState<'news' | 'stories'>('news');
  const { news: updates, loading: newsLoading, error: newsError } = useNews();
  const { stories, loading: storiesLoading, error: storiesError } = useStories();

  return (
    <>
      <Navbar />
      <PageWrapper>
        <main className="pt-24 md:pt-32 pb-12 md:pb-20 bg-[#F9F8F6] min-h-screen">
          <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
            <div className="flex flex-col items-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-8 text-gray-900 text-center">
                News & Stories
              </h1>
              
              {/* Tabs */}
              <div className="flex flex-wrap justify-center gap-2 space-x-0 sm:space-x-2 bg-white p-1.5 rounded-3xl sm:rounded-full border border-gray-200 shadow-sm">
                <button
                  onClick={() => setActiveTab('news')}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all ${
                    activeTab === 'news' 
                      ? 'bg-[#C69C38] text-white shadow-md' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  Latest Updates
                </button>
                <button
                  onClick={() => setActiveTab('stories')}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all ${
                    activeTab === 'stories' 
                      ? 'bg-[#C69C38] text-white shadow-md' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  Patient Stories
                </button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {activeTab === 'news' ? (
                <motion.div
                  key="news"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {newsLoading ? (
                    <div className="text-center py-12 text-gray-600">Loading updates...</div>
                  ) : newsError || !updates || updates.length === 0 ? (
                    <div className="text-center py-12 text-gray-600">No updates available at the moment.</div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {updates.map((update) => (
                        <Link to={`/update/${update.id}`} key={update.id} className="flex flex-col group cursor-pointer">
                          <div className="w-full aspect-[16/9] mb-5 overflow-hidden relative rounded-[32px]">
                            <img 
                              src={update.imageUrl || update.image} 
                              alt={update.title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          <span className="text-sm text-gray-500 mb-2 font-medium">{update.date}</span>
                          <h3 className="text-xl font-bold leading-snug text-gray-800 group-hover:text-[#C69C38] transition-colors">
                            {update.title}
                          </h3>
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="stories"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {storiesLoading ? (
                    <div className="text-center py-12 text-gray-600">Loading stories...</div>
                  ) : storiesError || !stories || stories.length === 0 ? (
                    <div className="text-center py-12 text-gray-600">No stories available at the moment.</div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {stories.map((story) => (
                        <div key={story.id} className="flex flex-col bg-white rounded-[32px] overflow-hidden shadow-sm border border-gray-100 group">
                          <div className="w-full aspect-[4/3] overflow-hidden relative">
                            <img 
                              src={story.imageUrl || story.image} 
                              alt={story.title || story.name}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800">
                              {story.percent} Funded
                            </div>
                          </div>
                          <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-gray-900 mb-1">{story.title || story.name}</h3>
                            <p className="text-sm text-[#C69C38] font-semibold mb-4">{story.diagnosis}</p>
                            <p className="text-gray-600 text-sm line-clamp-3 mb-6 flex-grow">
                              {story.story}
                            </p>
                            
                            <div className="space-y-2 mb-6">
                              <div className="flex justify-between text-sm font-medium">
                                <span className="text-gray-900">{story.raised}</span>
                                <span className="text-gray-500">of {story.goal}</span>
                              </div>
                              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-[#C69C38] rounded-full"
                                  style={{ width: `${story.progress || 0}%` }}
                                />
                              </div>
                            </div>

                            <Link 
                              to={`/patient/${story.id}`}
                              className={`w-full py-3 rounded-xl border-2 font-bold text-center transition-colors block ${
                                (story.progress || 0) >= 100
                                  ? 'border-[#C69C38] bg-[#C69C38]/10 text-[#C69C38] hover:bg-[#C69C38] hover:text-white'
                                  : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
                              }`}
                            >
                              {(story.progress || 0) >= 100 ? 'Fully Funded - Read Story' : `Support ${(story.title || story.name || '').split(',')[0]}`}
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>
      </PageWrapper>
      <Footer />
    </>
  );
}
