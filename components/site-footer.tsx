import { Facebook, Instagram, Youtube } from "lucide-react";
import Image from "next/image";

import { footerLinks } from "@/lib/data";
import styles from "./site-footer.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerMain}>
        <div className={styles.inner}>
          <div className={styles.grid}>
            <div className={styles.brand}>
              <div className={styles.brandLogo}>
                <Image
                  src="/logo/logo-mark.png"
                  alt="Deepam Dry Fish"
                  width={220}
                  height={118}
                  className={styles.logoMark}
                />
              </div>
              <p className={styles.brandCopy}>
                Authentic Coastal Taste, Preserved with Trust.
              </p>
              <div className={styles.socials}>
                {[Facebook, Instagram, Youtube].map((Icon, index) => (
                  <a className={styles.social} href="#" aria-label="Social media" key={index}>
                    <Icon size={16} strokeWidth={1.75} />
                  </a>
                ))}
              </div>
            </div>

            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className={styles.columnTitle}>{title}</h3>
                <ul className={styles.linkList}>
                  {links.map((link) => (
                    <li key={`${title}-${link.label}`}>
                      <a className={styles.link} href={link.href}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h3 className={styles.columnTitle}>Newsletter</h3>
              <p className={styles.newsletterCopy}>
                Subscribe to get updates on new products and offers.
              </p>
              <form className={styles.newsletterForm}>
                <label htmlFor="footer-email" hidden>
                  Email
                </label>
                <input
                  id="footer-email"
                  className={styles.input}
                  placeholder="Enter your email"
                  type="email"
                />
                <button className={styles.button} type="submit">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.bottomInner}>
          <span>© 2024 Deepam Dry Fish. All Rights Reserved.</span>
          <div className={styles.bottomItems}>
            <span>Secure Payment</span>
            <span>100% Quality Assured</span>
            <span>Hygienically Processed</span>
            <span>Made with care for coastal lovers</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
