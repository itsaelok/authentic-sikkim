import type { Metadata } from "next";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";



export const metadata = {
  title: "Authentic Sikkim",
  description: "Latest News from Sikkim",
  manifest: "/manifest.json",
  themeColor: "#b91c1c",
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