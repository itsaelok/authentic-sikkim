"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { getLatestNews, News } from "@/services/news";

const categories = [
  "Politics",
  "Education",
  "Tourism",
  "Sports",
  "Technology",
  "Business",
];

export default function CategoryGrid() {

  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    getLatestNews().then(setNews);
  }, []);

  return (

    <section className="mt-16">

      <h2 className="text-3xl font-bold mb-10">

        Latest By Category

      </h2>

      <div className="space-y-16">

        {categories.map((category) => {

          const articles = news
            .filter((item) => item.category === category)
            .slice(0, 4);

          if (articles.length === 0) return null;

          return (

            <div key={category}>

              <div className="flex items-center justify-between mb-6">

                <h3 className="text-2xl font-bold">

                  {category}

                </h3>

                <Link
                  href={`/category/${category}`}
                  className="text-red-600 font-semibold"
                >
                  View All →
                </Link>

              </div>

              <div className="grid lg:grid-cols-2 gap-8">

                <Link
                  href={`/news/${articles[0].slug}`}
                  className="rounded-2xl overflow-hidden bg-white shadow hover:shadow-xl transition"
                >

                  <div className="relative h-72">

                    <Image
                      src={articles[0].image}
                      alt={articles[0].title}
                      fill
                      className="object-cover"
                    />

                  </div>

                  <div className="p-6">

                    <span className="text-red-600 text-sm font-bold">

                      {articles[0].category}

                    </span>

                    <h4 className="mt-3 text-2xl font-bold">

                      {articles[0].title}

                    </h4>

                    <p className="mt-3 text-gray-600">

                      {articles[0].excerpt}

                    </p>

                  </div>

                </Link>

                <div className="space-y-5">

                  {articles.slice(1).map((article) => (

                    <Link
                      key={article.id}
                      href={`/news/${article.slug}`}
                      className="flex gap-4 bg-white rounded-xl shadow p-4 hover:shadow-lg transition"
                    >

                      <div className="relative w-32 h-24 flex-shrink-0">

                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover rounded-lg"
                        />

                      </div>

                      <div>

                        <h5 className="font-bold">

                          {article.title}

                        </h5>

                        <p className="text-sm text-gray-500 mt-2">

                          {article.category}

                        </p>

                      </div>

                    </Link>

                  ))}

                </div>

              </div>

            </div>

          );

        })}

      </div>

    </section>

  );

}