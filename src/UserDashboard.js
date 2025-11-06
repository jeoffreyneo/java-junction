import React, { useEffect, useState } from "react";

export default function UserDashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  if (!user) {
    return (
      <div className="h-screen flex flex-col justify-center items-center text-center text-gray-400">
        <h2 className="text-3xl font-bold text-cyan-400 mb-4">Not Logged In</h2>
        <p className="text-gray-500">Please log in to view your dashboard.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#0a0f1a] text-white">
      <div className="bg-[#10182b] p-10 rounded-2xl shadow-[0_0_30px_#00ffff30] text-center max-w-lg">
        <h1 className="text-3xl font-bold text-cyan-400 mb-4 drop-shadow-[0_0_10px_#00ffff]">
          Welcome, {user.name}!
        </h1>
        <p className="text-gray-300 mb-2">
          <strong>Email:</strong> {user.email}
        </p>
        <p className="text-gray-300 mb-2">
          <strong>Plan:</strong> {user.plan}
        </p>
        <p className="text-cyan-300 text-lg mt-4 font-semibold">
          Remaining Hours: {user.remainingHours}
        </p>
      </div>
    </div>
  );
}
