export default function NewsSchema({
  article,
}: {
  article: any;
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          headline: article.title,
          image: article.image,
          datePublished: article.publishedAt,
          author: {
            "@type": "Person",
            name: article.author,
          },
        }),
      }}
    />
  );
}