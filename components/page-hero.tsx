import Image from "next/image";

export function PageHero({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy px-6 py-28 text-white">
      <div className="absolute inset-0 opacity-15">
        <Image
          src="/assets/images/hero/hero-banner.webp"
          alt=""
          width={1536}
          height={1024}
          className="h-full w-full object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/60" />
      <div className="relative mx-auto max-w-[1280px]">
        <div className="mb-4 flex items-center gap-3">
          <span className="eyebrow-wave text-gold" />
          <p className="text-[12px] font-poppins font-medium uppercase tracking-[0.18em] text-gold">
            {eyebrow}
          </p>
          <span className="eyebrow-wave text-gold" />
        </div>
        <h1 className="max-w-3xl font-playfair text-[42px] font-bold text-white md:text-[56px]">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-[15px] leading-[1.7] text-white/80">
          {copy}
        </p>
      </div>
    </section>
  );
}
