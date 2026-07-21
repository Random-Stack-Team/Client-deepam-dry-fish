import type { Metadata } from "next";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

import styles from "@/app/theme-pages.module.css";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Deepam Dry Fish for retail orders, bulk enquiries, restaurant supply, catering needs, and export discussions. Call +91 77079 97070 or visit us in Avadi, Chennai.",
  alternates: { canonical: "https://deepamdryfish.com/contact" },
};

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <PageHero
        eyebrow="Contact"
        title="Connect with Our Coast"
        copy="Reach us for retail orders, bulk enquiries, restaurant supply, catering needs, and export discussions."
      />
      <section className={styles.section}>
        <div className={`${styles.container} ${styles.split}`}>
          <div>
            <div className={`${styles.card} ${styles.contactPanel}`}>
              <h2 className={styles.sectionTitle}>Get in Touch</h2>
              <p className={styles.contactLine}>
                <Phone size={20} />
                +91 77079 97070
              </p>
              <p className={styles.contactLine}>
                <Mail size={20} />
                Vasagam4144@gmail.com
              </p>
              <p className={styles.contactLine}>
                <MapPin size={20} />
                137, Deepam Dry Fish, Ph Road, Avadi, Chennai 54
              </p>
            </div>
            <div className={styles.supportImage}>
              <Image
                src="/assets/images/pages/contact-support.webp"
                alt="Coastal order support desk"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className={styles.imageFill}
              />
            </div>
          </div>
          <form className={`${styles.card} ${styles.padCard} ${styles.form}`}>
            <SectionHeading eyebrow="Enquiry" title="Send a Message" align="left" />
            <label className={styles.srOnly} htmlFor="contact-name">
              Full name
            </label>
            <input className={styles.field} id="contact-name" placeholder="Full name" />
            <label className={styles.srOnly} htmlFor="contact-phone">
              Phone number
            </label>
            <input className={styles.field} id="contact-phone" placeholder="Phone number" />
            <label className={styles.srOnly} htmlFor="contact-email">
              Email address
            </label>
            <input className={styles.field} id="contact-email" placeholder="Email address" />
            <label className={styles.srOnly} htmlFor="contact-message">
              Your message
            </label>
            <textarea
              className={`${styles.field} ${styles.textarea}`}
              id="contact-message"
              placeholder="Your message"
            />
            <button className={styles.button} type="submit">
              Submit Enquiry
            </button>
          </form>
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
  align = "center",
}: {
  eyebrow: string;
  title: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "left" ? styles.sectionHeadingLeft : styles.sectionHeading}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 className={styles.sectionTitle}>{title}</h2>
    </div>
  );
}
