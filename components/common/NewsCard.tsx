import Link from "next/link";
import Image from "next/image";

interface Props {
  id?: string;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  district: string;
  publishedAt: string;
  views: number;
}

export default function NewsCard({
  slug,
  title,
  excerpt,
  image,
  category,
  district,
  publishedAt,
  views,
}: Props) {
  return (
    <Link
      href={`/news/${slug}`}
      className="group overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute left-4 top-4 rounded-full bg-red-600 px-3 py-1 text-xs font-bold text-white">
          {category}
        </div>
      </div>

      <div className="p-6">

        <h3 className="text-xl font-bold leading-tight group-hover:text-red-600 transition">
          {title}
        </h3>

        <p className="mt-3 line-clamp-3 text-gray-600">
          {excerpt}
        </p>

        <div className="mt-6 flex items-center justify-between text-sm text-gray-500">

          <span>{district}</span>

          <span>{publishedAt}</span>

        </div>

        <div className="mt-2 text-sm text-gray-400">
          👁 {views.toLocaleString()} views
        </div>

      </div>
    </Link>
  );
}