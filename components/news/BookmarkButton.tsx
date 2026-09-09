"use client";

import { useEffect, useState } from "react";
import { Bookmark } from "lucide-react";

interface Props{
  slug:string;
}

export default function BookmarkButton({slug}:Props){

  const [saved,setSaved]=useState(false);

  useEffect(()=>{

    const bookmarks=JSON.parse(
      localStorage.getItem("bookmarks")||"[]"
    );

    setSaved(bookmarks.includes(slug));

  },[slug]);

  function toggle(){

    const bookmarks=JSON.parse(
      localStorage.getItem("bookmarks")||"[]"
    );

    let updated;

    if(bookmarks.includes(slug)){

      updated=bookmarks.filter(
        (item:string)=>item!==slug
      );

      setSaved(false);

    }else{

      updated=[...bookmarks,slug];

      setSaved(true);

    }

    localStorage.setItem(
      "bookmarks",
      JSON.stringify(updated)
    );

  }

  return(

    <button

      onClick={toggle}

      className={`rounded-full px-5 py-3 flex items-center gap-2 border transition ${
        saved
          ? "bg-red-600 text-white"
          : "bg-white"
      }`}

    >

      <Bookmark size={18}/>

      {saved?"Saved":"Save"}

    </button>

  );

}