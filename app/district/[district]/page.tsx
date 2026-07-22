import Link from "next/link";

import {
  getDistrictNews,
} from "@/services/news";



interface Props {

  params: Promise<{
    district: string;
  }>;

}



export default async function DistrictPage({
  params,
}: Props) {


  const {
    district,
  } = await params;



  const districtName =
    district
      .replace(
        /-/g,
        " "
      )
      .replace(
        /\b\w/g,
        (char) =>
          char.toUpperCase()
      );



  const news =
    await getDistrictNews(
      districtName
    );




  return (

    <main className="min-h-screen bg-gray-50">


      <div className="mx-auto max-w-7xl px-6 py-10">


        <h1 className="mb-8 text-4xl font-bold">

          {districtName} News

        </h1>





        {news.length === 0 ? (

          <div className="rounded-xl border bg-white p-10 text-center">


            <h2 className="text-xl font-bold">

              No news available

            </h2>


            <p className="mt-2 text-gray-500">

              News from this district will appear here.

            </p>


          </div>


        ) : (



          <div className="grid gap-6 md:grid-cols-3">


            {news.map(
              (item)=>(


              <Link

                key={item.id}

                href={`/news/${item.slug}`}

                className="overflow-hidden rounded-2xl border bg-white transition hover:shadow-lg"

              >


                <img

                  src={item.image}

                  alt={item.title}

                  className="h-52 w-full object-cover"

                />



                <div className="p-5">


                  <h2 className="font-bold">

                    {item.title}

                  </h2>



                  <p className="mt-2 text-sm text-gray-500">

                    {item.category}

                  </p>



                  <p className="mt-3 text-sm text-gray-600">

                    {item.excerpt}

                  </p>


                </div>


              </Link>


            ))}


          </div>


        )}



      </div>


    </main>

  );

}