import React from 'react';
import { motion } from 'framer-motion';
import { Check, Minus } from 'lucide-react';
import { fadeUp, staggerContainer } from '../../../application/hooks/useScrollAnimation';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { PRICING_PACKAGES, CONTACT_LINK } from '../../../domain/constants/content';
import { cn } from '../../../shared/utils/cn';

export const Pricing = () => {
  return (
    <section className="py-20" id="layanan">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
        >
          <motion.span variants={fadeUp} className="text-[var(--color-accent-primary)] font-semibold mb-2 block uppercase text-sm tracking-wider">
            Paket Layanan
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-display font-bold text-[var(--color-text-primary)]">
            Pilih Paket Terbaikmu
          </motion.h2>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
        >
          {PRICING_PACKAGES.map((pkg, idx) => (
            <motion.div key={idx} variants={fadeUp} className="h-full">
              <Card 
                className={cn(
                  "p-8 h-full flex flex-col hover:-translate-y-2 relative transition-transform duration-300",
                  pkg.popular ? "border-[var(--color-accent-primary)] shadow-lg md:scale-105 z-10" : "hover:shadow-md"
                )}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge>Populer</Badge>
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                    <span className="text-[var(--color-accent-primary)]">🌙</span> {pkg.title}
                  </h3>
                  <div className="text-4xl font-display font-bold text-[var(--color-text-primary)]">
                    {pkg.price}
                  </div>
                </div>

                <div className="flex-grow">
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        {feature.included ? (
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-[var(--color-accent-primary)] mt-0.5">
                            <Check size={12} strokeWidth={3} />
                          </div>
                        ) : (
                          <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center text-[var(--color-text-secondary)] mt-0.5">
                            <Minus size={16} />
                          </div>
                        )}
                        <span className={cn(
                          "text-sm",
                          feature.included ? "text-[var(--color-text-primary)]" : "text-[var(--color-text-secondary)] line-through opacity-70"
                        )}>
                          {feature.stringValue || feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a href={CONTACT_LINK} target="_blank" rel="noopener noreferrer" className="mt-auto block w-full">
                  <Button 
                    variant={pkg.popular ? 'primary' : 'outline'} 
                    className="w-full"
                  >
                    Pilih Paket
                  </Button>
                </a>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
