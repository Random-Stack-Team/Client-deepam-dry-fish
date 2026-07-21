import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import styles from "@/app/theme-pages.module.css";
import { recipes } from "@/lib/data";

export const metadata: Metadata = {
  title: "Recipes — Nethili Fry, Karuvadu Kulambu | Deepam Dry Fish Chennai",
  description:
    "Try authentic coastal recipes with Deepam Dry Fish — Nethili Fry, Masi Kulambu, Fish Pickle. Traditional seafood recipes from Chennai's trusted dry fish shop in Avadi.",
  alternates: { canonical: "https://deepamdryfish.com/recipes" },
};

export default function RecipesPage() {
  return (
    <main className={styles.page}>
      <PageHero
        eyebrow="Recipes"
        title="Simple recipes. Authentic taste."
        copy="Masi fry, kulambu, pickle ideas, and traditional coastal inspiration for everyday kitchens."
      />
      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeading
            eyebrow="Recipes & Inspiration"
            title="Coastal dishes for modern homes."
            copy="Bring authentic dry fish flavor into simple weekday meals and family specials."
          />
          <div className={styles.gridThree}>
            {recipes.map((recipe) => (
              <article className={`${styles.card} ${styles.productCard}`} key={recipe.title}>
                <div
                  className={`${styles.imageBox} ${styles.recipeImage} ${
                    recipe.title === "Fish Pickle" ? styles.bottleImage : ""
                  }`}
                >
                  <Image
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    sizes="(max-width: 767px) 90vw, 360px"
                    className={recipe.title === "Fish Pickle" ? styles.imageContain : styles.imageFill}
                  />
                </div>
                <h3 className={styles.productTitle}>{recipe.title}</h3>
                <p className={`${styles.copy} ${styles.productCopy}`}>
                  A simple coastal preparation using authentic dry fish flavor and traditional spices.
                </p>
                <Link className={styles.buttonOutline} href="/recipes">
                  View Recipe
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
