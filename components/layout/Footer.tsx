import Link from "next/link";

const links = [
  ["/news", "Latest News"],
  ["/category/tourism", "Tourism"],
  ["/category/jobs", "Government Jobs"],
  ["/photos", "Photo Stories"],
  ["/about", "About"],
  ["/contact", "Contact"],
  ["/privacy", "Privacy"],
];

export default function Footer() {
  return (
    <footer className="mt-16 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="text-2xl font-black">Authentic Sikkim</p>
            <p className="mt-4 max-w-md leading-7 text-slate-300">
              A clean, independent digital publication for Sikkim news,
              culture, tourism, education, jobs and community stories.
            </p>
            <p className="mt-5 text-sm text-slate-400">Gangtok, Sikkim, India</p>
          </div>

          <div>
            <h2 className="font-bold">Explore</h2>
            <div className="mt-4 grid gap-2">
              {links.slice(0, 4).map(([href, label]) => (
                <Link key={href} href={href} className="text-slate-300 hover:text-white">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-bold">Information</h2>
            <div className="mt-4 grid gap-2">
              {links.slice(4).map(([href, label]) => (
                <Link key={href} href={href} className="text-slate-300 hover:text-white">
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-slate-800 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Authentic Sikkim. All rights reserved.</p>
          <p>Built for Sikkim, with a focus on speed and accessibility.</p>
        </div>
      </div>
    </footer>
  );
}
