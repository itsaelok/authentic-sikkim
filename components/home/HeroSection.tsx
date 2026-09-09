"use client";

import BreakingTicker from "./BreakingTicker";
import HeroCard from "./HeroCard";
import SmallHeroCard from "./SmallHeroCard";
import TrendingSidebar from "./TrendingSidebar";

export default function HeroSection() {
  return (
    <section className="space-y-6">

      <BreakingTicker />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* Left */}
        <div className="lg:col-span-3 space-y-6">

          <HeroCard />

          <div className="grid md:grid-cols-2 gap-6">
            <SmallHeroCard index={1} />
            <SmallHeroCard index={2} /> 
          </div>

        </div>

        {/* Right */}
        <aside>
          <TrendingSidebar />
        </aside>

      </div>

    </section>
  );
}