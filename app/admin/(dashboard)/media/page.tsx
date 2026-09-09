"use client";

import {
  useEffect,
  useState,
} from "react";

import Image from "next/image";

import {
  ref,
  listAll,
  getDownloadURL,
  deleteObject,
  uploadBytes,
} from "firebase/storage";

import {
  storage,
} from "@/lib/firebase";


export default function MediaPage() {


  const [images, setImages] =
    useState<string[]>([]);


  const [uploading, setUploading] =
    useState(false);



  async function loadImages() {

    try {

      const folder =
        ref(
          storage,
          "news"
        );


      const result =
        await listAll(folder);


      const urls =
        await Promise.all(

          result.items.map(
            async (item) =>
              await getDownloadURL(item)
          )

        );


      setImages(urls);


    } catch(error){

      console.error(error);

    }

  }




  useEffect(() => {

    loadImages();

  }, []);





  async function uploadImage(
    e: React.ChangeEvent<HTMLInputElement>
  ){

    const file =
      e.target.files?.[0];


    if(!file) return;



    try {

      setUploading(true);


      const imageRef =
        ref(
          storage,
          `news/${Date.now()}-${file.name}`
        );



      await uploadBytes(
        imageRef,
        file
      );



      await loadImages();



    } finally {

      setUploading(false);

    }

  }






  async function copyUrl(
    url:string
  ){

    await navigator.clipboard.writeText(
      url
    );


    alert(
      "Image URL copied"
    );

  }






  async function removeImage(
    url:string
  ){

    const confirmDelete =
      confirm(
        "Delete this image?"
      );


    if(!confirmDelete)
      return;



    try {

      const imageRef =
        ref(
          storage,
          url
        );


      await deleteObject(
        imageRef
      );


      loadImages();


    }catch(error){

      console.error(error);

    }

  }






  return (

    <div className="space-y-8">


      <div>

        <h1 className="text-3xl font-bold">
          Media Library
        </h1>


        <p className="mt-2 text-gray-600">
          Manage uploaded images for news articles.
        </p>

      </div>




      <div className="rounded-xl border bg-white p-6">


        <label className="block text-sm font-semibold">

          Upload Image

        </label>


        <input

          type="file"

          accept="image/*"

          onChange={uploadImage}

          className="mt-3 w-full rounded-lg border p-3"

        />



        {uploading && (

          <p className="mt-3 text-sm text-gray-500">

            Uploading...

          </p>

        )}


      </div>





      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">


        {images.map(
          (url,index)=>(

          <div

            key={index}

            className="overflow-hidden rounded-xl border bg-white"

          >

            <div className="relative h-48">

              <Image

                src={url}

                alt="Uploaded image"

                fill

                className="object-cover"

              />

            </div>



            <div className="space-y-2 p-4">


              <button

                onClick={() =>
                  copyUrl(url)
                }

                className="w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white"

              >

                Copy URL

              </button>




              <button

                onClick={() =>
                  removeImage(url)
                }

                className="w-full rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white"

              >

                Delete

              </button>


            </div>


          </div>

        ))

        }


      </div>


    </div>

  );

}