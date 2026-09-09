import NewsForm from "@/components/admin/NewsForm";

export default function CreateNewsPage() {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Add New Article
        </h1>

        <p className="mt-2 text-gray-600">
          Create and publish a new Authentic Sikkim news article.
        </p>
      </div>


      <NewsForm
        mode="create"
      />

    </div>
  );
}