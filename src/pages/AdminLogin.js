import React, { useState } from "react";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:5001/api/membership/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("adminToken", data.token);
        window.location.href = "/admin/dashboard";
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Server error");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#050a16] text-white">
      <h1 className="text-3xl font-bold text-cyan-400 mb-6">Admin Login</h1>
      <form onSubmit={handleSubmit} className="bg-[#0b1328] p-8 rounded-xl shadow-[0_0_20px_#00ffff40] w-80">
        <input
          type="email"
          placeholder="Admin Email"
          className="w-full mb-4 p-3 rounded-lg bg-[#101b3a] text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-3 rounded-lg bg-[#101b3a] text-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-red-500 mb-3 text-sm">{error}</p>}
        <button
          type="submit"
          className="w-full bg-cyan-500 text-black font-bold py-3 rounded-lg hover:bg-cyan-400 transition-all"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
