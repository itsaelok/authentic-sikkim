import { getLatestNews } from "@/services/news";
import NewsCard from "@/components/common/NewsCard";

export const metadata = {
  title: "Latest News",
  description: "The latest stories and updates from across Sikkim.",
};

export default async function LatestPage() {
  const news = await getLatestNews();
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">Authentic Sikkim</p>
        <h1 className="mt-2 text-4xl font-black text-slate-950">Latest News</h1>
        <p className="mt-3 max-w-2xl text-slate-600">Fresh stories, explainers and useful updates from Sikkim.</p>
        <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((article) => <NewsCard key={article.id} {...article} />)}
        </div>
      </div>
    </main>
  );
}
