import dynamic from "next/dynamic";

import LiveTicker from "@/components/home/LiveTicker";
import BreakingNews from "@/components/home/BreakingNews";
import SearchBox from "@/components/home/SearchBox";
import AdSlot from "@/components/ads/AdSlot";
import { HomeProvider } from "@/components/providers/HomeProvider";

const HeroSection = dynamic(() => import("@/components/home/HeroSection"));
const FeaturedStory = dynamic(() => import("@/components/home/FeaturedStory"));
const LatestNews = dynamic(() => import("@/components/home/LatestNews"));
const CategoryGrid = dynamic(() => import("@/components/home/CategoryGrid"));
const DistrictNews = dynamic(() => import("@/components/home/DistrictNews"));
const MostRead = dynamic(() => import("@/components/home/MostRead"));
const GovernmentJobs = dynamic(
  () => import("@/components/home/governmentJobs")
);
const Tourism = dynamic(() => import("@/components/home/Tourism"));
const StudentCorner = dynamic(() => import("@/components/home/StudentCorner"));
const Newsletter = dynamic(() => import("@/components/home/Newsletter"));
const WeatherWidget = dynamic(() => import("@/components/home/WeatherWidget"));

export default function HomePage() {
 return (
  <HomeProvider>
    <main className="min-h-screen bg-slate-100">
      <LiveTicker />
      <BreakingNews />

      <section className="max-w-7xl mx-auto px-4 py-5">
        <SearchBox />
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-8">
        <HeroSection />
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-8">
        <AdSlot location="home-top" />
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-8">
        <FeaturedStory />
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-8">
        <LatestNews />
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-8">
        <CategoryGrid />
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-8">
        <DistrictNews />
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-8">
        <MostRead />
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-8">
        <AdSlot location="home-middle" />
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-8">
        <GovernmentJobs />
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-8">
        <Tourism />
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-8">
        <StudentCorner />
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-8">
        <Newsletter />
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-12">
        <WeatherWidget />
      </section>
        </main>
  </HomeProvider>
);
}