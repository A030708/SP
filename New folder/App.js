import React, { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !pass) setError("All fields are required!");
    else if (!/\S+@\S+\.\S+/.test(email)) setError("Invalid email!");
    else if (pass.length < 6) setError("Password must be ≥ 6 chars!");
    else {
      setError("");
      alert("Login successful ✅");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: 20 }}>
      <h2>Login</h2>
      <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
      <input type="password" placeholder="Password" value={pass} onChange={(e) => setPass(e.target.value)} /><br />
      <button type="submit">Login</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}
