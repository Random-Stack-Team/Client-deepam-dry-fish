import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import styles from "@/app/theme-pages.module.css";
import { productProcess, products } from "@/lib/data";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.longDescription,
    alternates: { canonical: `https://deepamdryfish.com/products/${product.slug}` },
    openGraph: {
      title: `${product.name} | Deepam Dry Fish`,
      description: product.longDescription,
      images: [{ url: product.image, width: 800, height: 600, alt: product.name }],
    },
  };
}

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const isBottle = product.slug === "fish-pickle";
  const isPrawn = product.slug === "other-dry-fish";

  return (
    <main className={styles.page}>
      <PageHero eyebrow="Product Details" title={product.name} copy={product.longDescription} />
      <section className={styles.section}>
        <div className={`${styles.container} ${styles.split}`}>
          <div className={`${styles.card} ${styles.padCard}`}>
            <div className={`${styles.imageBox} ${styles.detailImage} ${isBottle ? styles.bottleImage : ""}`}>
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 1024px) 90vw, 520px"
                className={isBottle ? styles.imageContain : isPrawn ? styles.imagePrawn : styles.imageFill}
              />
            </div>
          </div>
          <div>
            <p className={styles.eyebrow}>Premium Selection</p>
            <h1 className={styles.sectionTitle}>{product.name}</h1>
            <p className={styles.copy}>{product.longDescription}</p>
            <div className={styles.buttonRow}>
              <Link className={styles.button} href="https://wa.me/917707997070">
                Enquiry on WhatsApp
              </Link>
              <Link className={styles.buttonOutline} href="/products">
                Back to Products
              </Link>
            </div>
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

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <div className={styles.sectionHeading}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 className={styles.sectionTitle}>{title}</h2>
      {copy ? <p className={styles.sectionCopy}>{copy}</p> : null}
    </div>
  );
}
