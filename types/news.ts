export interface Author {
  id: string;
  name: string;
  image: string;
  designation: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  color: string;
}

export interface News {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  image: string;
  category: string;
  district?: string;
  author: Author;
  publishedAt: string;
  readTime: string;
  featured: boolean;
  trending?: boolean;
  views: number;
}

export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  youtubeId: string;
  publishedAt: string;
}

export interface Job {
  id: string;
  title: string;
  organization: string;
  lastDate: string;
  link: string;
}

export interface TourismPlace {
  id: string;
  name: string;
  image: string;
  district: string;
  description: string;
}