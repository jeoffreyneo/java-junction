import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Pricing", href: "#pricing" },
    { name: "Join Us", href: "#join" },
    { name: "Membership", href: "#membership" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md border-b border-cyan-500/30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-extrabold text-cyan-400 tracking-widest drop-shadow-lg">
          JAVA JUNCTION
        </h1>

        {/* Desktop */}
        <div className="hidden md:flex space-x-8 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-cyan-400 after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu */}
        <button
          className="md:hidden text-cyan-400 text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0A0A20]/95 text-center py-4 space-y-4 border-t border-cyan-500/20">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
