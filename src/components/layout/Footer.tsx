import { personal, socials } from "../../data/portfolioConfig";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5">
      <div className="section-container py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-xs sm:text-sm text-slate-500 text-center sm:text-left">
          © {year} {personal.name}. Crafted with React, Tailwind, and a lot of test coverage.
        </p>

        <div className="flex items-center gap-2">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer noopener"
              aria-label={social.label}
              className="p-2 rounded-full text-slate-400 hover:text-violet-300 hover:-translate-y-0.5 transition-all duration-300"
            >
              <social.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
