"use client";

import { useEffect, useState } from "react";

import SectionTitle from "../common/SectionTitle";
import NewsCard from "../common/NewsCard";

import { getLatestNews, News } from "@/services/news";

export default function LatestNews() {
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    getLatestNews().then(setNews);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <SectionTitle
        title="Latest News"
        href="/news"
      />

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {news.map((article, index) => (
  <NewsCard
    key={article.id ?? index}
    {...article}
  />
))}
      </div>
    </section>
  );
}