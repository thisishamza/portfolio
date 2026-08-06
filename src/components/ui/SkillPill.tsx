import type { LucideIcon } from "lucide-react";

type SkillPillProps = {
  label: string;
  icon?: LucideIcon;
};

export function SkillPill({ label, icon: Icon }: SkillPillProps) {
  return (
    <span className="glass-pill">
      {Icon && <Icon className="w-3.5 h-3.5 text-violet-300" />}
      {label}
    </span>
  );
}
