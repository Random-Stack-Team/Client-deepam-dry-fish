export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FAQJsonLd({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return <JsonLd data={data} />;
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return <JsonLd data={data} />;
}

export function ProductJsonLd({
  product,
  url,
}: {
  product: {
    name: string;
    description: string;
    image: string;
    weight: string;
  };
  url: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${product.name} | Deepam Dry Fish Avadi Chennai`,
    description: product.description,
    image: `https://deepamdryfish.com${product.image}`,
    url,
    brand: {
      "@type": "Brand",
      name: "Deepam Dry Fish",
    },
    offers: {
      "@type": "Offer",
      url,
      priceCurrency: "INR",
      price: "250",
      priceValidUntil: "2025-12-31",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Deepam Dry Fish",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "150",
    },
  };

  return <JsonLd data={data} />;
}

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://deepamdryfish.com#localbusiness",
    name: "Deepam Dry Fish",
    alternateName: "Deepam Karuvadu Kadai",
    description:
      "Best dry fish shop in Avadi, Chennai. Premium karuvadu, nethili, vanjiram, masi dry fish, and fish pickles.",
    url: "https://deepamdryfish.com",
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
    image: "https://deepamdryfish.com/assets/images/hero/og-image.webp",
    logo: "https://deepamdryfish.com/logo/logo-mark.png",
    priceRange: "₹50-₹500",
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
      { "@type": "City", name: "Chennai" },
      { "@type": "City", name: "Avadi" },
      { "@type": "City", name: "Ambattur" },
      { "@type": "City", name: "Tiruvallur" },
      { "@type": "City", name: "Poonamallee" },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "150",
      bestRating: "5",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Rajesh Kumar" },
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        reviewBody:
          "Best quality dry fish I've found in Chennai. The Nethili was clean, well-packed, and full of flavor.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Lakshmi Menon" },
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        reviewBody:
          "The taste of Karuvadu reminded me of my grandmother's cooking. Absolutely authentic.",
      },
    ],
  };

  return <JsonLd data={data} />;
}
