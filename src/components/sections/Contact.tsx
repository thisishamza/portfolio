import { Mail, Send } from "lucide-react";
import { primaryEmail, socials } from "../../data/portfolioConfig";
import { SectionHeading } from "../ui/SectionHeading";
import { GlowOrb } from "../ui/GlowOrb";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      <GlowOrb color="indigo" size="xl" className="-bottom-40 left-1/2 -translate-x-1/2 opacity-70" />

      <div className="section-container relative z-10">
        <SectionHeading
          align="center"
          eyebrow="Let's talk"
          title="Have a role, a bug, or an idea?"
          description="Whether you need a test framework built from scratch, a flaky suite stabilized, or backend help — I'd love to hear about it."
        />

        <div className="max-w-xl mx-auto">
          <div className="glass-card p-8 sm:p-10 text-center hover:-translate-y-1 hover:shadow-[var(--shadow-glow-soft)]">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-500 shadow-[var(--shadow-glow-violet)] mb-5">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-white">
              Send me an email
            </h3>
            <a
              href={`mailto:${primaryEmail}`}
              className="mt-2 inline-block text-violet-300 hover:text-white transition-colors duration-300"
            >
              {primaryEmail}
            </a>
            <div className="mt-6">
              <a href={`mailto:${primaryEmail}`} className="btn-primary">
                <Send className="w-4 h-4" />
                Start a conversation
              </a>
            </div>
          </div>

          {/* Social row */}
          <div className="mt-10 flex justify-center flex-wrap gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer noopener"
                aria-label={social.label}
                className="p-3 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 hover:text-white hover:border-violet-400/50 hover:-translate-y-1 transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
