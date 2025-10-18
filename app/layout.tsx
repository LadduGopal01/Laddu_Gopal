import type React from "react";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Suspense } from "react";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Laddu Gopal Industries — Quality Rice",
  description:
    "Premium rice processing & manufacturing for domestic and international markets.",
  generator: "v0.app",
};

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} antialiased`}
    >
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/Home.png"
          type="image/png"
        />
        <link
          rel="preload"
          as="image"
          href="/images/packaging.png"
          type="image/png"
        />
        <link
          rel="preload"
          as="image"
          href="/images/exporting.png"
          type="image/png"
        />
      </head>
      <body className="font-sans bg-background text-foreground">
        <Suspense>
          {children}
          <Footer />
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
