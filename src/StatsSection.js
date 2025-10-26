import React from "react";
import { motion } from "framer-motion";
import { Users, ThumbsUp, Gamepad2 } from "lucide-react";

const StatsSection = () => {
  return (
    <section
      id="stats"
      className="relative py-24 px-6 text-center bg-gradient-to-b from-[#060b1a] via-[#0a1025] to-[#060b1a] overflow-hidden"
    >
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.1),transparent_70%)] pointer-events-none"></div>

      {/* Title */}
      <h2 className="text-4xl font-extrabold text-cyan-400 drop-shadow-[0_0_15px_#00ffff] mb-16">
        What Our Happy Gamers Say 🎮
      </h2>

      {/* Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[#0d152b]/80 border border-cyan-400/30 rounded-2xl p-6 shadow-[0_0_20px_#00ffff30] transition-all"
        >
          <p className="text-gray-300 italic mb-4">
            “Java Junction is my go-to place for gaming! Smooth PCs, awesome
            staff, and chill vibes!”
          </p>
          <h4 className="text-cyan-300 font-semibold">— Raven, Pro Gamer</h4>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[#0d152b]/80 border border-cyan-400/30 rounded-2xl p-6 shadow-[0_0_20px_#00ffff30] transition-all"
        >
          <p className="text-gray-300 italic mb-4">
            “The membership is worth every peso! Free hours, discounts, and
            top-notch rigs!”
          </p>
          <h4 className="text-cyan-300 font-semibold">— Kai, Student Gamer</h4>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[#0d152b]/80 border border-cyan-400/30 rounded-2xl p-6 shadow-[0_0_20px_#00ffff30] transition-all"
        >
          <p className="text-gray-300 italic mb-4">
            “Feels like home! Friendly staff and comfy setups. Perfect for team
            practice.”
          </p>
          <h4 className="text-cyan-300 font-semibold">— Yuki, Streamer</h4>
        </motion.div>
      </div>

      {/* Stats Counters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
        <div className="flex flex-col items-center">
          <Gamepad2 className="text-cyan-400 w-10 h-10 mb-3 drop-shadow-[0_0_8px_#00ffff]" />
          <h3 className="text-5xl font-extrabold text-cyan-400 mb-2">1,250+</h3>
          <p className="text-gray-400 font-medium uppercase tracking-wide">
            Total Gamers
          </p>
        </div>

        <div className="flex flex-col items-center">
          <Users className="text-cyan-400 w-10 h-10 mb-3 drop-shadow-[0_0_8px_#00ffff]" />
          <h3 className="text-5xl font-extrabold text-cyan-400 mb-2">500+</h3>
          <p className="text-gray-400 font-medium uppercase tracking-wide">
            Active Members
          </p>
        </div>

        <div className="flex flex-col items-center">
          <ThumbsUp className="text-cyan-400 w-10 h-10 mb-3 drop-shadow-[0_0_8px_#00ffff]" />
          <h3 className="text-5xl font-extrabold text-cyan-400 mb-2">98%</h3>
          <p className="text-gray-400 font-medium uppercase tracking-wide">
            Satisfied Customers
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
