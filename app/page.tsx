import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Achievements } from "@/components/sections/achievements";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Layan Alharbi",
  jobTitle: "UI/UX Designer",
  description:
    "Computer Science graduate and UI/UX designer specializing in Arabic-first (RTL) interfaces and AI-integrated experiences.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Riyadh",
    addressCountry: "SA",
  },
  knowsAbout: [
    "UI Design",
    "UX Design",
    "Arabic-first RTL Design",
    "AI-integrated UX",
    "Design Systems",
    "User Research",
    "Front-End Development",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "King Abdulaziz University",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
