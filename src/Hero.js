import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/hero-bg.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Main Hero Content */}
      <motion.div
        className="relative z-20 max-w-3xl px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-cyan-400 drop-shadow-[0_0_10px_#00ffff] mb-4">
          Powered by Performance. Fueled by Passion.
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-12">
          Step into the future of gaming at{" "}
          <span className="text-cyan-400 font-semibold">Java Junction</span> —
          where every click, every sip, and every moment ignites your play.
        </p>
      </motion.div>

      {/* Floating Stats */}
      <motion.div
        className="relative z-20 flex flex-wrap justify-center gap-10 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.8 }}
      >
        {[
          { number: "1,700+", label: "Matches Played" },
          { number: "3,000+", label: "Happy Gamers" },
          { number: "98%", label: "Customer Satisfaction" },
        ].map((stat, index) => (
          <div key={index} className="text-cyan-400">
            <h3 className="text-4xl md:text-5xl font-bold drop-shadow-[0_0_10px_#00ffff]">
              {stat.number}
            </h3>
            <p className="text-gray-300 text-sm md:text-base">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
