"use client";

export default function Newsletter(){

  return(

    <section className="mt-16 rounded-3xl bg-black text-white p-12">

      <div className="max-w-3xl">

        <h2 className="text-4xl font-black">

          Stay Updated

        </h2>

        <p className="mt-4 text-gray-300">

          Get the latest news from Sikkim directly in your inbox.

        </p>

        <div className="flex flex-col md:flex-row gap-4 mt-8">

          <input

            type="email"

            placeholder="Enter your email"

            className="flex-1 rounded-xl px-5 py-4 text-black"

          />

          <button

            className="rounded-xl bg-red-600 px-8 py-4 font-bold hover:bg-red-700"

          >

            Subscribe

          </button>

        </div>

      </div>

    </section>

  );

}