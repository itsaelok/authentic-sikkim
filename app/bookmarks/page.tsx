"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import { getLatestNews, News } from "@/services/news";

export default function Bookmarks(){

const [articles,setArticles]=useState<News[]>([]);

useEffect(()=>{

const bookmarks=JSON.parse(

localStorage.getItem("bookmarks")||"[]"

);

getLatestNews().then(news=>{

setArticles(

news.filter(

item=>bookmarks.includes(item.slug)

)

);

});

},[]);

return(

<main className="max-w-7xl mx-auto px-6 py-12">

<h1 className="text-4xl font-bold mb-10">

Saved Articles

</h1>

<div className="grid gap-6">

{articles.map(article=>(

<Link

key={article.id}

href={`/news/${article.slug}`}

className="rounded-xl border bg-white p-6"

>

<h2 className="font-bold text-xl">

{article.title}

</h2>

<p className="mt-2 text-gray-500">

{article.category}

</p>

</Link>

))}

</div>

</main>

);

}