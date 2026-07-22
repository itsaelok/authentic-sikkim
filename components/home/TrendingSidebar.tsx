"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import SectionTitle from "../common/SectionTitle";

import { getTrendingNews, News } from "@/services/news";

export default function TrendingSidebar() {
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    getTrendingNews().then(setNews);
  }, []);

  return (
    <aside className="space-y-8 lg:sticky lg:top-24 h-fit">

      <section className="rounded-xl bg-white shadow">

        <div className="p-5">

          <SectionTitle
            title="Trending"
            href="/news"
          />

          <div className="space-y-5 mt-5">

            {news.slice(0, 8).map((item, index) => (

              <Link
                key={item.id}
                href={`/news/${item.slug}`}
                className="flex gap-4 group"
              >

                <div className="text-red-600 text-3xl font-bold w-8">
                  {index + 1}
                </div>

                <div>

                  <h3 className="font-semibold group-hover:text-red-600 transition">

                    {item.title}

                  </h3>

                  <p className="text-xs text-gray-500 mt-1">

                    {item.category}

                  </p>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>

    </aside>
  );
}