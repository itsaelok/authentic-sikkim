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
    href: "/admin/news/new",
  },
  {
    name: "Manage News",
    href: "/admin/news",
  },
  {
    name: "Media Library",
    href: "/admin/media",
  },
  {
    name: "Comments",
    href: "/admin/comments",
  },
  {
    name: "Polls",
    href: "/admin/polls",
  },
  {
    name: "Newsletter",
    href: "/admin/newsletter",
  },
  {
    name: "Analytics",
    href: "/admin/analytics",
  },
  {
    name: "Ads",
    href: "/admin/ads",
  },
  {
    name: "Users",
    href: "/admin/users",
  },
  {
    name: "Settings",
    href: "/admin/setting",
  },
];



export default function Sidebar() {


  const pathname =
    usePathname();



  return (

    <aside className="fixed inset-y-0 left-0 hidden min-h-screen w-72 overflow-y-auto border-r bg-white p-5 lg:block">


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