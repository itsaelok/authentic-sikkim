"use client";

import {
  Facebook,
  Twitter,
  MessageCircle,
  Send,
  Link2,
} from "lucide-react";

import type { News } from "@/services/news";

interface Props {
  article: News;
}

export default function ShareButtons({
  article,
}: Props) {
  const url =
    typeof window !== "undefined"
      ? window.location.href
      : "";

  const title = encodeURIComponent(article.title);

  function open(link: string) {
    window.open(link, "_blank", "noopener,noreferrer");
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      alert("Article link copied!");
    } catch {
      alert("Unable to copy link.");
    }
  }

  return (
    <section className="mt-12 border-t pt-8">

      <h3 className="mb-5 text-lg font-bold">
        Share this article
      </h3>

      <div className="flex flex-wrap gap-4">

        <button
          onClick={() =>
            open(
              `https://wa.me/?text=${title}%20${encodeURIComponent(url)}`
            )
          }
          className="flex items-center gap-2 rounded-xl bg-green-500 px-5 py-3 text-white transition hover:scale-105"
        >
          <MessageCircle size={18} />
          WhatsApp
        </button>

        <button
          onClick={() =>
            open(
              `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                url
              )}`
            )
          }
          className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-white transition hover:scale-105"
        >
          <Facebook size={18} />
          Facebook
        </button>

        <button
          onClick={() =>
            open(
              `https://twitter.com/intent/tweet?text=${title}&url=${encodeURIComponent(
                url
              )}`
            )
          }
          className="flex items-center gap-2 rounded-xl bg-black px-5 py-3 text-white transition hover:scale-105"
        >
          <Twitter size={18} />
          X
        </button>

        <button
          onClick={() =>
            open(
              `https://t.me/share/url?url=${encodeURIComponent(
                url
              )}&text=${title}`
            )
          }
          className="flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-white transition hover:scale-105"
        >
          <Send size={18} />
          Telegram
        </button>

        <button
          onClick={copyLink}
          className="flex items-center gap-2 rounded-xl border px-5 py-3 transition hover:bg-gray-100"
        >
          <Link2 size={18} />
          Copy Link
        </button>

      </div>

    </section>
  );
}