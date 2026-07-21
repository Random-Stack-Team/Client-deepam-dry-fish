import type { Metadata } from "next";
import { HomeSections } from "@/components/home/home-sections";

export const metadata: Metadata = {
  title: "Deepam Dry Fish | Premium Dry Fish & Coastal Seafood Online",
  description:
    "Buy premium dry fish, karuvadu, nethili, vanjiram, fish pickles and traditional coastal seafood products online from Deepam Dry Fish. 100% quality assured, hygienically processed. Free shipping above ₹999.",
  alternates: { canonical: "https://deepamdryfish.com" },
};

export default function HomePage() {
  return <HomeSections />;
}
