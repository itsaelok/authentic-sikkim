import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  limit,
  serverTimestamp,
  updateDoc,
  deleteDoc,
  increment,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

export interface News {
  id: string;
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
  createdAt?: { seconds?: number };
}

const fallbackNews: News[] = [
  {
    id: "demo-1",
    title: "Sikkim’s mountain towns prepare for a busy travel season",
    slug: "sikkim-mountain-towns-prepare-for-busy-travel-season",
    excerpt: "A practical look at travel, weather and visitor movement across the state.",
    content: "Sikkim continues to balance tourism growth with the need to protect its mountain environment and local communities. This sample editorial story keeps the public site useful even before a Firebase newsroom is connected.",
    image: "/images/news/tourism.jpg",
    category: "Tourism",
    district: "Gangtok",
    author: "Authentic Sikkim Desk",
    tags: ["Sikkim", "Tourism", "Gangtok"],
    featured: true,
    breaking: false,
    published: true,
    publishedAt: "2026-09-08T09:00:00+05:30",
    readTime: "3 min read",
    views: 1842,
  },
  {
    id: "demo-2",
    title: "What students in Sikkim should know before the next admission cycle",
    slug: "students-sikkim-admission-cycle-guide",
    excerpt: "A simple checklist covering applications, documents, scholarships and deadlines.",
    content: "Students can reduce admission stress by keeping marksheets, identity documents, photographs and category certificates ready. Always verify deadlines with the institution or examination authority before submitting an application.",
    image: "/images/news/education.jpg",
    category: "Education",
    district: "Gangtok",
    author: "Education Desk",
    tags: ["Education", "Students", "Sikkim"],
    featured: true,
    breaking: false,
    published: true,
    publishedAt: "2026-09-07T12:00:00+05:30",
    readTime: "4 min read",
    views: 1611,
  },
  {
    id: "demo-3",
    title: "Gangtok community groups focus on cleaner public spaces",
    slug: "gangtok-community-groups-cleaner-public-spaces",
    excerpt: "Local volunteers are putting everyday cleanliness and responsible tourism at the centre of neighbourhood action.",
    content: "Community-led cleanliness drives can have an outsized impact in a compact mountain city. The focus is on reducing litter, improving awareness and encouraging visitors to leave public spaces as they found them.",
    image: "/images/news/news1.jpg",
    category: "Sikkim",
    district: "Gangtok",
    author: "Community Desk",
    tags: ["Gangtok", "Community"],
    featured: false,
    breaking: true,
    published: true,
    publishedAt: "2026-09-06T16:30:00+05:30",
    readTime: "2 min read",
    views: 2450,
  },
  {
    id: "demo-4",
    title: "North Sikkim travel planning: what to check before leaving",
    slug: "north-sikkim-travel-planning-checklist",
    excerpt: "Permits, road conditions, weather and essentials to check before a mountain trip.",
    content: "Mountain travel needs more preparation than a city trip. Check current road conditions, permit requirements, weather and transport availability, and carry medicines, warm layers and offline copies of important documents.",
    image: "/images/tourism/yumthang.jpg",
    category: "Tourism",
    district: "Mangan",
    author: "Travel Desk",
    tags: ["Mangan", "North Sikkim", "Travel"],
    featured: false,
    breaking: true,
    published: true,
    publishedAt: "2026-09-05T10:15:00+05:30",
    readTime: "5 min read",
    views: 3190,
  },
  {
    id: "demo-5",
    title: "Small businesses in Sikkim are embracing digital discovery",
    slug: "sikkim-small-businesses-digital-discovery",
    excerpt: "Local shops, cafés and service providers are finding new customers online.",
    content: "A strong digital presence can help small businesses explain what they offer, share opening hours and reach visitors before they arrive. Clear information and authentic local storytelling remain more useful than excessive promotion.",
    image: "/images/news/news2.jpg",
    category: "Business",
    district: "Namchi",
    author: "Business Desk",
    tags: ["Business", "Namchi", "Local"],
    featured: false,
    breaking: false,
    published: true,
    publishedAt: "2026-09-04T14:00:00+05:30",
    readTime: "3 min read",
    views: 1288,
  },
  {
    id: "demo-6",
    title: "Sikkim’s young athletes look toward the next competitive season",
    slug: "sikkim-young-athletes-next-season",
    excerpt: "Training, school and community sport continue to create opportunities for young athletes.",
    content: "Grassroots sport gives young people a pathway to build discipline, confidence and community. Schools, clubs and local organisations all play a role in creating consistent training opportunities.",
    image: "/images/news/news3.jpg",
    category: "Sports",
    district: "Pakyong",
    author: "Sports Desk",
    tags: ["Sports", "Pakyong", "Youth"],
    featured: false,
    breaking: false,
    published: true,
    publishedAt: "2026-09-03T11:00:00+05:30",
    readTime: "3 min read",
    views: 990,
  },
  {
    id: "demo-7",
    title: "Career checklist: finding reliable government job notifications",
    slug: "career-checklist-government-job-notifications",
    excerpt: "How to separate official recruitment notices from reposts and outdated information.",
    content: "Candidates should verify recruitment information on the official website of the recruiting organisation before paying any fee or uploading documents. Check the notification date, eligibility, application deadline and official contact details.",
    image: "/images/news/news4.jpg",
    category: "Jobs",
    district: "Soreng",
    author: "Jobs Desk",
    tags: ["Jobs", "Careers", "Sikkim"],
    featured: false,
    breaking: false,
    published: true,
    publishedAt: "2026-09-02T09:30:00+05:30",
    readTime: "4 min read",
    views: 2122,
  },
  {
    id: "demo-8",
    title: "Why Sikkim’s culture deserves careful digital storytelling",
    slug: "sikkim-culture-digital-storytelling",
    excerpt: "A guide to documenting traditions with context, respect and local voices.",
    content: "Digital storytelling is strongest when it gives communities room to explain their own traditions. Context, accurate naming, permission for personal photographs and links to primary sources should be part of responsible publishing.",
    image: "/images/news/news1.jpg",
    category: "Culture",
    district: "Gyalshing",
    author: "Culture Desk",
    tags: ["Culture", "Heritage", "Sikkim"],
    featured: true,
    breaking: false,
    published: true,
    publishedAt: "2026-09-01T13:00:00+05:30",
    readTime: "4 min read",
    views: 1765,
  },
];

export const NEWS_CATEGORIES = [
  "Latest", "Sikkim", "Breaking", "Politics", "Government", "Education",
  "Tourism", "Business", "Sports", "Technology", "Jobs", "Health", "Culture",
];

export const DISTRICTS = ["Gangtok", "Namchi", "Gyalshing", "Mangan", "Pakyong", "Soreng"];

const newsCollection = collection(db, "news");

function sortByDate(items: News[]) {
  return [...items].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

function publishedFallback() {
  return fallbackNews.filter((item) => item.published);
}

async function safe<T>(request: () => Promise<T>, fallback: T): Promise<T> {
  if (!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID) return fallback;
  try {
    return await request();
  } catch {
    return fallback;
  }
}

export async function addNews(news: Omit<News, "id">) {
  return addDoc(newsCollection, { ...news, createdAt: serverTimestamp() });
}

export async function getNews(): Promise<News[]> {
  return safe(async () => {
    const snap = await getDocs(query(newsCollection, where("published", "==", true)));
    const items = snap.docs.map((item) => ({ id: item.id, ...item.data() })) as News[];
    return items.length ? sortByDate(items) : publishedFallback();
  }, publishedFallback());
}

export async function getNewsById(id: string) {
  return safe(async () => {
    const snap = await getDoc(doc(db, "news", id));
    return snap.exists() ? ({ id: snap.id, ...snap.data() } as News) : null;
  }, fallbackNews.find((item) => item.id === id) || null);
}

export async function getNewsBySlug(slug: string) {
  return safe(async () => {
    const snap = await getDocs(query(newsCollection, where("slug", "==", slug), limit(1)));
    return snap.empty ? null : ({ id: snap.docs[0].id, ...snap.docs[0].data() } as News);
  }, fallbackNews.find((item) => item.slug === slug) || null);
}

export async function getLatestNews(): Promise<News[]> {
  return safe(async () => {
    const snap = await getDocs(query(newsCollection, where("published", "==", true), limit(20)));
    const items = snap.docs.map((item) => ({ id: item.id, ...item.data() })) as News[];
    return items.length ? sortByDate(items) : publishedFallback();
  }, publishedFallback());
}

export async function getFeaturedNews(): Promise<News[]> {
  return safe(async () => {
    const snap = await getDocs(query(
      newsCollection,
      where("featured", "==", true),
      where("published", "==", true),
      limit(8)
    ));
    const items = snap.docs.map((item) => ({ id: item.id, ...item.data() })) as News[];
    return items.length ? sortByDate(items) : publishedFallback().filter((item) => item.featured);
  }, publishedFallback().filter((item) => item.featured));
}

export async function getBreakingNews(): Promise<News[]> {
  return safe(async () => {
    const snap = await getDocs(query(
      newsCollection,
      where("breaking", "==", true),
      where("published", "==", true),
      limit(10)
    ));
    const items = snap.docs.map((item) => ({ id: item.id, ...item.data() })) as News[];
    return items.length ? sortByDate(items) : publishedFallback().filter((item) => item.breaking);
  }, publishedFallback().filter((item) => item.breaking));
}

export async function getTrendingNews(): Promise<News[]> {
  return safe(async () => {
    const snap = await getDocs(query(newsCollection, where("published", "==", true), limit(50)));
    const items = snap.docs.map((item) => ({ id: item.id, ...item.data() })) as News[];
    return (items.length ? items : publishedFallback())
      .sort((a, b) => (b.views || 0) - (a.views || 0))
      .slice(0, 10);
  }, publishedFallback().sort((a, b) => b.views - a.views).slice(0, 10));
}

export async function getCategoryNews(category: string) {
  const normalized = category.trim().replace(/-/g, " ");
  return safe(async () => {
    const snap = await getDocs(query(
      newsCollection,
      where("category", "==", normalized),
      where("published", "==", true)
    ));
    const items = snap.docs.map((item) => ({ id: item.id, ...item.data() })) as News[];
    return items.length ? sortByDate(items) : publishedFallback().filter((item) => item.category.toLowerCase() === normalized.toLowerCase());
  }, publishedFallback().filter((item) => item.category.toLowerCase() === normalized.toLowerCase()));
}

export async function getDistrictNews(district: string): Promise<News[]> {
  return safe(async () => {
    const snap = await getDocs(query(
      newsCollection,
      where("district", "==", district),
      where("published", "==", true)
    ));
    const items = snap.docs.map((item) => ({ id: item.id, ...item.data() })) as News[];
    return items.length ? sortByDate(items) : publishedFallback().filter((item) => item.district === district);
  }, publishedFallback().filter((item) => item.district === district));
}

export async function updateNews(id: string, news: Partial<News>) {
  return updateDoc(doc(db, "news", id), news);
}
export async function deleteNews(id: string) {
  return deleteDoc(doc(db, "news", id));
}
export async function toggleFeatured(id: string, value: boolean) {
  return updateDoc(doc(db, "news", id), { featured: value });
}
export async function toggleBreaking(id: string, value: boolean) {
  return updateDoc(doc(db, "news", id), { breaking: value });
}
export async function togglePublished(id: string, value: boolean) {
  return updateDoc(doc(db, "news", id), { published: value });
}
export async function incrementViews(id: string) {
  if (id.startsWith("demo-")) return;
  try {
    await updateDoc(doc(db, "news", id), { views: increment(1) });
  } catch {
    // Public reading should never fail because analytics storage is unavailable.
  }
}

export function searchNews(news: News[], keyword: string) {
  if (!keyword.trim()) return news;
  const q = keyword.toLowerCase();
  return news.filter((item) =>
    [item.title, item.excerpt, item.content, item.author, item.category, item.district]
      .some((value) => value.toLowerCase().includes(q))
  );
}

export function filterByCategory(news: News[], category: string) {
  return !category || category === "All" ? news : news.filter((item) => item.category === category);
}
export function filterByDistrict(news: News[], district: string) {
  return !district || district === "All" ? news : news.filter((item) => item.district === district);
}
export function filterPublished(news: News[], value: string) {
  if (value === "Published") return news.filter((item) => item.published);
  if (value === "Draft") return news.filter((item) => !item.published);
  return news;
}
export function sortNews(news: News[]) { return sortByDate(news); }
export function getDashboardStats(news: News[]) {
  return {
    total: news.length,
    published: news.filter((item) => item.published).length,
    drafts: news.filter((item) => !item.published).length,
    featured: news.filter((item) => item.featured).length,
    breaking: news.filter((item) => item.breaking).length,
    totalViews: news.reduce((sum, item) => sum + (item.views || 0), 0),
  };
}
export function getRecentNews(news: News[], count = 5) { return sortByDate(news).slice(0, count); }
export function generateSlug(title: string) {
  return title.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-").replace(/--+/g, "-");
}
export function calculateReadTime(content: string) {
  return `${Math.max(1, Math.ceil(content.trim().split(/\s+/).length / 200))} min read`;
}
export function todayDate() {
  return new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}
