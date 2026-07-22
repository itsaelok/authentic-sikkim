"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { getLatestNews, News } from "@/services/news";

export default function DistrictNews() {

  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    getLatestNews().then(setNews);
  }, []);

  const districts = [
    "Gangtok",
    "Namchi",
    "Pakyong",
    "Mangan",
    "Soreng",
    "Gyalshing",
  ];

  return (
    <section className="mt-16">

      <h2 className="text-3xl font-bold mb-8">
        District News
      </h2>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

        {districts.map((district) => {

          const article = news.find(
            (n) => n.district === district
          );

          if (!article) return null;

          return (

            <Link
              key={district}
              href={`/news/${article.slug}`}
              className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition"
            >

              <div className="relative h-56">

                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />

              </div>

              <div className="p-5">

                <span className="text-red-600 text-sm font-bold">
                  {district}
                </span>

                <h3 className="mt-2 font-bold text-xl">
                  {article.title}
                </h3>

              </div>

            </Link>

          );

        })}

      </div>

    </section>
  );
}