export default function SearchBar() {
  return (
    <section className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-5">

        <input
          type="text"
          placeholder="🔍 Search news..."
          className="w-full border rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-red-600"
        />

      </div>
    </section>
  );
}