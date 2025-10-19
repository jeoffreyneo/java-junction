// src/Pricing.js
import React from "react";

const Pricing = () => (
  <section className="max-w-4xl mx-auto text-center px-6">
    <h2 className="text-3xl font-bold text-[#EFEBE9] mb-6">Pricing</h2>
    <div className="grid md:grid-cols-3 gap-6">
      {[
        { name: "Casual", price: "₱50 / hr" },
        { name: "Regular", price: "₱120 / 3 hrs" },
        { name: "All-Day", price: "₱300 / day" },
      ].map((plan) => (
        <div
          key={plan.name}
          className="bg-[#5D4037]/70 p-6 rounded-lg shadow-md hover:shadow-lg transition"
        >
          <h3 className="text-xl font-semibold text-[#EFEBE9] mb-2">
            {plan.name}
          </h3>
          <p className="text-[#D7CCC8]">{plan.price}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Pricing;
