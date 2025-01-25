'use client';

import LogoWall from '@/components/ui/LogoWall/LogoWall';
import { useTranslation } from '@/app/i18n/client';

export default function Partners({ lng }: { lng: string }) {
  const { t } = useTranslation(lng, 'common');
  
  const partners = [
    { imgUrl: '/collab/catcher.png', altText: "Catcher Logo" },
    { imgUrl: '/collab/ctaiks.png', altText: "CTAIKS Logo" },
    { imgUrl: '/collab/metaera.png', altText: "Metaera Logo" },
    { imgUrl: '/collab/odaily.png', altText: "Odaily Logo" },
    { imgUrl: '/collab/plume.jpg', altText: "Plume Logo" },
    { imgUrl: '/collab/simandao.png', altText: "Simandao Logo" },
    { imgUrl: '/collab/startoken.jpg', altText: "Startoken Logo" },
    { imgUrl: '/collab/suplayer.png', altText: "Suplayer Logo" },
    { imgUrl: '/collab/cillab1.png', altText: "Xian Logo" },
    { imgUrl: '/collab/cillab2.png', altText: "Xian Logo" },
    { imgUrl: '/collab/cillab3.png', altText: "Xian Logo" },
    { imgUrl: '/collab/cillab4.png', altText: "Xian Logo" },
    { imgUrl: '/collab/cillab5.png', altText: "Xian Logo" },
    { imgUrl: '/collab/cillab6.png', altText: "Xian Logo" },
  ];
  
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-500/5 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent inline-block">
            {t('partners.title')}
          </h2>
          <p className="mt-4 text-zinc-400">{t('partners.subtitle')}</p>
        </div>

        <div className="relative w-full max-w-5xl mx-auto">
          <LogoWall
            items={partners}
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
