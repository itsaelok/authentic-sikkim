import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  orderBy,
  limit,
  serverTimestamp,
  updateDoc,
  deleteDoc,
  increment,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

export interface News {
  id?: string;

  title: string;
  slug: string;

  excerpt: string;
  content: string;

  image: string;

  category: string;
  district: string;

  author: string;
tags: string[];
  featured: boolean;
  breaking: boolean;
  published: boolean;

  publishedAt: string;
  readTime: string;

  views: number;

  createdAt?: any;
}

export const NEWS_CATEGORIES = [
  "Latest",
  "Breaking",
  "Politics",
  "Government",
  "Education",
  "Tourism",
  "Business",
  "Sports",
  "Technology",
  "Jobs",
  "Health",
  "Culture",
];

export const DISTRICTS = [
  "Gangtok",
  "Namchi",
  "Gyalshing",
  "Mangan",
  "Pakyong",
  "Soreng",
];

const newsCollection = collection(db, "news");

/* ------------------------------------------------ */
/* CREATE */
/* ------------------------------------------------ */

export async function addNews(news: News) {
  return addDoc(newsCollection, {
    ...news,
    createdAt: serverTimestamp(),
  });
}

/* ------------------------------------------------ */
/* READ ALL */
/* ------------------------------------------------ */

export async function getNews(): Promise<News[]> {
  const q = query(
    newsCollection,
  );

  const snap = await getDocs(q);

  return snap.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as News[];
}

/* ------------------------------------------------ */
/* READ BY ID */
/* ------------------------------------------------ */

export async function getNewsById(id: string) {
  const ref = doc(db, "news", id);

  const snap = await getDoc(ref);

  if (!snap.exists()) return null;

  return {
    id: snap.id,
    ...snap.data(),
  } as News;
}

/* ------------------------------------------------ */
/* READ BY SLUG */
/* ------------------------------------------------ */

export async function getNewsBySlug(slug: string) {
  const q = query(
    newsCollection,
    where("slug", "==", slug),
    limit(1)
  );

  const snap = await getDocs(q);

  if (snap.empty) return null;

  return {
    id: snap.docs[0].id,
    ...snap.docs[0].data(),
  } as News;
}

/* ------------------------------------------------ */
/* LATEST */
/* ------------------------------------------------ */

export async function getLatestNews(): Promise<News[]> {
  try {
    const q = query(
      newsCollection,
      where("published", "==", true),
      limit(20)
    );

    const snap = await getDocs(q);

    return snap.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    })) as News[];
  } catch (err) {
    console.error("Latest news error:", err);
    return [];
  }
}

/* ------------------------------------------------ */
/* FEATURED */
/* ------------------------------------------------ */
/* ------------------------------------------------ */
/* BREAKING */
/* ------------------------------------------------ */

export async function getBreakingNews(): Promise<News[]> {
  try {
    const q = query(
      newsCollection,
      where("breaking", "==", true),
      where("published", "==", true),
      limit(10)
    );

    const snap = await getDocs(q);

    return snap.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    })) as News[];
  } catch (err) {
    console.error("Breaking news error:", err);
    return [];
  }
}

/* ------------------------------------------------ */
/* TRENDING */
/* ------------------------------------------------ */

export async function getTrendingNews(): Promise<News[]> {
  try {
    const q = query(
      newsCollection,
      where("published", "==", true),
      limit(50)
    );

    const snap = await getDocs(q);

    return snap.docs
      .map(doc => ({
        id: doc.id,
        ...doc.data(),
      }) as News)
      .sort((a, b) => (b.views || 0) - (a.views || 0))
      .slice(0, 10);

  } catch (err) {
    console.error("Trending news error:", err);
    return [];
  }
}

/* ------------------------------------------------ */
/* CATEGORY */
/* ------------------------------------------------ */

export async function getCategoryNews(category: string) {
  const q = query(
  newsCollection,
  where("category", "==", category),
  where("published", "==", true)
);

  const snap = await getDocs(q);

  return snap.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as News[];
}

/* ------------------------------------------------ */
/* DISTRICT */
/* ------------------------------------------------ */

export async function getFeaturedNews(): Promise<News[]> {
  try {
    const q = query(
      newsCollection,
      where("featured", "==", true),
      where("published", "==", true),
      limit(8)
    );

    const snap = await getDocs(q);

    return snap.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    })) as News[];
  } catch (err) {
    console.error("Featured news error:", err);
    return [];
  }
}
/* ------------------------------------------------ */
/* UPDATE */
/* ------------------------------------------------ */

export async function updateNews(id: string, news: Partial<News>) {
  const ref = doc(db, "news", id);

  await updateDoc(ref, {
    ...news,
  });
}

/* ------------------------------------------------ */
/* DELETE */
/* ------------------------------------------------ */

export async function deleteNews(id: string) {
  await deleteDoc(doc(db, "news", id));
}

/* ------------------------------------------------ */
/* FEATURED TOGGLE */
/* ------------------------------------------------ */

export async function toggleFeatured(id: string, value: boolean) {
  await updateDoc(doc(db, "news", id), {
    featured: value,
  });
}

/* ------------------------------------------------ */
/* BREAKING TOGGLE */
/* ------------------------------------------------ */

export async function toggleBreaking(id: string, value: boolean) {
  await updateDoc(doc(db, "news", id), {
    breaking: value,
  });
}

/* ------------------------------------------------ */
/* PUBLISHED TOGGLE */
/* ------------------------------------------------ */

export async function togglePublished(id: string, value: boolean) {
  await updateDoc(doc(db, "news", id), {
    published: value,
  });
}

/* ------------------------------------------------ */
/* INCREMENT VIEW */
/* ------------------------------------------------ */

export async function incrementViews(id: string) {
  await updateDoc(doc(db, "news", id), {
    views: increment(1),
  });
}

/* ------------------------------------------------ */
/* SEARCH */
/* ------------------------------------------------ */

export function searchNews(news: News[], keyword: string) {
  if (!keyword.trim()) return news;

  const q = keyword.toLowerCase();

  return news.filter((item) => {
    return (
      item.title.toLowerCase().includes(q) ||
      item.excerpt.toLowerCase().includes(q) ||
      item.content.toLowerCase().includes(q) ||
      item.author.toLowerCase().includes(q)
    );
  });
}

/* ------------------------------------------------ */
/* FILTER CATEGORY */
/* ------------------------------------------------ */

export function filterByCategory(
  news: News[],
  category: string
) {
  if (!category || category === "All") return news;

  return news.filter(
    (item) => item.category === category
  );
}

/* ------------------------------------------------ */
/* FILTER DISTRICT */
/* ------------------------------------------------ */

export function filterByDistrict(
  news: News[],
  district: string
) {
  if (!district || district === "All") return news;

  return news.filter(
    (item) => item.district === district
  );
}

/* ------------------------------------------------ */
/* FILTER PUBLISHED */
/* ------------------------------------------------ */

export function filterPublished(
  news: News[],
  value: string
) {
  if (value === "All") return news;

  if (value === "Published")
    return news.filter((n) => n.published);

  if (value === "Draft")
    return news.filter((n) => !n.published);

  return news;
}

/* ------------------------------------------------ */
/* SORT */
/* ------------------------------------------------ */

export function sortNews(news: News[]) {
  return [...news].sort((a, b) => {
    return (
      new Date(b.publishedAt).getTime() -
      new Date(a.publishedAt).getTime()
    );
  });
}

/* ------------------------------------------------ */
/* STATISTICS */
/* ------------------------------------------------ */

export function getDashboardStats(news: News[]) {
  return {
    total: news.length,

    published: news.filter((n) => n.published).length,

    drafts: news.filter((n) => !n.published).length,

    featured: news.filter((n) => n.featured).length,

    breaking: news.filter((n) => n.breaking).length,

    totalViews: news.reduce(
      (sum, n) => sum + (n.views || 0),
      0
    ),
  };
}

/* ------------------------------------------------ */
/* RECENT */
/* ------------------------------------------------ */

export function getRecentNews(
  news: News[],
  count = 5
) {
  return [...news]
    .sort((a, b) => {
      return (
        new Date(b.publishedAt).getTime() -
        new Date(a.publishedAt).getTime()
      );
    })
    .slice(0, count);
}

/* ------------------------------------------------ */
/* SLUG */
/* ------------------------------------------------ */

export function generateSlug(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/--+/g, "-");
}

/* ------------------------------------------------ */
/* READ TIME */
/* ------------------------------------------------ */

export function calculateReadTime(content: string) {
  const words = content
    .trim()
    .split(/\s+/).length;

  const minutes = Math.max(
    1,
    Math.ceil(words / 200)
  );

  return `${minutes} min read`;
}

/* ------------------------------------------------ */
/* DATE */
/* ------------------------------------------------ */

export function todayDate() {
  return new Date().toLocaleDateString(
    "en-GB",
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }
  );
}
/* ------------------------------------------------ */
/* DISTRICT */
/* ------------------------------------------------ */

export async function getDistrictNews(
  district: string
): Promise<News[]> {

  try {

    const q = query(
      newsCollection,
      where("district", "==", district),
      where("published", "==", true)
    );

    const snap = await getDocs(q);

    return snap.docs
      .map(doc => ({
        id: doc.id,
        ...doc.data(),
      }) as News)
      .sort((a, b) => {

        const da = a.createdAt?.seconds || 0;
        const db = b.createdAt?.seconds || 0;

        return db - da;

      });

  } catch (error) {

    console.log(error);

    return [];

  }

}