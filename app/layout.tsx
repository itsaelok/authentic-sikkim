import type { Metadata } from "next";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";



export const metadata = {
  metadataBase: new URL("https://authenticsikkim.vercel.app"),
  title: "Authentic Sikkim",
  description: "Latest News from Sikkim",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (

    <html lang="en">

      <body>


        <Navbar />


        <main>

          {children}

        </main>


        <Footer />


      </body>

    </html>

  );

}