
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const texts = [
  "Design, but in a more efficient and simplified way",
  "Build modern UI with ease and performance",
  "Empower your vision through smart design systems",
  "Animate beautifully, code efficiently",
];

const BlurSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRefs = useRef<Array<HTMLHeadingElement | null>>([]);

  const setHeadingRef = (index: number) => (el: HTMLHeadingElement | null) => {
    headingRefs.current[index] = el;
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 5%",
          end: `+=${texts.length * 40}%`,
          scrub: true,
          pin: true,
        },
      });

      headingRefs.current.forEach((heading, i) => {
        if (!heading) return;

        // Dim all previous headings
        for (let j = 0; j < i; j++) {
          const prev = headingRefs.current[j];
          if (prev) {
            tl.to(prev, { opacity: 0, duration: 0 }, i);
          }
        }

        // Show current heading
        tl.fromTo(
          heading,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5 },
          i
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative h-[90vh] mb-10 backdrop-blur-xl bg-[rgba(42,42,42,0.05)] rounded-3xl flex justify-center items-center overflow-hidden z-[40] px-4"
    >
      {texts.map((text, index) => (
        <h1
          key={index}
          ref={setHeadingRef(index)}
          className="absolute text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl w-full sm:w-4/5 md:w-3/5 leading-snug text-[#1a1a1a] px-2 transition-opacity duration-500"
        >
          {text}
        </h1>
      ))}
    </div>
  );
};

export default BlurSection;
