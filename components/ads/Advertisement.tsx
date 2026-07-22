"use client";

import Image from "next/image";

interface AdvertisementProps {
  image: string;
  url: string;
  title: string;
}

export default function Advertisement({
  image,
  url,
  title,
}: AdvertisementProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="group block overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-lg"
    >
      <div className="relative aspect-[16/5]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex items-center justify-between px-4 py-2">
        <span className="text-sm font-semibold">
          {title}
        </span>

        <span className="text-xs text-gray-500">
          Sponsored
        </span>
      </div>
    </a>
  );
}