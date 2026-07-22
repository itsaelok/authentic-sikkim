"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search } from "lucide-react";
import { useState } from "react";
import LiveClock from "./LiveClock";<LiveClock/>

const navigation = [
  { name: "Home", href: "/" },
  { name: "Latest", href: "/latest" },
  { name: "Sikkim", href: "/category/sikkim" },
  { name: "India", href: "/category/india" },
  { name: "World", href: "/category/world" },
  { name: "Politics", href: "/category/politics" },
  { name: "Business", href: "/category/business" },
  { name: "Education", href: "/category/education" },
  { name: "Jobs", href: "/category/jobs" },
  { name: "Tourism", href: "/category/tourism" },
  { name: "Sports", href: "/category/sports" },
  { name: "Technology", href: "/category/technology" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-40 bg-white border-y border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto">

          <div className="flex items-center justify-between h-14 px-4">

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1 overflow-x-auto">

              {navigation.map((item) => {

                const active =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition whitespace-nowrap ${
                      active
                        ? "bg-red-600 text-white"
                        : "text-gray-700 hover:bg-red-50 hover:text-red-600"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* Search */}
            <button
              className="p-2 rounded-lg hover:bg-gray-100 transition"
              aria-label="Search"
            >
              <Search size={20} />
            </button>

          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}

      <div
        className={`fixed inset-0 z-50 transition ${
          mobileOpen ? "visible" : "invisible"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
        />

        <aside
          className={`absolute left-0 top-0 h-full w-72 bg-white shadow-xl transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-6 border-b">

            <h2 className="text-xl font-bold">
              Authentic Sikkim
            </h2>

            <p className="text-sm text-gray-500">
              News Portal
            </p>

          </div>

          <nav className="flex flex-col p-3">

            {navigation.map((item) => {

              const active =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-lg font-medium transition ${
                    active
                      ? "bg-red-600 text-white"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

          </nav>
        </aside>
      </div>
    </>
  );
}
<Link

href="/bookmarks"

className="hover:text-red-600"

>

Saved

</Link>