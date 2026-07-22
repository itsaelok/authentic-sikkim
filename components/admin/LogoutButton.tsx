"use client";

import { signOut } from "firebase/auth";
import { auth } from "@/lib/auth";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  async function logout() {
    await signOut(auth);

    router.replace("/login");
  }

  return (
    <button
      onClick={logout}
      className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
    >
      Logout
    </button>
  );
}