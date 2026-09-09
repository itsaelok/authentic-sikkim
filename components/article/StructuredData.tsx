interface Props {
  article: {
    title: string;
    excerpt: string;
    image: string;
    author: string;
    category: string;
    publishedAt: string;
    slug: string;
  };
}

export default function StructuredData({
  article,
}: Props) {
  const data = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",

    headline: article.title,

    description: article.excerpt,

    image: [article.image],

    datePublished: article.publishedAt,

    dateModified: article.publishedAt,

    author: {
      "@type": "Person",
      name: article.author,
    },

    publisher: {
      "@type": "Organization",

      name: "Authentic Sikkim",

      logo: {
        "@type": "ImageObject",
        url: "https://authenticsikkim.com/logo.png",
      },
    },

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        `https://authenticsikkim.com/news/${article.slug}`,
    },

    articleSection: article.category,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}