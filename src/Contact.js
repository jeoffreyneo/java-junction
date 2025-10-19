import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-20 px-4 max-w-4xl mx-auto my-12 bg-black bg-opacity-60 rounded text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
      <form className="space-y-6">
        <div>
          <label className="block mb-2">Name</label>
          <input
            type="text"
            className="w-full p-3 rounded bg-gray-800 border border-gray-600 text-white"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block mb-2">Email</label>
          <input
            type="email"
            className="w-full p-3 rounded bg-gray-800 border border-gray-600 text-white"
            placeholder="Your email"
          />
        </div>
        <div>
          <label className="block mb-2">Message</label>
          <textarea
            rows="4"
            className="w-full p-3 rounded bg-gray-800 border border-gray-600 text-white"
            placeholder="Your message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
