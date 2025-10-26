import React from "react";

export default function JoinUs() {
  const handleJoinClick = () => {
    const section = document.getElementById("membership");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="text-center px-6">
      <h2 className="text-4xl font-bold mb-6 text-cyan-400 drop-shadow-[0_0_10px_#00ffff]">
        Join the Java Junction Community
      </h2>
      <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
        Become part of a growing network of gamers and coffee lovers!  
        Enjoy access to exclusive discounts, premium rigs, and our welcoming café atmosphere.
      </p>

      <button
        onClick={handleJoinClick}
        className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 py-3 rounded-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
      >
        Join Us
      </button>
    </div>
  );
}
