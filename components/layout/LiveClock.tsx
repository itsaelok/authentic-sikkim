"use client";

import {useEffect,useState} from "react";

export default function LiveClock(){

const [time,setTime]=useState("");

useEffect(()=>{

const timer=setInterval(()=>{

setTime(

new Date().toLocaleString()

);

},1000);

return()=>clearInterval(timer);

},[]);

return(

<div className="text-sm font-semibold">

🟢 LIVE

&nbsp;

{time}

</div>

);

}