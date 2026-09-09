"use client";

import {
  useState,
} from "react";

import {
  useRouter,
} from "next/navigation";

import {
  signInWithEmailAndPassword,
} from "firebase/auth";

import {
  auth,
} from "@/lib/firebase";



export default function AdminLoginPage() {


  const router =
    useRouter();



  const [email,setEmail] =
    useState("");

  const [password,setPassword] =
    useState("");

  const [error,setError] =
    useState("");

  const [loading,setLoading] =
    useState(false);






  async function handleLogin(
    e: React.FormEvent
  ){

    e.preventDefault();


    try {


      setLoading(true);

      setError("");



      const userCredential =
  await signInWithEmailAndPassword(
    auth,
    email,
    password
  );


const user =
  userCredential.user;



const token =
  await user.getIdToken();



document.cookie =
  `auth-token=${token}; path=/; max-age=3600; samesite=strict`;



router.push(
  "/admin"
);



    } catch(error:any){


      setError(
        "Invalid email or password"
      );


    } finally {


      setLoading(false);


    }

  }







  return (

    <main className="flex min-h-screen items-center justify-center bg-gray-100 px-6">


      <form

        onSubmit={handleLogin}

        className="w-full max-w-md rounded-2xl border bg-white p-8 shadow"

      >


        <h1 className="text-3xl font-bold">

          Admin Login

        </h1>



        <p className="mt-2 text-gray-500">

          Authentic Sikkim CMS

        </p>





        {error && (

          <div className="mt-5 rounded-lg bg-red-100 p-3 text-sm text-red-700">

            {error}

          </div>

        )}






        <div className="mt-6 space-y-4">


          <input

            type="email"

            placeholder="Email"

            value={email}

            onChange={(e)=>
              setEmail(
                e.target.value
              )
            }

            className="w-full rounded-lg border px-4 py-3"

            required

          />




          <input

            type="password"

            placeholder="Password"

            value={password}

            onChange={(e)=>
              setPassword(
                e.target.value
              )
            }

            className="w-full rounded-lg border px-4 py-3"

            required

          />



        </div>






        <button

          disabled={loading}

          className="mt-6 w-full rounded-xl bg-red-600 py-3 font-semibold text-white hover:bg-red-700 disabled:opacity-50"

        >

          {loading
            ? "Logging in..."
            : "Login"}

        </button>



      </form>


    </main>

  );

}