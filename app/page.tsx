'use client';

import React from 'react';
import HeroSection from './components/sections/HeroSection';
import StatsSection from './components/sections/StatsSection';
import DonationUpdates from './components/sections/DonationUpdates';
import Features from './components/sections/Features';
import Partners from './components/sections/Partners';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <HeroSection />
      <StatsSection />
      <DonationUpdates />
      <Features />
      <Partners />
    </main>
  );
}
