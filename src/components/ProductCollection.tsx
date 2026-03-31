import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function ProductCollection() {
  return (
    <section className="py-24 md:py-32 bg-[#FDF3E1] text-maton-dark">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6"
          >
            Discover the World <br />
            <span className="italic text-gray-400 font-light">of Matcha</span>
          </motion.h2>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Left Column: Stacked Mini Cards */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex items-center space-x-6 cursor-pointer group"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden bg-maton-light flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1596450514735-111a2fe02935?auto=format&fit=crop&q=80&w=200&h=200" 
                  alt="Culinary Grade" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-1 font-semibold">Everyday Use</p>
                <h4 className="font-serif text-xl mb-1">Culinary Grade</h4>
                <p className="font-mono text-maton-dark font-medium">$18</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex items-center space-x-6 cursor-pointer group"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden bg-maton-light flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?auto=format&fit=crop&q=80&w=200&h=200" 
                  alt="Premium Grade" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-1 font-semibold">Lattes & Smoothies</p>
                <h4 className="font-serif text-xl mb-1">Premium Grade</h4>
                <p className="font-mono text-maton-dark font-medium">$28</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Featured Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:col-span-8 bg-white rounded-[2.5rem] p-10 md:p-16 shadow-sm hover:shadow-xl transition-shadow flex flex-col md:flex-row items-center justify-between relative overflow-hidden group cursor-pointer"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-maton-lime/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
            
            <div className="md:w-1/2 z-10 mb-10 md:mb-0">
              <p className="text-sm uppercase tracking-widest text-maton-lime font-semibold mb-4">Best Seller</p>
              <h3 className="text-4xl md:text-5xl font-serif mb-4 leading-tight">Ceremonial Grade Matcha</h3>
              <p className="text-gray-500 font-sans mb-8 leading-relaxed">
                The highest quality matcha, crafted for traditional tea ceremonies. Vibrant green, naturally sweet, and incredibly smooth.
              </p>
              <div className="flex items-center space-x-6">
                <p className="text-3xl font-serif font-bold">$45</p>
                <button className="w-12 h-12 rounded-full bg-maton-dark text-white flex items-center justify-center hover:bg-maton-lime hover:text-maton-dark transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="md:w-1/2 flex justify-center z-10">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-maton-light shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1594847429188-713214532a24?auto=format&fit=crop&q=80&w=800&h=800" 
                  alt="Ceremonial Grade Matcha" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Row: Accessories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer group text-center"
          >
            <div className="w-full aspect-square rounded-2xl overflow-hidden bg-maton-light mb-6">
              <img 
                src="https://images.unsplash.com/photo-1582793988951-9aed550c945d?auto=format&fit=crop&q=80&w=600&h=600" 
                alt="Bamboo Whisk" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <h4 className="font-serif text-xl mb-2">Chasen (Bamboo Whisk)</h4>
            <p className="font-mono text-gray-500">$15</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer group text-center"
          >
            <div className="w-full aspect-square rounded-2xl overflow-hidden bg-maton-light mb-6">
              <img 
                src="https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?auto=format&fit=crop&q=80&w=600&h=600" 
                alt="Ceramic Mug" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <h4 className="font-serif text-xl mb-2">Artisan Chawan</h4>
            <p className="font-mono text-gray-500">$35</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer group text-center"
          >
            <div className="w-full aspect-square rounded-2xl overflow-hidden bg-maton-light mb-6">
              <img 
                src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=600&h=600" 
                alt="Tea Pot" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <h4 className="font-serif text-xl mb-2">Kyusu Tea Pot</h4>
            <p className="font-mono text-gray-500">$48</p>
          </motion.div>

        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group flex items-center justify-center space-x-2 bg-maton-lime hover:bg-maton-lime-hover text-maton-darker px-10 py-4 rounded-full font-medium transition-all duration-300"
          >
            <span>Explore All Products</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

      </div>
    </section>
  );
}
