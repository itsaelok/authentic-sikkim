"use client";

import Image from "next/image";
import Link from "next/link";

import { useHomeData } from "@/components/providers/HomeProvider";


export default function SmallHeroCard({
  index,
}: {
  index: number;
}) {
  const { featured, loading } = useHomeData();

if (loading) return null;

const article = featured[index];

if (!article) return null;
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-xl">

      <div className="relative h-56 w-full">
        <Image
          src={article.image || "/placeholder.jpg"}
          alt={article.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-5">

        <span className="inline-block rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
          {article.category}
        </span>

        <h3 className="mt-3 text-xl font-bold leading-snug">
          {article.title}
        </h3>

        <p className="mt-3 text-sm text-gray-600">
  {article.excerpt}
</p>

        <Link
          href={`/news/${article.slug}`}
          className="mt-4 inline-block font-semibold text-red-600 hover:text-red-700"
        >
          Read More →
        </Link>

      </div>

    </article>
  );
}