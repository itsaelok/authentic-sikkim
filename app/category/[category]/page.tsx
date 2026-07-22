import Link from "next/link";

import {
  getCategoryNews,
} from "@/services/news";



interface Props {

  params: Promise<{
    category: string;
  }>;

}




export default async function CategoryPage({
  params,
}: Props) {


  const {
    category,
  } = await params;



  const categoryName =
    category
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
    await getCategoryNews(
      categoryName
    );





  return (

    <main className="min-h-screen bg-gray-50">


      <div className="mx-auto max-w-7xl px-6 py-10">


        <h1 className="mb-8 text-4xl font-bold">

          {categoryName} News

        </h1>





        {news.length === 0 ? (

          <div className="rounded-xl border bg-white p-10 text-center">

            <h2 className="text-xl font-bold">

              No news available

            </h2>


            <p className="mt-2 text-gray-500">

              New articles will appear here soon.

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

                    {item.district}

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