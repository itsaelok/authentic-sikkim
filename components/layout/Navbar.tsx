"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import LiveClock from "./LiveClock";
import Logo from "../common/Logo";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Latest", href: "/news" },
  { name: "Sikkim", href: "/category/sikkim" },
  { name: "Politics", href: "/category/politics" },
  { name: "Education", href: "/category/education" },
  { name: "Tourism", href: "/category/tourism" },
  { name: "Jobs", href: "/category/jobs" },
  { name: "Sports", href: "/category/sports" },
  { name: "Technology", href: "/category/technology" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex min-h-16 items-center justify-between gap-4">

            {/* Logo */}
            <Link
              href="/"
              className="shrink-0"
              aria-label="Authentic Sikkim home"
              onClick={() => setMobileOpen(false)}
            >
              <Logo />
            </Link>

            {/* Desktop navigation */}
            <nav
              className="hidden flex-1 items-center justify-center gap-1 lg:flex"
              aria-label="Primary navigation"
            >
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    isActive(item.href)
                      ? "rounded-lg bg-red-600 px-3 py-2 text-sm font-semibold text-white transition"
                      : "rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-red-50 hover:text-red-700"
                  }
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Search and clock */}
            <div className="hidden items-center gap-3 sm:flex">
              <Link
                href="/search"
                aria-label="Search news"
                className="rounded-full p-2 text-slate-700 hover:bg-slate-100"
              >
                <Search size={20} />
              </Link>

              <LiveClock />
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
            >
              <Menu size={24} />
            </button>

          </div>
        </div>
      </header>

      {/* Mobile navigation */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[9999] lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          {/* Dark overlay */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />

          {/* White drawer */}
          <aside
            id="mobile-navigation"
            className="relative z-10 h-full w-[min(88vw,360px)] overflow-y-auto bg-white p-5 text-slate-900 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Drawer header */}
            <div className="mb-6 flex items-center justify-between border-b border-slate-200 pb-5">
              <div>
                <p className="text-lg font-black text-slate-900">
                  Authentic Sikkim
                </p>

                <p className="text-xs text-slate-500">
                  Independent Sikkim news & stories
                </p>
              </div>

              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100"
                aria-label="Close navigation menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* Navigation links */}
            <nav
              className="flex flex-col gap-1"
              aria-label="Mobile navigation"
            >
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={
                    isActive(item.href)
                      ? "rounded-xl bg-red-600 px-4 py-3 font-semibold text-white"
                      : "rounded-xl px-4 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
                  }
                >
                  {item.name}
                </Link>
              ))}

              {/* Saved stories */}
              <Link
                href="/bookmarks"
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-4 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                Saved stories
              </Link>

              {/* Search */}
              <Link
                href="/search"
                onClick={() => setMobileOpen(false)}
                className="mt-2 flex items-center gap-3 rounded-xl px-4 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                <Search size={19} />
                Search
              </Link>
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}