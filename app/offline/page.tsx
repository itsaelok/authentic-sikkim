import Link from "next/link";

export default function OfflinePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">

      <h1 className="text-5xl font-bold">
        You're Offline
      </h1>

      <p className="mt-4 text-gray-600">
        Please check your internet connection.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-xl bg-red-600 px-6 py-3 text-white"
      >
        Retry
      </Link>

    </main>
  );
}