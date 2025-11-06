// src/LoginModal.js
import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import axios from "axios";

export default function LoginModal({ onClose }) {
  // ensure escape closes
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    try {
      const res = await axios.post("http://localhost:5001/api/members/login", {
        email,
        password,
      });
      // server should return user object as `res.data.user`
      const user = res.data.user || res.data; // adapt if shape differs
      localStorage.setItem("user", JSON.stringify(user));
      window.location.href = "/dashboard";
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  // The modal content
  const modal = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center px-4 py-8"
      aria-modal="true"
      role="dialog"
    >
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* panel */}
      <div className="relative z-10 w-full max-w-md mx-auto">
        <div className="bg-[#0d101b] rounded-2xl shadow-xl p-6 sm:p-8 overflow-hidden">
          {/* close button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-cyan-300"
            aria-label="Close"
          >
            ✕
          </button>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-cyan-400 mb-4 text-center drop-shadow-[0_0_10px_#00ffff]">
            Member Login
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              className="w-full p-3 rounded-lg bg-[#090c14] text-gray-300 placeholder-gray-500 outline-none focus:ring-2 focus:ring-cyan-400"
            />

            <input
              name="password"
              type="password"
              placeholder="Password"
              required
              className="w-full p-3 rounded-lg bg-[#090c14] text-gray-300 placeholder-gray-500 outline-none focus:ring-2 focus:ring-cyan-400"
            />

            <button
              type="submit"
              className="w-full mt-2 bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 rounded-lg shadow-[0_0_15px_#00ffff66] transition"
            >
              Login
            </button>
          </form>

          <p className="mt-4 text-sm text-gray-400 text-center">
            Forgot password? Contact the staff.
          </p>
        </div>
      </div>
    </div>
  );

  // render to body so modal is outside any layout that might break fixed
  return createPortal(modal, document.body);
}
