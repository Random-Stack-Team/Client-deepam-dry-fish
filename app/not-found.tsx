import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you're looking for doesn't exist. Browse our premium dry fish products from Deepam Dry Fish, Avadi, Chennai.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        padding: "2rem",
        textAlign: "center",
        fontFamily: "var(--font-body)",
      }}
    >
      <p
        style={{
          fontSize: "4rem",
          fontWeight: 800,
          color: "var(--color-navy)",
          lineHeight: 1,
          margin: 0,
        }}
      >
        404
      </p>
      <h1
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "1.75rem",
          fontWeight: 700,
          color: "var(--color-navy)",
          marginTop: "0.5rem",
        }}
      >
        Page Not Found
      </h1>
      <p
        style={{
          color: "var(--color-body)",
          maxWidth: "400px",
          lineHeight: 1.7,
          marginTop: "1rem",
        }}
      >
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Explore our premium dry fish products from Avadi, Chennai.
      </p>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          marginTop: "1.5rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "0.75rem 2rem",
            background: "var(--color-navy)",
            color: "#fff",
            borderRadius: "4px",
            fontWeight: 600,
            fontSize: "0.85rem",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            textDecoration: "none",
          }}
        >
          Go Home
        </Link>
        <Link
          href="/products"
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "0.75rem 2rem",
            border: "1.5px solid var(--color-navy)",
            color: "var(--color-navy)",
            borderRadius: "4px",
            fontWeight: 600,
            fontSize: "0.85rem",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            textDecoration: "none",
          }}
        >
          View Products
        </Link>
      </div>
    </main>
  );
}
