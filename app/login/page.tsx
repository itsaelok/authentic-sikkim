"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/lib/auth";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    try {
      setLoading(true);

      await login(email, password);

router.replace("/admin");    } catch {
      alert("Invalid email or password");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto mt-20 max-w-md rounded-xl border bg-white p-8 shadow">

      <h1 className="mb-6 text-3xl font-bold">
        Admin Login
      </h1>

      <input
        className="mb-4 w-full rounded border p-3"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="mb-6 w-full rounded border p-3"
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleLogin}
        disabled={loading}
        className="w-full rounded bg-red-600 py-3 font-semibold text-white"
      >
        {loading ? "Signing In..." : "Login"}
      </button>

    </div>
  );
}