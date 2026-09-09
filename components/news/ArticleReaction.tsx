"use client";

import { useState } from "react";

import {

ThumbsUp,

Heart,

Laugh,

} from "lucide-react";

export default function ArticleReaction(){

const [like,setLike]=useState(0);

const [love,setLove]=useState(0);

const [funny,setFunny]=useState(0);

return(

<section className="mt-14 rounded-2xl border bg-white p-8">

<h2 className="text-2xl font-bold mb-6">

Your Reaction

</h2>

<div className="flex gap-6">

<button

onClick={()=>setLike(like+1)}

className="flex items-center gap-2 rounded-xl border px-6 py-4"

>

<ThumbsUp/>

{like}

</button>

<button

onClick={()=>setLove(love+1)}

className="flex items-center gap-2 rounded-xl border px-6 py-4"

>

<Heart/>

{love}

</button>

<button

onClick={()=>setFunny(funny+1)}

className="flex items-center gap-2 rounded-xl border px-6 py-4"

>

<Laugh/>

{funny}

</button>

</div>

</section>

);

}