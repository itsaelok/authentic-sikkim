"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { getTrendingNews, News } from "@/services/news";

export default function MostRead() {

  const [news,setNews]=useState<News[]>([]);

  useEffect(()=>{

    getTrendingNews().then(setNews);

  },[]);

  return(

    <section className="mt-16">

      <div className="flex items-center justify-between mb-8">

        <h2 className="text-3xl font-bold">

          Most Read

        </h2>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">

        {news.slice(0,5).map((article,index)=>(

          <Link

            key={article.id}

            href={`/news/${article.slug}`}

            className="bg-white rounded-2xl shadow p-6 hover:shadow-xl transition"

          >

            <div className="text-5xl font-black text-red-600 mb-4">

              {index+1}

            </div>

            <h3 className="font-bold leading-7">

              {article.title}

            </h3>

            <p className="mt-3 text-sm text-gray-500">

              {article.views.toLocaleString()} views

            </p>

          </Link>

        ))}

      </div>

    </section>

  );

}