"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { getLatestNews, News } from "@/services/news";

interface Props{
  currentSlug:string;
  category:string;
}

export default function RelatedNews({
  currentSlug,
  category,
}:Props){

  const [articles,setArticles]=useState<News[]>([]);

  useEffect(()=>{

    getLatestNews().then((news)=>{

      const filtered=news
        .filter(
          item=>
            item.slug!==currentSlug &&
            item.category===category
        )
        .slice(0,4);

      setArticles(filtered);

    });

  },[currentSlug,category]);

  if(articles.length===0) return null;

  return(

    <section className="mt-20">

      <h2 className="text-3xl font-bold mb-8">

        Related Articles

      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        {articles.map(article=>(

          <Link

            key={article.id}

            href={`/news/${article.slug}`}

            className="rounded-2xl overflow-hidden bg-white shadow hover:shadow-xl transition"

          >

            <div className="relative h-52">

              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
              />

            </div>

            <div className="p-5">

              <div className="text-red-600 text-sm font-bold">

                {article.category}

              </div>

              <h3 className="font-bold mt-2">

                {article.title}

              </h3>

            </div>

          </Link>

        ))}

      </div>

    </section>

  );

}