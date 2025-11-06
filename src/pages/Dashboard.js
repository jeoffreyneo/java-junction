import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [member, setMember] = useState(null);

  useEffect(() => {
    const savedMember = localStorage.getItem("member");
    if (!savedMember) {
      window.location.href = "/";
    } else {
      setMember(JSON.parse(savedMember));
    }
  }, []);

  if (!member) return null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#050a16] via-[#0a1025] to-[#050a16] text-white">
      <h1 className="text-4xl font-bold text-cyan-400 mb-6 drop-shadow-[0_0_15px_#00ffff]">
        Welcome, {member.name}!
      </h1>
      <div className="bg-[#0b1328] p-10 rounded-3xl shadow-[0_0_40px_#00ffff30] text-center w-96">
        <p className="text-lg text-gray-300 mb-4">
          Your current remaining hours:
        </p>
        <h2 className="text-5xl font-extrabold text-cyan-400 drop-shadow-[0_0_20px_#00ffff] mb-6">
          {member.remainingHours} hrs
        </h2>
        <button
          onClick={() => {
            localStorage.removeItem("member");
            window.location.href = "/";
          }}
          className="mt-4 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold shadow-[0_0_10px_#ff0000]"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
