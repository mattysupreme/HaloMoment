import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Pricing } from '../components/sections/Pricing';
import { Steps } from '../components/sections/Steps';
import { Portfolio } from '../components/sections/Portfolio';
import { Testimonial } from '../components/sections/Testimonial';
import { CTA } from '../components/sections/CTA';

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Pricing />
        <Steps />
        <Portfolio />
        <Testimonial />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};
