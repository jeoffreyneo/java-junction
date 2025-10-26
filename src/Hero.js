import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/hero-bg.jpg)`,
      }}
    >
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Animated Text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 px-6"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold text-cyan-400 drop-shadow-[0_0_15px_#00ffff] mb-4">
          Powered by Performance.
        </h1>
        <p className="text-2xl md:text-3xl font-light text-cyan-300 drop-shadow-[0_0_10px_#00ffff]">
          Fueled by Passion. Step into the future of gaming at{" "}
          <span className="font-semibold text-cyan-400 drop-shadow-[0_0_12px_#00ffff]">
            Java Junction
          </span>.
        </p>
      </motion.div>
    </section>
  );
}
