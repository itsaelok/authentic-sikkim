export default function Logo() {
  return (
    <div className="flex items-center gap-3">

      <div className="w-14 h-14 rounded-2xl bg-red-600 text-white flex items-center justify-center text-2xl font-black shadow-lg">
        AS
      </div>

      <div>

        <h1 className="text-2xl font-black tracking-tight">
          Authentic Sikkim
        </h1>

        <p className="text-xs text-gray-500 font-semibold tracking-widest uppercase">
          News Portal
        </p>

      </div>

    </div>
  );
}