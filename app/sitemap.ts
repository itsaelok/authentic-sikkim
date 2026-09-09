import { MetadataRoute } from "next";
import { getNews } from "@/services/news";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://authenticsikkim.com";

  let newsPages: MetadataRoute.Sitemap = [];

  try {
    const news = await getNews();

    newsPages = news.map((item) => ({
      url: `${baseUrl}/news/${item.slug}`,
      lastModified: new Date(item.publishedAt),
      changeFrequency: "daily",
      priority: 0.8,
    }));
  } catch (error) {
    console.error("Sitemap news fetch failed:", error);
  }

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "hourly",
      priority: 1,
    },

    {
      url: `${baseUrl}/news`,
      lastModified: new Date(),
      changeFrequency: "hourly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/education`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },

    {
      url: `${baseUrl}/sports`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },

    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },

    ...newsPages,
  ];
}