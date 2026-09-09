"use client";

import Link from "next/link";

import {
  useEffect,
  useState,
} from "react";



export default function Header() {


  const [date,setDate] =
    useState("");



  useEffect(()=>{

    setDate(

      new Date()
        .toLocaleDateString(
          "en-IN",
          {
            day:"2-digit",
            month:"long",
            year:"numeric",
          }
        )

    );

  },[]);




  return (

    <header className="flex items-center justify-between border-b bg-white px-8 py-5">


      <div>


        <h1 className="text-2xl font-bold text-gray-900">

          Admin Dashboard

        </h1>


        <p className="mt-1 text-sm text-gray-500">

          {date}

        </p>


      </div>





      <div className="flex items-center gap-4">


        <div className="hidden text-right sm:block">


          <p className="font-semibold">

            Administrator

          </p>


          <p className="text-sm text-gray-500">

            Authentic Sikkim

          </p>


        </div>





        <Link

          href="/admin/logout"

          className="rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"

        >

          Logout

        </Link>



      </div>



    </header>

  );

}