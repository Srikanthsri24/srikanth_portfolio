import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Play } from "lucide-react";
import { ROLES } from "@/data/portfolio";
import heroAsset from "@/assets/srikanth-hero.asset.json";

export function Hero({ onPlay }: { onPlay: () => void }) {
  const [text, setText] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIdx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setRoleIdx((roleIdx + 1) % ROLES.length);
        }
      }
    }, deleting ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIdx]);

  const badges = ["React", "Python", "AI", "Web Apps", "UI/UX"];

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center pt-28 sm:pt-32 pb-16 px-5 sm:px-6 overflow-hidden"
    >
      {/* Animated background blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-secondary/30 blur-3xl animate-float" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-accent/20 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="mx-auto max-w-7xl w-full grid lg:grid-cols-2 gap-10 lg:gap-16 items-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center lg:text-left order-2 lg:order-1"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-[10px] sm:text-xs uppercase tracking-[0.3em] text-accent mb-5">
            I'm
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] mb-5">
            Srikanth <br className="hidden sm:block" />
            <span className="text-gradient">Dubbaka</span>
          </h1>
          <div className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-2 h-8 sm:h-9">
            <span className="cursor-blink">{text}</span>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground max-w-lg mb-8 mt-4 mx-auto lg:mx-0">
            CEO of VisionariesAI Labs — building AI-powered platforms, web apps and digital
            products that solve real problems with elegance and scale.
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
            <a href="#" className="btn-primary hover:[transform:translateY(-2px)] text-sm sm:text-base">
              <Download size={18} /> Download Brochure
            </a>
            <button onClick={onPlay} className="btn-ghost hover:bg-white/10 text-sm sm:text-base">
              <Play size={18} /> Play Video
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-[280px] sm:max-w-sm lg:max-w-md order-1 lg:order-2"
        >
          <div className="relative aspect-[4/5] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden glass glow-cyan">
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary/40 via-transparent to-accent/30 mix-blend-overlay z-10" />
            <img
              src={heroAsset.url}
              alt="Srikanth Dubbaka"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
          {/* Floating tech badges — hidden on mobile to keep layout clean */}
          {badges.map((b, i) => {
            const positions = [
              "top-4 -left-3 sm:top-6 sm:-left-6",
              "top-1/3 -right-3 sm:-right-8",
              "bottom-1/3 -left-4 sm:-left-10",
              "bottom-6 -right-2 sm:bottom-10 sm:-right-4",
              "top-2/3 left-1/2",
            ];
            return (
              <motion.div
                key={b}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.15, type: "spring" }}
                className={`hidden sm:flex absolute ${positions[i]} glass px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium animate-float items-center gap-1.5`}
                style={{ animationDelay: `${i * 0.5}s` }}
              >
                <span className="text-accent">●</span> {b}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
