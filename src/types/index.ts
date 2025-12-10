import type { ImageMetadata } from "astro";

export interface SiteConfig extends HeaderProps {
  title: string;
  description: string;
  lang: string;
  author: string;
  socialLinks: { text: string; href: string }[];
  socialImage: string;
  canonicalURL?: string;
}

export interface SkillDetail {
  name: string;
  experience?: string;
  level?: string;
  icon?: string;
  projects: string[];
  tools: string[];
  achievements: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface SiteContent {
  hero: HeroProps;
  skills: {
    categories: SkillCategory[];
    details: SkillDetail[];
  };
  experience: ExperienceProps[];
  blog: ProjectProps[];
  projects: ProjectProps[];
  about: AboutProps;
}

export interface HeroProps {
  name: string;
  specialty: string;
  summary: string;
  email: string;
  tagline?: string;
  stats?: {
    label: string;
    value: string;
  }[];
  availability?: {
    status: string;
    text: string;
  };
}

export interface ExperienceProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string | string[];
}

export interface ProjectProps {
  name: string;
  summary: string;
  image: ImageMetadata;
  linkPreview?: string;
  linkSource?: string;
}

export interface AboutProps {
  description: string;
}

export interface HeaderProps {
  siteLogo: ImageMetadata;
  navLinks: { text: string; href: string }[];
}
