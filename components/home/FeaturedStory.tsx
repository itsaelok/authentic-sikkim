"use client";

import Link from "next/link";
import Image from "next/image";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useHomeData } from "@/components/providers/HomeProvider";

export default function FeaturedStory() {
  const { featured, loading } = useHomeData();

  if (loading) return null;

  return (
    // ...
    <section className="max-w-7xl mx-auto px-6 mt-8">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        loop
        className="rounded-3xl overflow-hidden shadow-xl"
      >
        {featured.map((article) => (
          <SwiperSlide key={article.slug}>
            <div className="relative h-[550px]">
             <Image
  src={article.image}
                alt={article.title}
                fill
                priority
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
                <span className="bg-red-600 px-4 py-2 rounded-full text-sm font-bold">
                  {article.category}
                </span>

                <h1 className="text-5xl font-extrabold mt-6 max-w-4xl leading-tight">
                  {article.title}
                </h1>

                <p className="mt-6 text-lg text-gray-200 max-w-3xl">
                  {article.excerpt}
                </p>

                <div className="flex items-center gap-6 mt-8 text-gray-300">
  <span>{article.author}</span>
</div>

                <Link
                  href={`/news/${article.slug}`}
                  className="inline-block mt-8 bg-red-600 hover:bg-red-700 transition px-8 py-4 rounded-xl font-bold"
                >
                  Read Full Story
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}