import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../../../application/hooks/useScrollAnimation';
import { ORDER_STEPS } from '../../../domain/constants/content';

export const Steps = () => {
  return (
    <section className="py-20 bg-[var(--color-bg-secondary)]" id="cara-pesan">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
        >
          <motion.span variants={fadeUp} className="text-[var(--color-accent-primary)] font-semibold mb-2 block uppercase text-sm tracking-wider">
            Cara Pemesanan
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-display font-bold text-[var(--color-text-primary)]">
            Mudah & Cepat
          </motion.h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Desktop horizontal stepper */}
          <div className="hidden md:block relative">

            
            <motion.div 
              className="relative z-10 flex justify-between"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={staggerContainer}
            >
              {ORDER_STEPS.map((step) => (
                <motion.div key={step.id} variants={fadeUp} className="flex flex-col items-center w-32 relative">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-bg-primary)] border-4 border-[var(--color-accent-primary)] text-[var(--color-accent-primary)] flex items-center justify-center font-bold text-sm mb-4 shadow-sm">
                    {step.id}
                  </div>
                  <h4 className="text-sm font-bold text-center mb-1 text-[var(--color-text-primary)]">{step.title}</h4>
                  <p className="text-xs text-center text-[var(--color-text-secondary)]">{step.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Mobile vertical stepper */}
          <div className="md:hidden relative items-center justify-center flex">

            
            <motion.div 
              className="space-y-8 relative z-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={staggerContainer}
            >
              {ORDER_STEPS.map((step) => (
                <motion.div key={step.id} variants={fadeUp} className="relative">
                  <div className="absolute -left-[37px] top-0 w-6 h-6 rounded-full bg-[var(--color-bg-primary)] border-4 border-[var(--color-accent-primary)] flex items-center justify-center font-bold text-[10px] text-[var(--color-accent-primary)]">
                    {step.id}
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--color-text-primary)] mb-1">{step.title}</h4>
                    <p className="text-sm text-[var(--color-text-secondary)]">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
