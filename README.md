# Rohit Singh — Premium Portfolio

A modern, animated, fully responsive personal portfolio built with React, Vite, TypeScript, Tailwind CSS and Framer Motion.

## Tech Stack

- React 19 + Vite + TypeScript
- Tailwind CSS v4
- Framer Motion (animations)
- React Router (routing / 404 page)
- React Scroll (smooth in-page navigation)
- React Type Animation (typing effect)
- AOS (scroll animations)
- Lucide React + React Icons (icons)
- EmailJS (contact form)

## Getting Started

```bash
npm install
npm run dev       # start dev server at http://localhost:5173
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Project Structure

```
src/
  assets/         static assets (add your own images here)
  animations/     shared Framer Motion variants
  components/
    common/       Reveal, SectionHeading, TiltCard, Toast — reusable primitives
    effects/      background atmosphere, custom cursor, scroll progress, loading screen
    layout/       Navbar, Footer
    sections/     Hero, About, Skills, Projects, Experience, Education,
                   Achievements, GithubStats, Services, Testimonials, Contact
  constants/      personal info, nav links, EmailJS config
  data/           all editable content (skills, projects, experience, education, testimonials…)
  hooks/          useMousePosition, useScrollProgress, useCountUp, useTheme, useIsDesktop
  pages/          Home, NotFound (404)
  types/          shared TypeScript interfaces
  App.tsx
  main.tsx
  index.css       design tokens + reusable utility classes
```

## Customize Your Content

Almost everything is data-driven — you rarely need to touch component code:

- **Personal info, socials, resume link** → `src/constants/index.ts`
- **Skills** → `src/data/skills.ts`
- **Projects** → `src/data/projects.ts`
- **Experience / journey timeline** → `src/data/experience.ts`
- **Education** → `src/data/education.ts`
- **Testimonials, services, achievement stats, about highlights** → `src/data/misc.ts`
- **Resume file** → replace `public/resume.pdf` with your real resume

## Contact Form (EmailJS)

The contact form uses [EmailJS](https://www.emailjs.com/) so it works without a backend.

1. Create a free EmailJS account and an Email Service + Template.
2. Your template should include fields named `user_name`, `user_email`, `subject`, `message` (these match the form's `name` attributes).
3. Open `src/constants/index.ts` and replace:

```ts
export const EMAILJS_CONFIG = {
  serviceId: "YOUR_EMAILJS_SERVICE_ID",
  templateId: "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: "YOUR_EMAILJS_PUBLIC_KEY",
};
```

with your real IDs from the EmailJS dashboard.

## Theme

Dark theme by default, with a light mode toggle in the navbar. Core colors live in `src/index.css` under `@theme`:

- Backgrounds: `#020617`, `#0F172A`, `#111827`
- Primary: `#3B82F6` · Secondary: `#06B6D4` · Highlight: `#8B5CF6`

## Notes

- The GitHub Activity section (contribution graph, top languages, pinned repos) currently uses representative placeholder data styled to look like the real GitHub UI. Wire it up to the real GitHub REST/GraphQL API if you want live data.
- The map embed in the Contact section uses OpenStreetMap; swap in Google Maps if you prefer.
- Image URLs for the About/Projects sections point to Unsplash placeholders — swap in your own photos and project screenshots in `src/assets/` before deploying.
