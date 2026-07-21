"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./faq.module.css";

export function FAQSection({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>Frequently Asked Questions</p>
          <h2 className={styles.title}>Common Questions About Our Dry Fish</h2>
        </div>
        <div className={styles.list}>
          {items.map((item, index) => (
            <article className={styles.item} key={index}>
              <button
                className={styles.question}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`${styles.icon} ${openIndex === index ? styles.iconOpen : ""}`}
                />
              </button>
              {openIndex === index ? (
                <div className={styles.answer}>
                  <p>{item.answer}</p>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
