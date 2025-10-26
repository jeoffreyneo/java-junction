import React from "react";
import { motion } from "framer-motion";

const JoinUs = () => {
  return (
    <section
      id="join"
      className="relative max-w-5xl mx-auto py-24 px-6 text-center bg-[#0f1a2b]/60 border border-cyan-500/30 rounded-2xl shadow-[0_0_25px_#06b6d4] hover:shadow-[0_0_40px_#22d3ee] transition-all duration-300"
    >
      {/* Glowing Trophy Icon */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-7xl mb-6 text-cyan-400 drop-shadow-[0_0_20px_#22d3ee]"
      >
        🏆
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold text-cyan-400 mb-4"
      >
        Become Part of the Winning Team
      </motion.h2>

      <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
        Whether you’re a casual gamer or a pro competitor, Java Junction offers
        the best environment to play, relax, and connect. Join us today and be
        part of the Esports family!
      </p>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-semibold rounded-lg shadow-[0_0_25px_#22d3ee] hover:shadow-[0_0_40px_#22d3ee] transition-all duration-300 animate-pulse"
      >
        Join Now
      </motion.button>
    </section>
  );
};

export default JoinUs;
