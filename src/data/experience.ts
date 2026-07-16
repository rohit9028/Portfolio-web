import type { ExperienceItem, TimelineItem } from "@/types";

export const journeyTimeline: TimelineItem[] = [
  {
    year: "2023",
    title: "Started B.Tech",
    points: ["Learned HTML, CSS & JavaScript", "Built first static websites"],
  },
  {
    year: "2024",
    title: "Started React",
    points: ["Learned React fundamentals & hooks", "Built multiple MERN projects"],
  },
  {
    year: "2025",
    title: "Backend Development",
    points: ["Authentication with JWT", "Built REST APIs", "Worked with MongoDB"],
  },
  {
    year: "2026",
    title: "Looking for Internship",
    points: ["Building full-stack applications", "Open to SDE / MERN internships"],
  },
];

export const experiences: ExperienceItem[] = [
  {
    id: "learning",
    role: "Self-Directed Learning",
    org: "Full-Stack Web Development",
    period: "2023 — Present",
    description:
      "Built a strong foundation across the MERN stack through structured courses, documentation deep-dives and hands-on projects.",
    points: [
      "Completed advanced React & Node.js coursework",
      "Practiced DSA in Java & Python",
      "Built 10+ personal full-stack projects",
    ],
    icon: "graduation-cap",
  },
  {
    id: "development",
    role: "MERN Development Journey",
    org: "Personal & Academic Projects",
    period: "2024 — Present",
    description:
      "Designed and shipped complete full-stack applications end to end — from database schema to deployed UI.",
    points: [
      "Built REST APIs with Express & MongoDB",
      "Implemented JWT-based authentication",
      "Deployed apps on Vercel & Render",
    ],
    icon: "code-2",
  },
  {
    id: "goals",
    role: "Future Goals",
    org: "Software Engineering Internship",
    period: "2026",
    description:
      "Actively seeking an SDE / MERN Stack internship to apply skills on real-world products and grow alongside experienced engineers.",
    points: [
      "Open to full-stack & frontend internships",
      "Eager to contribute to production codebases",
      "Focused on writing clean, scalable code",
    ],
    icon: "target",
  },
];
