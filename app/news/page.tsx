"use client";

import { useEffect, useState } from "react";

import {
  News,
  getLatestNews,
  deleteNews,
  toggleFeatured,
  toggleBreaking,
  togglePublished,
} from "@/services/news";

export default function AdminNewsPage() {
  const [news, setNews] = useState<News[]>([]);

  async function load() {
    setNews(await getLatestNews());
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <main className="max-w-7xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-8">
        News Manager
      </h1>

      <div className="space-y-6">

        {news.map((article) => (

          <div
            key={article.id}
            className="bg-white rounded-2xl shadow p-6 flex justify-between items-center"
          >

            <div>

              <h2 className="font-bold text-xl">
                {article.title}
              </h2>

              <p className="text-gray-500 mt-2">
                {article.category}
              </p>

            </div>

            <div className="flex gap-3">

              <button
                onClick={async () => {
                  await toggleFeatured(
                    article.id!,
                    !article.featured
                  );
                  load();
                }}
                className="px-4 py-2 rounded bg-yellow-500 text-white"
              >
                Featured
              </button>

              <button
                onClick={async () => {
                  await toggleBreaking(
                    article.id!,
                    !article.breaking
                  );
                  load();
                }}
                className="px-4 py-2 rounded bg-red-600 text-white"
              >
                Breaking
              </button>

              <button
                onClick={async () => {
                  await togglePublished(
                    article.id!,
                    !article.published
                  );
                  load();
                }}
                className="px-4 py-2 rounded bg-green-600 text-white"
              >
                Publish
              </button>

              <button
                onClick={async () => {
                  if (!confirm("Delete article?")) return;

                  await deleteNews(article.id!);

                  load();
                }}
                className="px-4 py-2 rounded bg-black text-white"
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    </main>
  );
}