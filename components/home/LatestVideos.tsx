import Image from "next/image";
import {
  Play,
  Eye,
  Clock3,
  ArrowRight,
} from "lucide-react";
import SectionHeader from "../common/SectionHeader";

const videos = [
  {
    id: 1,
    title: "Top 10 Places to Visit in Sikkim 2026",
    image: "/images/videos/video1.jpg",
    duration: "12:45",
    views: "48K",
    date: "2 Days Ago",
    category: "Tourism",
  },
  {
    id: 2,
    title: "Complete SMIT Admission Guide",
    image: "/images/videos/video2.jpg",
    duration: "09:30",
    views: "19K",
    date: "Yesterday",
    category: "Education",
  },
  {
    id: 3,
    title: "Government Jobs Weekly Update",
    image: "/images/videos/video3.jpg",
    duration: "15:18",
    views: "25K",
    date: "Today",
    category: "Jobs",
  },
  {
    id: 4,
    title: "Gangtok Travel Vlog",
    image: "/images/videos/video4.jpg",
    duration: "18:11",
    views: "62K",
    date: "Today",
    category: "Travel",
  },
];

export default function LatestVideos() {
  const featured = videos[0];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <SectionHeader
        title="Latest Videos"
        subtitle="Watch the latest news, travel stories and interviews"
      />

      <div className="grid lg:grid-cols-3 gap-8">

        {/* Featured Video */}

        <div className="lg:col-span-2 bg-white rounded-3xl overflow-hidden shadow-lg group">

          <div className="relative h-[500px]">

            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="object-cover group-hover:scale-105 transition duration-700"
            />

            <div className="absolute inset-0 bg-black/40" />

            <button className="absolute inset-0 flex items-center justify-center">

              <div className="w-24 h-24 rounded-full bg-red-600/90 flex items-center justify-center hover:scale-110 transition">

                <Play
                  size={42}
                  className="fill-white text-white ml-1"
                />

              </div>

            </button>

            <div className="absolute bottom-5 right-5 bg-black/80 text-white px-3 py-1 rounded-lg text-sm">

              {featured.duration}

            </div>

          </div>

          <div className="p-8">

            <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              {featured.category}
            </span>

            <h2 className="text-3xl font-bold mt-5">
              {featured.title}
            </h2>

            <div className="flex flex-wrap gap-6 mt-6 text-gray-500">

              <div className="flex items-center gap-2">
                <Eye size={17} />
                {featured.views} Views
              </div>

              <div className="flex items-center gap-2">
                <Clock3 size={17} />
                {featured.date}
              </div>

            </div>

          </div>

        </div>

        {/* Video List */}

        <div className="space-y-6">

          {videos.slice(1).map((video) => (

            <article
              key={video.id}
              className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition group"
            >

              <div className="flex">

                <div className="relative w-40 h-32">

                  <Image
                    src={video.image}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />

                  <div className="absolute inset-0 bg-black/25" />

                  <div className="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">

                    {video.duration}

                  </div>

                </div>

                <div className="flex-1 p-4">

                  <span className="bg-red-100 text-red-600 text-xs px-3 py-1 rounded-full">

                    {video.category}

                  </span>

                  <h3 className="font-bold mt-3 leading-6 group-hover:text-red-600 transition">

                    {video.title}

                  </h3>

                  <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">

                    <div className="flex items-center gap-1">
                      <Eye size={15} />
                      {video.views}
                    </div>

                    <div className="flex items-center gap-1">
                      <Clock3 size={15} />
                      {video.date}
                    </div>

                  </div>

                </div>

              </div>

            </article>

          ))}

        </div>

      </div>

      <div className="text-center mt-12">

        <button className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-xl font-semibold inline-flex items-center gap-3 transition">

          View All Videos

          <ArrowRight size={18} />

        </button>

      </div>

    </section>
  );
}