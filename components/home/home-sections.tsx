import {
  Instagram,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
  audiences,
  gallery,
  heroTrustBadges,
  products,
  qualityHighlights,
  recipes,
  testimonials,
} from "@/lib/data";
import styles from "./home.module.css";

function Eyebrow({
  children,
  align = "center",
}: {
  children: React.ReactNode;
  align?: "center" | "left";
}) {
  return (
    <div className={`${styles.eyebrow} ${align === "left" ? styles.eyebrowLeft : ""}`}>
      <span className={styles.wave} />
      <span>{children}</span>
      <span className={styles.wave} />
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title?: string;
  copy?: string;
}) {
  return (
    <div className={styles.sectionHeading}>
      <Eyebrow>{eyebrow}</Eyebrow>
      {title ? <h2 className={styles.sectionTitle}>{title}</h2> : null}
      {copy ? <p className={styles.sectionCopy}>{copy}</p> : null}
    </div>
  );
}

function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "goldOutline";
}) {
  const className =
    variant === "outline"
      ? styles.buttonOutline
      : variant === "goldOutline"
        ? styles.buttonGoldOutline
        : styles.button;

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`${styles.container} ${styles.heroInner}`}>
        <div className={styles.heroCopy}>
          <Eyebrow align="left">Authentic Coastal Taste</Eyebrow>
          <h1 className={styles.heroTitle}>
            Preserved <br /> With Trust
          </h1>
          <div className={styles.heroDivider} />
          <p className={styles.heroText}>
            From our shores to your table, Deepam Dry Fish brings authentic
            coastal flavor and tradition, preserved with care.
          </p>
          <div className={styles.heroActions}>
            <ButtonLink href="/products">Explore Products</ButtonLink>
            <ButtonLink href="/our-story" variant="outline">
              Our Story
            </ButtonLink>
          </div>
          <div className={styles.trustMini}>
            {heroTrustBadges.map((item, index) => {
              const Icon = item.icon as LucideIcon;
              return (
                <div className={styles.trustMiniItem} key={item.label}>
                  <Icon />
                  <span className={styles.trustMiniLabel}>{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.heroImageWrap}>
            <Image
              src="/assets/images/hero/hero-dry-fish-products.png"
              alt="Deepam dry fish packaged products on a coastal table"
              fill
              priority
              unoptimized
              sizes="(max-width: 767px) 100vw, 55vw"
              className={styles.imageFill}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function TrustBand() {
  return (
    <section className={styles.trustBand}>
      <div className={`${styles.container} ${styles.trustGrid}`}>
        {qualityHighlights.map((item) => {
          const Icon = item.icon as LucideIcon;
          return (
            <article className={styles.trustItem} key={item.title}>
              <Icon size={42} />
              <div>
                <h3 className={styles.trustTitle}>{item.title}</h3>
                <p className={styles.trustCopy}>{item.copy}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function ProductsGrid() {
  return (
    <section className={styles.products}>
      <div className={styles.container}>
        <SectionHeading
          eyebrow="Our Products"
          title="Bringing You the Finest from the Sea"
          copy="A wide range of dry fish and traditional delights, crafted with care to bring authentic coastal flavors to your home."
        />
        <div className={styles.productGrid}>
          {products.map((product) => (
            <article className={styles.productCard} key={product.slug}>
              <Link
                href={`/products/${product.slug}`}
                className={`${styles.productImage} ${
                  product.slug === "fish-pickle" ? styles.productImagePack : ""
                }`}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 767px) 90vw, 220px"
                  className={
                    product.slug === "fish-pickle"
                      ? styles.productPackImage
                      : product.slug === "other-dry-fish"
                        ? styles.productPrawnImage
                      : styles.productPhotoImage
                  }
                />
              </Link>
              <h3 className={styles.productTitle}>{product.name}</h3>
              <p className={styles.productCopy}>{product.description}</p>
              <ButtonLink href={`/products/${product.slug}`} variant="outline">
                Shop Now
              </ButtonLink>
            </article>
          ))}
        </div>
        <div className={styles.centerAction}>
          <ButtonLink href="/products" variant="goldOutline">
            View All Products
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

export function StorySection() {
  return (
    <section className={styles.story}>
      <div className={styles.storyPanel}>
        <div className={styles.storyPanelInner}>
          <Eyebrow align="left">Our Story</Eyebrow>
          <h2 className={styles.storyTitle}>
            A Tradition Passed Down, <br /> A Taste That Lasts
          </h2>
          <p className={styles.storyCopy}>
            Deepam Dry Fish represents the meeting of two powerful symbols:
            Deepam (Lamp) and Sea Waves. Together, they symbolize purity,
            tradition, blessings, and trust.
          </p>
          <p className={styles.storyCopy}>
            We carefully preserve the treasures of the sea while honoring
            generations of traditional methods to bring you authentic coastal
            flavors.
          </p>
          <div className={styles.heroActions}>
            <ButtonLink href="/our-story">Know More About Us</ButtonLink>
          </div>
        </div>
      </div>
      <div className={styles.storyImage}>
        <Image
          src="/assets/images/story/hero-fishing-boats-background.png"
          alt="Traditional coastal fishing at sunset"
          fill
          unoptimized
          sizes="(max-width: 1024px) 100vw, 55vw"
          className={styles.imageFill}
        />
      </div>
    </section>
  );
}

export function AudienceRow() {
  return (
    <section className={styles.audience}>
      <div className={styles.container}>
        <SectionHeading eyebrow="Made For Every Coastal Lover" />
        <div className={styles.audienceGrid}>
          {audiences.map((item) => {
            const Icon = item.icon as LucideIcon;
            return (
              <article className={styles.audienceItem} key={item.title}>
                <Icon />
                <h3 className={styles.audienceTitle}>{item.title}</h3>
                <p className={styles.audienceCopy}>{item.copy}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function RecipesInstagramSplit() {
  const instaItems = gallery.map((item, index) => ({
    ...item,
    image:
      index === 0
        ? "/assets/images/products/nethili.webp"
        : index === 1
          ? "/assets/images/hero/hero-dry-fish-products.png"
          : index === 2
            ? "/assets/images/recipes/fish-pickle.webp"
            : "/assets/images/products/masi-dry-fish.png",
  }));

  return (
    <section className={styles.split}>
      <div className={styles.splitPane}>
        <SectionHeading
          eyebrow="Recipes & Inspiration"
          title="Simple recipes. Authentic taste."
        />
        <div className={styles.recipeGrid}>
          {recipes.map((recipe) => (
            <article key={recipe.title}>
              <div
                className={`${styles.recipeImage} ${
                  recipe.title === "Fish Pickle" ? styles.recipeImageBottle : ""
                }`}
              >
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  fill
                  sizes="180px"
                  className={
                    recipe.title === "Fish Pickle"
                      ? styles.recipeBottleImage
                      : styles.imageFill
                  }
                />
              </div>
              <h3 className={styles.recipeTitle}>{recipe.title}</h3>
            </article>
          ))}
        </div>
        <div className={styles.centerAction}>
          <ButtonLink href="/recipes" variant="outline">
            View All Recipes
          </ButtonLink>
        </div>
      </div>
      <div className={styles.splitPane}>
        <SectionHeading eyebrow="Follow Our Journey" title="@deepam_dryfish" />
        <div className={styles.instaGrid}>
          {instaItems.map((item) => (
            <div className={styles.instaImage} key={item.title}>
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="140px"
                className={styles.imageContain}
              />
            </div>
          ))}
        </div>
        <div className={styles.centerAction}>
          <ButtonLink href="https://instagram.com">
            <Instagram size={16} />
            Follow Us On Instagram
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

export function TestimonialsStrip() {
  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <SectionHeading eyebrow="What Our Customers Say" />
        <div className={styles.testimonialGrid}>
          {testimonials.map((item) => (
            <article className={styles.testimonialCard} key={item.name}>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.testimonialText}>“{item.text}”</p>
              <p className={styles.testimonialName}>{item.name}</p>
              <p className={styles.testimonialLocation}>{item.location}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeSections() {
  return (
    <main className={styles.page}>
      <Hero />
      <TrustBand />
      <ProductsGrid />
      <StorySection />
      <AudienceRow />
      <RecipesInstagramSplit />
      <TestimonialsStrip />
    </main>
  );
}
