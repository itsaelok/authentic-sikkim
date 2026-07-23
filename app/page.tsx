import BreakingNews from "@/components/home/BreakingNews";
import SearchBox from "@/components/home/SearchBox";
import AdSlot from "@/components/ads/AdSlot";
import LiveTicker from "@/components/home/LiveTicker";
import dynamic from "next/dynamic";

const CategoryGrid = dynamic(() => import("@/components/home/CategoryGrid"));
const Newsletter = dynamic(() => import("@/components/home/Newsletter"));
const WeatherWidget = dynamic(() => import("@/components/home/WeatherWidget"));
const StudentCorner = dynamic(() => import("@/components/home/StudentCorner"));
const MostRead = dynamic(() => import("@/components/home/MostRead"));
const Tourism = dynamic(() => import("@/components/home/Tourism"));
const GovernmentJobs = dynamic(() => import("@/components/home/governmentJobs"));
const HeroSlider = dynamic(() => import("@/components/home/HeroSlider"));
const LatestNews = dynamic(() => import("@/components/home/LatestNews"));
const FeaturedStory = dynamic(() => import("@/components/home/FeaturedStory"));
const DistrictNews = dynamic(() => import("@/components/home/DistrictNews"));
const TrendingSidebar = dynamic(() => import("@/components/home/TrendingSidebar"));

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-100">
      <LiveTicker />
      <BreakingNews />

      <section className="max-w-7xl mx-auto px-4 py-5">
        <SearchBox />
      </section>

     <section className="max-w-7xl mx-auto px-4 pb-8">
  <div className="grid gap-8 lg:grid-cols-3">

    <div className="lg:col-span-2">
      <HeroSlider />
    </div>

    <aside className="space-y-8">
      <TrendingSidebar />
      <AdSlot location="sidebar" />
    </aside>

  </div>
</section>

{/* HOME TOP AD */}
<section className="max-w-7xl mx-auto px-4 pb-8">
  <AdSlot location="home-top" />
</section>

      <section className="max-w-7xl mx-auto px-4 pb-8">
        <FeaturedStory />
      </section>

     <section className="max-w-7xl mx-auto px-4 pb-8">
  <div className="border-b pb-12">
    <LatestNews />
  </div>
</section>

{/* HOME MIDDLE AD */}
<section className="max-w-7xl mx-auto px-4 pb-8">
  <AdSlot location="home-middle" />
</section>

<section className="max-w-7xl mx-auto px-4 pb-8">
  <div className="border-b pb-12">
    <CategoryGrid />
  </div>
</section>

      <section className="max-w-7xl mx-auto px-4 pb-8">
        <div className="border-b pb-12">
  <DistrictNews />
</div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-8">
        <MostRead />
      </section>

{/* DISTRICT AD */}
<section className="max-w-7xl mx-auto px-4 pb-8">
<AdSlot location="district-bottom" />
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
  );
}