import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PrismMath Academy | PhD-Led University-Track Math in Austin",
  description: "Austin’s premier math academy for the top 25%. Directed by Dr. Young Ryu (PhD), we replace rote memorization with engineering logic and first-principles thinking.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "PrismMath Academy",
  "founder": {
    "@type": "Person",
    "name": "Dr. Young Ryu",
    "honorificSuffix": "PhD"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Austin",
      "sameAs": "https://en.wikipedia.org/wiki/Austin,_Texas"
    },
    {
      "@type": "City",
      "name": "Cedar Park"
    },
    {
      "@type": "Neighborhood",
      "name": "Steiner Ranch"
    },
    {
      "@type": "Neighborhood",
      "name": "Avery Ranch"
    }
  ],
  "url": "https://prismmath.com",
  "telephone": "+1-555-555-5555",
  "priceRange": "$$$",
  "knowsAbout": ["Singapore Math", "Calculus", "Digital SAT", "Engineering Mathematics"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${playfair.variable} antialiased bg-white text-primary`}
      >
        <Script
          id="local-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
