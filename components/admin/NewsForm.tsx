"use client";
import Image from "next/image";
import {
  useState,
} from "react";

import {
  addNews,
  updateNews,
  generateSlug,
  calculateReadTime,
  NEWS_CATEGORIES,
  DISTRICTS,
} from "@/services/news";

import {
  uploadImage,
} from "@/lib/cloudinary";



import type { News } from "@/services/news";


interface NewsFormProps {

  mode?: "create" | "edit";

  initialData?: News;

}


export default function NewsForm(
  {
    mode = "create",
    initialData,
  }: NewsFormProps
) {


  const [loading,setLoading] =
    useState(false);


  const [imageLoading,setImageLoading] =
    useState(false);
const [tagInput, setTagInput] = useState(
  initialData?.tags?.join(", ") ?? ""
);


  const [form, setForm] = useState({
  title: initialData?.title ?? "",
  excerpt: initialData?.excerpt ?? "",
  content: initialData?.content ?? "",
  image: initialData?.image ?? "",
  category: initialData?.category ?? "Latest",
  district: initialData?.district ?? "Gangtok",
  author: initialData?.author ?? "Authentic Sikkim",

tags: initialData?.tags ?? [],

featured: initialData?.featured ?? false,
  breaking: initialData?.breaking ?? false,
  published: initialData?.published ?? false,
});





 function update(
  key: keyof typeof form,
  value: unknown
) {
  setForm({
    ...form,
    [key]: value,
  });
}





  async function handleImage(
    e:React.ChangeEvent<HTMLInputElement>
  ){

    const file =
      e.target.files?.[0];


    if(!file) return;


    try{

      setImageLoading(true);


      const url =
        await uploadImage(file);



      update(
        "image",
        url
      );


    }

    catch(error){

      alert(
        "Image upload failed"
      );

    }

    finally{

      setImageLoading(false);

    }

  }







  async function submit() {

  if (!form.title) {
    alert("Title required");
    return;
  }

  try {

    setLoading(true);

    const newsData = {

      ...form,

      slug: generateSlug(form.title),

      readTime: calculateReadTime(form.content),

      publishedAt: new Date().toISOString(),

      views: initialData?.views ?? 0,

    };

    if (mode === "edit" && initialData?.id) {

      await updateNews(initialData.id, newsData);

    } else {

      await addNews(newsData);

    }

    alert(
      mode === "edit"
        ? "News updated successfully"
        : "News published successfully"
    );

    window.location.reload();

  } catch (error) {

    console.error(error);

    alert("Failed to save news");

  } finally {

    setLoading(false);

  }

}

return (

<div className="space-y-6 rounded-2xl border bg-white p-6">


<h2 className="text-2xl font-bold">
  {mode === "edit" ? "Edit News" : "Create News"}
</h2>




<input

className="w-full rounded-lg border p-3"

placeholder="News title"

value={form.title}

onChange={
(e)=>update(
"title",
e.target.value
)
}

/>




<textarea

className="w-full rounded-lg border p-3"

placeholder="Short excerpt"

value={form.excerpt}

onChange={
(e)=>update(
"excerpt",
e.target.value
)
}

/>





<textarea

className="h-52 w-full rounded-lg border p-3"

placeholder="News content"

value={form.content}

onChange={
(e)=>update(
"content",
e.target.value
)
}

/>






<div>

  <label className="font-semibold">
    Upload Image
  </label>

  <input
    type="file"
    accept="image/*"
    onChange={handleImage}
  />

  {imageLoading && (
    <p className="text-sm text-gray-500">
      Uploading image...
    </p>
  )}

  {form.image && (
    <div className="relative mt-3 h-40 w-full overflow-hidden rounded-lg">
      <Image
        src={form.image}
        alt="Preview"
        fill
        className="object-cover"
      />
    </div>
  )}

</div>


<div>

  <label className="font-semibold">
    Upload Image
  </label>

  <input
    type="file"
    accept="image/*"
    onChange={handleImage}
  />

  {imageLoading && (
    <p className="text-sm text-gray-500">
      Uploading image...
    </p>
  )}

  {form.image && (
    <div className="relative mt-3 h-40 w-full overflow-hidden rounded-lg">
      <Image
        src={form.image}
        alt="Preview"
        fill
        className="object-cover"
      />
    </div>
  )}

</div>







<select

className="w-full rounded-lg border p-3"

value={form.category}

onChange={
(e)=>update(
"category",
e.target.value
)
}

>

{
NEWS_CATEGORIES.map(
(c)=>(

<option key={c}>
{c}
</option>

)
)
}

</select>


<select

className="w-full rounded-lg border p-3"

value={form.district}

onChange={
(e)=>update(
"district",
e.target.value
)
}

>

{
DISTRICTS.map(
(d)=>(

<option key={d}>
{d}
</option>

)
)
}

</select>
<input
  className="w-full rounded-lg border p-3"
  placeholder="Author Name"
  value={form.author}
  onChange={(e)=>
    update(
      "author",
      e.target.value
    )
  }
/>
<div>

  <label className="mb-2 block font-semibold">
    Tags
  </label>

  <input
    className="w-full rounded-lg border p-3"
    placeholder="sikkim, gangtok, tourism"
    value={tagInput}
    onChange={(e) => {

      setTagInput(e.target.value);

      update(
        "tags",
        e.target.value
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean)
      );

    }}
  />

  <p className="mt-2 text-sm text-gray-500">
    Separate tags using commas.
  </p>

</div>


<label className="flex gap-2">

<input

type="checkbox"

checked={form.featured}

onChange={
(e)=>update(
"featured",
e.target.checked
)
}

/>

Featured

</label>





<label className="flex gap-2">

<input

type="checkbox"

checked={form.breaking}

onChange={
(e)=>update(
"breaking",
e.target.checked
)
}

/>

Breaking News

</label>





<label className="flex gap-2">

<input

type="checkbox"

checked={form.published}

onChange={
(e)=>update(
"published",
e.target.checked
)
}

/>

Publish Now

</label>







<button

onClick={submit}

disabled={loading}

className="rounded-xl bg-red-600 px-6 py-3 font-semibold text-white"

>

{
loading
  ? "Saving..."
  : mode === "edit"
    ? "Update News"
    : "Publish News"
}
</button>




</div>

);


}