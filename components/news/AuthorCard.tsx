"use client";

interface Props{

  author:string;

}

export default function AuthorCard({

  author,

}:Props){

  return(

    <section className="mt-14 rounded-2xl border bg-white p-8">

      <div className="flex gap-5 items-center">

        <div className="h-20 w-20 rounded-full bg-red-600 text-white flex items-center justify-center text-3xl font-bold">

          {author.charAt(0)}

        </div>

        <div>

          <h2 className="text-2xl font-bold">

            {author}

          </h2>

          <p className="text-gray-500 mt-2">

            Staff Reporter • Authentic Sikkim

          </p>

        </div>

      </div>

    </section>

  );

}