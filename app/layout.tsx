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
  preload: true,
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
  preload: true,
});

const siteUrl = "https://deepamdryfish.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Deepam Dry Fish | Best Dry Fish in Chennai, Avadi — Premium Karuvadu & Seafood Online",
    template: "%s | Deepam Dry Fish",
  },
  description:
    "Deepam Dry Fish — best dry fish shop in Avadi, Chennai. Buy premium karuvadu, nethili, vanjiram, masi dry fish, and fish pickles online. 100% quality assured, hygienically processed. Free delivery in Chennai. Call 7707997070.",
  keywords: [
    "best dry fish in chennai",
    "dry fish shop in avadi",
    "dry fish shop chennai",
    "buy dry fish online chennai",
    "karuvadu shop avadi",
    "nethili dry fish chennai",
    "vanjiram dry fish chennai",
    "masi dry fish chennai",
    "fish pickle chennai",
    "dry fish retailer avadi",
    "best dry fish in tamil nadu",
    "premium dry fish online",
    "coastal dry fish chennai",
    "traditional dry fish tamil nadu",
    "sun dried fish chennai",
    "dry fish near me avadi",
    "dry fish price chennai",
    "wholesale dry fish chennai",
    "Deepam Dry Fish",
    "deepam karuvadu kadai",
    "dry fish avadi chennai 54",
    "ph road dry fish",
    "anchovy dry fish chennai",
    "seer fish dry chennai",
    "south indian dry fish online",
    "buy karuvadu online",
    "best seafood shop chennai",
    "authentic dry fish tamil nadu",
    "hygienic dry fish chennai",
    "quality dry fish avadi",
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
    title:
      "Deepam Dry Fish | Best Dry Fish in Chennai, Avadi — Premium Karuvadu & Seafood",
    description:
      "Best dry fish shop in Avadi, Chennai. Premium karuvadu, nethili, vanjiram, masi dry fish, and fish pickles. 100% quality assured. Free delivery in Chennai.",
    images: [
      {
        url: "/assets/images/hero/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Deepam Dry Fish - Best Dry Fish Shop in Avadi Chennai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepam Dry Fish | Best Dry Fish in Chennai & Avadi",
    description:
      "Premium dry fish, karuvadu, and seafood products from Avadi, Chennai. Buy online with free delivery.",
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
    "@id": `${siteUrl}#localbusiness`,
    name: "Deepam Dry Fish",
    alternateName: "Deepam Karuvadu Kadai",
    description:
      "Best dry fish shop in Avadi, Chennai. Premium karuvadu, nethili, vanjiram, masi dry fish, fish pickles, and traditional coastal seafood products. 100% quality assured, hygienically processed, naturally preserved.",
    url: siteUrl,
    telephone: "+917707997070",
    email: "Vasagam4144@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "137, Deepam Karuvadu Kadai, Ph Road",
      addressLocality: "Avadi",
      addressRegion: "Chennai, Tamil Nadu",
      postalCode: "600054",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 13.1067,
      longitude: 80.097,
    },
    image: `${siteUrl}/assets/images/hero/og-image.webp`,
    logo: `${siteUrl}/logo/logo-mark.png`,
    priceRange: "₹50-₹500",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, Card",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "10:00",
        closes: "20:00",
      },
    ],
    areaServed: [
      {
        "@type": "City",
        name: "Chennai",
        containedInPlace: {
          "@type": "State",
          name: "Tamil Nadu",
        },
      },
      {
        "@type": "City",
        name: "Avadi",
      },
      {
        "@type": "City",
        name: "Ambattur",
      },
      {
        "@type": "City",
        name: "Tiruvallur",
      },
      {
        "@type": "City",
        name: "Poonamallee",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Deepam Dry Fish Products",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Nethili Dry Fish",
            description: "Premium quality anchovies, cleaned and sun-dried.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Karuvadu Dry Fish",
            description: "Traditional sun-dried fish with rich taste.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Vanjiram Dry Fish",
            description: "Premium dried seer fish steaks.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Masi Dry Fish",
            description: "Smoky sun-dried masi fish strips.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Fish Pickle",
            description: "Traditional spicy fish pickle with coastal spices.",
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "150",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Rajesh Kumar" },
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        reviewBody: "Best quality dry fish I've found in Chennai. The Nethili was clean, well-packed, and full of flavor.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Lakshmi Menon" },
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        reviewBody: "The taste of Karuvadu reminded me of my grandmother's cooking. Absolutely authentic and fresh.",
      },
    ],
    sameAs: [],
  };

  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://deepamdryfish.com" />
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
