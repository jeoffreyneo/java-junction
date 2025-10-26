import React from "react";

const ContactForm = () => {
  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto text-center py-20 px-6 bg-gradient-to-b from-[#060b1a] via-[#0a1025] to-[#060b1a] rounded-3xl shadow-[0_0_40px_#00ffff40]"
    >
      {/* Title */}
      <h2 className="text-4xl font-extrabold text-cyan-400 mb-8 drop-shadow-[0_0_10px_#00ffff]">
        Contact Us
      </h2>

      {/* Description */}
      <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
        Have questions, feedback, or partnership inquiries? Reach out to us —
        we’ll respond as soon as we can. Our team is online and ready to assist.
      </p>

      {/* Contact Form */}
      <form className="space-y-6 max-w-2xl mx-auto text-left">
        <div>
          <label className="block text-cyan-300 mb-2 font-semibold">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full p-3 rounded-lg bg-[#0d152b] text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 outline-none transition-all duration-300"
          />
        </div>

        <div>
          <label className="block text-cyan-300 mb-2 font-semibold">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full p-3 rounded-lg bg-[#0d152b] text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 outline-none transition-all duration-300"
          />
        </div>

        <div>
          <label className="block text-cyan-300 mb-2 font-semibold">
            Message
          </label>
          <textarea
            rows="5"
            placeholder="Type your message here..."
            className="w-full p-3 rounded-lg bg-[#0d152b] text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 outline-none transition-all duration-300"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 text-black font-bold rounded-lg shadow-[0_0_15px_#00ffff] transition-all duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
