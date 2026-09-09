export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-600 text-lg font-black text-white shadow-md">
        AS
      </div>
      <div>
        <div className="text-xl font-black tracking-tight text-slate-950 sm:text-2xl">
          Authentic Sikkim
        </div>
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
          News & stories
        </p>
      </div>
    </div>
  );
}
