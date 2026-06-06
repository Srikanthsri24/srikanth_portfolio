import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Stats } from "@/components/portfolio/Stats";
import { SkillsExperience } from "@/components/portfolio/SkillsExperience";
import { Services } from "@/components/portfolio/Services";
import { Projects } from "@/components/portfolio/Projects";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { ScrollTop } from "@/components/portfolio/ScrollTop";
import { Preloader } from "@/components/portfolio/Preloader";
import { VideoModal } from "@/components/portfolio/VideoModal";
import { ThemeProvider } from "@/components/portfolio/ThemeProvider";

const SITE = "https://srikanthsri.com";
const TITLE = "Srikanth Dubbaka — CEO, VisionariesAI Labs | AI & Full Stack Developer";
const DESC = "Srikanth Dubbaka — Founder & CEO of VisionariesAI Labs. AI, IoT and education products: Aye Board, ScholAR Labs, Ask.VisionariesAI, smart CCTV, energy monitoring and full-stack platforms.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "author", content: "Srikanth Dubbaka" },
      { name: "keywords", content: "Srikanth Dubbaka, VisionariesAI Labs, AI Developer, Full Stack Developer, IoT, EdTech, Aye Board, ScholAR Labs, Web Designer, App Developer, India" },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "#0a0a0a" },

      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE },
      { property: "og:site_name", content: "Srikanth Dubbaka" },
      { property: "og:locale", content: "en_IN" },

      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },

      {
        name: "application-ld+json",
        content: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Srikanth Dubbaka",
          url: SITE,
          jobTitle: "Founder & CEO",
          worksFor: { "@type": "Organization", name: "VisionariesAI Labs" },
          sameAs: ["https://srikanthsri.com"],
        }),
      },
    ],
    links: [
      { rel: "canonical", href: SITE },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;1,9..144,300;1,9..144,400&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  const [videoOpen, setVideoOpen] = useState(false);
  return (
    <ThemeProvider>
      <Preloader />
      <Navbar />
      <main>
        <Hero onPlay={() => setVideoOpen(true)} />
        <About />
        <Stats />
        <SkillsExperience />
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
    </ThemeProvider>
  );
}
