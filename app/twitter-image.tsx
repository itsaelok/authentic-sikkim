import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 600,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#111827",
          color: "white",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 64,
          fontWeight: 700,
        }}
      >
        Authentic Sikkim News
      </div>
    ),
    size
  );
}