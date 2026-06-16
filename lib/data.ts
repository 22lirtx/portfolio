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
  /** Full-bleed image used as the card cover instead of the gradient. */
  cover?: string;
  /** Render the gallery as wide stacked slides instead of a phone-screen row. */
  wideGallery?: boolean;
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
    tagline: "Asir Tourism Companion",
    description:
      "رحب — a tourism app for the Asir region of Saudi Arabia with an AI assistant that builds a ready-made daily plan: curated experiences across Jabal Al-Soudah, local restaurants, and activities, each bookable in a tap. Built at the Asir Hackathon, where I led UI design for a five-person team to a Top-4 finish out of 50+ teams.",
    year: "Aug 2025",
    role: "Design Lead · Asir Hackathon",
    tags: ["Hackathon", "Tourism", "AI Planner", "Top 4 / 50+"],
    figmaUrl:
      "https://www.figma.com/proto/IULsTKCVdQ2dZXSDt0anHD/?node-id=247-6313",
    gallery: [
      { src: "/projects/ruhub/01-plan.png", label: "“Your day is ready” — an AI-generated itinerary with timed experiences and one-tap booking" },
      { src: "/projects/ruhub/02-assistant.png", label: "Smart assistant — conversationally tailors the trip to your dates, budget & pace" },
      { src: "/projects/ruhub/03-home.png", label: "Home — immersive imagery of Asir’s landmarks like Jabal Al-Soudah" },
      { src: "/projects/ruhub/04-splash.png", label: "Brand — Ruhub (رحب), grounded in Asir’s nature and identity" },
      { src: "/projects/ruhub/05-profile.png", label: "Profile — travel preferences, bookings, payments & trip history" },
    ],
    caseStudy: [
      {
        label: "Challenge",
        body: "Define a meaningful tourism product for the Asir region and ship a complete, credible interface within a single hackathon sprint — under 20 hours, judged against 50+ competing teams.",
      },
      {
        label: "Research",
        body: "Rapid competitive scanning and fast alignment on a single core traveler: a visitor who wants to experience Asir's nature and culture but is overwhelmed by planning where to go, when, and how to book it.",
      },
      {
        label: "User Pain Points",
        body: "Fragmented trip-planning tools, high-friction discovery, and no single trustworthy place to turn intent into a real, bookable plan for the region.",
      },
      {
        label: "Solution",
        body: "Ruhub pairs an AI assistant that generates a personalized daily itinerary — breakfast, a trip to Jabal Al-Soudah, lunch at a local spot, an evening activity — with one-tap booking, immersive imagery, and a confident Arabic-first identity rooted in Asir.",
      },
      {
        label: "Design Process",
        body: "As Design Lead for a five-person team, I drove the UI direction end-to-end — from the assistant conversation and the generated day plan to bookings and profile — running design and development in parallel so the concept stayed both ambitious and buildable.",
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
    tagline: "Scalable UI Framework & Design System",
    description:
      "آفاق — “From design tokens to teams”: a scalable UI framework and design system that powers a fully themed dashboard across light, dark, and brand themes. Built end-to-end in one week as the Cradis bootcamp capstone, grounded in atomic design and token-to-code workflows.",
    year: "Jun 2025",
    role: "Design Systems Lead · Cradis Capstone (Team 11)",
    tags: ["Design System", "Design Tokens", "Theming", "Atomic Design"],
    figmaUrl:
      "https://www.figma.com/proto/ELEErtwpGGegyYD2mHI7Td/T-11-GP-Cradis?node-id=2259-13070",
    cover: "/projects/afaq/cover.png",
    wideGallery: true,
    gallery: [
      { src: "/projects/afaq/01-system.png", label: "The system — typography (Inter, Montserrat, Nunito), color, icons, grid & shadows" },
      { src: "/projects/afaq/02-atom.png", label: "Atomic design — atoms, molecules, organisms, templates & pages, kept in design–dev sync" },
      { src: "/projects/afaq/03-week.png", label: "One week — from brainstorming and components to a fully themed dashboard" },
      { src: "/projects/afaq/04-results.png", label: "Result — a live, multi-theme dashboard powered entirely by the system" },
    ],
    caseStudy: [
      {
        label: "Problem",
        body: "Teams move slowly and inconsistently without a shared source of truth. The challenge: architect a scalable, well-documented design system that could theme an entire dashboard across light, dark, and brand modes — and stay in sync with code.",
      },
      {
        label: "Research",
        body: "Working as Team 11, we studied tooling (Figma, token plugins, theming workflows) and atomic-design methodology, then defined a token strategy spanning color, typography, spacing, icons, grid, and shadows that could scale gracefully.",
      },
      {
        label: "Solution",
        body: "Afaq is a token-driven UI framework built on atomic design — atoms to pages — that powers a fully themed dashboard. Design tokens link to code, so switching themes is a single source-of-truth change rather than a manual reskin.",
      },
      {
        label: "Process",
        body: "From nothing to a fully themed dashboard in one week: brainstorming, building components, mapping tokens, then solving real challenges — converting tokens to JSON/CSS and linking variables to code for a clean, automated handoff.",
      },
      {
        label: "Outcomes",
        body: "A documented, reusable system showcased as the capstone deliverable — proof of end-to-end design-systems thinking, from foundational tokens to a live, multi-theme product.",
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
    cover: "/projects/murshid/cover.png",
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
  {
    id: "ruh",
    index: "05",
    name: "Roh Al-Mashaer",
    tagline: "AI Companion for Hajj & Umrah",
    description:
      "روح المشاعر — an Arabic-first, AI-powered companion that guides pilgrims through every step of Hajj and Umrah: a smart voice assistant, ritual step-by-step guidance, contextual supplications, prayer times, family tracking, and wayfinding.",
    year: "2025",
    role: "Lead UX/UI Designer · Hackathon",
    tags: ["AI Assistant", "Arabic-first RTL", "Voice UX", "Civic Tech"],
    figmaUrl:
      "https://www.figma.com/design/mnqDVenyWUZbz2ufdcTBwh/?node-id=1-1723",
    gallery: [
      { src: "/projects/ruh/01-home.png", label: "Home — the AI smart voice assistant with quick access to rituals, duas, gates & prayer times" },
      { src: "/projects/ruh/02-trip.png", label: "Trip selection — tailored guidance for Umrah or the full Hajj journey" },
      { src: "/projects/ruh/03-assistant.png", label: "Voice assistant — conversational, step-by-step ritual guidance with audio" },
      { src: "/projects/ruh/04-dua.png", label: "Supplications — contextual du'as with Quranic verse, transliteration & save/copy" },
      { src: "/projects/ruh/05-splash.png", label: "Brand — “your companion on the sacred journey”" },
    ],
    caseStudy: [
      {
        label: "Problem",
        body: "Performing Hajj and Umrah involves many precise rituals, supplications, and movements that can overwhelm first-time and international pilgrims — especially without timely, trustworthy, language-accessible guidance.",
      },
      {
        label: "Research",
        body: "Built for a Hajj & Umrah innovation hackathon, the team studied the pilgrim journey for both Umrah and the longer Hajj, pinpointing where people feel uncertain: starting the Tawaf, knowing the right du'a, finding the nearest gate, and keeping family together.",
      },
      {
        label: "Solution",
        body: "Roh Al-Mashaer pairs a conversational AI voice assistant with structured ritual guidance — answering questions like “how do I begin the Tawaf?” with clear, audio-supported steps, surfacing the right supplication for each moment, and offering prayer times, maps, and family features in one calm, Arabic-first interface.",
      },
      {
        label: "Design Process",
        body: "I led the UI/UX and designed the full Arabic-first RTL experience in Figma — from onboarding and trip selection to the assistant conversation, du'a cards, and navigation — keeping clarity, reassurance, and accessibility at the center of every screen.",
      },
      {
        label: "Outcomes",
        body: "A complete, demoable concept showing how an AI companion can make sacred rituals feel approachable and stress-free — guidance that meets pilgrims in their own language, at the exact moment they need it.",
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
