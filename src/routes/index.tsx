import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Stats } from "@/components/portfolio/Stats";
import { SkillsExperience } from "@/components/portfolio/SkillsExperience";
import { Services } from "@/components/portfolio/Services";
import { Projects } from "@/components/portfolio/Projects";
import { Team } from "@/components/portfolio/Team";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { ScrollTop } from "@/components/portfolio/ScrollTop";
import { Preloader } from "@/components/portfolio/Preloader";
import { VideoModal } from "@/components/portfolio/VideoModal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Srikanth Dubbaka — CEO, VisionariesAI Labs | AI & Full Stack Developer" },
      { name: "description", content: "Portfolio of Srikanth Dubbaka — CEO of VisionariesAI Labs, AI and Full Stack Developer building premium web, app and AI-powered analytics solutions." },
      { property: "og:title", content: "Srikanth Dubbaka — CEO, VisionariesAI Labs" },
      { property: "og:description", content: "AI & Full Stack Developer building premium web, app and AI-powered analytics solutions." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  const [videoOpen, setVideoOpen] = useState(false);
  return (
    <>
      <Preloader />
      <Navbar />
      <main>
        <Hero onPlay={() => setVideoOpen(true)} />
        <About />
        <Stats />
        <SkillsExperience />
        <Services />
        <Projects />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
    </>
  );
}
