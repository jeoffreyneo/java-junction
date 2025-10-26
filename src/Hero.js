import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden"
      style={{
        backgroundImage: "url('/images/hero-bg.jpg')", // Image path (put in public/images)
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for cinematic look */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Main Text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="relative z-10 max-w-3xl px-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-cyan-400 drop-shadow-lg">
          Powered by Performance. <br /> Fueled by Passion.
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 mb-10">
          Step into the future of gaming at{" "}
          <span className="text-cyan-400 font-semibold">Java Junction</span>.
        </p>
      </motion.div>

      {/* Floating Info Card */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 1.5, ease: "easeOut" }}
        className="absolute bottom-16 right-10 bg-[#0b0e19]/80 backdrop-blur-md border border-cyan-500/40 rounded-xl p-5 shadow-lg text-left w-64"
      >
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-cyan-400 text-xl">🏆</span>
          <p className="font-semibold text-white">1,708 Matches</p>
        </div>
        <p className="text-gray-400 text-sm mb-1">
          Winrate: <span className="text-cyan-400 font-semibold">92%</span>
        </p>
        <p className="text-gray-400 text-sm italic">
          "Where every match feels legendary."
        </p>
      </motion.div>
    </section>
  );
}
