"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import {
  News,
  getNews,
  deleteNews,
  toggleFeatured,
  toggleBreaking,
  togglePublished,
  searchNews,
  filterByCategory,
  filterByDistrict,
  filterPublished,
  NEWS_CATEGORIES,
  DISTRICTS,
} from "@/services/news";

export default function NewsTable() {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [category, setCategory] =
    useState("All");

  const [district, setDistrict] =
    useState("All");

  const [status, setStatus] =
    useState("All");

  const [page, setPage] =
    useState(1);

  const pageSize = 10;

  async function loadNews() {
    try {
      setLoading(true);

      const data = await getNews();

      setNews(data);
    } catch (error) {
      console.error(
        "Failed to load news:",
        error
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadNews();
  }, []);

  const filteredNews = useMemo(() => {
    let result = [...news];

    result = searchNews(
      result,
      search
    );

    result = filterByCategory(
      result,
      category
    );

    result = filterByDistrict(
      result,
      district
    );

    result = filterPublished(
      result,
      status
    );

    return result;
  }, [
    news,
    search,
    category,
    district,
    status,
  ]);

  const totalPages = Math.max(
    1,
    Math.ceil(
      filteredNews.length / pageSize
    )
  );

  const currentNews =
    filteredNews.slice(
      (page - 1) * pageSize,
      page * pageSize
    );

  async function handleDelete(
    id: string
  ) {
    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this article?"
      );

    if (!confirmDelete) return;

    await deleteNews(id);

    loadNews();
  }

  async function handlePublish(
    item: News
  ) {
    if (!item.id) return;

    await togglePublished(
      item.id,
      !item.published
    );

    loadNews();
  }

  async function handleFeatured(
    item: News
  ) {
    if (!item.id) return;

    await toggleFeatured(
      item.id,
      !item.featured
    );

    loadNews();
  }

  async function handleBreaking(
    item: News
  ) {
    if (!item.id) return;

    await toggleBreaking(
      item.id,
      !item.breaking
    );

    loadNews();
  }

  if (loading) {
    return (
      <div className="rounded-xl border bg-white p-8 text-center">
        Loading news...
      </div>
    );
  }

  return (
    <div className="space-y-6">
              {/* Filters */}

      <div className="rounded-xl border bg-white p-5">
        <div className="grid gap-4 md:grid-cols-4">
          <input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className="rounded-lg border px-4 py-2 outline-none focus:border-red-500"
          />

          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setPage(1);
            }}
            className="rounded-lg border px-4 py-2"
          >
            <option value="All">
              All Categories
            </option>

            {NEWS_CATEGORIES.map(
              (item) => (
                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>
              )
            )}
          </select>

          <select
            value={district}
            onChange={(e) => {
              setDistrict(e.target.value);
              setPage(1);
            }}
            className="rounded-lg border px-4 py-2"
          >
            <option value="All">
              All Districts
            </option>

            {DISTRICTS.map(
              (item) => (
                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>
              )
            )}
          </select>

          <select
            value={status}
            onChange={(e) => {
              setStatus(e.target.value);
              setPage(1);
            }}
            className="rounded-lg border px-4 py-2"
          >
            <option value="All">
              All Status
            </option>

            <option value="Published">
              Published
            </option>

            <option value="Draft">
              Draft
            </option>
          </select>
        </div>
      </div>


      {/* Table */}

      <div className="overflow-x-auto rounded-xl border bg-white">
        <table className="min-w-full">

          <thead className="bg-gray-100">
            <tr className="text-left text-sm font-semibold text-gray-700">

              <th className="px-5 py-4">
                Article
              </th>

              <th className="px-5 py-4">
                Category
              </th>

              <th className="px-5 py-4">
                District
              </th>

              <th className="px-5 py-4">
                Views
              </th>

              <th className="px-5 py-4">
                Status
              </th>

              <th className="px-5 py-4">
                Featured
              </th>

              <th className="px-5 py-4">
                Breaking
              </th>

              <th className="px-5 py-4 text-right">
                Actions
              </th>

            </tr>
          </thead>


          <tbody>

            {currentNews.length === 0 && (
              <tr>
                <td
                  colSpan={8}
                  className="py-10 text-center text-gray-500"
                >
                  No articles found.
                </td>
              </tr>
            )}
                        {currentNews.map((item) => (
              <tr
                key={item.id}
                className="border-t hover:bg-gray-50"
              >
                <td className="px-5 py-4">
                  <div className="flex gap-4">
                    <img
                      src={
                        item.image ||
                        "/images/placeholder.jpg"
                      }
                      alt={item.title}
                      className="h-16 w-24 rounded-lg object-cover"
                    />

                    <div>
                      <h3 className="max-w-xs font-semibold line-clamp-2">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-xs text-gray-500">
                        {item.author}
                      </p>

                      <p className="mt-1 text-xs text-gray-400">
                        {item.publishedAt}
                      </p>
                    </div>
                  </div>
                </td>


                <td className="px-5 py-4">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                    {item.category}
                  </span>
                </td>


                <td className="px-5 py-4">
                  {item.district}
                </td>


                <td className="px-5 py-4">
                  {(item.views ?? 0).toLocaleString()}
                </td>


                <td className="px-5 py-4">
                  <button
                    onClick={() =>
                      handlePublish(item)
                    }
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      item.published
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {item.published
                      ? "Published"
                      : "Draft"}
                  </button>
                </td>


                <td className="px-5 py-4">
                  <button
                    onClick={() =>
                      handleFeatured(item)
                    }
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      item.featured
                        ? "bg-red-100 text-red-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {item.featured
                      ? "Yes"
                      : "No"}
                  </button>
                </td>


                <td className="px-5 py-4">
                  <button
                    onClick={() =>
                      handleBreaking(item)
                    }
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      item.breaking
                        ? "bg-orange-100 text-orange-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {item.breaking
                      ? "Yes"
                      : "No"}
                  </button>
                </td>


                <td className="px-5 py-4">
                  <div className="flex justify-end gap-2">

                    <Link
                      href={`/admin/news/edit/${item.id}`}
                      className="rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
                    >
                      Edit
                    </Link>


                    <button
                      onClick={() =>
                        handleDelete(item.id!)
                      }
                      className="rounded-lg bg-red-600 px-3 py-2 text-sm font-medium text-white hover:bg-red-700"
                    >
                      Delete
                    </button>

                  </div>
                </td>

              </tr>
            ))}

          </tbody>

        </table>
      </div>
            {/* Pagination */}

      <div className="flex flex-col items-center justify-between gap-4 rounded-xl border bg-white p-4 md:flex-row">

        <p className="text-sm text-gray-600">
          Showing{" "}
          <span className="font-semibold">
            {filteredNews.length === 0
              ? 0
              : (page - 1) * pageSize + 1}
          </span>

          {" - "}

          <span className="font-semibold">
            {Math.min(
              page * pageSize,
              filteredNews.length
            )}
          </span>

          {" of "}

          <span className="font-semibold">
            {filteredNews.length}
          </span>{" "}
          articles
        </p>


        <div className="flex items-center gap-2">

          <button
            onClick={() =>
              setPage((prev) =>
                Math.max(
                  1,
                  prev - 1
                )
              )
            }
            disabled={page === 1}
            className="rounded-lg border px-4 py-2 text-sm disabled:opacity-50"
          >
            Previous
          </button>


          {Array.from(
            {
              length: totalPages,
            },
            (_, index) =>
              index + 1
          ).map(
            (number) => (
              <button
                key={number}
                onClick={() =>
                  setPage(number)
                }
                className={`h-10 w-10 rounded-lg text-sm font-semibold ${
                  page === number
                    ? "bg-red-600 text-white"
                    : "border hover:bg-gray-100"
                }`}
              >
                {number}
              </button>
            )
          )}


          <button
            onClick={() =>
              setPage((prev) =>
                Math.min(
                  totalPages,
                  prev + 1
                )
              )
            }
            disabled={
              page === totalPages
            }
            className="rounded-lg border px-4 py-2 text-sm disabled:opacity-50"
          >
            Next
          </button>

        </div>

      </div>

    </div>
  );
}