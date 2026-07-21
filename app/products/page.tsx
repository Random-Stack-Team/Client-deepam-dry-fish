import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import styles from "@/app/theme-pages.module.css";
import { products } from "@/lib/data";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { Breadcrumb } from "@/components/seo/breadcrumb";

export const metadata: Metadata = {
  title: "Our Products — Dry Fish, Karuvadu, Fish Pickles | Chennai, Avadi",
  description:
    "Shop premium dry fish in Chennai — Nethili, Karuvadu, Vanjiram, Masi, Fish Pickles. Best quality dry fish from Avadi, Chennai. Free delivery. Call 7707997070.",
  alternates: { canonical: "https://deepamdryfish.com/products" },
};

export default function ProductsPage() {
  return (
    <main className={styles.page}>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://deepamdryfish.com" },
          { name: "Products", url: "https://deepamdryfish.com/products" },
        ]}
      />
      <div className={styles.container}>
        <Breadcrumb items={[{ label: "Products" }]} />
      </div>
      <PageHero
        eyebrow="Shop All Products"
        title="Authentic Coastal Treasure"
        copy="Explore premium dry fish, fish pickles, and traditional coastal selections prepared for modern homes."
      />
      <section className={styles.sectionCream}>
        <div className={styles.container}>
          <SectionHeading
            eyebrow="Product Collection"
            title="Premium Dry Fish & Coastal Specials"
            copy="A carefully selected range of dry fish and traditional delights, packed with coastal care."
          />
          <div className={styles.gridFive}>
            {products.map((product) => (
              <article className={`${styles.card} ${styles.productCard}`} key={product.slug}>
                <Link
                  className={`${styles.imageBox} ${styles.productImage} ${
                    product.slug === "fish-pickle" ? styles.bottleImage : ""
                  }`}
                  href={`/products/${product.slug}`}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 767px) 90vw, 220px"
                    className={
                      product.slug === "fish-pickle"
                        ? styles.imageContain
                        : product.slug === "other-dry-fish"
                          ? styles.imagePrawn
                          : styles.imageFill
                    }
                  />
                </Link>
                <h3 className={styles.productTitle}>{product.name}</h3>
                <p className={`${styles.copy} ${styles.productCopy}`}>{product.description}</p>
                <Link className={styles.buttonOutline} href={`/products/${product.slug}`}>
                  Shop Now
                </Link>
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
