import type { Metadata } from "next";
import "./globals.css";

import { Navbar, Footer } from "@/components";

export const metadata: Metadata = {
  title: "Car Hub",
  description: "Discover the best cars in the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width"></meta>
      <meta name="title" content="Car Hub"></meta>
      <meta
        name="description"
        content="Find, book or rent a car -- quickly and easily!"
      ></meta>
      <meta
        name="keywords"
        content="Car, Car Show Case, Car Rental, Car Hub"
      ></meta>
      <meta name="author" content="Chat Misa"></meta>
      <link rel="image_src" href="../public/hero.png" />
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
