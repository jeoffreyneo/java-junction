// src/Services.js
import React from "react";

const Services = () => {
  return (
    <section
      id="services"
      className="max-w-5xl mx-auto p-8 text-center text-[#D7CCC8]"
    >
      <h2 className="text-3xl font-bold mb-6 text-[#EFEBE9]">Our Services</h2>
      <p className="text-[#D7CCC8] mb-10">
        At Java Junction Cyber Café, we provide high-performance systems and
        comfortable spaces for both gamers and professionals.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-[#4E342E]/70 rounded-lg p-6 shadow-lg hover:bg-[#5D4037]/80 transition">
          <h3 className="text-xl font-semibold mb-2 text-[#EFEBE9]">
            Gaming Stations
          </h3>
          <p className="text-sm text-[#D7CCC8]">
            Enjoy lag-free gaming on high-end PCs with premium peripherals.
          </p>
        </div>

        <div className="bg-[#4E342E]/70 rounded-lg p-6 shadow-lg hover:bg-[#5D4037]/80 transition">
          <h3 className="text-xl font-semibold mb-2 text-[#EFEBE9]">
            Café & Lounge
          </h3>
          <p className="text-sm text-[#D7CCC8]">
            Relax with freshly brewed coffee, snacks, and a chill ambience.
          </p>
        </div>

        <div className="bg-[#4E342E]/70 rounded-lg p-6 shadow-lg hover:bg-[#5D4037]/80 transition">
          <h3 className="text-xl font-semibold mb-2 text-[#EFEBE9]">
            Printing & Workstations
          </h3>
          <p className="text-sm text-[#D7CCC8]">
            Perfect for students and freelancers who need reliable tech access.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
