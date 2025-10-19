// src/components/AnimatedSection.js
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const AnimatedSection = ({ children, id }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            controls.start("visible");
          } else {
            setInView(false);
            controls.start("hidden");
          }
        });
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [controls]);

  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        hidden: { opacity: 0, y: 60 },
      }}
      className={`transition-all duration-700 flex flex-col items-center justify-center min-h-screen ${
        inView ? "opacity-100 scale-100" : "opacity-40 scale-95 blur-[1px]"
      }`}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
