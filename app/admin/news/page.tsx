import Link from "next/link";

import NewsTable from "@/components/admin/NewsTable";

export default function AdminNewsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Manage News
          </h1>

          <p className="mt-2 text-gray-600">
            Create, edit, and manage all Authentic Sikkim articles.
          </p>
        </div>

        <Link
          href="/admin/news/new"
          className="rounded-xl bg-red-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-red-700"
        >
          + Add News
        </Link>
      </div>

      <NewsTable />
    </div>
  );
}