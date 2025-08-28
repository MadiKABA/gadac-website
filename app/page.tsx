import React from 'react';
import HeroSection from './components/home/Hero';
import AboutGADAC from './components/home/About';
import Services from './components/home/Services';
import NotreApproche from './components/home/NotreApproche';
import Testimonials from './components/home/Testimonials';


export default function HomePage() {

  return (
    <main >
      <HeroSection />
      <AboutGADAC />
      <Services />
      <NotreApproche />
      <Testimonials />
    </main>
  );
}