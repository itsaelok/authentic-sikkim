"use client";

import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";

const breakingNews = [
  "Heavy rainfall alert issued for North Sikkim; residents advised to avoid unnecessary travel.",
  "State Government launches new scholarship scheme for higher education students.",
  "Tourist arrivals in Sikkim reach an all-time high during the summer season.",
  "Gangtok welcomes record visitors with new eco-tourism initiatives.",
  "NH-10 restoration work continues; traffic expected to normalize this week.",
];

export default function BreakingNews() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % breakingNews.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-red-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center h-14">

        {/* Breaking Badge */}
        <div className="flex items-center gap-2 bg-black px-5 h-full shrink-0 font-bold tracking-wide">
          <span className="animate-pulse text-red-500">●</span>
          BREAKING
        </div>

        {/* News */}
        <div className="flex-1 overflow-hidden px-5">
          <div
            key={index}
            className="flex items-center gap-3 whitespace-nowrap animate-[fadeIn_0.5s_ease]"
          >
            <ChevronRight size={18} className="text-yellow-300 shrink-0" />

            <p className="font-medium truncate">
              {breakingNews[index]}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}