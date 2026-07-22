"use client";

const articles = [

  "JEE Main Preparation Strategy",

  "NEET 2027 Complete Guide",

  "CUET UG Admission",

  "Scholarships in Sikkim",

  "Study Abroad Opportunities",

  "SSC & Banking Preparation"

];

export default function StudentCorner(){

  return(

    <section className="mt-16">

      <h2 className="text-3xl font-bold mb-8">

        Student Corner

      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {articles.map(article=>(

          <div

            key={article}

            className="bg-white rounded-xl shadow p-6 hover:shadow-xl transition"

          >

            <h3 className="font-bold text-lg">

              {article}

            </h3>

            <button className="mt-5 text-red-600 font-semibold">

              Read →

            </button>

          </div>

        ))}

      </div>

    </section>

  );

}