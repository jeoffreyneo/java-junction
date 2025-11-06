import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0a0e1a]/80 backdrop-blur-lg text-white py-4 px-6 flex justify-between items-center z-50 shadow-lg">
      <Link
        to="/"
        className="text-2xl font-extrabold text-cyan-400 drop-shadow-[0_0_10px_#00ffff]"
      >
        Java Junction
      </Link>

      <div className="hidden md:flex space-x-6">
        <a href="#hero" className="hover:text-cyan-400 transition">
          Home
        </a>
        <a href="#services" className="hover:text-cyan-400 transition">
          Services
        </a>
        <a href="#pricing" className="hover:text-cyan-400 transition">
          Pricing
        </a>
        <a href="#membership" className="hover:text-cyan-400 transition">
          Membership
        </a>
        <a href="#contact" className="hover:text-cyan-400 transition">
          Contact
        </a>

        {/* ✅ Login Button */}
        <button
          onClick={() => setShowLogin(true)}
          className="bg-cyan-500 hover:bg-cyan-600 text-black px-4 py-2 rounded-lg font-semibold shadow-[0_0_10px_#00ffff] transition-all"
        >
          Login
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-cyan-400"
      >
        ☰
      </button>

      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </nav>
  );
}
