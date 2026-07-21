import type { Metadata } from "next";
import Image from "next/image";

import styles from "@/app/theme-pages.module.css";
import { productProcess } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Learn about Deepam Dry Fish — a tradition passed down through generations. Discover how we preserve the authentic taste of coastal seafood with trust and quality.",
  alternates: { canonical: "https://deepamdryfish.com/our-story" },
};

export default function OurStoryPage() {
  return (
    <main className={styles.page}>
      <PageHero
        eyebrow="Our Story"
        title="A Tradition Passed Down, A Taste That Lasts"
        copy="Deepam Dry Fish brings together the light of trust and the abundance of the sea."
      />
      <section className={styles.section}>
        <div className={`${styles.container} ${styles.split}`}>
          <div>
            <SectionHeading eyebrow="Heritage" title="The Deepam Journey" align="left" />
            <p className={styles.copy}>
              Our brand brings together two powerful symbols: Deepam, the lamp, and sea waves.
              The lamp stands for purity and blessings. The waves stand for coastal freshness
              and abundance.
            </p>
            <p className={styles.copy}>
              Together, they represent a promise to preserve traditional coastal flavor with
              modern hygiene, clean packaging, and dependable quality.
            </p>
          </div>
          <div className={styles.storyImage}>
            <Image
              src="/assets/images/pages/story-fishing-heritage.webp"
              alt="Traditional coastal fishing at sunset"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className={styles.imageFill}
            />
          </div>
        </div>
      </section>
      <section className={styles.sectionCream}>
        <div className={styles.container}>
          <SectionHeading
            eyebrow="Our Process"
            title="From Sea to Your Table"
            copy="Every step is handled with care to ensure authentic taste and trusted quality."
          />
          <div className={styles.gridFive}>
            {productProcess.map((step, index) => (
              <article className={`${styles.card} ${styles.padCard}`} key={step.title}>
                <span className={styles.processIndex}>{index + 1}</span>
                <h3 className={styles.cardTitle}>{step.title}</h3>
                <p className={styles.copy}>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function PageHero({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1 className={styles.heroTitle}>{title}</h1>
        <p className={styles.heroCopy}>{copy}</p>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "left" ? styles.sectionHeadingLeft : styles.sectionHeading}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 className={styles.sectionTitle}>{title}</h2>
      {copy ? <p className={styles.sectionCopy}>{copy}</p> : null}
    </div>
  );
}
