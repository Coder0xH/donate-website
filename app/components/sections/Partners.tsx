'use client';

import LogoWall from '../LogoWall/LogoWall';

export default function Partners() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-500/5 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent inline-block">
            合作伙伴
          </h2>
          <p className="mt-4 text-zinc-400">我们与众多知名机构合作，共同推动公益事业</p>
        </div>

        <div className="relative w-full max-w-5xl mx-auto">
          <LogoWall
            items={Array(6).fill({ imgUrl: '/logos/solana-logo.svg', altText: "Solana Logo" })}
            direction="horizontal"
            pauseOnHover={true}
            size="clamp(6rem, 1rem + 15vmin, 15rem)"
            duration="30s"
            bgColor="transparent"
            bgAccentColor="rgba(0, 231, 255, 0.1)"
          />
        </div>
      </div>
    </section>
  );
}