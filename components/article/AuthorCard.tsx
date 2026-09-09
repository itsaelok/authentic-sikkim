import { User } from "lucide-react";

interface Props {
  author: string;
}

export default function AuthorCard({
  author,
}: Props) {
  return (
    <section className="mt-12 rounded-2xl border bg-gray-50 p-8">

      <div className="flex items-center gap-6">

        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-600 text-white">
          <User size={36} />
        </div>

        <div>

          <h3 className="text-2xl font-bold">
            {author}
          </h3>

          <p className="mt-2 text-gray-600">
            {author} is a journalist at <strong>Authentic Sikkim</strong>,
            covering politics, education, tourism, government initiatives,
            business, and local developments across Sikkim.
          </p>

          <div className="mt-4 flex flex-wrap gap-3">

            <span className="rounded-full bg-white px-4 py-2 text-sm shadow">
              📰 Verified Journalist
            </span>

            <span className="rounded-full bg-white px-4 py-2 text-sm shadow">
              📍 Sikkim
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}