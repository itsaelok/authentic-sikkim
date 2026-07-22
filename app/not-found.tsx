import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">

      <h1 className="text-8xl font-black text-red-600">
        404
      </h1>

      <h2 className="mt-4 text-3xl font-bold">
        Page Not Found
      </h2>

      <p className="mt-3 max-w-md text-gray-600">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-xl bg-red-600 px-6 py-3 text-white hover:bg-red-700"
      >
        Go Home
      </Link>

    </main>
  );
}