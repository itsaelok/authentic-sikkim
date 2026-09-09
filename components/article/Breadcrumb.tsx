"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface Props {
  category: string;
  title: string;
}

export default function Breadcrumb({
  category,
  title,
}: Props) {
  return (
    <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-gray-500">

      <Link
        href="/"
        className="flex items-center gap-1 hover:text-red-600 transition"
      >
        <Home size={16} />
        Home
      </Link>

      <ChevronRight size={16} />

      <Link
        href={`/category/${category.toLowerCase()}`}
        className="hover:text-red-600 transition"
      >
        {category}
      </Link>

      <ChevronRight size={16} />

      <span className="font-medium text-gray-700 line-clamp-1">
        {title}
      </span>

    </nav>
  );
}