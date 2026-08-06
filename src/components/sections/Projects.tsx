import { Code2, TestTube2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { qaProjects, devProjects } from "../../data/portfolioConfig";
import type { Project } from "../../data/portfolioConfig";
import { SectionHeading } from "../ui/SectionHeading";
import { ProjectCard } from "../ui/ProjectCard";
import { GlowOrb } from "../ui/GlowOrb";

type GroupProps = {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  items: Project[];
};

function ProjectGroup({ icon: Icon, eyebrow, title, items }: GroupProps) {
  if (items.length === 0) return null;
  return (
    <div>
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-lg bg-violet-500/10 border border-violet-500/30">
          <Icon className="w-4 h-4 text-violet-300" />
        </div>
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-widest text-violet-400">
            {eyebrow}
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-white">
            {title}
          </h3>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-28 overflow-hidden">
      <GlowOrb color="fuchsia" size="lg" className="top-1/2 -left-40 opacity-60" />

      <div className="section-container relative z-10">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects worth showing off."
          description="Testing frameworks first — the shipped products come after. Each card lists tech, metrics, and (when public) a link."
        />

        <div className="space-y-16">
          <ProjectGroup
            icon={TestTube2}
            eyebrow="Priority"
            title="Quality Engineering & Automation"
            items={qaProjects}
          />
          <ProjectGroup
            icon={Code2}
            eyebrow="Also built"
            title="Full-Stack Development"
            items={devProjects}
          />
        </div>
      </div>
    </section>
  );
}
