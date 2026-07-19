import type { AchievementStat, ServiceItem, Testimonial } from "@/types";

export const testimonials: Testimonial[] = [
   {
    id: "t1",
    name: "Ananya Sharma",
    role: "Team Lead, College Coding Club",
    avatar: "https://i.pravatar.cc/150?img=47",
    rating: 5,
    text: "Rohit consistently delivered clean, well-structured MERN projects ahead of deadlines. His grasp of both frontend and backend concepts stands out among peers.",
  },
];

export const services: ServiceItem[] = [
  {
    title: "Frontend Development",
    description: "Pixel-perfect, accessible interfaces built with React and Tailwind CSS.",
    icon: "layout-template",
  },
  {
    title: "MERN Development",
    description: "End-to-end full-stack applications with React, Node.js, Express & MongoDB.",
    icon: "layers",
  },
  {
    title: "Responsive Websites",
    description: "Websites that look and perform beautifully on every screen size.",
    icon: "smartphone",
  },
  {
    title: "REST API Development",
    description: "Secure, well-documented APIs with authentication and clean architecture.",
    icon: "plug",
  },
  {
    title: "Portfolio Websites",
    description: "Personal brand-focused portfolios that help you stand out and get hired.",
    icon: "user-round",
  },
  {
    title: "Landing Pages",
    description: "High-converting, animated landing pages for products and startups.",
    icon: "rocket",
  },
  {
    title: "Dashboard Development",
    description: "Data-rich admin dashboards with charts, tables and role-based access.",
    icon: "layout-dashboard",
  },
];

export const achievementStats: AchievementStat[] = [
  { label: "Projects Completed", value: 3, suffix: "+", icon: "folder-check" },
  { label: "Technologies Learned", value: 23, suffix: "+", icon: "cpu" },
  { label: "GitHub Repositories", value: 4, suffix: "", icon: "github" },
  { label: "Certificates Earned", value: 1, suffix: "+", icon: "award" },
];

export const aboutHighlights = [
  { title: "Quick Learner", icon: "brain", desc: "Grasps new tools and frameworks fast, then ships with them." },
  { title: "Problem Solver", icon: "puzzle", desc: "Breaks down complex problems into clean, workable solutions." },
  { title: "Team Player", icon: "users", desc: "Collaborates well in code reviews, standups and pair sessions." },
  { title: "Open Source Enthusiast", icon: "git-branch", desc: "Contributes to and maintains public repositories." },
  { title: "Creative Thinker", icon: "lightbulb", desc: "Brings design sense and product thinking to engineering." },
];
