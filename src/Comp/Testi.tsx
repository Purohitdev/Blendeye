import { useEffect } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

const Testi = () => {
  // Predefined background colors
  const bgColors = ["#EDF3A0", "#8982EE"];

  useEffect(() => {
    // Register the Draggable plugin with GSAP
    gsap.registerPlugin(Draggable);

    // Make all testimonial boxes draggable
    document.querySelectorAll(".testimonial-card").forEach((el) => {
      const element = el as HTMLElement;
      Draggable.create(element, {
        bounds: ".testimonials-container", // Restrict dragging within the parent container
        inertia: true, // Enable inertia for smooth stopping
        throwProps: true, // Smooth start and stop with throwProps
        dragResistance: 0.2, // Resistance to dragging to give it a smoother feel
        onDrag: () => {
          // Optional: Apply custom styles or animations while dragging
        },
      });
    });
  }, []);

  return (
    <section className="w-full h-screen py-16 bg-white relative flex flex-col px-8 pb-20 testimonials-container">
      <h2 className="text-5xl md:text-7xl font-semibold text-left px-7">
        <span className="text-[#a3a3a3]">Here's </span>what others
        <br />
        <span className="font-semibold ml-8 md:ml-32">
          say about us
        </span>
      </h2>

      {/* Scattered testimonial cards */}
      <div className="relative flex-1 w-full mx-auto mt-8 min-h-[80vh]">
        {[
          {
            name: "Priya Sharma",
            quote: "KisanMel helped me double my crop yield. Truly a game-changer!",
            img: "https://randomuser.me/api/portraits/women/1.jpg",
            style: { top: "10px", left: "60px" },
          },
          {
            name: "Rajveer Singh",
            quote: "The training and tools were spot on. Very grateful to KisanMel.",
            img: "https://randomuser.me/api/portraits/men/2.jpg",
            style: { top: "80px", left: "60%" },
          },
          {
            name: "Anil Meena",
            quote: "This platform is perfect for small farmers like me to grow smart.",
            img: "https://randomuser.me/api/portraits/men/3.jpg",
            style: { top: "200px", left: "30%" },
          },
          {
            name: "Sunita Devi",
            quote: "We followed KisanMel's plantation plan and saw 3x returns!",
            img: "https://randomuser.me/api/portraits/women/4.jpg",
            style: { top: "300px", left: "5%" },
          },
          {
            name: "Meera Kumari",
            quote: "A showroom in our village helped us get tools and training fast.",
            img: "https://randomuser.me/api/portraits/women/5.jpg",
            style: { top: "350px", right: "20%" },
          },
        ].map((testimonial, index) => {
          // Randomly pick a background color for each card
          const randomBg = bgColors[Math.floor(Math.random() * bgColors.length)];

          return (
            <div
              key={index}
              className="absolute w-80 h-60 bg-cover bg-center rounded-xl shadow-lg p-4 flex flex-col items-center text-center text-[#2A2A2A] testimonial-card"
              style={{
                backgroundImage:
                  "url('https://cdn.prod.website-files.com/66547507d69d70a29b5cb91e/665d7f9b91d3b83cc07198aa_Rectangle%205.svg')",
                backgroundColor: randomBg,
                ...testimonial.style,
              }}
            >
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="w-14 h-14 rounded-full object-cover mb-2 border-2 border-white"
              />
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              <p className="text-sm mt-1 max-w-[90%]">{testimonial.quote}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testi;
