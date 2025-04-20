'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const portfolioImages = [
  'https://i.pinimg.com/736x/da/d3/2e/dad32e11ce95fb049432c14dd170df80.jpg',
  'https://i.pinimg.com/736x/b6/88/31/b68831ed5d31b7f569560a8805ff06ec.jpg',
  'https://i.pinimg.com/736x/6a/15/e7/6a15e79e9c432bc1053eadba32f3c569.jpg',
  'https://i.pinimg.com/736x/72/61/c5/7261c5a243b525c9a0c15b5d160045bd.jpg',
  'https://i.pinimg.com/736x/44/b0/46/44b046035a9987a641ee3b34fd25d338.jpg',
  'https://i.pinimg.com/736x/bc/8c/fd/bc8cfdf5f01d649ac8a22f377a162ce1.jpg'
];

export default function Portfolio() {
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const col1 = col1Ref.current;
    const col2 = col2Ref.current;

    if (!col1 || !col2) return;

    gsap.to(col1, {
      y: -100, // col1 scrolls upwards
      ease: 'none',
      scrollTrigger: {
        trigger: col1,
        start: 'top 10%',
        end: 'bottom top',
        scrub: true,
      },
    });

    gsap.to(col2, {
      y: 100, // col2 scrolls downwards
      ease: 'none',
      scrollTrigger: {
        trigger: col2,
        start: 'top 10%',
        end: 'bottom top',
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section className="px-4 py-16 relative overflow-hidden  pb-40">
      <h2 className="text-5xl md:text-7xl font-light text-left mb-12 px-7">
        <span className="text-[#a3a3a3]">Check out </span> <br />
        <span className="font-semibold text-[#2a2a2a] ml-8 md:ml-32">our portfolio</span>
      </h2>

      <div className="flex flex-col md:flex-row gap-6 justify-center px-12 relative">
        {/* Column 1 - scrolls up */}
        <div className="flex flex-col gap-8" ref={col1Ref}>
          {portfolioImages.slice(0, 3).map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`portfolio ${i + 1}`}
              className="w-full rounded-2xl shadow-md"
            />
          ))}
        </div>

        {/* Column 2 - scrolls down */}
        <div className="flex flex-col gap-8" ref={col2Ref}>
          {portfolioImages.slice(3).map((img, i) => (
            <img
              key={i + 3}
              src={img}
              alt={`portfolio ${i + 4}`}
              className="w-full rounded-2xl shadow-md"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
