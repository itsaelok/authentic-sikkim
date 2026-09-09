import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";

import {
  getNewsBySlug,
  incrementViews,
} from "@/services/news";

import Breadcrumb from "@/components/article/Breadcrumb";
import ArticleHeader from "@/components/article/ArticleHeader";
import ArticleBody from "@/components/article/ArticleBody";
import ShareButtons from "@/components/article/ShareButtons";
import RelatedNews from "@/components/article/RelatedNews";
import AuthorCard from "@/components/article/AuthorCard";
import Tags from "@/components/article/Tags";
import ReadingProgress from "@/components/news/ReadingProgress";
import Comments from "@/components/article/Comments";
import StructuredData from "@/components/article/StructuredData";
import NewsSchema from "@/components/seo/NewsSchema";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const article = await getNewsBySlug(slug);

  if (!article) {
    return {
      title: "News Not Found | Authentic Sikkim",
    };
  }

  return {
    title: `${article.title} | Authentic Sikkim`,
    description: article.excerpt,

    alternates: {
      canonical: `https://authenticsikkim.com/news/${article.slug}`,
    },

    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.image],
      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default async function NewsPage({
  params,
}: Props) {
  const { slug } = await params;

  const article = await getNewsBySlug(slug);

  if (!article) {
    notFound();
  }

if (article.id) {
  await incrementViews(article.id);
}
  return (
    <main className="bg-gray-100">

      <NewsSchema article={article} />

      <StructuredData article={article} />

      <ReadingProgress />

      <div className="mx-auto max-w-7xl px-6 py-10">

        <Breadcrumb
          category={article.category}
          title={article.title}
        />

        <div className="grid gap-10 lg:grid-cols-3">

          <article className="rounded-2xl bg-white p-8 shadow lg:col-span-2">

            <ArticleHeader article={article} />

            <div className="relative mt-8 h-[420px] overflow-hidden rounded-2xl">

              <Image
                src={article.image}
                alt={article.title}
                fill
                priority
                className="object-cover"
              />

            </div>

            <ArticleBody
              content={article.content}
            />

            <Tags
              tags={[
                article.category,
                article.district,
              ]}
            />

            <ShareButtons
              article={article}
            />

            <AuthorCard
              author={article.author}
            />

            <Comments
              newsId={article.id}
            />

          </article>

          <aside>

            <RelatedNews
              category={article.category}
              currentId={article.id}
            />

          </aside>

        </div>

      </div>

    </main>
  );
}