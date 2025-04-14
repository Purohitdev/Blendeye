import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 h-[10vh] flex items-center justify-between px-4 sm:px-6 py-4">
      {/* Logo */}
      <div className="text-2xl font-bold text-[#2A2A2A]">Blend Eye</div>

      {/* Desktop Nav */}
      <div className="hidden lg:flex items-center ga">
        <div className="flex items-center backdrop-blur-md bg-[#2A2A2A0D] rounded-xl px-6 py-2 gap-6 text-[#2A2A2A] text-sm font-medium">
          {['About', 'Services', 'Work', 'Benefits', 'FAQs', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-black transition-colors duration-200">
              {item}
            </a>
          ))}
        </div>
        <button className="ml-4 bg-[#2A2A2A] text-white text-sm font-light rounded-full px-4 py-2 hover:bg-gray-800 transition-all duration-200">
          See plans
        </button>
      </div>

      {/* Mobile Hamburger */}
      <div className="lg:hidden text-2xl text-[#2A2A2A] cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-[10vh] left-0 w-full bg-white/90 backdrop-blur-md flex flex-col items-center gap-4 py-6 z-40 shadow-md text-[#2A2A2A]">
          {['About', 'Services', 'Work', 'Benefits', 'FAQs', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-black transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="bg-[#2A2A2A] text-white font-light text-sm rounded-full px-6 py-2 hover:bg-gray-800 transition-all duration-200">
            See plans
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
