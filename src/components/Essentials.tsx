import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export function Essentials() {
  return (
    <section className="py-24 md:py-32 bg-white text-maton-dark">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif mb-4"
          >
            Matcha Pairing Essentials
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 font-sans max-w-xl mx-auto"
          >
            Elevate your matcha experience with our carefully crafted blends designed for lattes and baking.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative rounded-3xl overflow-hidden cursor-pointer"
          >
            <div className="aspect-[4/3] w-full bg-maton-light">
              <img 
                src="https://images.unsplash.com/photo-1536514072410-5019a3c69182?auto=format&fit=crop&q=80&w=1200&h=900" 
                alt="Matcha Latte Mix" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 flex items-end justify-between">
              <div className="text-white">
                <p className="text-sm uppercase tracking-widest text-maton-lime font-semibold mb-2">Sweetened Blend</p>
                <h3 className="text-3xl md:text-4xl font-serif mb-2">Matcha Latte Mix</h3>
                <p className="text-gray-300 font-sans max-w-xs">Perfectly balanced with organic cane sugar for café-style lattes at home.</p>
              </div>
              
              <div className="flex flex-col items-end space-y-4">
                <div className="bg-white text-maton-dark px-4 py-2 rounded-full font-mono font-bold text-lg shadow-lg">
                  $22
                </div>
                <div className="w-12 h-12 rounded-full bg-maton-lime text-maton-dark flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="group relative rounded-3xl overflow-hidden cursor-pointer"
          >
            <div className="aspect-[4/3] w-full bg-maton-light">
              <img 
                src="https://images.unsplash.com/photo-1603569283847-aa295f0d016a?auto=format&fit=crop&q=80&w=1200&h=900" 
                alt="Matcha Cake Powder" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 flex items-end justify-between">
              <div className="text-white">
                <p className="text-sm uppercase tracking-widest text-maton-lime font-semibold mb-2">Baking Grade</p>
                <h3 className="text-3xl md:text-4xl font-serif mb-2">Matcha Cake Powder</h3>
                <p className="text-gray-300 font-sans max-w-xs">Robust flavor that holds its vibrant color and taste even after baking.</p>
              </div>
              
              <div className="flex flex-col items-end space-y-4">
                <div className="bg-white text-maton-dark px-4 py-2 rounded-full font-mono font-bold text-lg shadow-lg">
                  $18
                </div>
                <div className="w-12 h-12 rounded-full bg-maton-lime text-maton-dark flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
