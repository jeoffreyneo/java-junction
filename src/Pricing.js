import React from "react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Bronze",
    price: "₱50 / hr",
    color: "from-[#b87333] to-[#d17f45]",
    icon: "🥉",
    features: [
      "Standard Gaming PC Access",
      "2 Free Drinks",
      "Basic Headset",
      "Access to Wi-Fi Lounge",
    ],
  },
  {
    name: "Silver",
    price: "₱120 / day",
    color: "from-gray-400 to-gray-200",
    icon: "🥈",
    features: [
      "Mid-tier Gaming Rig",
      "Free Snacks + Drinks",
      "High Quality Headset",
      "Priority Seat Reservation",
    ],
  },
  {
    name: "Gold",
    price: "₱250 / VIP",
    color: "from-yellow-400 to-amber-300",
    icon: "🥇",
    features: [
      "High-End PC + VIP Booth",
      "Unlimited Drinks + Snacks",
      "Noise-Cancel Headset",
      "24/7 Exclusive Lounge Access",
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="max-w-6xl mx-auto py-24 px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold text-cyan-400 mb-12"
      >
        Pricing
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-10">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative bg-[#0f1a2b] rounded-2xl p-8 border border-cyan-500/30 shadow-[0_0_25px_#06b6d4] hover:shadow-[0_0_40px_#22d3ee] transition-all duration-300"
          >
            <div
              className={`absolute -top-10 left-1/2 -translate-x-1/2 text-6xl bg-gradient-to-r ${plan.color} text-transparent bg-clip-text drop-shadow-lg`}
            >
              {plan.icon}
            </div>

            <h3 className="text-2xl font-bold text-cyan-300 mt-8 mb-2">
              {plan.name}
            </h3>
            <p className="text-3xl font-extrabold text-cyan-400 mb-6">
              {plan.price}
            </p>

            <ul className="text-gray-300 space-y-2">
              {plan.features.map((feat, i) => (
                <li key={i} className="flex items-center justify-center gap-2">
                  <span className="text-cyan-400">✔</span> {feat}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
