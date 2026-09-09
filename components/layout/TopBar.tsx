export default function TopBar() {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="bg-gray-900 text-white text-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-2">

        <div>
          📅 {today}
        </div>

        <div className="flex gap-6">
          <span>🌤️ Gangtok 18°C</span>
          <span className="text-red-400 font-semibold">
            LIVE
          </span>
        </div>

      </div>
    </div>
  );
}