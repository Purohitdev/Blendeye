

"use client";

import  { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const team = [
  {
    name: "Saurav",
    role: "CEO & Founder",
    skills: ["Leadership", "Vision", "Startup Strategy", "MBA (Lucknow)"],
    color: "bg-green-100",
    image: "/sir.jpeg",
  },
  {
    name: "Dev Purohit",
    role: "Frontend Developer",
    skills: ["UI/UX", "React", "Animations", "Design"],
    color: "bg-blue-100",
    image: "/me.jpg",
  },
  {
    name: "Kanishk ",
    role: "Video Editor",
    skills: ["Editing", "Storyboarding", "Reels", "Color Grading"],
    color: "bg-yellow-100",
    image: "/editor.jpeg",
  },
  {
    name: "Ravindra ",
    role: "Marketing & Ads",
    skills: ["Ad Strategy", "Social Campaigns", "Targeting", "Content"],
    color: "bg-pink-100",
    image: "/nmit.jpeg",
  },
];

export default function TeamSection() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return;

        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: i * 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-16 px-8 mt-24">
      <h2 className="text-7xl font-light text-right mb-12 px-4">
        <span className="text-[#a3a3a3]">Meet </span>
        <span className="font-semibold text-[#2a2a2a] mr-36">our team</span>
        <br />
        <span className="font-semibold text-[#2a2a2a]">behind Blendeye</span>
      </h2>

      <hr className="mb-12" />

      <div className="flex flex-col lg:flex-row lg:flex-wrap gap-6 justify-center text-[#2a2a2a]">
        {team.map((member, index) => (
          <div
            key={index}


            ref={(el) => {
              if (el)cardsRef.current[index] = el;
            }}
            className="relative bg-[#F4F4F4] rounded-2xl p-6 w-full lg:w-[23%] min-h-[40vh] flex flex-col justify-between"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-medium mb-1">{member.name}</h3>
                <p className="text-sm font-light mb-4">{member.role}</p>
              </div>
              <img
                src={member.image}
                alt={`${member.name} photo`}
                className="absolute top-4 right-4 w-16 h-16 object-cover rounded-full border-4 border-white shadow-md transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>

            <div className="flex flex-wrap gap-2 w-full">
              {member.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className={`text-sm px-3 py-1 rounded-full whitespace-nowrap font-light ${member.color}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
