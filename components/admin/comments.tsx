"use client";

import { useEffect, useState } from "react";
import {
  getComments,
  deleteComment,
  type Comment,
} from "@/services/comments";

export default function AdminCommentsPage() {
  const [comments, setComments] = useState<Comment[]>([]);

  async function load() {
    // Load all comments (we'll improve this shortly)
    const data = await getComments("");
    setComments(data);
  }

  useEffect(() => {
    load();
  }, []);

  async function remove(id: string) {
    if (!confirm("Delete this comment?")) return;

    await deleteComment(id);

    load();
  }

  return (
    <div className="space-y-6">

      <h1 className="text-3xl font-bold">
        Comments
      </h1>

      {comments.map((comment) => (
        <div
          key={comment.id}
          className="rounded-xl border bg-white p-5"
        >
          <h3 className="font-semibold">
            {comment.name}
          </h3>

          <p className="mt-2">
            {comment.message}
          </p>

          <button
            onClick={() => remove(comment.id!)}
            className="mt-4 rounded bg-red-600 px-4 py-2 text-white"
          >
            Delete
          </button>
        </div>
      ))}

    </div>
  );
}