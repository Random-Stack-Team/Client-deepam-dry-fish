import type { Metadata } from "next";
import { HomeSections } from "@/components/home/home-sections";

export const metadata: Metadata = {
  title: "Deepam Dry Fish | Best Dry Fish in Chennai, Avadi — Premium Karuvadu & Seafood Online",
  description:
    "Deepam Dry Fish — best dry fish shop in Avadi, Chennai. Buy premium karuvadu, nethili, vanjiram, masi dry fish, and fish pickles online. 100% quality assured, hygienically processed. Free delivery in Chennai. Call 7707997070.",
  keywords: [
    "best dry fish in chennai",
    "dry fish shop in avadi",
    "buy dry fish online chennai",
    "karuvadu shop avadi",
    "nethili dry fish chennai",
    "Deepam Dry Fish",
  ],
  alternates: { canonical: "https://deepamdryfish.com" },
};

export default function HomePage() {
  return <HomeSections />;
}
