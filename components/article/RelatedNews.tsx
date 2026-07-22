"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  getCategoryNews,
  type News,
} from "@/services/news";

interface Props {
  category: string;
  currentId: string;
}

export default function RelatedNews({
  category,
  currentId,
}: Props) {

  const [articles, setArticles] = useState<News[]>([]);

  useEffect(() => {
    async function load() {
      const data = await getCategoryNews(category);

      setArticles(
        data
          .filter((item) => item.id !== currentId)
          .slice(0, 6)
      );
    }

    load();
  }, [category, currentId]);

  if (articles.length === 0) {
    return null;
  }

  return (
    <section className="rounded-2xl bg-white p-6 shadow">

      <h2 className="mb-6 border-b pb-3 text-2xl font-bold">
        Related News
      </h2>

      <div className="space-y-6">

        {articles.map((article) => (

          <Link
            key={article.id}
            href={`/news/${article.slug}`}
            className="group flex gap-4"
          >

            <div className="relative h-24 w-32 flex-shrink-0 overflow-hidden rounded-xl">

              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
              />

            </div>

            <div>

              <span className="text-xs font-semibold uppercase text-red-600">
                {article.category}
              </span>

              <h3 className="mt-1 line-clamp-2 font-semibold transition group-hover:text-red-600">
                {article.title}
              </h3>

              <p className="mt-2 text-xs text-gray-500">
                {article.publishedAt}
              </p>

            </div>

          </Link>

        ))}

      </div>

    </section>
  );
}