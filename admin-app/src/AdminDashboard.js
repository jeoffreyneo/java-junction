import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AdminDashboard() {
  const [members, setMembers] = useState([]);
  const [error, setError] = useState("");

  const fetchMembers = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:5001/api/members/all", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMembers(res.data);
    } catch (err) {
      setError("Failed to load members");
    }
  };

  const extendHours = async (id) => {
    const extraHours = prompt("Enter hours to add:");
    if (!extraHours) return;

    const token = localStorage.getItem("token");
    await axios.put(
      `http://localhost:5001/api/members/extend/${id}`,
      { extraHours },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    fetchMembers();
  };

  const deleteMember = async (id) => {
    if (!window.confirm("Delete this member?")) return;

    const token = localStorage.getItem("token");
    await axios.delete(`http://localhost:5001/api/members/delete/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchMembers();
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white p-8">
      <h1 className="text-3xl text-cyan-400 font-bold mb-6">
        Java Junction Admin Panel
      </h1>

      {error && <p className="text-red-400">{error}</p>}

      <table className="w-full text-left border border-cyan-600 rounded-lg overflow-hidden">
        <thead className="bg-[#141428] text-cyan-300">
          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Hours Remaining</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {members.map((m) => (
            <tr
              key={m._id}
              className="border-t border-cyan-800 hover:bg-[#1e1e3a]"
            >
              <td className="p-3">{m.name}</td>
              <td className="p-3">{m.email}</td>
              <td className="p-3">{m.hoursRemaining}</td>
              <td className="p-3 space-x-2">
                <button
                  onClick={() => extendHours(m._id)}
                  className="px-4 py-2 bg-green-500 rounded-lg font-bold"
                >
                  + Extend
                </button>
                <button
                  onClick={() => deleteMember(m._id)}
                  className="px-4 py-2 bg-red-500 rounded-lg font-bold"
                >
                  🗑 Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
