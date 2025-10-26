import React, { useState } from "react";
import { motion } from "framer-motion";

const ExploreMembership = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    payment: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    gcashNumber: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  return (
    <section
      id="membership"
      className="max-w-3xl mx-auto text-center py-20 px-6 bg-gradient-to-b from-[#060b1a] via-[#0a1025] to-[#060b1a] rounded-3xl shadow-[0_0_40px_#00ffff40]"
    >
      <h2 className="text-4xl font-extrabold text-cyan-400 mb-8 drop-shadow-[0_0_10px_#00ffff]">
        Monthly Membership
      </h2>
      <p className="text-gray-300 mb-10 max-w-xl mx-auto">
        Join Java Junction’s elite members and enjoy unlimited gaming hours,
        exclusive discounts, and premium perks. Pay securely with your ATM or
        GCash.
      </p>

      {/* STEP 1: USER INFO */}
      {step === 1 && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-[#0d152b] text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-[#0d152b] text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 outline-none"
          />
          <button
            onClick={nextStep}
            className="mt-4 px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-black font-bold rounded-lg transition-all shadow-[0_0_10px_#00ffff]"
          >
            Next
          </button>
        </motion.div>
      )}

      {/* STEP 2: PAYMENT SELECTION */}
      {step === 2 && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <h3 className="text-2xl text-cyan-400 font-semibold mb-4">
            Choose Payment Method
          </h3>
          <select
            name="payment"
            value={formData.payment}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-[#0d152b] text-white focus:ring-2 focus:ring-cyan-400 outline-none"
          >
            <option value="">Select Payment</option>
            <option value="atm">ATM / Debit Card</option>
            <option value="gcash">GCash</option>
          </select>

          {/* ATM / Debit Card UI */}
          {formData.payment === "atm" && (
            <div className="space-y-4 mt-4 bg-[#0b1328]/70 p-6 rounded-xl border border-cyan-400/30 shadow-[0_0_20px_#00ffff20]">
              <h4 className="text-lg font-semibold text-cyan-300 mb-3">
                Card Details
              </h4>
              <input
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                value={formData.cardNumber}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-[#101b3a] text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 outline-none"
              />
              <div className="flex space-x-4">
                <input
                  type="text"
                  name="expiry"
                  placeholder="MM/YY"
                  value={formData.expiry}
                  onChange={handleChange}
                  className="w-1/2 p-3 rounded-lg bg-[#101b3a] text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 outline-none"
                />
                <input
                  type="password"
                  name="cvv"
                  placeholder="CVV"
                  value={formData.cvv}
                  onChange={handleChange}
                  className="w-1/2 p-3 rounded-lg bg-[#101b3a] text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 outline-none"
                />
              </div>
            </div>
          )}

          {/* GCash UI */}
          {formData.payment === "gcash" && (
            <div className="space-y-4 mt-4 bg-[#0b1328]/70 p-6 rounded-xl border border-cyan-400/30 shadow-[0_0_20px_#00ffff20]">
              <h4 className="text-lg font-semibold text-cyan-300 mb-3">
                GCash Details
              </h4>
              <input
                type="text"
                name="gcashNumber"
                placeholder="GCash Number"
                value={formData.gcashNumber}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-[#101b3a] text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 outline-none"
              />
            </div>
          )}

          <div className="flex justify-between pt-6">
            <button
              onClick={prevStep}
              className="px-8 py-3 bg-gray-700 hover:bg-gray-800 rounded-lg font-semibold transition-all text-white"
            >
              Back
            </button>
            <button
              onClick={nextStep}
              className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-black font-bold rounded-lg shadow-[0_0_10px_#00ffff] transition-all"
            >
              Confirm
            </button>
          </div>
        </motion.div>
      )}

      {/* STEP 3: CONFIRMATION */}
      {step === 3 && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6"
        >
          <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
            Membership Confirmed!
          </h3>
          <div className="bg-[#0b1328]/70 text-white p-6 rounded-xl shadow-[0_0_20px_#00ffff20]">
            <p className="mb-2">
              <strong>Name:</strong> {formData.name}
            </p>
            <p className="mb-2">
              <strong>Email:</strong> {formData.email}
            </p>
            <p className="mb-2">
              <strong>Payment Method:</strong>{" "}
              {formData.payment.toUpperCase()}
            </p>
            <p className="mt-4 text-cyan-400 font-semibold">
              Your membership ID has been created. Show this to the staff.
            </p>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default ExploreMembership;
