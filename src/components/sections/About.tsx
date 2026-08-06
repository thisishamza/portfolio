import { Code2, TestTube2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { skillGroups } from "../../data/portfolioConfig";
import { SectionHeading } from "../ui/SectionHeading";
import { SkillPill } from "../ui/SkillPill";

type RoleStat = { value: string; label: string };

type RolePanelProps = {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  body: string;
  stats: RoleStat[];
};

function RolePanel({ icon: Icon, eyebrow, title, body, stats }: RolePanelProps) {
  return (
    <div className="glass-card p-6 sm:p-8 hover:-translate-y-1 flex flex-col">
      <div className="flex items-center gap-3 mb-5">
        <div className="p-2 rounded-lg bg-violet-500/10 border border-violet-500/30">
          <Icon className="w-5 h-5 text-violet-300" />
        </div>
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-widest text-violet-400">
            {eyebrow}
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-white leading-tight">
            {title}
          </h3>
        </div>
      </div>

      <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
        {body}
      </p>

      <div className="mt-6 grid grid-cols-3 gap-3 pt-5 border-t border-white/5">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-2xl sm:text-3xl font-bold accent-text">
              {stat.value}
            </div>
            <div className="mt-1 text-[10px] text-slate-400 uppercase tracking-wider leading-tight">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="About"
          title="Two disciplines, one engineer."
          description="6+ years focused on quality engineering, with enough backend and full-stack development experience to test the systems from the inside."
        />

        {/* QA + Dev side-by-side panels */}
        <div className="grid md:grid-cols-2 gap-6">
          <RolePanel
            icon={TestTube2}
            eyebrow="Primary role"
            title="Quality Engineering"
            body="6+ years designing scalable test automation for web, API, and backend systems. Co-designed a geolocation framework spanning 40 countries at Thomson Reuters, contributed 600+ tests to a 2,700+ regression suite, and gated WCAG compliance in CI with Axe."
            stats={[
              { value: "6+", label: "Years QA" },
              { value: "40", label: "Countries" },
              { value: "600+", label: "Tests Authored" },
            ]}
          />
          <RolePanel
            icon={Code2}
            eyebrow="Also builds"
            title="Full-Stack Development"
            body="Co-architected the Django REST backend behind the Tasdeeq mobile app (1M+ downloads) and shipped full-stack client sites in PHP and Laravel at TechLeadz. Backend chops keep my system-level testing sharp and my collaboration with engineering teams close."
            stats={[
              { value: "1M+", label: "App Downloads" },
              { value: "50+", label: "REST APIs" },
              { value: "~60%", label: "Test Coverage" },
            ]}
          />
        </div>

        {/* Skills toolkit */}
        <div id="skills" className="mt-20 scroll-mt-24">
          <SectionHeading
            eyebrow="Toolkit"
            title="Tech I work with day-to-day"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillGroups.map((group) => (
              <div key={group.category} className="glass-card p-5">
                <div className="flex items-center gap-2 mb-4">
                  <group.icon className="w-4 h-4 text-violet-400" />
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <SkillPill key={skill} label={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
