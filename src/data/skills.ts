import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: "code",
    skills: [
      { name: "HTML5 / CSS3", level: 95 },
      { name: "JavaScript (ES6+)", level: 92 },
      { name: "Python", level: 78 },
      { name: "Java", level: 75 },
    ],
  },
  {
    title: "Frontend",
    icon: "layout",
    skills: [
      { name: "React.js", level: 92 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Bootstrap", level: 85 },
    ],
  },
  {
    title: "Backend",
    icon: "server",
    skills: [
      { name: "Node.js", level: 86 },
      { name: "Express.js", level: 88 },
      { name: "Middleware", level: 85 },
      { name: "bcrypt.js", level: 80 },
    ],
  },
  {
    title: "Database",
    icon: "database",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "Mongoose (ODM)", level: 84 },
      { name: "Schema Design", level: 82 },
    ],
  },
  {
    title: "Tools",
    icon: "wrench",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "VS Code / Postman", level: 92 },
      { name: "dotenv / Nodemon", level: 85 },
    ],
  },
  {
    title: "Deployment",
    icon: "cloud",
    skills: [
      { name: "Vercel", level: 88 },
      { name: "Netlify", level: 85 },
    ],
  },
  {
    title: "Core Concepts",
    icon: "cpu",
    skills: [
      { name: "REST APIs", level: 90 },
      { name: "JWT Authentication", level: 88 },
      { name: "CRUD Operations", level: 92 },
      { name: "Responsive Web Design", level: 94 },
    ],
  },
];
