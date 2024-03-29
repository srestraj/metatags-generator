import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.BASE_URL
      ? process.env.BASE_URL?.toString()
      : "https://metatags-extractor.vercel.app"
  ),
  title: "Meta Tags Extractor",
  description: "Extract Meta tags from URL",
  alternates: {
    canonical: "https://metatags-extractor.vercel.app",
  },
  openGraph: {
    title: "Meta Tags Extractor",
    images: ["https://metatags-extractor.vercel.app/img/og-image.png"],
    description: "Extract Meta tags from URL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-dark`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
