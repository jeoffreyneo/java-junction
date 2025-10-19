import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-6 bg-green-100 text-green-800 rounded max-w-md mx-auto">
        Thank you for contacting us! We'll get back to you soon.
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-gray-100 rounded shadow"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
      <label className="block mb-4">
        Name
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded mt-1"
        />
      </label>
      <label className="block mb-4">
        Email
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded mt-1"
        />
      </label>
      <label className="block mb-6">
        Message
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded mt-1"
          rows={4}
        />
      </label>
      <button
        type="submit"
        className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition"
      >
        Send Message
      </button>
    </form>
  );
}
