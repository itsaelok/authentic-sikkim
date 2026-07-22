"use client";

export default function Error({
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">

      <h1 className="text-6xl font-bold text-red-600">
        Something went wrong
      </h1>

      <p className="mt-4 text-gray-600">
        An unexpected error occurred.
      </p>

      <button
        onClick={reset}
        className="mt-6 rounded-xl bg-red-600 px-6 py-3 text-white"
      >
        Try Again
      </button>

    </main>
  );
}