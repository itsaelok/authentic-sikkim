"use client";

import Image from "next/image";
import Link from "next/link";

import { useHomeData } from "@/components/providers/HomeProvider";

export default function HeroCard() {
  const { featured, loading } = useHomeData();

  if (loading) {
    return (
      <article className="overflow-hidden rounded-2xl bg-white shadow-lg animate-pulse">
        <div className="h-[420px] bg-gray-200" />
      </article>
    );
  }

  const article = featured[0];

  if (!article) return null;

  return (
    <article className="relative overflow-hidden rounded-2xl bg-white shadow-lg">
      <div className="relative h-[420px] w-full">
        <Image
          src={article.image || "/placeholder.jpg"}
          alt={article.title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <span className="inline-block rounded-full bg-red-600 px-3 py-1 text-sm font-semibold">
            {article.category}
          </span>

          <h1 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">
            {article.title}
          </h1>

          <p className="mt-4 max-w-3xl text-gray-200 line-clamp-3">
            {article.excerpt}
          </p>

          <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-300">
            <span>{article.author}</span>
            <span>{article.publishedAt}</span>
            <span>{article.readTime}</span>
            <span>{article.views} Views</span>
          </div>

          <Link
            href={`/news/${article.slug}`}
            className="mt-6 inline-flex rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
          >
            Read Full Story →
          </Link>
        </div>
      </div>
    </article>
  );
}