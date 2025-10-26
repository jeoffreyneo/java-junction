import React from "react";

export default function Contact() {
  return (
    <div className="text-center px-6">
      <h2 className="text-4xl font-bold mb-4 text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.7)]">
        Contact Us
      </h2>
      <p className="text-gray-400 mb-8">
        Have questions or want to book an event? Reach out — we’ll respond as soon as possible!
      </p>
      <div className="max-w-lg mx-auto bg-[#0d101b] p-8 rounded-2xl shadow-lg shadow-cyan-500/20">
        <form>
          <input
            type="text"
            placeholder="Name"
            className="w-full mb-4 p-3 rounded-lg bg-[#090c14] text-gray-300 outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 p-3 rounded-lg bg-[#090c14] text-gray-300 outline-none"
          />
          <textarea
            placeholder="Message"
            className="w-full mb-6 p-3 rounded-lg bg-[#090c14] text-gray-300 outline-none h-32"
          ></textarea>
          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-6 py-3 rounded-lg w-full transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
