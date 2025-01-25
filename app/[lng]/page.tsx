'use client';

import React from 'react';
import HeroSection from '../_components/sections/HeroSection';
import StatsSection from '../_components/sections/StatsSection';
import AngelList from '../_components/sections/AngelList';
import DonationUpdates from '../_components/sections/DonationUpdates';
import Features from '../_components/sections/Features';
import Partners from '../_components/sections/Partners';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <HeroSection />
      <StatsSection />
      <AngelList />
      <DonationUpdates />
      <Features />
      <Partners />
    </main>
  );
}
