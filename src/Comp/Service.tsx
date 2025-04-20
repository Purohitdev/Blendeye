"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Service {
  title: string;
  color: string;
  tags: string[];
  image: string;
}

const services: Service[] = [
  {
    title: "Web",
    color: "bg-blue-100 ",
    tags: [
      "Landing pages", "Multipage websites", "Blogs", "On-site SEO", "Webflow",
      "Animations & interactions", "Hosting", "CMS", "And more",
    ],
    image: "https://cdn.prod.website-files.com/66547507d69d70a29b5cb91e/6658cfd4077c20adfd2810fc_Macbook%20Pro%20Mockup.jpg",
  },
  {
    title: "Brand",
    color: "bg-yellow-100 ",
    tags: [
      "Ads", "Social media", "Logos", "Graphics", "Brand guides", "Posters",
      "Brochures", "Slide decks", "Buisness cards", "And more",
    ],
    image: "https://cdn.prod.website-files.com/66547507d69d70a29b5cb91e/6658cfd43cda5ce0b31fcd9f_Free_2_ID_Cards_Mockup.jpg",
  },
];

export default function Services() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const tagRefs = useRef<(HTMLSpanElement | null)[][]>([]);

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 65%",
              toggleActions: "play none none none",
            },
          }
        );

        // Animate each tag inside this card
        const tags = tagRefs.current[index];
        if (tags) {
          gsap.fromTo(
            tags,
            { opacity: 0, y: 10 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.05,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 55%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      }
    });
  }, []);

  return (
    <section className="py-16 px-8 mb-10">
      <h2 className="text-7xl font-light text-right mb-12 px-4 lg:px-30">
        <span className="text-[#a3a3a3]">Our </span>
        <span className="font-semibold text-[#2a2a2a] mr-16">services</span>
        <br />
        <span className="font-semibold text-[#2a2a2a] ">include</span>
      </h2>

      <hr className="mb-12" />

      <div className="flex flex-col lg:flex-row gap-6 justify-center text-[#2a2a2a]">
        {services.map((service, index) => (
          <div
            key={index}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}            className="relative bg-[#F4F4F4] rounded-2xl p-6 w-full lg:w-1/2 min-h-[45vh] flex flex-col justify-between"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-3xl font-medium mb-4">{service.title}</h3>
              <img
                src={service.image}
                alt={`${service.title} card`}
                className="absolute top-4 right-4 w-30 h-30 object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-wrap gap-2 w-full sm:w-3/4">
              {service.tags.map((tag, idx) => (
                <span
                  key={idx}
                  ref={(el) => {
                    if (!tagRefs.current[index]) tagRefs.current[index] = [];
                    tagRefs.current[index][idx] = el;
                  }}
                  className={`text-md px-4 py-2 rounded-full whitespace-nowrap font-light opacity-0 ${service.color}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
