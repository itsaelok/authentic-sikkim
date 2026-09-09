"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    category: "Breaking",
    title: "Government launches new development initiative across Sikkim",
    description:
      "Major infrastructure, tourism and employment projects announced for the coming financial year.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600",
    author: "Authentic Sikkim",
    date: "19 Jul 2026",
    readTime: "5 min read",
  },
  {
    id: 2,
    category: "Tourism",
    title: "Tourist arrivals continue to rise across Sikkim",
    description:
      "Hotels and local businesses report record bookings during the summer season.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600",
    author: "Editorial Team",
    date: "18 Jul 2026",
    readTime: "4 min read",
  },
  {
    id: 3,
    category: "Education",
    title: "Students achieve record success in state examinations",
    description:
      "Schools celebrate outstanding performances and national level recognition.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    author: "Education Desk",
    date: "17 Jul 2026",
    readTime: "3 min read",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const prev = () =>
    setCurrent((current - 1 + slides.length) % slides.length);

  const next = () =>
    setCurrent((current + 1) % slides.length);

  const slide = slides[current];

  return (
    <section className="max-w-7xl mx-auto px-6 py-8">

      <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-black">

        <div className="relative h-[600px]">

          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority
            className="object-cover transition-all duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">

            <span className="bg-red-600 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
              {slide.category}
            </span>

            <h1 className="mt-5 text-3xl md:text-5xl font-black max-w-4xl leading-tight">
              {slide.title}
            </h1>

            <p className="mt-4 text-lg text-gray-200 max-w-3xl">
              {slide.description}
            </p>

            <div className="flex flex-wrap gap-5 mt-6 text-sm text-gray-300">
              <span>{slide.author}</span>
              <span>{slide.date}</span>
              <span>{slide.readTime}</span>
            </div>

          </div>

          <button
            onClick={prev}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full transition"
          >
            <ArrowLeft size={22} />
          </button>

          <button
            onClick={next}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full transition"
          >
            <ArrowRight size={22} />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-3 rounded-full transition-all ${
                  current === index
                    ? "bg-red-600 w-10"
                    : "bg-white/60 w-3"
                }`}
              />
            ))}
          </div>

        </div>

      </div>

    </section>
  );
}