import Image from "next/image";
import { Play, Eye, Clock } from "lucide-react";
import SectionTitle from "../common/SectionTitle";
import { latestVideos } from "../../data/videos";

export default function LatestVideos() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-14">

      <SectionTitle
        title="Latest Videos"
        href="/videos"
      />

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {latestVideos.map((video) => (

          <a
            key={video.id}
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition"
          >

            <div className="relative h-64 overflow-hidden">

              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                sizes="(max-width:768px) 100vw, 33vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />

              <div className="absolute inset-0 flex items-center justify-center">

                <div className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition">

                  <Play fill="white" size={28} />

                </div>

              </div>

              <div className="absolute bottom-4 right-4 bg-black/80 text-white text-xs px-2 py-1 rounded">

                {video.duration}

              </div>

            </div>

            <div className="p-6">

              <h3 className="font-bold text-xl leading-snug group-hover:text-red-600 transition">

                {video.title}

              </h3>

              <div className="flex items-center gap-5 mt-5 text-sm text-gray-500">

                <span className="flex items-center gap-1">

                  <Eye size={16} />

                  {video.views}

                </span>

                <span className="flex items-center gap-1">

                  <Clock size={16} />

                  {video.publishedAt}

                </span>

              </div>

            </div>

          </a>

        ))}

      </div>

    </section>
  );
}