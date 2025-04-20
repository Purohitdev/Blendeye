import { FaLinkedinIn, FaBehance, FaDribbble } from "react-icons/fa";

const waveSrc =
  "https://cdn.prod.website-files.com/66547507d69d70a29b5cb91e/665c40a10d97a0e199239c16_Group%201000002265.svg";

export default function Footer() {
  return (
    <div className="bg-[rgb(42,42,42)] text-white font-sans px-4 sm:px-16 relative">
      {/* Wave Section */}
      <div className="absolute w-full left-0 overflow-hidden -top-2 md:-top-8">
        <div className="wave_wrap flex w-[200%] animate-wave">
          <img src={waveSrc} alt="wave" className="w-1/2 object-cover block" />
          <img src={waveSrc} alt="wave" className="w-1/2 object-cover block" />
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center py-12 sm:py-20">
        <h1 className="text-3xl sm:text-4xl md:text-7xl font-medium leading-tight">
          Let us take care of <br /> <span className="sm:ml-0 ml-16">your design needs</span>
        </h1>
        <button className="mt-8 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition">
          Start right now
        </button>
      </div>

      {/* Footer Content */}
      <div className="px-4 sm:px-8 py-12 sm:py-16 border-t border-white flex flex-col md:flex-row justify-between items-start">
        {/* Logo */}
        <div className="text-4xl sm:text-5xl font-bold mb-6 md:mb-0">BlendEye</div>

        {/* Contact & Socials */}
        <div className="min-h-[30vh] flex flex-col justify-between gap-10 w-full md:w-[50%]">
          {/* Contact Info */}
          <div className="text-lg text-gray-300">
            <p>Have any questions? Reach out!</p>
            <p>We reply fast</p>
            <p className="text-white mt-2">hello@designthat.com</p>
          </div>

          {/* Social Cards */}
          <div className="flex flex-wrap gap-4 md:gap-8 justify-between sm:justify-start">
            {[
              { label: "LinkedIn", icon: <FaLinkedinIn size={18} /> },
              { label: "Behance", icon: <FaBehance size={18} /> },
              { label: "Dribbble", icon: <FaDribbble size={18} /> },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white text-black rounded-xl px-6 py-4 flex flex-col items-start justify-between w-44 sm:w-56 h-52 shadow hover:shadow-md transition"
              >
                <div className="text-lg font-bold mb-2 p-2 rounded-xl h-10 w-10 bg-[#2A2A2A] flex items-center justify-center text-white">
                  {item.icon}
                </div>
                <div className="text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-400 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p> © {new Date().getFullYear()} BlendEye. All rights reserved.</p>
        <div className="flex gap-3 text-gray-300">
          <p>Privacy policy</p>
          <p>Terms & conditions</p>
        </div>
      </div>
    </div>
  );
}
