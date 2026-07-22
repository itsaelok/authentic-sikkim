"use client";

import {
  useState,
  useEffect,
} from "react";

import Link from "next/link";

import {
  getNews,
  searchNews,
  News,
} from "@/services/news";



export default function SearchPage() {


  const [keyword,setKeyword] =
    useState("");


  const [news,setNews] =
    useState<News[]>([]);



  const [results,setResults] =
    useState<News[]>([]);



  const [loading,setLoading] =
    useState(true);





  useEffect(()=>{


    async function load(){

      const data =
        await getNews();


      setNews(data);

      setResults(data);


      setLoading(false);

    }


    load();


  },[]);






  function handleSearch(
    value:string
  ){

    setKeyword(value);


    const filtered =
      searchNews(
        news,
        value
      );


    setResults(filtered);

  }






  return (

    <main className="min-h-screen bg-gray-50">


      <div className="mx-auto max-w-5xl px-6 py-10">


        <h1 className="text-4xl font-bold">

          Search News

        </h1>



        <input

          type="text"

          value={keyword}

          onChange={(e)=>
            handleSearch(
              e.target.value
            )
          }

          placeholder="Search Sikkim news..."

          className="mt-6 w-full rounded-xl border bg-white px-5 py-4 outline-none focus:border-red-500"

        />






        {loading ? (

          <p className="mt-8">

            Loading...

          </p>


        ) : (



          <div className="mt-8 space-y-5">


            {results.length === 0 ? (

              <div className="rounded-xl border bg-white p-8 text-center">

                No news found.

              </div>


            ) : (


              results.map(
                (item)=>(


                <Link

                  key={item.id}

                  href={`/news/${item.slug}`}

                  className="block rounded-xl border bg-white p-5 hover:shadow-md"

                >


                  <h2 className="text-xl font-bold">

                    {item.title}

                  </h2>



                  <p className="mt-2 text-gray-600">

                    {item.excerpt}

                  </p>



                  <div className="mt-3 text-sm text-gray-500">

                    {item.category} • {item.district}

                  </div>


                </Link>


              ))

            )}



          </div>


        )}



      </div>


    </main>

  );

}