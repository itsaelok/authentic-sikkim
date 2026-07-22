import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#b91c1c",
          color: "white",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 72,
          fontWeight: 700,
        }}
      >
        Authentic Sikkim
      </div>
    ),
    size
  );
}