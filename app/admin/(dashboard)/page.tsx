import Link from "next/link";

import {
  getNews,
  getDashboardStats,
  getRecentNews,
} from "@/services/news";

import DashboardCard from "@/components/admin/DashboardCard";



export default async function AdminDashboardPage() {


  const news =
    await getNews();



  const stats =
    getDashboardStats(
      news
    );



  const recent =
    getRecentNews(
      news,
      5
    );




  return (

    <div className="space-y-8">


      <div>

        <h1 className="text-3xl font-bold">

          Dashboard

        </h1>


        <p className="mt-2 text-gray-600">

          Manage Authentic Sikkim news platform.

        </p>


      </div>





      {/* Stats */}


      <div className="grid gap-6 md:grid-cols-3">


        <DashboardCard

          title="Total Articles"

          value={stats.total}

        />


        <DashboardCard

          title="Published"

          value={stats.published}

        />


        <DashboardCard

          title="Drafts"

          value={stats.drafts}

        />


        <DashboardCard

          title="Featured"

          value={stats.featured}

        />


        <DashboardCard

          title="Breaking"

          value={stats.breaking}

        />


        <DashboardCard

          title="Total Views"

          value={stats.totalViews}

        />


      </div>






      {/* Recent News */}


      <section className="rounded-2xl border bg-white p-6">


        <div className="mb-5 flex items-center justify-between">


          <h2 className="text-xl font-bold">

            Recent Articles

          </h2>



          <Link

            href="/admin/news"

            className="text-sm font-semibold text-red-600"

          >

            View All

          </Link>


        </div>





        <div className="space-y-4">


          {recent.map(
            (item)=>(


            <div

              key={item.id}

              className="flex items-center justify-between border-b pb-4"

            >


              <div>

                <h3 className="font-semibold">

                  {item.title}

                </h3>


                <p className="text-sm text-gray-500">

                  {item.category} • {item.district}

                </p>


              </div>





              <span

                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  
                  item.published

                  ? "bg-green-100 text-green-700"

                  : "bg-yellow-100 text-yellow-700"

                }`}

              >

                {item.published
                  ? "Published"
                  : "Draft"}

              </span>


            </div>


          ))}


        </div>


      </section>



    </div>

  );

}