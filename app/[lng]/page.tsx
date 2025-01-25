import React from 'react';
import HeroSection from '../_components/sections/HeroSection';
import StatsSection from '../_components/sections/StatsSection';
import AngelList from '../_components/sections/AngelList';
import DonationUpdates from '../_components/sections/DonationUpdates';
import Features from '../_components/sections/Features';
import Partners from '../_components/sections/Partners';

export default async function Home({ 
  params 
}: { 
  params: Promise<{ lng: string }> 
}) {
  // 等待参数加载完成
  const resolvedParams = await params;
  const { lng } = resolvedParams;

  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <HeroSection lng={lng} />
      <StatsSection lng={lng} />
      <AngelList lng={lng} />
      <DonationUpdates lng={lng} />
      <Features lng={lng} />
      <Partners lng={lng} />
    </main>
  );
}
