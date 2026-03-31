import { motion } from "motion/react";

export function StarterKit() {
  return (
    <section className="py-24 md:py-32 bg-maton-light text-maton-dark overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif mb-4"
          >
            The Perfect Start
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto font-sans"
          >
            Everything you need to begin your daily matcha ritual, beautifully curated in one set.
          </motion.p>
        </div>

        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden bg-gray-200 group">
          <img 
            src="https://images.unsplash.com/photo-1594847429188-713214532a24?auto=format&fit=crop&q=80&w=2000&h=800" 
            alt="Matcha Starter Kit" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          
          <div className="absolute inset-0 bg-black/10"></div>

          {/* Price Anchor */}
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.3 }}
            className="absolute top-8 left-8 md:top-12 md:left-12 bg-white/90 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-xl"
          >
            <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-1">Starter Kit</p>
            <p className="text-4xl font-serif font-bold text-maton-dark">$25</p>
          </motion.div>

          {/* Callout 1: Powder */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-1/4 right-1/4 md:right-1/3 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg max-w-[200px]"
          >
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-maton-lime rounded-full border-2 border-white shadow-sm"></div>
            <h4 className="font-serif text-lg mb-1">Ceremonial Powder</h4>
            <p className="text-xs text-gray-600 font-sans">30g of stone-ground perfection.</p>
          </motion.div>

          {/* Callout 2: Whisk */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="absolute top-1/4 right-12 md:right-24 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg max-w-[200px]"
          >
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-maton-lime rounded-full border-2 border-white shadow-sm"></div>
            <h4 className="font-serif text-lg mb-1">Chasen Whisk</h4>
            <p className="text-xs text-gray-600 font-sans">Hand-carved bamboo for the perfect froth.</p>
          </motion.div>

          {/* Callout 3: Mug */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
            className="absolute bottom-12 left-12 md:bottom-24 md:left-24 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg max-w-[200px]"
          >
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-maton-lime rounded-full border-2 border-white shadow-sm"></div>
            <h4 className="font-serif text-lg mb-1">Ceramic Chawan</h4>
            <p className="text-xs text-gray-600 font-sans">Artisan crafted bowl for your daily ritual.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
