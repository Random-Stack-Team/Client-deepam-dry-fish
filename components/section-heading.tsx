export function SectionHeading({
  eyebrow,
  title,
  copy,
  center = true,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  center?: boolean;
}) {
  return (
    <div className={`mx-auto mb-12 max-w-3xl ${center ? "text-center" : ""}`}>
      <div className={`mb-3 flex items-center gap-3 ${center ? "justify-center" : ""}`}>
        <span className="eyebrow-wave text-gold" />
        <p className="text-[12px] font-poppins font-medium uppercase tracking-[0.18em] text-gold">
          {eyebrow}
        </p>
        <span className="eyebrow-wave text-gold" />
      </div>
      {title ? (
        <h2 className="font-playfair text-[36px] font-bold leading-[1.15] text-navy md:text-[44px]">
          {title}
        </h2>
      ) : null}
      {copy ? (
        <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-[1.7] text-body">
          {copy}
        </p>
      ) : null}
    </div>
  );
}
