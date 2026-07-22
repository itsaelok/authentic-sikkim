"use client";

const jobs = [
  {
    title: "SSC CGL 2026",
    lastDate: "15 Aug 2026",
  },
  {
    title: "SSC JE 2026",
    lastDate: "30 Aug 2026",
  },
  {
    title: "SPSC Recruitment",
    lastDate: "12 Sep 2026",
  },
  {
    title: "IBPS PO",
    lastDate: "18 Aug 2026",
  },
];

export default function GovernmentJobs() {
  return (
    <section className="mt-16">

      <h2 className="text-3xl font-bold mb-8">
        Government Jobs
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        {jobs.map((job) => (

          <div
            key={job.title}
            className="bg-white rounded-2xl shadow p-6"
          >

            <h3 className="font-bold text-xl">
              {job.title}
            </h3>

            <p className="mt-3 text-gray-500">
              Last Date : {job.lastDate}
            </p>

            <button className="mt-5 bg-red-600 text-white px-5 py-2 rounded-xl">
              Apply
            </button>

          </div>

        ))}

      </div>

    </section>
  );
}