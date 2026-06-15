export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const SOCIALS = {
  linkedin: "https://www.linkedin.com/in/layanhalharbi/",
  github: "https://github.com/22lirtx/22lirtx",
  behance: "https://www.behance.net/LayanAlarbi",
  email: "layan.hani.alharbi@gmail.com",
  phone: "+966533078488",
  location: "Riyadh, Saudi Arabia",
  cv: "/Layan_Alharbi_UIUX_CV.pdf",
};

export const SKILL_GROUPS = [
  {
    title: "Design",
    accent: "from-rose-300 to-gold",
    skills: [
      "Figma",
      "Wireframing",
      "Prototyping",
      "Design Systems",
      "Visual Design",
      "Arabic-first RTL / LTR",
    ],
  },
  {
    title: "UX Methods",
    accent: "from-gold to-rose-400",
    skills: [
      "User Research",
      "Usability Testing",
      "Information Architecture",
      "Design Thinking",
      "User Personas",
      "Journey Mapping",
      "Accessibility (a11y)",
      "Developer Handoff",
    ],
  },
  {
    title: "Development",
    accent: "from-rose-400 to-gold-deep",
    skills: [
      "Flutter & Dart",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive & Mobile-First",
      "Git / GitHub",
    ],
  },
  {
    title: "Soft Skills",
    accent: "from-gold-light to-rose-400",
    skills: ["Leadership", "Communication", "Team Collaboration", "Problem Solving"],
  },
];

export interface CaseStudyBlock {
  label: string;
  body: string;
}

export interface GalleryShot {
  src: string;
  label: string;
}

export interface Project {
  id: string;
  index: string;
  name: string;
  tagline: string;
  description: string;
  year: string;
  role: string;
  tags: string[];
  caseStudy: CaseStudyBlock[];
  gallery?: GalleryShot[];
  figmaUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "seraaj",
    index: "01",
    name: "Seraaj",
    tagline: "AI Voice Navigation App",
    description:
      "An AI-powered, voice-driven navigation app with a built-in drowsiness-detection module — designed to reduce driver distraction and improve safety through a fully Arabic-first (RTL) experience. My graded senior capstone, now continuing as a live personal product.",
    year: "Sep 2025 — Present",
    role: "Senior Capstone · Lead UX/UI Designer",
    tags: ["AI", "Voice UX", "Arabic-first RTL", "Safety"],
    caseStudy: [
      {
        label: "Challenge",
        body: "Drivers constantly fight for attention between the road and their devices — and most navigation experiences are English-first, leaving Arabic speakers underserved. The goal was a hands-free, Arabic-first assistant that helps without ever pulling the driver's eyes off the road.",
      },
      {
        label: "Research",
        body: "As part of a four-member capstone team at King Abdulaziz University, I researched user needs and mapped conversational flows for an NLP voice assistant, alongside a drowsiness-detection module that watches for signs of fatigue.",
      },
      {
        label: "User Pain Points",
        body: "Frequent glances away from the road, fatigue on long drives, fragmented controls, and assistants that don't understand natural Arabic — forcing rigid, unnatural commands.",
      },
      {
        label: "Solution",
        body: "A voice-first assistant powered by NLP conversational flows, paired with real-time drowsiness detection that proactively alerts tired drivers — all wrapped in a calm, glanceable, fully Arabic RTL interface.",
      },
      {
        label: "Design Process",
        body: "I designed the complete Arabic-first RTL interface in Figma, from journey maps and conversational scripting to high-fidelity screens — iterating on glanceability and accessibility at every step.",
      },
      {
        label: "Final Design",
        body: "A polished, production-grade voice navigation experience: large touch targets, single-focus hierarchy, and adaptive feedback designed to be understood in under two seconds.",
      },
      {
        label: "Impact",
        body: "Delivered as a graded senior capstone at KAU and selected to demo at X-THON 4, University of Tabuk. Now continuing post-graduation as a live product with 50+ users onboarded, currently in its usability-testing phase.",
      },
    ],
  },
  {
    id: "ruhub",
    index: "02",
    name: "Ruhub",
    tagline: "Tourism Web App",
    description:
      "A tourism web application built at the Asir Hackathon, where I led UI design for a five-person team and delivered the complete interface in under 20 hours — finishing Top 4 out of 50+ teams.",
    year: "Aug 2025",
    role: "Design Lead · Asir Hackathon",
    tags: ["Hackathon", "Tourism", "Top 4 / 50+", "0→1"],
    caseStudy: [
      {
        label: "Challenge",
        body: "Define a meaningful tourism product and ship a complete, credible interface within a single hackathon sprint — under 20 hours, with judges and 50+ competing teams.",
      },
      {
        label: "Research",
        body: "Rapid competitive scanning and fast alignment on a single core traveler and the one job-to-be-done that would make the experience indispensable.",
      },
      {
        label: "User Pain Points",
        body: "Fragmented trip-planning tools, high-friction discovery, and no single trustworthy place for travelers to plan and act with confidence.",
      },
      {
        label: "Solution",
        body: "Ruhub unifies the travel journey into one coherent, approachable web app with clear information architecture, a guided flow, and a confident visual identity built under intense time pressure.",
      },
      {
        label: "Design Process",
        body: "As Design Lead for a five-person team, I drove the UI direction end-to-end — sketch to high-fidelity — running design and development in parallel so the concept stayed both ambitious and buildable.",
      },
      {
        label: "Impact",
        body: "Delivered the full interface in under 20 hours and led the team to a Top-4 finish among 50+ teams — a testament to designing decisively under real constraints.",
      },
    ],
  },
  {
    id: "afaq",
    index: "03",
    name: "Afaq",
    tagline: "Smart Design System",
    description:
      "A scalable design system architected as the capstone deliverable for the Cradis UI/UX bootcamp — 30+ components built with design tokens and variants in Figma.",
    year: "Apr — Jul 2025",
    role: "Design Systems · Cradis Bootcamp Capstone",
    tags: ["Design System", "Tokens", "Figma", "Scalability"],
    caseStudy: [
      {
        label: "Problem",
        body: "Teams move slowly and inconsistently without a shared source of truth. The challenge was to architect a scalable, well-documented system that designers and engineers could trust and reuse.",
      },
      {
        label: "Research",
        body: "I audited common UI patterns and component needs, then defined a token strategy (color, type, spacing) and variant structure that would scale gracefully across products.",
      },
      {
        label: "Solution",
        body: "Afaq is a 30+ component design system built in Figma with design tokens and variants — structured for consistency, theming, and clean developer handoff.",
      },
      {
        label: "Outcomes",
        body: "Showcased as the bootcamp's capstone deliverable, demonstrating end-to-end design-systems thinking: from foundational tokens to a documented, reusable component library.",
      },
    ],
  },
  {
    id: "murshd",
    index: "04",
    name: "Murshd",
    tagline: "Smart Pilgrimage Companion",
    description:
      "An Arabic-first smart companion designed to make the pilgrimage safer, more accessible, and more meaningful — combining multilingual onboarding, family-safety tracking, emergency assistance, an AR landmark explorer, prayer & ritual tracking, and a loyalty rewards program.",
    year: "2025",
    role: "Lead UX/UI Designer · Jaddathon",
    tags: ["Civic Tech", "Arabic-first RTL", "Accessibility", "Mobile App"],
    figmaUrl:
      "https://www.figma.com/design/eCk4bpyvJaibL5zA4CwCBR/jaddathon?node-id=406-7661",
    gallery: [
      { src: "/projects/murshid/01-home.png", label: "Home — prayer times, Tawaf & Sa'i tracker, live crowd-density alerts" },
      { src: "/projects/murshid/02-language.png", label: "Multilingual onboarding — Arabic, English, Indonesian, Urdu, Turkish & French" },
      { src: "/projects/murshid/03-emergency.png", label: "Emergency assistance — one tap alerts family, ambulance & security with live location" },
      { src: "/projects/murshid/04-ar-explore.png", label: "AR landmark explorer — point the camera to hear the history of holy sites" },
      { src: "/projects/murshid/05-rewards.png", label: "Loyalty & rewards — earn points and redeem them across partner services" },
    ],
    caseStudy: [
      {
        label: "Problem",
        body: "Pilgrims — many of them visiting from abroad and speaking different languages — navigate dense, crowded, unfamiliar environments. Language barriers, safety concerns for families, and difficulty accessing timely guidance can diminish a once-in-a-lifetime experience.",
      },
      {
        label: "Research",
        body: "Built during Jaddathon, the team mapped the pilgrim journey across arrival, movement, and key rituals, identifying friction in wayfinding, family safety, crowd density awareness, and access to multilingual, context-aware guidance.",
      },
      {
        label: "Solution",
        body: "Murshd brings it together in one Arabic-first app: multilingual onboarding for international visitors, real-time family-safety tracking with one-tap emergency alerts, an AR explorer that narrates the history of holy sites, ritual and prayer-time tracking, crowd-density notifications, and a loyalty program — all designed to feel calm, reassuring, and inclusive.",
      },
      {
        label: "Design Process",
        body: "I led the UI/UX and designed the full Arabic-first RTL interface in Figma — from onboarding and the home dashboard to the AR flow, emergency modals, and rewards system — with accessibility and clarity guiding every screen.",
      },
      {
        label: "Outcomes",
        body: "A cohesive, demoable product concept showing how human-centered design and intelligent services can reduce anxiety, improve safety, and elevate the pilgrimage experience for visitors from around the world.",
      },
    ],
  },
];

export interface ExperienceItem {
  title: string;
  org: string;
  period: string;
  description: string;
  category: string;
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    title: "Operations Coordinator",
    org: "Protothon Hackathon, KAU · Deanship of Student Affairs",
    period: "Oct 2025 — Jan 2026",
    category: "Leadership",
    description:
      "Coordinated cross-functional teams and event logistics across 250+ hours, recognized by faculty for outstanding operational performance.",
  },
  {
    title: "UX Specialist",
    org: "Ghelaf AlMehan · UX Department",
    period: "Jul — Oct 2025",
    category: "Experience",
    description:
      "Designed a corporate web platform UI end-to-end through 5 stakeholder review cycles — earning the UX Specialist title directly from the CEO. Built a reusable design system adopted as the team's single source of truth, reducing design-to-engineering handoff friction.",
  },
  {
    title: "AI Skills Training",
    org: "SDAIA × Microsoft Elevate Program",
    period: "2025 — Present",
    category: "Training",
    description:
      "Building applied AI skills through the national SDAIA × Microsoft Elevate program — deepening my work at the intersection of AI and human-centered design.",
  },
  {
    title: "UX Bootcamp",
    org: "Tuwaiq Academy",
    period: "Jul 2025",
    category: "Training",
    description:
      "Intensive UX program sharpening research, interaction design, and end-to-end product craft.",
  },
  {
    title: "UI/UX Design Scholarship",
    org: "Cradis (94+ hours)",
    period: "Apr — Jul 2025",
    category: "Training",
    description:
      "94+ hour UI/UX scholarship culminating in Afaq, a scalable design system capstone built in Figma.",
  },
  {
    title: "Asir Hackathon — Design Lead",
    org: "Ruhub · Top 4 of 50+ teams",
    period: "Aug 2025",
    category: "Innovation",
    description:
      "Led UI design for a five-person team to a Top-4 finish among 50+ teams, delivering a complete tourism web app interface in under 20 hours.",
  },
];

export const ACHIEVEMENTS = [
  {
    title: "Top 4 of 50+ Teams",
    detail: "Asir Hackathon · Design Lead",
    icon: "bolt",
  },
  {
    title: "50+ Users Onboarded",
    detail: "Seraaj · live product",
    icon: "spark",
  },
  {
    title: "Demoed at X-THON 4",
    detail: "University of Tabuk",
    icon: "compass",
  },
  {
    title: "UX Specialist by CEO",
    detail: "Ghelaf AlMehan",
    icon: "design",
  },
  {
    title: "CS Graduate 2026",
    detail: "King Abdulaziz University",
    icon: "graduation",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "A rare blend of technical depth and design intuition. Layan approaches every problem from the user's perspective first.",
    name: "Future Mentor",
    role: "Design Lead",
  },
  {
    quote:
      "Calm under pressure, sharp in critique, and relentless about quality. Exactly the kind of designer teams want to build with.",
    name: "Future Collaborator",
    role: "Product Manager",
  },
  {
    quote:
      "Brings clarity to ambiguity. Turns fuzzy ideas into structured, buildable experiences with confidence.",
    name: "Future Instructor",
    role: "Program Director",
  },
];

export const STATS = [
  { value: "2026", label: "CS Graduate" },
  { value: "Top 4", label: "of 50+ Teams" },
  { value: "50+", label: "Users Onboarded" },
  { value: "250+", label: "Event Hours Led" },
];
