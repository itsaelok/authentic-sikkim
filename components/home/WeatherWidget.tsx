"use client";

import { CloudSun } from "lucide-react";

export default function WeatherWidget(){

  return(

    <section className="mt-16">

      <div className="rounded-3xl bg-gradient-to-r from-sky-500 to-blue-700 text-white p-10">

        <div className="flex items-center gap-6">

          <CloudSun size={70}/>

          <div>

            <h2 className="text-4xl font-bold">

              Gangtok

            </h2>

            <p className="text-xl mt-2">

              22°C • Cloudy

            </p>

          </div>

        </div>

      </div>

    </section>

  );

}