import { ArrowDown, Download, Mail, MapPin } from "lucide-react";
import { personal, primaryEmail } from "../../data/portfolioConfig";
import { GlowOrb } from "../ui/GlowOrb";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-24 sm:pb-32 lg:pb-40"
    >
      {/* Ambient background orbs */}
      <GlowOrb color="violet" size="xl" className="-top-40 -left-40" />
      <GlowOrb color="indigo" size="lg" className="top-1/3 -right-40" />

      <div className="section-container relative z-10">
        {/* Location + status pill */}
        <div className="inline-flex items-center gap-2 glass-pill mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <MapPin className="w-3.5 h-3.5 text-slate-400" />
          {personal.location}
        </div>

        {/* Name + title */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight">
          <span className="block text-white">Hi, I'm</span>
          <span className="block accent-text">{personal.name}.</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-slate-300 font-medium">
          {personal.title}
        </p>

        <p className="mt-4 max-w-2xl text-base sm:text-lg text-slate-400 leading-relaxed">
          {personal.tagline}
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap gap-3">
          <a href={`mailto:${primaryEmail}`} className="btn-primary">
            <Mail className="w-4 h-4" />
            Get in touch
          </a>
          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="btn-ghost"
          >
            <Download className="w-4 h-4" />
            Download résumé
          </a>
        </div>
      </div>

      {/* Scroll cue — direct child of the section so bottom-8 sits at the
          true bottom of the viewport, not the bottom of the content column.
          Hidden on small screens where it would sit awkwardly far below CTAs. */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="hidden sm:block absolute left-1/2 -translate-x-1/2 bottom-8 z-10 text-slate-500 hover:text-violet-400 transition-colors duration-300 animate-bounce"
      >
        <ArrowDown className="w-5 h-5" />
      </a>
    </section>
  );
}
