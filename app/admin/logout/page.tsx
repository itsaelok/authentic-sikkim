"use client";

import {
  useEffect,
} from "react";

import {
  useRouter,
} from "next/navigation";

import {
  signOut,
} from "firebase/auth";

import {
  auth,
} from "@/lib/firebase";



export default function LogoutPage() {


  const router =
    useRouter();




  useEffect(() => {


    async function logout(){

      await signOut(
        auth
      );


      document.cookie =
        "auth-token=; path=/; max-age=0";



      router.push(
        "/admin/login"
      );

    }



    logout();


  },[router]);




  return (

    <div className="flex min-h-screen items-center justify-center">

      <p className="text-lg font-semibold">

        Logging out...

      </p>

    </div>

  );

}