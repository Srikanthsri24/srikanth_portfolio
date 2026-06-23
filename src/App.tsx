import { useState } from "react";
import { ThemeProvider } from "./components/portfolio/ThemeProvider";
import { Navbar } from "./components/portfolio/Navbar";
import { Hero } from "./components/portfolio/Hero";
import { Services } from "./components/portfolio/Services";
import { SkillsExperience } from "./components/portfolio/SkillsExperience";
import { Projects } from "./components/portfolio/Projects";
import { Testimonials } from "./components/portfolio/Testimonials";
import { Stats } from "./components/portfolio/Stats";
import { Team } from "./components/portfolio/Team";
import { Contact } from "./components/portfolio/Contact";
import { Footer } from "./components/portfolio/Footer";
import { Preloader } from "./components/portfolio/Preloader";
import { ScrollTop } from "./components/portfolio/ScrollTop";
import { VideoModal } from "./components/portfolio/VideoModal";

export default function App() {
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <ThemeProvider>
      <Preloader />
      <Navbar />
      <main>
        <Hero onPlay={() => setShowVideoModal(true)} />
        <Services />
        <SkillsExperience />
        <Projects />
        <Testimonials />
        <Stats />
        <Team />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
      <VideoModal open={showVideoModal} onOpenChange={setShowVideoModal} />
    </ThemeProvider>
  );
}
