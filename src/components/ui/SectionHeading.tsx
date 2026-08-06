type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignClasses =
    align === "center" ? "mx-auto text-center items-center" : "text-left";

  return (
    <div className={`mb-12 max-w-2xl flex flex-col ${alignClasses}`}>
      <div className="inline-flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-widest text-violet-400">
        <span className="h-px w-8 bg-violet-400/50" />
        {eyebrow}
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
