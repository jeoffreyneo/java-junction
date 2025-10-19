// src/Hero.js
import React from "react";
import heroBg from "./assets/background.jpg"; // ✅ Make sure this path matches your file

const Hero = () => {
  return (
    <section
      className="relative w-screen min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-110 contrast-105"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundPosition: "center 80%",
          backgroundSize: "cover",
        }}
      ></div>

      {/* Brighter, warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#5D4037]/40 via-[#4E342E]/30 to-[#3E2723]/40"></div>

      {/* Text Content */}
      <div className="relative z-10 px-6 max-w-3xl">
        <h1 className="text-5xl font-bold text-[#EFEBE9] drop-shadow-lg mb-4">
          Welcome to Java Junction
        </h1>
        <p className="text-lg text-[#F5F5F5] drop-shadow-md">
          Your ultimate cyber café experience — where gaming, connection, and
          creativity meet.
        </p>
      </div>
    </section>
  );
};

export default Hero;
