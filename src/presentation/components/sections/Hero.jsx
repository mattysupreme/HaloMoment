import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, fadeIn, staggerContainer } from '../../../application/hooks/useScrollAnimation';
import { Button } from '../ui/Button';
import { HERO_STATS } from '../../../domain/constants/content';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden" id="hero">
      {/* Background gradients or subtle patterns could go here */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.p 
            variants={fadeIn}
            className="text-[var(--color-accent-primary)] font-semibold mb-4 tracking-wide text-sm md:text-base uppercase"
          >
            Creative Digital Greeting Microsite
          </motion.p>
          
          <motion.h1 
            variants={fadeUp}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-[var(--color-text-primary)] leading-[1.1] mb-6"
          >
            Buat Momenmu <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
              Lebih Berkesan
            </span>
          </motion.h1>

          <motion.p 
            variants={fadeUp}
            className="text-lg md:text-xl text-[var(--color-text-secondary)] mb-10 max-w-2xl mx-auto"
          >
            Sampaikan ucapan secara lebih kreatif, personal, dan modern melalui microsite interaktif yang dirancang khusus untuk setiap momen spesialmu.
          </motion.p>

          <motion.div 
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a href="#layanan" className="w-full sm:w-auto">
              <Button size="lg" className="w-full">Lihat Paket</Button>
            </a>
            <a href="#tentang" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full">Tentang Kami</Button>
            </a>
          </motion.div>

          <motion.div 
            variants={fadeUp}
            className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto border-t border-[var(--color-border-custom)] pt-10"
          >
            {HERO_STATS.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-3xl md:text-4xl font-display font-bold text-[var(--color-text-primary)] mb-1">
                  {stat.value}
                </span>
                <span className="text-sm md:text-base text-[var(--color-text-secondary)]">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
