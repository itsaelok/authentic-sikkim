"use client";

import Image from "next/image";

const places = [
  {
    name: "Tsomgo Lake",
    image: "/images/tourism/tsomgo.jpg",
  },
  {
    name: "Yumthang Valley",
    image: "/images/tourism/yumthang.jpg",
  },
  {
    name: "Pelling",
    image: "/images/tourism/pelling.jpg",
  },
  {
    name: "Namchi",
    image: "/images/tourism/namchi.jpg",
  },
];

export default function Tourism() {

  return (

    <section className="mt-16">

      <h2 className="text-3xl font-bold mb-8">
        Explore Sikkim
      </h2>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        {places.map((place)=>(

          <div
            key={place.name}
            className="group overflow-hidden rounded-2xl shadow bg-white"
          >

            <div className="relative h-64 overflow-hidden">

              <Image
                src={place.image}
                alt={place.name}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
              />

            </div>

            <div className="p-5">

              <h3 className="font-bold text-xl">
                {place.name}
              </h3>

            </div>

          </div>

        ))}

      </div>

    </section>

  );

}