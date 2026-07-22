import {
  getNewsById,
} from "@/services/news";

import NewsForm from "@/components/admin/NewsForm";


interface Props {
  params: Promise<{
    id: string;
  }>;
}


export default async function EditNewsPage({
  params,
}: Props) {


  const {
    id,
  } = await params;



  const news =
    await getNewsById(id);



  if (!news) {

    return (
      <div className="rounded-xl border bg-white p-10 text-center">

        <h1 className="text-2xl font-bold">
          Article Not Found
        </h1>

        <p className="mt-2 text-gray-500">
          The news article you are looking for does not exist.
        </p>

      </div>
    );

  }



  return (
    <div className="space-y-8">


      <div>

        <h1 className="text-3xl font-bold text-gray-900">
          Edit Article
        </h1>


        <p className="mt-2 text-gray-600">
          Update your Authentic Sikkim news article.
        </p>

      </div>



      <NewsForm
        mode="edit"
        initialData={news}
      />


    </div>
  );
}