import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5001/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("❌ Failed to send message. Try again.");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      alert("⚠️ Something went wrong. Please try again.");
    }
  };

  return (
    <div className="text-center px-6">
      <h2 className="text-4xl font-bold mb-4 text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.7)]">
        Contact Us
      </h2>
      <p className="text-gray-400 mb-8">
        Have questions or want to book an event? Reach out — we’ll respond as soon as possible!
      </p>
      <div className="max-w-lg mx-auto bg-[#0d101b] p-8 rounded-2xl shadow-lg shadow-cyan-500/20">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mb-4 p-3 rounded-lg bg-[#090c14] text-gray-300 outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mb-4 p-3 rounded-lg bg-[#090c14] text-gray-300 outline-none"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full mb-6 p-3 rounded-lg bg-[#090c14] text-gray-300 outline-none h-32"
            required
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
