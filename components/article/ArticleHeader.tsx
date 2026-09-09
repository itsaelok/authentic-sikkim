import { CalendarDays, Clock3, Eye, User } from "lucide-react";
import type { News } from "@/services/news";

interface Props {
  article: News;
}

export default function ArticleHeader({
  article,
}: Props) {
  return (
    <header>

      <div className="mb-5 flex flex-wrap items-center gap-3">

        <span className="rounded-full bg-red-600 px-4 py-1 text-sm font-semibold text-white">
          {article.category}
        </span>

        {article.breaking && (
          <span className="rounded-full bg-yellow-500 px-4 py-1 text-sm font-semibold text-black">
            🚨 Breaking
          </span>
        )}

        {article.featured && (
          <span className="rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold text-white">
            ⭐ Featured
          </span>
        )}

      </div>

      <h1 className="text-4xl font-extrabold leading-tight text-gray-900 lg:text-5xl">
        {article.title}
      </h1>

      {article.excerpt && (
        <p className="mt-6 text-xl leading-8 text-gray-600">
          {article.excerpt}
        </p>
      )}

      <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 border-y py-5 text-sm text-gray-600">

        <div className="flex items-center gap-2">
          <User size={18} />
          <span>{article.author}</span>
        </div>

        <div className="flex items-center gap-2">
          <CalendarDays size={18} />
          <span>{article.publishedAt}</span>
        </div>

        <div className="flex items-center gap-2">
          <Clock3 size={18} />
          <span>{article.readTime}</span>
        </div>

        <div className="flex items-center gap-2">
          <Eye size={18} />
          <span>{article.views.toLocaleString()} views</span>
        </div>

      </div>

    </header>
  );
}