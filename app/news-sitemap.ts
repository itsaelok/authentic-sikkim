import { MetadataRoute } from "next";
import { getNews } from "@/services/news";

export default async function newsSitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://authenticsikkim.com";

  const news = await getNews();

  return news
    .filter((item) => item.published)
    .map((item) => ({
      url: `${baseUrl}/news/${item.slug}`,
      lastModified: new Date(item.publishedAt),
    }));
}