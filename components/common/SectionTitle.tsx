import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SectionTitleProps {
  title: string;
  href?: string;
}

export default function SectionTitle({
  title,
  href,
}: SectionTitleProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        <div className="w-1.5 h-8 rounded-full bg-red-600" />

        <h2 className="text-2xl md:text-3xl font-black text-gray-900">
          {title}
        </h2>
      </div>

      {href && (
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold transition"
        >
          View All
          <ArrowRight size={18} />
        </Link>
      )}
    </div>
  );
}