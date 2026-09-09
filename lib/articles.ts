import { Article } from "@/types/article";

export function getFeaturedArticles(
  articles: Article[],
) {
  return articles.filter((a) => a.featured);
}

export function getBreakingNews(
  articles: Article[],
) {
  return articles.filter((a) => a.breaking);
}

export function getCategoryArticles(
  articles: Article[],
  category: string,
) {
  return articles.filter(
    (a) => a.category === category,
  );
}

export function getDistrictArticles(
  articles: Article[],
  district: string,
) {
  return articles.filter(
    (a) => a.district === district,
  );
}