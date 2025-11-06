import React, { useState } from "react";
import axios from "axios";

export default function AdminLogin({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5001/api/members/login", {
        email,
        password,
      });

      if (!res.data.isAdmin) {
        setError("Access denied: Not an admin");
        return;
      }

      localStorage.setItem("token", res.data.token);
      onLogin(res.data);
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#0a0a0f]">
      <form
        onSubmit={handleSubmit}
        className="bg-[#141428] p-10 rounded-2xl shadow-[0_0_25px_#00ffff40] text-white"
      >
        <h2 className="text-3xl font-bold text-cyan-400 mb-6">Admin Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-3 bg-[#1e1e3a] rounded-lg outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-3 bg-[#1e1e3a] rounded-lg outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-400 mb-4">{error}</p>}

        <button
          type="submit"
          className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 rounded-lg"
        >
          Login
        </button>
      </form>
    </div>
  );
}
