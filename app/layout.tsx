import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
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
      <body className={`${beVietnamPro.className} bg-[#0a0909]`}>
        {children}
      </body>
    </html>
  );
}
