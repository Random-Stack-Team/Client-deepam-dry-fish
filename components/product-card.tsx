import Link from "next/link";

import { products } from "@/lib/data";
import { ButtonLink } from "@/components/ui/button";
import { ProductCardImage } from "@/components/visual";

export function ProductCard({
  product,
}: {
  product: (typeof products)[number];
}) {
  return (
    <article className="group rounded-brand border border-line bg-white p-3 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
      <Link
        className="relative block aspect-square overflow-hidden rounded-brand bg-cream"
        href={`/products/${product.slug}`}
      >
        <ProductCardImage
          src={product.image}
          alt={product.name}
        />
      </Link>
      <div className="p-3">
        <h3 className="text-[15px] font-poppins font-bold uppercase text-navy">
          {product.name}
        </h3>
        <p className="mt-2 min-h-[40px] text-[13px] leading-[1.6] text-body">
          {product.description}
        </p>
        <ButtonLink
          className="mt-4 w-full"
          href={`/products/${product.slug}`}
          variant="outline"
        >
          Shop Now
        </ButtonLink>
      </div>
    </article>
  );
}
