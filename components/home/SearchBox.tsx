"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";

import { getLatestNews, News } from "@/services/news";

export default function SearchBox() {

  const [query,setQuery]=useState("");

  const [news,setNews]=useState<News[]>([]);

  useEffect(()=>{

    getLatestNews().then(setNews);

  },[]);

  const results=news.filter(item=>

    item.title.toLowerCase().includes(query.toLowerCase())

  ).slice(0,6);

  return(

    <div className="relative w-full max-w-2xl">

      <div className="flex items-center rounded-full border bg-white shadow">

        <Search className="ml-5"/>

        <input

          value={query}

          onChange={(e)=>setQuery(e.target.value)}

          placeholder="Search news..."

          className="w-full rounded-full px-5 py-4 outline-none"

        />

      </div>

      {

        query && (

          <div className="absolute mt-2 w-full rounded-2xl bg-white shadow-xl z-50">

            {

              results.length===0 ?

              <div className="p-5">

                No news found

              </div>

              :

              results.map(article=>(

                <Link

                  key={article.id}

                  href={`/news/${article.slug}`}

                  className="block border-b p-5 hover:bg-gray-100"

                >

                  <div className="font-bold">

                    {article.title}

                  </div>

                  <div className="text-sm text-gray-500">

                    {article.category}

                  </div>

                </Link>

              ))

            }

          </div>

        )

      }

    </div>

  );

}