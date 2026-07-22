"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  auth,
} from "@/lib/auth";

import {
  getUserRole,
} from "@/services/users";

export default function AdminOnly({

children,

}:{

children:React.ReactNode;

}){

const [allowed,setAllowed]=
useState(false);

useEffect(()=>{

(async()=>{

const user=

auth.currentUser;

if(!user) return;

const data=

await getUserRole(user.uid);

if(data?.role==="admin")

setAllowed(true);

})();

},[]);

if(!allowed)

return null;

return children;

}