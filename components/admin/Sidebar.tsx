"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


const menu = [
  {
    name: "Dashboard",
    href: "/admin",
  },
  {
    name: "Create News",
    href: "/admin/news/create",
  },
  {
    name: "Manage News",
    href: "/admin/news",
  },
  {
    name: "Categories",
    href: "/admin/categories",
  },
  {
    name: "Settings",
    href: "/admin/settings",
  },
];



export default function Sidebar() {


  const pathname =
    usePathname();



  return (

    <aside className="min-h-screen w-64 border-r bg-white p-5">


      <div className="mb-8">


        <h1 className="text-2xl font-bold text-red-600">

          Authentic Sikkim

        </h1>


        <p className="text-sm text-gray-500">

          Admin Panel

        </p>


      </div>





      <nav className="space-y-2">


        {
          menu.map(
            (item)=>(

              <Link

              key={item.href}

              href={item.href}

              className={`block rounded-lg px-4 py-3 font-medium transition ${
                
                pathname === item.href

                ? "bg-red-600 text-white"

                : "hover:bg-gray-100"

              }`}

              >

                {item.name}

              </Link>

            )
          )
        }



      </nav>





    </aside>

  );

}