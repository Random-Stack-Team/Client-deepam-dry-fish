import Link from "next/link";
import { ChevronRight } from "lucide-react";
import styles from "./breadcrumb.module.css";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className={styles.nav}>
      <ol className={styles.list}>
        <li className={styles.item}>
          <Link href="/" className={styles.link}>
            Home
          </Link>
          <ChevronRight className={styles.separator} />
        </li>
        {items.map((item, index) => (
          <li className={styles.item} key={index}>
            {item.href ? (
              <>
                <Link href={item.href} className={styles.link}>
                  {item.label}
                </Link>
                <ChevronRight className={styles.separator} />
              </>
            ) : (
              <span className={styles.current} aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
