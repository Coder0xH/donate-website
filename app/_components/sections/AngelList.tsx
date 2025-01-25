'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { useTranslation } from '@/app/i18n/client';

const AngelList = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng, 'common');
  const [isPaused, setIsPaused] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  
  const angels = [
    {
      id: 1,
      image: '/angels/angel1.jpg',
      name: '希漫天使 1'
    },
    {
      id: 2,
      image: '/angels/angel2.jpg',
      name: '希漫天使 2'
    },
    {
      id: 3,
      image: '/angels/angel3.jpg',
      name: '希漫天使 3'
    },
    {
      id: 4,
      image: '/angels/angel4.jpg',
      name: '希漫天使 4'
    },
    {
      id: 5,
      image: '/angels/angel5.jpg',
      name: '希漫天使 5'
    },
  ];

  return (
    <section className="w-full py-16 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl flex justify-center items-center font-bold bg-gradient-to-r from-blue-400 text-center mb-12 to-teal-400 bg-clip-text text-transparent">
          {t('angels.title')}
        </h2>
        <div className="mx-auto max-w-[90rem] px-4">
          <div 
            className="marquee-wrapper relative overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className={`flex animate-scrollX ${isPaused ? 'paused' : ''}`}>
              {angels.map((angel, index) => (
                <div 
                  key={angel.id}
                  className="flex-[0_0_calc(33.33%-1rem)] min-w-0 pl-4 md:flex-[0_0_calc(25%-1rem)] transition-transform duration-[50ms] hover:scale-105 cursor-pointer"
                  onClick={() => {
                    setPhotoIndex(index);
                    setIsOpen(true);
                  }}
                >
                  <div className="flex flex-col items-center">
                    <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                      <Image
                        src={angel.image}
                        alt={angel.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
              {/* 复制一组实现无缝效果 */}
              {angels.map((angel, index) => (
                <div 
                  key={`dup-${angel.id}`}
                  className="flex-[0_0_calc(33.33%-1rem)] min-w-0 pl-4 md:flex-[0_0_calc(25%-1rem)] transition-transform duration-[50ms] hover:scale-105 cursor-pointer"
                  onClick={() => {
                    setPhotoIndex(index);
                    setIsOpen(true);
                  }}
                >
                  <div className="flex flex-col items-center">
                    <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                      <Image
                        src={angel.image}
                        alt={angel.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={angels[photoIndex].image}
          nextSrc={angels[(photoIndex + 1) % angels.length].image}
          prevSrc={angels[(photoIndex + angels.length - 1) % angels.length].image}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + angels.length - 1) % angels.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % angels.length)
          }
        />
      )}
    </section>
  );
};

export default AngelList; 