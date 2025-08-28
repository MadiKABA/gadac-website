import React from 'react';
import HeroSection from './components/home/Hero';
import AboutGADAC from './components/home/About';
import Services from './components/home/Services';
import NotreApproche from './components/home/NotreApproche';


export default function HomePage() {

  return (
    <main >
      <HeroSection />
      <AboutGADAC />
      <Services />
      <NotreApproche />
    </main>
  );
}