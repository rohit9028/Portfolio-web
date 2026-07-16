import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "layout",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 92 },
      { name: "JavaScript", level: 90 },
      { name: "React.js", level: 92 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Bootstrap", level: 85 },
    ],
  },
  {
    title: "Backend",
    icon: "server",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
    ],
  },
  {
    title: "Database",
    icon: "database",
    skills: [{ name: "MongoDB", level: 84 }],
  },
  {
    title: "Languages",
    icon: "code",
    skills: [
      { name: "Java", level: 80 },
      { name: "Python", level: 78 },
    ],
  },
  {
    title: "Tools",
    icon: "wrench",
    skills: [
      { name: "Git", level: 88 },
      { name: "GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 86 },
    ],
  },
  {
    title: "Core Concepts",
    icon: "cpu",
    skills: [
      { name: "REST APIs", level: 88 },
      { name: "JWT Auth", level: 82 },
      { name: "Responsive Design", level: 92 },
      { name: "CRUD Operations", level: 90 },
    ],
  },
];
