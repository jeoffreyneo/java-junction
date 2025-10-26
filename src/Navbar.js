import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0a0a0f]/80 backdrop-blur-lg border-b border-cyan-500/30 shadow-[0_0_25px_#06b6d4]/30 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-extrabold text-cyan-400 tracking-wide">
          Java<span className="text-white">Junction</span>
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-4 lg:space-x-6 text-gray-300 font-medium">
          {[
            { name: "Home", link: "#hero" },
            { name: "Services", link: "#services" },
            { name: "Pricing", link: "#pricing" },
            { name: "Join Us", link: "#join" },
            { name: "Membership", link: "#membership" },
            { name: "Contact", link: "#contact" },
          ].map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className="relative inline-block px-4 py-2 text-sm uppercase tracking-wide text-gray-300 hover:text-cyan-400 transition-all duration-300 group"
              >
                <span className="absolute inset-0 border border-cyan-400/50 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-cyan-400 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0a0f]/90 border-t border-cyan-500/30 backdrop-blur-md px-6 pb-6 animate-fadeIn">
          <ul className="flex flex-col space-y-3 text-gray-300">
            {[
              { name: "Home", link: "#hero" },
              { name: "Services", link: "#services" },
              { name: "Pricing", link: "#pricing" },
              { name: "Join Us", link: "#join" },
              { name: "Membership", link: "#membership" },
              { name: "Contact", link: "#contact" },
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                  className="block text-center py-3 text-sm font-semibold uppercase tracking-wide bg-[#111122] border border-cyan-500/30 rounded-md hover:bg-cyan-500 hover:text-black transition-all duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
