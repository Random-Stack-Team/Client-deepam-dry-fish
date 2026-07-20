import Image from "next/image";

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <Image
        src="/logo/logo-mark.png"
        alt="Deepam Dry Fish"
        width={40}
        height={40}
        className="h-10 w-10 shrink-0 object-contain"
        priority
      />
      <div className="leading-none">
        <span className="block font-playfair text-[22px] font-bold tracking-[0.04em] text-navy">
          DEEPAM
        </span>
        <span className="mt-0.5 block text-[10px] font-medium uppercase tracking-[0.2em] text-gold">
          DRY FISH
        </span>
      </div>
    </div>
  );
}

export function FooterLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <Image
        src="/logo/logo-mark.png"
        alt="Deepam Dry Fish"
        width={48}
        height={48}
        className="h-12 w-12 shrink-0 object-contain brightness-0 invert"
      />
      <div>
        <span className="block font-playfair text-[22px] font-bold tracking-[0.04em] text-white">
          DEEPAM
        </span>
        <span className="mt-0.5 block text-[10px] font-medium uppercase tracking-[0.2em] text-gold">
          DRY FISH
        </span>
      </div>
    </div>
  );
}

export function ProductCardImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={300}
      height={300}
      className="h-full w-full object-contain"
    />
  );
}

export function StoryImage() {
  return (
    <Image
      src="/assets/images/story/coastal-heritage.webp"
      alt="Traditional coastal fishing and dry fish heritage"
      width={800}
      height={500}
      className="h-full w-full object-cover"
    />
  );
}

export function RecipeImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={300}
      height={300}
      className="h-full w-full object-cover"
    />
  );
}

export function InstaImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={300}
      height={300}
      className="h-full w-full object-cover"
    />
  );
}
