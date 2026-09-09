import { ImageResponse } from "next/og";
import { getNewsBySlug } from "@/services/news";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OGImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article = await getNewsBySlug(slug);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#111827",
          color: "white",
          padding: 60,
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            fontSize: 30,
            color: "#ef4444",
          }}
        >
          AUTHENTIC SIKKIM
        </div>

        <div
          style={{
            fontSize: 60,
            fontWeight: 700,
            lineHeight: 1.2,
          }}
        >
          {article?.title}
        </div>

        <div
          style={{
            fontSize: 28,
            color: "#d1d5db",
          }}
        >
          authenticsikkim.com
        </div>
      </div>
    ),
    size
  );
}