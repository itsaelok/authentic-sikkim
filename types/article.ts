export interface Author {
  id: string;
  name: string;
  avatar?: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;

  category: string;
  district?: string;
  tags: string[];

  author: Author;

  publishedAt: string;
  updatedAt?: string;
  readTime: string;

  featured: boolean;
  breaking: boolean;

  views: number;
}