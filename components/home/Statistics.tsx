"use client";

const stats = [

  {
    value:"6",
    label:"Districts",
  },

  {
    value:"2.4M",
    label:"Readers",
  },

  {
    value:"500+",
    label:"Articles",
  },

  {
    value:"24×7",
    label:"Coverage",
  },

];

export default function Statistics(){

  return(

    <section className="mt-16 bg-red-600 rounded-3xl p-12 text-white">

      <div className="grid md:grid-cols-4 gap-10">

        {stats.map(stat=>(

          <div
            key={stat.label}
            className="text-center"
          >

            <div className="text-5xl font-black">

              {stat.value}

            </div>

            <p className="mt-3">

              {stat.label}

            </p>

          </div>

        ))}

      </div>

    </section>

  );

}