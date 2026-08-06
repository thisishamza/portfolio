import { ExternalLink } from "lucide-react";
import type { Project } from "../../data/portfolioConfig";
import { SkillPill } from "./SkillPill";
import { GithubIcon } from "./BrandIcons";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const hasLinks = Boolean(project.liveUrl) || Boolean(project.repoUrl);

  return (
    <article className="glass-card p-6 sm:p-7 hover:-translate-y-1 hover:shadow-[var(--shadow-glow-soft)] flex flex-col">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="text-lg sm:text-xl font-semibold text-white leading-snug">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-violet-300/90">{project.tagline}</p>
        </div>
        {hasLinks && (
          <div className="flex items-center gap-2 shrink-0">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${project.title} — live site`}
                className="p-2 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 hover:text-white hover:border-violet-400/50 transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${project.title} — repository`}
                className="p-2 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 hover:text-white hover:border-violet-400/50 transition-all duration-300"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
          </div>
        )}
      </div>

      <p className="mt-4 text-sm text-slate-400 leading-relaxed">
        {project.description}
      </p>

      {project.metrics && project.metrics.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {project.metrics.map((metric) => (
            <span
              key={metric}
              className="text-[11px] sm:text-xs font-medium text-slate-200 bg-white/[0.04] border border-white/10 rounded-md px-2.5 py-1"
            >
              {metric}
            </span>
          ))}
        </div>
      )}

      {project.tech.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
          {project.tech.map((tech) => (
            <SkillPill key={tech} label={tech} />
          ))}
        </div>
      )}
    </article>
  );
}
