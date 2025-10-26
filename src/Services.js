import React from "react";
import { motion } from "framer-motion";
import { Coffee, Gamepad2, Wifi, Headphones, Users } from "lucide-react";

const Services = () => {
  return (
    <section
      id="services"
      className="relative py-28 px-6 text-center bg-gradient-to-b from-[#03060f] via-[#050916] to-[#03060f] overflow-hidden"
    >
      {/* Subtle Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.07),transparent_70%)] pointer-events-none"></div>

      {/* Title */}
      <h2 className="text-4xl font-extrabold text-cyan-400 mb-10 drop-shadow-[0_0_20px_#00ffff90]">
        Experience the Java Junction Café Lounge ☕🎮
      </h2>

      {/* Description */}
      <p className="max-w-2xl mx-auto text-gray-400 mb-16">
        Welcome to <span className="text-cyan-300 font-semibold">Java Junction</span> — a place where
        technology, gaming, and comfort collide. Immerse yourself in our dark neon ambiance,
        custom-built rigs, and relaxing café environment designed for gamers and dreamers alike.
      </p>

      {/* Image Showcase (Gallery Style) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Image 1 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative rounded-2xl overflow-hidden shadow-[0_0_35px_#00ffff20]"
        >
          <img
            src="/images/pic1.jpg"
            alt="Gaming lounge area"
            className="w-full h-72 object-cover brightness-[0.6] hover:brightness-100 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center p-4">
            <p className="text-cyan-300 font-semibold">Neon Gaming Lounge</p>
          </div>
        </motion.div>

        {/* Image 2 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative rounded-2xl overflow-hidden shadow-[0_0_35px_#00ffff20]"
        >
          <img
            src="/images/lounge2.jpg"
            alt="Cafe area"
            className="w-full h-72 object-cover brightness-[0.6] hover:brightness-100 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center p-4">
            <p className="text-cyan-300 font-semibold">Cozy Café Corner</p>
          </div>
        </motion.div>

        {/* Image 3 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative rounded-2xl overflow-hidden shadow-[0_0_35px_#00ffff20]"
        >
          <img
            src="/images/lounge3.jpg"
            alt="Esports area"
            className="w-full h-72 object-cover brightness-[0.6] hover:brightness-100 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center p-4">
            <p className="text-cyan-300 font-semibold">Esports & Tournaments</p>
          </div>
        </motion.div>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 mt-20 max-w-6xl mx-auto text-gray-300">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="p-6 bg-[#0b1225]/80 rounded-xl border border-cyan-400/10 shadow-[0_0_25px_#00ffff15]"
        >
          <Coffee className="w-10 h-10 text-cyan-400 mx-auto mb-3" />
          <h4 className="font-semibold text-cyan-300">Premium Café Drinks</h4>
          <p className="text-sm mt-2 text-gray-400">
            Enjoy freshly brewed coffee and cold beverages while you play.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          className="p-6 bg-[#0b1225]/80 rounded-xl border border-cyan-400/10 shadow-[0_0_25px_#00ffff15]"
        >
          <Gamepad2 className="w-10 h-10 text-cyan-400 mx-auto mb-3" />
          <h4 className="font-semibold text-cyan-300">Gaming Stations</h4>
          <p className="text-sm mt-2 text-gray-400">
            Play on top-tier rigs with full RGB setups and smooth frame rates.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          className="p-6 bg-[#0b1225]/80 rounded-xl border border-cyan-400/10 shadow-[0_0_25px_#00ffff15]"
        >
          <Wifi className="w-10 h-10 text-cyan-400 mx-auto mb-3" />
          <h4 className="font-semibold text-cyan-300">Fast Wi-Fi</h4>
          <p className="text-sm mt-2 text-gray-400">
            Stream, play, or download — our lightning-fast internet keeps you connected.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          className="p-6 bg-[#0b1225]/80 rounded-xl border border-cyan-400/10 shadow-[0_0_25px_#00ffff15]"
        >
          <Headphones className="w-10 h-10 text-cyan-400 mx-auto mb-3" />
          <h4 className="font-semibold text-cyan-300">Immersive Audio</h4>
          <p className="text-sm mt-2 text-gray-400">
            Dive into your games with crystal-clear surround sound headsets.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          className="p-6 bg-[#0b1225]/80 rounded-xl border border-cyan-400/10 shadow-[0_0_25px_#00ffff15]"
        >
          <Users className="w-10 h-10 text-cyan-400 mx-auto mb-3" />
          <h4 className="font-semibold text-cyan-300">Community Events</h4>
          <p className="text-sm mt-2 text-gray-400">
            Join our tournaments and be part of the Java Junction gaming family.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
