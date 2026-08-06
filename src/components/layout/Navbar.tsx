import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, personal } from "../../data/portfolioConfig";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const shellClass = scrolled
    ? "glass-nav shadow-lg shadow-black/20"
    : "bg-transparent";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${shellClass}`}
    >
      <nav className="section-container flex items-center justify-between h-16 sm:h-20">
        {/* Brand */}
        <a
          href="#hero"
          className="group flex items-center gap-2 font-display font-semibold text-white"
        >
          <span className="grid place-items-center w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-500 shadow-[var(--shadow-glow-soft)] text-sm">
            {personal.displayName[0]}
          </span>
          <span className="hidden sm:inline text-base transition-colors duration-300 group-hover:text-violet-300">
            {personal.displayName}
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-slate-300 rounded-full hover:text-white hover:bg-white/[0.05] transition-all duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/[0.05] transition-colors duration-300"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass-nav border-t border-white/5">
          <ul className="section-container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-slate-300 rounded-lg hover:text-white hover:bg-white/[0.05] transition-all duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
