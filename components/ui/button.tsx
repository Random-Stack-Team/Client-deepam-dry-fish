import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

const base =
  "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-pill px-8 py-3.5 text-[13px] font-poppins font-semibold uppercase tracking-[0.08em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2";

const variants = {
  primary:
    "bg-navy text-white shadow-card hover:-translate-y-0.5 hover:bg-navy-deep",
  outline:
    "border-[1.5px] border-navy bg-transparent text-navy hover:-translate-y-0.5 hover:bg-navy hover:text-white",
  gold: "bg-gold text-white shadow-card hover:-translate-y-0.5 hover:bg-gold-light",
  "gold-outline":
    "border-[1.5px] border-gold bg-transparent text-gold hover:-translate-y-0.5 hover:bg-gold hover:text-white",
};

type Variant = keyof typeof variants;

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  children: ReactNode;
}) {
  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  children,
  variant = "primary",
  className = "",
  href,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  children: ReactNode;
  href: string;
}) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  ) {
    return (
      <a className={classes} href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} href={href} {...props}>
      {children}
    </Link>
  );
}
