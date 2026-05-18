import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../../../application/hooks/useScrollAnimation';
import { Card } from '../ui/Card';
import { TESTIMONIALS } from '../../../domain/constants/content';

export const Testimonial = () => {
  return (
    <section className="py-20 bg-[var(--color-bg-secondary)]" id="testimoni">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-display font-bold text-[var(--color-text-primary)]">
            Apa Kata Mereka
          </motion.h2>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
        >
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div key={idx} variants={fadeUp}>
              <Card className="p-8 h-full flex flex-col hover:border-[var(--color-accent-primary)]/50 transition-colors">
                <div className="flex-grow">
                  <div className="flex text-orange-400 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star}>★</span>
                    ))}
                  </div>
                  <p className="text-[var(--color-text-secondary)] italic mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-400 to-blue-500 flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="font-bold text-[var(--color-text-primary)]">
                    {testimonial.author}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
