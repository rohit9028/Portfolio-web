export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  features: string[];
  github: string;
  live: string;
  featured?: boolean;
}

export interface TimelineItem {
  year: string;
  title: string;
  points: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  org: string;
  period: string;
  description: string;
  points: string[];
  icon: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  score: string;
  points: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

export interface AchievementStat {
  label: string;
  value: number;
  suffix?: string;
  icon: string;
}
