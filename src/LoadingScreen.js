import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LoadingScreen = () => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : ""));
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 flex items-center justify-center bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-cyan-400 z-50"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-[0_0_20px_#00ffff]">
          Loading Java Junction{dots}
        </h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.8, repeat: Infinity, repeatType: "reverse" }}
          className="mt-6 h-1 w-48 mx-auto bg-cyan-400 rounded-full shadow-[0_0_20px_#00ffff]"
        ></motion.div>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
