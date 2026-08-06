/**
 * Portfolio configuration — single source of truth for all site content.
 * Edit values here to update the site; no component code needs to change.
 */

import type { ComponentType } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Mail,
  Phone,
  FileText,
  Globe,
  Code2,
  TestTube2,
  GitBranch,
  Activity,
  Terminal,
  Server,
  BookOpen,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/ui/BrandIcons";

// Icon type that accepts both Lucide icons and our inline brand SVG components.
type IconComponent = LucideIcon | ComponentType<{ className?: string }>;

// ---------- Types ----------

export type SocialLink = {
  label: string;
  href: string;
  icon: IconComponent;
};

export type SkillGroup = {
  category: string;
  icon: LucideIcon;
  skills: string[];
};

export type ProjectCategory = "qa" | "dev";

export type Project = {
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  metrics?: string[]; // e.g. "40 countries", "600+ tests"
  liveUrl?: string;
  repoUrl?: string;
  category: ProjectCategory;
  featured: boolean;
};

// ---------- Personal Info ----------

export const personal = {
  name: "Muhammad Hamza",
  displayName: "Hamza",
  title: "SDET / QA Automation Engineer",
  tagline: "Quality engineer by title, developer by curiosity.",
  location: "Pakistan · Remote",
  bio: [
    "SDET and QA Automation Engineer with 6+ years of experience designing and maintaining scalable test automation for web, API, and backend systems.",
    "At Thomson Reuters I co-designed a geolocation automation framework covering 40 countries and contributed 600+ tests to a 2,700+ test enterprise regression suite. I care about coverage that actually catches bugs — not tests written for the sake of the number.",
    "On the development side, I've shipped Django REST backends (Tasdeeq, 1M+ downloads) and full-stack client sites across PHP and Laravel — enough to keep my system-level testing sharp and my collaboration with engineering teams close.",
  ],
  resumeUrl: "/resume.pdf",
};

// ---------- Social & Contact ----------

export const socials: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/thisishamza",
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/muhammadhamza10",
    icon: LinkedinIcon,
  },
  {
    label: "Medium",
    href: "https://muhammadhamzaa.medium.com/",
    icon: BookOpen,
  },
  {
    label: "Email",
    href: "mailto:mh.muhammadhamza97@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    href: "tel:+923154965650",
    icon: Phone,
  },
];

export const primaryEmail = "mh.muhammadhamza97@gmail.com";

// ---------- Skills ----------

export const skillGroups: SkillGroup[] = [
  {
    category: "Automation",
    icon: TestTube2,
    skills: [
      "Playwright",
      "Pytest",
      "Selenium",
      "Cypress",
      "Postman",
      "Axe",
      "Page Object Model",
    ],
  },
  {
    category: "Testing Types",
    icon: Activity,
    skills: [
      "UI",
      "API",
      "Integration",
      "Regression",
      "Accessibility (WCAG)",
      "Performance",
      "Cross-browser",
      "Mobile Web",
    ],
  },
  {
    category: "CI/CD & Infra",
    icon: GitBranch,
    skills: [
      "Jenkins",
      "GitHub Actions",
      "Docker",
      "Git",
      "BrowserStack",
      "Allure Reporting",
    ],
  },
  {
    category: "Monitoring & Perf",
    icon: Globe,
    skills: ["Datadog Synthetic Monitoring", "JMeter"],
  },
  {
    category: "Languages",
    icon: Terminal,
    skills: ["Python", "JavaScript", "PHP", "SQL"],
  },
  {
    category: "Backend & Web",
    icon: Server,
    skills: ["Django", "Django REST Framework", "Laravel"],
  },
];

// ---------- Projects ----------
// Order matters: QA projects come first so they render at the top of the section.

export const projects: Project[] = [
  // ─── Quality Engineering & Automation ────────────────────────────────
  {
    title: "Geolocation Automation Framework",
    tagline: "40-country test coverage for Reuters.com",
    description:
      "Co-designed and built a Playwright + Pytest framework that validates localized content and user experiences across 40 countries, running on Chrome, Safari, and mobile via BrowserStack. Integrated with Jenkins, GitHub Actions, and Allure for CI/CD reporting.",
    tech: [
      "Python",
      "Playwright",
      "Pytest",
      "BrowserStack",
      "Jenkins",
      "GitHub Actions",
      "Allure",
    ],
    metrics: ["40 countries", "250+ tests", "Chrome / Safari / mobile"],
    category: "qa",
    featured: true,
  },
  {
    title: "Reuters Enterprise Regression Suite",
    tagline: "600+ tests contributed to a 2,700+ test suite",
    description:
      "Automated high-value customer journeys across Reuters.com — short-form video experiences, user account flows, subscription paths, and OneTrust consent behavior. Reviewed automation code and shaped framework architecture and testing strategy inside a four-engineer QA team.",
    tech: ["Python", "Playwright", "Pytest", "Page Object Model", "GitHub Actions"],
    metrics: ["600+ tests contributed", "2,700+ suite size", "4-engineer team"],
    category: "qa",
    featured: true,
  },
  {
    title: "Accessibility Automation in CI/CD",
    tagline: "Continuous WCAG checks with Axe on Reuters.com",
    description:
      "Integrated Axe accessibility checks into the CI/CD pipeline so WCAG issues surface on every pull request instead of during periodic audits. Built out coverage for critical account and reader-facing journeys and helped teams triage findings before merge.",
    tech: ["Axe", "Playwright", "Python", "GitHub Actions", "Jenkins"],
    metrics: ["WCAG on every PR", "Pre-merge gate", "Reuters.com scale"],
    category: "qa",
    featured: true,
  },
  {
    title: "Datadog Synthetic Monitoring",
    tagline: "Production-critical flow monitoring at Reuters",
    description:
      "Implemented Datadog Synthetic Monitoring for production-critical journeys on Reuters.com so regressions in prod are caught before customers report them. Optimized execution spend by grouping tests with similar coverage without losing signal.",
    tech: ["Datadog", "Synthetic Monitoring", "JavaScript"],
    metrics: ["Prod-critical flows", "Spend-optimized", "24/7 monitoring"],
    category: "qa",
    featured: true,
  },
  {
    title: "Tasdeeq Backend Test Suite",
    tagline: "Django unit tests + JMeter load runs",
    description:
      "Backed the Tasdeeq REST APIs with Django unit tests that reached ~60% backend coverage, then validated the same endpoints under load with JMeter — surfacing reliability and scalability limits before production traffic hit them.",
    tech: ["Django", "Pytest", "JMeter", "Postman", "Python"],
    metrics: ["~60% coverage", "50+ APIs tested", "Load-verified"],
    category: "qa",
    featured: true,
  },
  {
    title: "Python Automation Toolkit",
    tagline: "SharePoint provisioning + lead-gen pipelines at TechLeadz",
    description:
      "Automated SharePoint site-provisioning across 35+ sites and cut creation time by 30%. Wrote Python integrations across HubSpot, Indeed, Google Jobs, LinkedIn, and Hunter.io to streamline outbound lead generation, plus data pipelines pulling marketing analytics from Amazon SES and ActiveCampaign.",
    tech: ["Python", "HubSpot API", "LinkedIn API", "Hunter.io", "Amazon SES", "ActiveCampaign"],
    metrics: ["35+ sites automated", "30% time saved", "5+ integrations"],
    category: "qa",
    featured: true,
  },

  // ─── Full-Stack Development ──────────────────────────────────────────
  {
    title: "Tasdeeq Mobile App Backend",
    tagline: "Django REST backend powering a 1M+ download app",
    description:
      "Co-architected and built the backend for Tasdeeq's mobile application, a licensed credit-bureau product. Designed and shipped 50+ REST APIs covering OTP authentication, reporting services, and voucher management, deployed on AWS EC2.",
    tech: [
      "Python",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "AWS EC2",
    ],
    metrics: ["1M+ downloads", "50+ REST APIs", "OTP · Reporting · Vouchers"],
    liveUrl: "https://tasdeeq.com/app/",
    category: "dev",
    featured: true,
  },
  {
    title: "FindBusinessesForSale",
    tagline: "Canadian marketplace for businesses, restaurants & commercial realty",
    description:
      "Full-stack build of a searchable listings marketplace: sellers post businesses, restaurants, farms, and commercial property; buyers filter by industry, region, and price. Handled seller onboarding, listing moderation, and inbound lead capture for interested buyers.",
    tech: ["PHP", "JavaScript", "HTML", "CSS"],
    metrics: ["Marketplace", "Multi-industry", "Search & filters"],
    category: "dev",
    featured: true,
  },
  {
    title: "BC Water Well",
    tagline: "Directory & lead-routing for British Columbia water-well operators",
    description:
      "Frontend and backend for a BC-focused platform that connects customers with drilling, pump repair, water treatment, testing, and environmental services. Built provider profiles, region-based search, and the inbound inquiry pipeline that routes leads to the right operator.",
    tech: ["PHP", "JavaScript", "HTML", "CSS"],
    metrics: ["Service directory", "Region-based search", "Lead routing"],
    category: "dev",
    featured: true,
  },
  {
    title: "ATG Travel",
    tagline: "Corporate travel platform for 150+ countries",
    description:
      "Contributed frontend and backend across ATG's business travel, meetings, and events site — programs configured per client, spanning 150+ countries. Worked across a Laravel + Django stack sharing a common HTML/CSS/JS layer.",
    tech: ["Laravel", "Django", "JavaScript", "HTML", "CSS"],
    metrics: ["150+ countries", "Enterprise clients", "Multi-stack"],
    category: "dev",
    featured: true,
  },
];

// ---------- Navigation ----------

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

// ---------- Site Metadata ----------

export const siteMeta = {
  title: "Muhammad Hamza — SDET / QA Automation Engineer",
  description:
    "Portfolio of Muhammad Hamza, SDET and QA Automation Engineer with 6+ years building scalable test automation for web, API, and backend systems.",
  url: "",
  ogImage: "/og-image.png",
};

// ---------- Convenience re-exports ----------

export const featuredProjects = projects.filter((p) => p.featured);
export const qaProjects = featuredProjects.filter((p) => p.category === "qa");
export const devProjects = featuredProjects.filter((p) => p.category === "dev");

// Icon used in the "Contact me" CTA
export { FileText, Code2 };
