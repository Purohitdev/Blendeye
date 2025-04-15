
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Hero from './Hero';
import BlurSection from './BlurSection';
import Services from './Service';
import About from './About';
import Portfolio from './Portfolio';
import Work from './Work';
import Subscription from './Subscription';
import Testi from './Testi';
import Team from './Team';
import FAQSection from './Faq';
import Banner from './Banner';
import Footer from './Footer';



gsap.registerPlugin(ScrollTrigger);

function Home() {
  const purpleRef = useRef(null);
  const greenRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (purpleRef.current) {
      gsap.to(purpleRef.current, {
        y: 1600,
        x: -60,
        scale: 0.7,
        rotation: 10,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
      });
    }

    if (greenRef.current) {
      gsap.to(greenRef.current, {
        y: 1500,
        x: 40,
        scale: 0.5,
        rotation: -15,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <>
      <div ref={containerRef} className="px-4 lg:px-8 animation relative overflow-hidden min-h-[200vh]">
        <Hero />
        <BlurSection />

        {/* Floating images start below hero and animate till bottom */}
        <div className="absolute top-[80vh] md:top-[60vh] left-10 flex p-5 z-0">
        <img
            ref={purpleRef}
            src="/purple.svg"
            alt="Purple Design"
            className="w-102 h-40 md:h-100 rounded-xl object-cover rotate-[10deg] z-[90]"
          />
          <img
            ref={greenRef}
            src="/green.svg"
            alt="Green Design"
            className="w-102 h-40 md:h-100 rounded-xl object-cover rotate-[-20deg] -translate-x-30"
          />

        </div>

      </div>
      <About />
      <Services />
      <Portfolio/>
      <Work />
      <Subscription/>
      <Testi/>
      <Team/>
      <FAQSection/>
      <Banner/>
      <Footer/>
     
      
    </>
  );
}

export default Home;
