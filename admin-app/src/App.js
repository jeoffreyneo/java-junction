import React, { useState } from "react";
import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";

export default function App() {
  const [admin, setAdmin] = useState(null);
  return admin ? (
    <AdminDashboard admin={admin} />
  ) : (
    <AdminLogin onLogin={setAdmin} />
  );
}
