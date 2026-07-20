"use client";

import {
  Facebook,
  Flame,
  Instagram,
  Menu,
  Search,
  ShoppingBag,
  User,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { navLinks } from "@/lib/data";
import styles from "./site-header.module.css";

function BrandLogo() {
  return (
    <span className={styles.logo}>
      <Image
        src="/logo/logo-mark.png"
        alt="Deepam Dry Fish"
        width={220}
        height={118}
        className={styles.logoMark}
        priority
      />
    </span>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.topInner}>
          <span className={styles.topText}>
            <Flame size={13} className={styles.topIcon} />
            Authentic Coastal Taste, Preserved with Trust.
          </span>
          <div className={styles.topRight}>
            <span>Free Shipping on orders above Rs. 999</span>
            <div className={styles.socials}>
              <a className={styles.socialLink} href="https://instagram.com" aria-label="Instagram">
                <Instagram size={14} />
              </a>
              <a className={styles.socialLink} href="https://facebook.com" aria-label="Facebook">
                <Facebook size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <Link href="/" aria-label="Deepam Dry Fish home">
            <BrandLogo />
          </Link>

          <div className={styles.navLinks}>
            {navLinks.map((link, index) => (
              <Link
                className={`${styles.navLink} ${index === 0 ? styles.navLinkActive : ""}`}
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className={styles.navActions}>
            <button className={`${styles.iconButton} ${styles.desktopAction}`} type="button" aria-label="Search">
              <Search size={21} strokeWidth={1.75} />
            </button>
            <button className={`${styles.iconButton} ${styles.desktopAction}`} type="button" aria-label="Account">
              <User size={21} strokeWidth={1.75} />
            </button>
            <button className={styles.iconButton} type="button" aria-label="Cart">
              <ShoppingBag size={21} strokeWidth={1.75} />
              <span className={styles.badge}>0</span>
            </button>
            <button
              className={`${styles.iconButton} ${styles.menuButton}`}
              type="button"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {open ? (
        <div className={styles.drawerOverlay} onClick={() => setOpen(false)}>
          <div className={styles.drawer} onClick={(event) => event.stopPropagation()}>
            <div className={styles.drawerHeader}>
              <BrandLogo />
              <button className={styles.iconButton} type="button" aria-label="Close menu" onClick={() => setOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <div className={styles.drawerLinks}>
              {navLinks.map((link, index) => (
                <Link
                  className={`${styles.navLink} ${index === 0 ? styles.navLinkActive : ""}`}
                  href={link.href}
                  key={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
