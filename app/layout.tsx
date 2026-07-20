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

export const metadata: Metadata = {
  metadataBase: new URL("https://deepamdryfish.com"),
  title: {
    default: "Deepam Dry Fish | Authentic Coastal Taste",
    template: "%s | Deepam Dry Fish",
  },
  description:
    "Premium traditional dry fish, karuvadu, fish pickles and coastal seafood products from Deepam Dry Fish.",
  openGraph: {
    title: "Deepam Dry Fish",
    description: "Authentic coastal taste, preserved with trust.",
    images: ["/assets/images/hero/og-image.webp"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
