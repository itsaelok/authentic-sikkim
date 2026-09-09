"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import { getNewsById, type News } from "@/services/news";
import NewsForm from "@/components/admin/NewsForm";

export default function EditNewsPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();

  const [article, setArticle] = useState<News | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        const data = await getNewsById(params.id);

        if (!data) {
          setNotFound(true);
        } else {
          setArticle(data);
        }
      } catch (error) {
        console.error("Failed to load article:", error);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [params.id]);

  if (loading) {
    return <p className="text-gray-500">Loading article...</p>;
  }

  if (notFound || !article) {
    return (
      <div className="space-y-4">
        <p className="text-gray-600">This article could not be found.</p>
        <button
          onClick={() => router.push("/admin/news")}
          className="rounded-xl bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700"
        >
          Back to Manage News
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Edit Article</h1>
        <p className="mt-2 text-gray-600">
          Update and republish this Authentic Sikkim news article.
        </p>
      </div>

      <NewsForm mode="edit" initialData={article} />
    </div>
  );
}
