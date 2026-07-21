import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = "https://deepamdryfish.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Deepam Dry Fish | Premium Dry Fish & Coastal Seafood Online",
    template: "%s | Deepam Dry Fish",
  },
  description:
    "Buy premium dry fish, karuvadu, fish pickles, and traditional coastal seafood products online from Deepam Dry Fish. 100% quality assured, hygienically processed, and naturally preserved. Free shipping on orders above ₹999.",
  keywords: [
    "dry fish",
    "karuvadu",
    "nethili dry fish",
    "vanjiram dry fish",
    "fish pickle",
    "coastal seafood",
    "Tamil Nadu dry fish",
    "Chennai dry fish",
    "traditional dry fish online",
    "buy dry fish online",
    "south Indian dry fish",
    "Avadi dry fish",
    "Deepam Dry Fish",
    "premium dry fish",
    "sun dried fish",
    "anchovy dry fish",
    "seer fish dry",
    "fish fry online",
    "seafood pickle",
    "Coastal food online",
  ],
  authors: [{ name: "Deepam Dry Fish" }],
  creator: "Deepam Dry Fish",
  publisher: "Deepam Dry Fish",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Deepam Dry Fish",
    title: "Deepam Dry Fish | Premium Dry Fish & Coastal Seafood Online",
    description:
      "Buy premium dry fish, karuvadu, fish pickles, and traditional coastal seafood products online. 100% quality assured, hygienically processed, and naturally preserved.",
    images: [
      {
        url: "/assets/images/hero/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Deepam Dry Fish - Premium Coastal Seafood Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepam Dry Fish | Premium Dry Fish & Coastal Seafood Online",
    description:
      "Buy premium dry fish, karuvadu, fish pickles, and traditional coastal seafood products online.",
    images: ["/assets/images/hero/og-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Deepam Dry Fish",
    description:
      "Premium dry fish, karuvadu, fish pickles, and traditional coastal seafood products.",
    url: siteUrl,
    telephone: "+917707997070",
    email: "Vasagam4144@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "137, Deepam Karuvadu Kadai, Ph Road",
      addressLocality: "Avadi",
      addressRegion: "Chennai",
      postalCode: "600054",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 13.1067,
      longitude: 80.097,
    },
    image: `${siteUrl}/assets/images/hero/og-image.webp`,
    priceRange: "₹₹",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "21:00",
    },
    sameAs: [],
  };

  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
