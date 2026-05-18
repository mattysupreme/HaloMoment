import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../../../application/hooks/useScrollAnimation';
import { Card } from '../ui/Card';
import { FEATURES, CREATE_MISSION } from '../../../domain/constants/content';

export const About = () => {
  return (
    <section className="py-20 bg-[var(--color-bg-secondary)]" id="tentang">
      <div className="container mx-auto px-4">
        {/* Features Sub-section */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
        >
          <motion.span variants={fadeUp} className="text-[var(--color-accent-primary)] font-semibold mb-2 block uppercase text-sm tracking-wider">
            Tentang Kami
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-display font-bold text-[var(--color-text-primary)] mb-6">
            Mengubah Cara Orang Menyampaikan Ucapan
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[var(--color-text-secondary)] text-lg">
            Bukan sekadar pesan teks, tetapi pengalaman digital yang interaktif dan berkesan melalui microsite yang dirancang khusus untuk setiap momen.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
        >
          {FEATURES.map((feature, idx) => (
            <motion.div key={idx} variants={fadeUp}>
              <Card className="h-full p-8 hover:scale-[1.02] hover:shadow-md">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center mb-6 text-[var(--color-accent-primary)]">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{feature.title}</h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission Sub-section */}
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h3 variants={fadeUp} className="text-3xl font-display font-bold mb-4">
              Misi Kami: <span className="text-[var(--color-accent-primary)]">C.R.E.A.T.E</span>
            </motion.h3>
            <motion.p variants={fadeUp} className="text-[var(--color-text-secondary)]">
              Menjadi platform penyedia microsite greeting yang inovatif dan berkesan.
            </motion.p>
          </motion.div>

          <motion.div 
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
          >
            {CREATE_MISSION.map((item, idx) => (
              <motion.div key={idx} variants={fadeUp}>
                <div className="flex flex-col sm:flex-row gap-4 p-6 rounded-2xl bg-[var(--color-bg-primary)] border border-[var(--color-border-custom)] hover:border-[var(--color-accent-primary)] transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-orange-100 dark:bg-orange-900/30 text-[var(--color-accent-primary)] font-display font-bold text-2xl rounded-xl">
                    {item.letter}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">{item.word}</h4>
                    <p className="text-[var(--color-text-secondary)]">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
