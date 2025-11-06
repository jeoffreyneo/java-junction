import React, { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("http://localhost:5001/api/members/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (res.ok) {
        setUser(data);
      } else {
        setError(data.message || "Login failed.");
      }
    } catch (err) {
      setError("⚠️ Could not connect to the server.");
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-[#0a0e1a] text-white">
      {!user ? (
        <form
          onSubmit={handleSubmit}
          className="bg-[#0d101b] p-10 rounded-2xl shadow-xl shadow-cyan-500/20 w-96"
        >
          <h2 className="text-3xl font-bold text-cyan-400 mb-6 text-center">
            Member Login
          </h2>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full mb-4 p-3 rounded-lg bg-[#090c14] text-gray-300 outline-none"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full mb-6 p-3 rounded-lg bg-[#090c14] text-gray-300 outline-none"
          />

          <button
            type="submit"
            className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-lg transition"
          >
            Login
          </button>

          {error && <p className="mt-3 text-red-400">{error}</p>}
        </form>
      ) : (
        <div className="text-center">
          <h2 className="text-4xl text-cyan-400 font-bold mb-4">
            Welcome, {user.name}!
          </h2>
          <p className="text-gray-300 text-lg">
            You currently have{" "}
            <span className="text-cyan-400 font-semibold">
              {user.hoursRemaining}
            </span>{" "}
            gaming hours remaining.
          </p>
        </div>
      )}
    </section>
  );
}
