"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getBreakingNews, News } from "@/services/news";

export default function LiveTicker() {
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    getBreakingNews().then(setNews);
  }, []);

  if (!news.length) return null;

  return (
    <div className="bg-red-700 text-white overflow-hidden">
      <div className="flex">

        <div className="bg-black px-5 py-3 font-bold whitespace-nowrap">
          LIVE
        </div>

        <div className="overflow-hidden flex-1">

          <div className="animate-marquee whitespace-nowrap py-3">

            {news.map((item) => (
              <Link
                key={item.id}
                href={`/news/${item.slug}`}
                className="mx-10 hover:underline"
              >
                ● {item.title}
              </Link>
            ))}

          </div>

        </div>

      </div>
    </div>
  );
}