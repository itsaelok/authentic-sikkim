import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://authentic-sikkim.pages.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Authentic Sikkim | Sikkim News, Culture & Travel",
    template: "%s | Authentic Sikkim",
  },
  description:
    "Authentic Sikkim brings together Sikkim news, district stories, tourism, culture, education, jobs and community updates in one fast, accessible publication.",
  keywords: [
    "Sikkim news",
    "Gangtok news",
    "Sikkim tourism",
    "Sikkim jobs",
    "Sikkim education",
    "Sikkim culture",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Authentic Sikkim",
    description: "News, culture, tourism and useful stories from Sikkim.",
    type: "website",
    locale: "en_IN",
    siteName: "Authentic Sikkim",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
