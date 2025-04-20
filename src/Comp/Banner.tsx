import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Banner() {
  const bannerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (bannerRef.current) {
      gsap.fromTo(
        bannerRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: bannerRef.current,
            start: "top 85%", // when the top of banner hits 85% of viewport
            toggleActions: "play none none none", // only play once
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={bannerRef}
      className="bg-[#E9FF94] rounded-[2rem] text-center px-6 py-12 md:py-16 max-w-5xl mx-auto my-20"
    >
      <h2 className="text-2xl md:text-4xl font-medium leading-snug">
        If you’re a marketing agency owner, reach out to us, <br />
        as we have a limited special offer for you!
      </h2>
      <p className="mt-4 text-gray-700 text-sm md:text-base italic">
        (you’re gonna like it)
      </p>
      <button className="mt-8 px-8 py-3 bg-black text-white text-base font-semibold rounded-full hover:scale-105 transition-transform">
        Reach out
      </button>
    </section>
  );
}
