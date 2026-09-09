"use client";

export default function BreakingTicker() {
  return (
    <div className="bg-red-600 text-white overflow-hidden rounded-xl">
      <div className="flex">
        <div className="bg-black px-4 py-3 font-bold whitespace-nowrap">
          BREAKING
        </div>

        <div className="flex-1 overflow-hidden">
          <div className="whitespace-nowrap px-4 py-3 animate-pulse">
            🔴 Sikkim Government announces new education scheme • Tourism season begins across North Sikkim • SSC JE 2026 notification released • Heavy rainfall alert issued for East Sikkim
          </div>
        </div>
      </div>
    </div>
  );
}