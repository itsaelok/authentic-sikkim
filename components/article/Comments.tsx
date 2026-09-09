"use client";

import { useEffect, useState } from "react";
import {
  addComment,
  getComments,
  type Comment,
} from "@/services/comments";

interface Props {
  newsId: string;
}

export default function Comments({ newsId }: Props) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function loadComments() {
    const data = await getComments(newsId);
    setComments(data);
  }

  useEffect(() => {
    loadComments();
  }, [newsId]);

  async function submit() {
    if (!name.trim() || !message.trim()) {
      alert("Please fill all fields.");
      return;
    }

    setLoading(true);

    await addComment({
      newsId,
      name,
      message,
    });

    setName("");
    setMessage("");

    await loadComments();

    setLoading(false);
  }

  return (
    <section className="mt-12 border-t pt-8">

      <h2 className="mb-6 text-2xl font-bold">
        Comments ({comments.length})
      </h2>

      <div className="space-y-4">

        <input
          className="w-full rounded-lg border p-3"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          className="h-32 w-full rounded-lg border p-3"
          placeholder="Write a comment..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          onClick={submit}
          disabled={loading}
          className="rounded-lg bg-red-600 px-6 py-3 text-white"
        >
          {loading ? "Posting..." : "Post Comment"}
        </button>

      </div>

      <div className="mt-10 space-y-6">

        {comments.map((comment) => (
          <div
            key={comment.id}
            className="rounded-xl border p-5"
          >
            <h3 className="font-semibold">
              {comment.name}
            </h3>

            <p className="mt-2 text-gray-700">
              {comment.message}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}