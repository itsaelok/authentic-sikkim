import Link from "next/link";

interface Props {
  tags: string[];
}

export default function Tags({
  tags,
}: Props) {

  if (!tags || tags.length === 0) {
    return null;
  }

  return (
    <section className="mt-12">

      <h3 className="mb-5 text-xl font-bold">
        Tags
      </h3>

      <div className="flex flex-wrap gap-3">

        {tags.map((tag) => (

          <Link
            key={tag}
            href={`/tags/${encodeURIComponent(tag)}`}
            className="rounded-full border border-gray-300 bg-white px-5 py-2 text-sm font-medium transition hover:border-red-600 hover:bg-red-600 hover:text-white"
          >
            #{tag}
          </Link>

        ))}

      </div>

    </section>
  );
}