type GlowOrbProps = {
  className?: string;
  color?: "violet" | "indigo" | "fuchsia";
  size?: "sm" | "md" | "lg" | "xl";
};

const colorMap: Record<NonNullable<GlowOrbProps["color"]>, string> = {
  violet: "bg-violet-500/25",
  indigo: "bg-indigo-500/25",
  fuchsia: "bg-fuchsia-500/20",
};

const sizeMap: Record<NonNullable<GlowOrbProps["size"]>, string> = {
  sm: "w-64 h-64",
  md: "w-96 h-96",
  lg: "w-[32rem] h-[32rem]",
  xl: "w-[42rem] h-[42rem]",
};

export function GlowOrb({
  className = "",
  color = "violet",
  size = "md",
}: GlowOrbProps) {
  return (
    <div
      aria-hidden="true"
      className={`absolute rounded-full blur-3xl pointer-events-none ${colorMap[color]} ${sizeMap[size]} ${className}`}
    />
  );
}
