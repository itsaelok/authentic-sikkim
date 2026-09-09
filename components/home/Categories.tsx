const categories = [
  "Breaking",
  "Politics",
  "Education",
  "Jobs",
  "Tourism",
  "Business",
  "Sports",
  "Technology",
  "Health",
  "Weather",
];

export default function Categories() {
  return (
    <section className="bg-gray-50 border-b">

      <div className="max-w-7xl mx-auto px-6 py-4">

        <div className="flex gap-3 overflow-x-auto">

          {categories.map((category) => (

            <button
              key={category}
              className="
                whitespace-nowrap
                bg-white
                px-5
                py-2
                rounded-full
                shadow
                hover:bg-red-600
                hover:text-white
                transition
                font-medium
              "
            >
              {category}
            </button>

          ))}

        </div>

      </div>

    </section>
  );
}