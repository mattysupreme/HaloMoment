import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../../../application/hooks/useScrollAnimation';
import { Card } from '../ui/Card';
import { PORTFOLIO_CATEGORIES } from '../../../domain/constants/content';

export const Portfolio = () => {
  return (
    <section className="py-20" id="portfolio">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
        >
          <motion.span variants={fadeUp} className="text-[var(--color-accent-primary)] font-semibold mb-2 block uppercase text-sm tracking-wider">
            Contoh Produk
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-display font-bold text-[var(--color-text-primary)]">
            Apa yang Bisa Kami Buat
          </motion.h2>
        </motion.div>

        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
        >
          {PORTFOLIO_CATEGORIES.map((item, idx) => (
            <motion.div key={idx} variants={fadeUp}>
              <Card className="h-full group overflow-hidden relative p-0 border-none bg-gray-100 dark:bg-gray-800">
                {/* Image Placeholder or Background Gradient */}
                <div className="h-48 w-full bg-gradient-to-br from-orange-100 to-blue-50 dark:from-orange-900/40 dark:to-blue-900/20 flex items-center justify-center p-6 transition-transform duration-500 group-hover:scale-110">
                  <item.icon size={48} className="text-[var(--color-accent-primary)] opacity-50" />
                </div>
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                  <h3 className="text-white font-bold text-lg mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-200 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {item.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
