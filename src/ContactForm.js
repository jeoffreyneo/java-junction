// src/ContactForm.js
import React from "react";

const ContactForm = () => (
  <section id="contact" className="max-w-3xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold text-[#EFEBE9] mb-6">Contact Us</h2>
    <form className="space-y-4">
      <input
        type="text"
        placeholder="Your Name"
        className="w-full p-3 rounded bg-[#5D4037]/60 text-[#EFEBE9] border border-[#6D4C41]"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="w-full p-3 rounded bg-[#5D4037]/60 text-[#EFEBE9] border border-[#6D4C41]"
      />
      <textarea
        placeholder="Your Message"
        rows="4"
        className="w-full p-3 rounded bg-[#5D4037]/60 text-[#EFEBE9] border border-[#6D4C41]"
      ></textarea>
      <button
        type="submit"
        className="bg-[#8D6E63] hover:bg-[#6D4C41] text-[#EFEBE9] py-2 px-6 rounded shadow-md transition"
      >
        Send Message
      </button>
    </form>
  </section>
);

export default ContactForm;
