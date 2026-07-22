import { getNews } from "@/services/news";

export async function GET() {
  const baseUrl = "https://authenticsikkim.com";

  const articles = await getNews();

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
<title>Authentic Sikkim</title>
<link>${baseUrl}</link>
<description>Latest News from Sikkim</description>

${articles
  .map(
    (article) => `
<item>
<title><![CDATA[${article.title}]]></title>
<link>${baseUrl}/news/${article.slug}</link>
<description><![CDATA[${article.excerpt}]]></description>
<pubDate>${new Date(article.publishedAt).toUTCString()}</pubDate>
<guid>${baseUrl}/news/${article.slug}</guid>
</item>`
  )
  .join("")}

</channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml",
    },
  });
}