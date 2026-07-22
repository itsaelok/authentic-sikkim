export interface NewsArticle {
  slug: string;
  title: string;
 excerpt: string;
  image: string;
  category: string;
  author: string;
  publishedAt: string;
  readTime: string;
}

export const latestNews: NewsArticle[] = [
  {
    slug: "gangtok-tourism-boom",
    title: "Gangtok records highest tourist arrivals this season",
    excerpt:
      "Hotels and local businesses report a sharp increase in visitors during the holiday period.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
    category: "Tourism",
    author: "Tourism Desk",
    publishedAt: "19 Jul 2026",
    readTime: "4 min read",
  },
  {
    slug: "education-policy",
    title: "New education initiatives announced for Sikkim students",
    excerpt:
      "Scholarship programs and digital classrooms are being expanded across the state.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    category: "Education",
    author: "Education Desk",
    publishedAt: "19 Jul 2026",
    readTime: "5 min read",
  },
  {
    slug: "startup-growth",
    title: "Young entrepreneurs drive startup growth in Sikkim",
    excerpt:
      "Government-backed initiatives are helping local startups expand rapidly.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200",
    category: "Business",
    author: "Business Desk",
    publishedAt: "18 Jul 2026",
    readTime: "3 min read",
  },
];

export const featuredNews: NewsArticle[] = latestNews.slice(0, 3);