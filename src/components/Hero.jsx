import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const images = [
    "/photo1.jpg", // replace with your image names
    "/photo2.jpg",
    "/photo3.jpg",
  ];

  return (
    <section
      id="hero"
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      <div className="absolute inset-0 flex overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="relative w-full h-screen flex-shrink-0 snap-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src={img}
              alt={`Java Junction ${index + 1}`}
              className="w-full h-full object-cover brightness-75"
            />
            {/* Gradient overlay for cinematic tone */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80"></div>
          </motion.div>
        ))}
      </div>

      {/* Optional cinematic overlay text */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 text-center text-white pointer-events-none">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold text-cyan-400 drop-shadow-[0_0_25px_#22d3ee]"
        >
          Java Junction Cyber Café
        </motion.h2>
        <p className="text-gray-300 mt-4 text-lg">
          The Home of Gaming Excellence
        </p>
      </div>
    </section>
  );
};

export default Hero;
