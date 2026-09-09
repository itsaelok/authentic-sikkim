"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  onAuthStateChanged,
} from "firebase/auth";

import {
  useRouter,
} from "next/navigation";

import { auth } from "@/lib/auth";

import {
  getUserRole,
} from "@/services/users";

export default function AuthGuard({

  children,

}:{

  children:React.ReactNode;

}){

const router=useRouter();

const [loading,setLoading]=
useState(true);

useEffect(()=>{

return onAuthStateChanged(

auth,

async(user)=>{

if(!user){

router.replace("/login");

return;

}

const role=

await getUserRole(user.uid);

if(!role){

router.replace("/login");

return;

}

setLoading(false);

}

);

},[]);

if(loading){

return(

<div className="flex h-screen items-center justify-center">

Loading...

</div>

);

}

return children;

}