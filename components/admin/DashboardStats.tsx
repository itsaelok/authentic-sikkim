"use client";

import { useEffect, useState } from "react";
import {
  getNews,
  getDashboardStats,
} from "@/services/news";

export default function DashboardStats() {
  const [stats, setStats] = useState({
    total: 0,
    published: 0,
    drafts: 0,
    featured: 0,
    breaking: 0,
    totalViews: 0,
  });

  useEffect(() => {
    async function load() {
      const news = await getNews();
      setStats(getDashboardStats(news));
    }

    load();
  }, []);

  const cards = [
    {
      title: "Total News",
      value: stats.total,
    },
    {
      title: "Published",
      value: stats.published,
    },
    {
      title: "Drafts",
      value: stats.drafts,
    },
    {
      title: "Featured",
      value: stats.featured,
    },
    {
      title: "Breaking",
      value: stats.breaking,
    },
    {
      title: "Views",
      value: stats.totalViews.toLocaleString(),
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-2xl bg-white p-6 shadow"
        >
          <p className="text-gray-500">
            {card.title}
          </p>

          <h2 className="mt-3 text-4xl font-bold text-red-600">
            {card.value}
          </h2>
        </div>
      ))}
    </div>
  );
}