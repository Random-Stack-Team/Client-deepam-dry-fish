import Image from "next/image";

import styles from "@/app/theme-pages.module.css";
import { productProcess, qualityHighlights } from "@/lib/data";

export default function QualityPage() {
  return (
    <main className={styles.page}>
      <PageHero
        eyebrow="Quality"
        title="The Deepam Quality Promise"
        copy="Traditional methods meet hygienic handling, clean packing, and trusted coastal sourcing."
      />
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.split}>
            <div>
              <SectionHeading
                eyebrow="Quality Highlights"
                title="Preserved with care, delivered with trust."
                copy="Our products are selected, processed, and packed with the same discipline we expect for our own homes."
                align="left"
              />
            </div>
            <div className={styles.supportImage}>
              <Image
                src="/assets/images/pages/quality-inspection.webp"
                alt="Hygienic dry fish quality inspection"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className={styles.imageFill}
              />
            </div>
          </div>
          <div className={styles.gridFour}>
            {qualityHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <article className={`${styles.card} ${styles.padCard} ${styles.iconCard}`} key={item.title}>
                  <Icon />
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.copy}>{item.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className={styles.sectionCream}>
        <div className={styles.container}>
          <SectionHeading
            eyebrow="Our Process"
            title="From Sea to Your Table"
            copy="Every step is handled with care to ensure the highest quality and authentic taste."
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
