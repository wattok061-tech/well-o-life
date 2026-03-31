import { motion } from "motion/react";
import { Leaf, Droplets, Heart } from "lucide-react";

export function Benefits() {
  return (
    <section className="py-24 md:py-32 bg-white text-maton-dark">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
          
          {/* Left: Headline */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
              Experience Wellness <br />
              <span className="italic text-gray-400 font-light">with Every Sip</span>
            </h2>
            <p className="text-gray-600 font-sans max-w-md leading-relaxed">
              Our matcha is shade-grown and stone-ground to preserve its vibrant color, rich umami flavor, and incredible health benefits. It's more than a drink; it's a daily ritual for your mind and body.
            </p>
          </motion.div>

          {/* Right: Image Tiles */}
          <div className="grid grid-cols-2 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden group"
            >
              <img 
                src="https://images.unsplash.com/photo-1596450514735-111a2fe02935?auto=format&fit=crop&q=80&w=600&h=800" 
                alt="Anti Oxidant" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-serif text-xl">Anti Oxidant</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden group mt-12"
            >
              <img 
                src="https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&q=80&w=600&h=800" 
                alt="Relax & Focus" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-serif text-xl">Relax & Focus</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section: 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-200 pt-16">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center text-center space-y-4"
          >
            <div className="w-16 h-16 rounded-full bg-maton-light flex items-center justify-center text-maton-dark mb-2">
              <Droplets className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-xl">Rich Flavor & Vibrant Color</h4>
            <p className="text-sm text-gray-500 font-sans leading-relaxed">
              Stone-ground to a fine powder, delivering a smooth, umami-rich taste and a brilliant emerald green hue.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center text-center space-y-4"
          >
            <div className="w-16 h-16 rounded-full bg-maton-light flex items-center justify-center text-maton-dark mb-2">
              <Leaf className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-xl">Authentic Japanese Matcha</h4>
            <p className="text-sm text-gray-500 font-sans leading-relaxed">
              Sourced directly from multi-generational family farms in Uji, Kyoto, the birthplace of Japanese tea culture.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-center text-center space-y-4"
          >
            <div className="w-16 h-16 rounded-full bg-maton-light flex items-center justify-center text-maton-dark mb-2">
              <Heart className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-xl">Health & Sustainability</h4>
            <p className="text-sm text-gray-500 font-sans leading-relaxed">
              Packed with L-theanine and antioxidants. We prioritize organic farming and eco-friendly packaging.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
