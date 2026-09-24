export default function SectionHeading({
  eyebrow,
  heading,
  intro,
  align = "left",
  light = false,
}: {
  eyebrow: string;
  heading: string;
  intro?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${alignment}`}>
      <span
        className={`text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.12em] ${
          light ? "text-white/60" : "text-brand-pink"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`mt-3 text-[26px] sm:text-[32px] lg:text-[40px] xl:text-[44px] font-extrabold leading-[1.1] tracking-[-0.01em] ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {heading}
      </h2>
      {intro && (
        <p
          className={`mt-4 text-[16px] sm:text-[17px] lg:text-[18px] leading-relaxed ${
            light ? "text-white/70" : "text-ink-muted"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
