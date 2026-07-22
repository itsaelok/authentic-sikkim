"use client";

import Logo from "../common/Logo";
import Link from "next/link";
import { Bell, Search, User, CloudSun } from "lucide-react";

export default function Header() {
  const date = new Intl.DateTimeFormat("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());

  return (
    <header className="bg-white border-b border-gray-200">

      {/* Top Information Bar */}
      <div className="border-b bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">

          <div className="flex items-center justify-between h-10 text-sm text-gray-600">

            <div className="flex items-center gap-2">
              <CloudSun size={16} className="text-yellow-500" />
              <span>{date}</span>
            </div>

            <div className="hidden md:flex items-center gap-6">

              <Link
                href="/about"
                className="hover:text-red-600 transition"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="hover:text-red-600 transition"
              >
                Contact
              </Link>

              <Link
                href="/privacy"
                className="hover:text-red-600 transition"
              >
                Privacy
              </Link>

            </div>

          </div>

        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6">

        <div className="h-24 flex items-center justify-between">

          {/* Logo */}
          <Logo />

          {/* Right Section */}
          <div className="flex items-center gap-3">

            <button
              className="hidden md:flex w-11 h-11 rounded-xl border border-gray-200 hover:bg-gray-100 transition items-center justify-center"
              aria-label="Search"
            >
              <Search size={20} />
            </button>

            <button
              className="hidden md:flex w-11 h-11 rounded-xl border border-gray-200 hover:bg-gray-100 transition items-center justify-center"
              aria-label="Notifications"
            >
              <Bell size={20} />
            </button>

            <button
              className="hidden lg:flex w-11 h-11 rounded-xl border border-gray-200 hover:bg-gray-100 transition items-center justify-center"
              aria-label="Profile"
            >
              <User size={20} />
            </button>

            <Link
              href="/subscribe"
              className="
                bg-red-600
                hover:bg-red-700
                transition
                text-white
                font-semibold
                px-6
                py-3
                rounded-xl
                shadow-md
              "
            >
              Subscribe
            </Link>

          </div>

        </div>

      </div>
    </header>
  );
}