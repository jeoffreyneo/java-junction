// src/JoinUs.js
import React from "react";

const JoinUs = () => {
  const scrollToMembership = () => {
    const target = document.getElementById("membership");
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="text-center px-6">
      <h2 className="text-3xl font-bold text-[#EFEBE9] mb-4">Ready to Join?</h2>
      <p className="text-[#D7CCC8] mb-6">
        Become part of the Java Junction community and enjoy our exclusive benefits.
      </p>
      <button
        onClick={scrollToMembership}
        className="bg-[#8D6E63] hover:bg-[#6D4C41] text-[#EFEBE9] py-2 px-6 rounded shadow-md transition"
      >
        Explore Membership
      </button>
    </section>
  );
};

export default JoinUs;
