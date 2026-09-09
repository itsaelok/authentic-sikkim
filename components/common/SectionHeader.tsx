interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionHeader({
  title,
  subtitle,
}: Props) {
  return (
    <div className="flex items-end justify-between mb-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">
          {title}
        </h2>

        {subtitle && (
          <p className="text-gray-500 mt-2">
            {subtitle}
          </p>
        )}
      </div>

      <button className="text-red-600 font-semibold hover:underline">
        View All →
      </button>
    </div>
  );
}