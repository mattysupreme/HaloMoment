import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../../../application/hooks/useScrollAnimation';
import { Button } from '../ui/Button';
import { CONTACT_LINK } from '../../../domain/constants/content';

export const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-blue-600 opacity-10 dark:opacity-20 animate-gradient-shift"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="max-w-3xl mx-auto"
        >
          <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-display font-bold text-[var(--color-text-primary)] mb-6">
            Buat Momenmu Lebih Berkesan
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-[var(--color-text-secondary)] mb-10 max-w-2xl mx-auto">
            Jadikan setiap ucapan lebih hidup dengan microsite interaktif dari Halo Moment.
          </motion.p>
          <motion.div variants={fadeUp}>
            <a href={CONTACT_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="px-12 py-6 text-xl shadow-xl shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-1">
                Pesan Sekarang
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 15s ease infinite;
        }
      `}} />
    </section>
  );
};
