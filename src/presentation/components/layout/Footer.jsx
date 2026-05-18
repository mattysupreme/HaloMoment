import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../application/hooks/useScrollAnimation';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border-custom)] bg-[var(--color-bg-primary)] py-12">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeIn}
          className="flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-2">
            <img src="/logo_halomoment.png" alt="Halo Moment Logo" className="h-10 w-auto" />
            <span className="font-display font-bold text-2xl text-[var(--color-text-primary)]">
              Halo<span className="text-[var(--color-accent-primary)]">Moment</span>
            </span>
          </div>
          <p className="text-[var(--color-text-secondary)] font-medium max-w-md">
            Creative Digital Greeting Microsite
          </p>
          <div className="mt-8 text-sm text-[var(--color-text-secondary)]">
            © {currentYear} Halo Moment. All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
