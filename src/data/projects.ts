import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "expense-tracker",
    title: "Business Expense Tracker",
    description:
      "A full-stack MERN application to track, categorize and analyze business expenses with an interactive dashboard for income and expenses.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    features: [
      "JWT authentication & secure REST APIs",
      "Interactive expense analytics dashboard",
      "Category-wise budget tracking",
    ],
    github: "https://github.com/rohit9028/Business_expense_tracker",
    live: "https://business-expense-tracker-ezir-4h7vietnm-rohit9028s-projects.vercel.app/",
    featured: true,
  },
  {
    id: "todo-app",
    title: "Todo App",
    description:
      "A responsive task management app with add, edit, delete and complete actions, backed by Local Storage persistence.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1200&auto=format&fit=crop",
    tech: ["React", "Tailwind CSS"],
    features: [
      "Add, edit, delete & complete tasks",
      "Persistent Local Storage",
      "Clean, responsive UI",
    ],
    github: "https://github.com/rohit9028/Todo-List",
    live: "https://todo-list156.netlify.app/",
  },
  {
    id: "airbnb-clone",
    title: "Airbnb Clone",
    description:
      "A property listing and booking web app inspired by Airbnb, covering listings, booking flow and a server-rendered UI.",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
    tech: ["Node.js", "Express", "MongoDB", "EJS"],
    features: [
      "Property listing & detail views",
      "Server-rendered EJS templates",
      "Booking flow foundation",
    ],
    github: "https://github.com/rohit9028/Airbnb_clone",
    live: "",
  },
  {
    id: "Portfolio-web",
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with React and Tailwind CSS, showcasing projects, skills, and experience.",
    image: "image.png",
    tech: ["React", "Tailwind CSS"],
    features: [
      "Responsive design with Tailwind CSS",
      "Showcases projects, skills, and experience",
      "Smooth scrolling and interactive UI",
    ],
    github: "https://github.com/rohit9028/Portfolio-web.git",
    live: "https://portfoliorohit45.netlify.app/",
  },
];
