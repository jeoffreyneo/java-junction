// src/Navbar.js
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // ✅ Icon library (works automatically in most setups)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#3E2723]/90 backdrop-blur-md border-b border-[#5D4037]/50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <h1 className="text-2xl font-bold text-[#EFEBE9] tracking-wide">
          Java Junction
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-[#EFEBE9] font-medium">
          <li><a href="#hero" onClick={closeMenu} className="hover:text-[#D7CCC8] transition-colors">Home</a></li>
          <li><a href="#about" onClick={closeMenu} className="hover:text-[#D7CCC8] transition-colors">About Us</a></li>
          <li><a href="#services" onClick={closeMenu} className="hover:text-[#D7CCC8] transition-colors">Services</a></li>
          <li><a href="#pricing" onClick={closeMenu} className="hover:text-[#D7CCC8] transition-colors">Pricing</a></li>
          <li><a href="#joinus" onClick={closeMenu} className="hover:text-[#D7CCC8] transition-colors">Join Us</a></li>
          <li><a href="#membership" onClick={closeMenu} className="hover:text-[#D7CCC8] transition-colors">Membership</a></li>
          <li><a href="#contact" onClick={closeMenu} className="hover:text-[#D7CCC8] transition-colors">Contact</a></li>
        </ul>

        {/* Mobile Toggle Button */}
        <button
          onClick={handleToggle}
          className="md:hidden text-[#EFEBE9] hover:text-[#D7CCC8] focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#4E342E]/95 border-t border-[#5D4037]/50 backdrop-blur-md shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-6 text-[#EFEBE9] font-medium">
            <li><a href="#hero" onClick={closeMenu} className="hover:text-[#D7CCC8] transition-colors">Home</a></li>
            <li><a href="#about" onClick={closeMenu} className="hover:text-[#D7CCC8] transition-colors">About Us</a></li>
            <li><a href="#services" onClick={closeMenu} className="hover:text-[#D7CCC8] transition-colors">Services</a></li>
            <li><a href="#pricing" onClick={closeMenu} className="hover:text-[#D7CCC8] transition-colors">Pricing</a></li>
            <li><a href="#joinus" onClick={closeMenu} className="hover:text-[#D7CCC8] transition-colors">Join Us</a></li>
            <li><a href="#membership" onClick={closeMenu} className="hover:text-[#D7CCC8] transition-colors">Membership</a></li>
            <li><a href="#contact" onClick={closeMenu} className="hover:text-[#D7CCC8] transition-colors">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
