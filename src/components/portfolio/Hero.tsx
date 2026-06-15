import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Play, Sparkles, Star } from "lucide-react";
import portrait from "@/assets/hero-portrait.asset.json";
import intro from "@/assets/hero-intro.asset.json";
import { ROLES } from "@/data/portfolio";

type Slide =
  | { kind: "image"; url: string; label: string; caption: string }
  | { kind: "video"; url: string; label: string; caption: string };

const SLIDES: Slide[] = [
  { kind: "image", url: portrait.url, label: "The Scholar", caption: "Knowledge in practice" },
  { kind: "video", url: intro.url, label: "The Vision", caption: "Innovation in motion · VisionariesAI" },
];

const STACK = ["React", "TypeScript", "Python", "AI / ML", "IoT", "Cloud", "Edge", "Design Systems"];
const COMPANIES = ["VisionariesAI Labs", "Visionicx", "NEXT-GEN"];

export function Hero({ onPlay }: { onPlay: () => void }) {
  const [active, setActive] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (SLIDES[active].kind === "video") return; // wait for video to end
    const t = setTimeout(() => setActive((i) => (i + 1) % SLIDES.length), 4500);
    return () => clearTimeout(t);
  }, [active]);

  return (
    <section id="home" className="relative pt-24 sm:pt-28 pb-12 overflow-hidden">
      {/* Editorial masthead bar */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground pb-5 border-b border-border">
          <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-amber animate-pulse" /> Available for select projects</span>
          <span className="hidden md:inline">VisionariesAI Labs · Visionicx · NEXT-GEN</span>
          <span>Visakhapatnam, Andhra Pradesh, India</span>
        </div>
      </div>

      {/* Hero grid */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 mt-8 sm:mt-12 grid lg:grid-cols-12 gap-10 lg:gap-10 items-center">
        {/* LEFT: oversized headline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 order-2 lg:order-1"
        >
          <span className="eyebrow flex items-center gap-3">
            <span className="h-px w-10 bg-amber" /> Founder · Chief Executive Officer
          </span>

          <h1 className="serif-display mt-5 text-6xl sm:text-8xl lg:text-[9rem] xl:text-[10rem] leading-[0.88] tracking-tight">
            Srikanth
            <br />
            <span className="serif-italic text-amber">Dubbaka.</span>
          </h1>

          {/* Companies */}
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm uppercase tracking-[0.25em] text-muted-foreground">
            {COMPANIES.map((c, i) => (
              <span key={c} className="flex items-center gap-4">
                <span className="text-foreground/80">{c}</span>
                {i < COMPANIES.length - 1 && <span className="text-amber">✦</span>}
              </span>
            ))}
          </div>

          <p className="mt-7 max-w-2xl text-base sm:text-lg text-foreground/85 leading-relaxed">
            I lead <span className="font-medium">VisionariesAI Labs</span> — a product
            studio building <em className="serif-italic">AI platforms, IoT systems, and education
            technology</em> deployed across schools, industries and institutions.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <a href="#projects" className="btn-primary hover:[filter:brightness(1.08)] hover:[transform:translateY(-1px)]">
              <Sparkles size={16} /> Explore Products <ArrowUpRight size={16} />
            </a>
            <button onClick={onPlay} className="btn-ghost hover:bg-amber/10">
              <Play size={14} /> Watch Intro
            </button>
          </div>

          <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={12} className="fill-amber text-amber" />
              ))}
            </div>
            <span>Trusted by 30+ teams worldwide</span>
          </div>
        </motion.div>

        {/* RIGHT: portrait / video card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="lg:col-span-5 order-1 lg:order-2 relative mx-auto w-full max-w-[360px] sm:max-w-[420px]"
        >
          <div className="relative">
            <div className="absolute inset-0 border border-amber/50 translate-x-3 translate-y-3 rounded-sm pointer-events-none" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm surface-elevated">
              <AnimatePresence mode="wait">
                {SLIDES[active].kind === "image" ? (
                  <motion.img
                    key={SLIDES[active].url}
                    src={SLIDES[active].url}
                    alt={`Srikanth Dubbaka — ${SLIDES[active].label}`}
                    className="absolute inset-0 h-full w-full object-cover object-top"
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                    loading="eager"
                  />
                ) : (
                  <motion.video
                    key={SLIDES[active].url}
                    ref={videoRef}
                    src={SLIDES[active].url}
                    className="absolute inset-0 h-full w-full object-cover"
                    autoPlay
                    muted
                    playsInline
                    onEnded={() => setActive((i) => (i + 1) % SLIDES.length)}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}
              </AnimatePresence>

              {/* gradient */}
              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent pointer-events-none" />

              <span className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.3em] text-paper/90 mix-blend-difference">
                N° {String(active + 1).padStart(2, "0")}
              </span>
              <span className="absolute top-3 right-3 text-[10px] uppercase tracking-[0.3em] text-paper/90 mix-blend-difference">2026</span>

              <div className="absolute bottom-4 left-4 right-4 text-paper">
                <p className="text-[10px] uppercase tracking-[0.3em] text-amber">{SLIDES[active].caption}</p>
                <p className="serif-italic text-3xl leading-none mt-2">Srikanth</p>
                <p className="text-xs opacity-80 mt-1">VisionariesAI Labs</p>
              </div>

              {/* progress dots */}
              <div className="absolute bottom-4 right-4 flex gap-1.5">
                {SLIDES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`Show slide ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${i === active ? "w-6 bg-amber" : "w-1.5 bg-paper/40 hover:bg-paper/70"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats strip */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 mt-14 sm:mt-20">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 py-8 border-t border-b border-border">
          {[
            { k: "11+",  v: "Products in production" },
            { k: "5+",   v: "Years building AI" },
            { k: "30+",  v: "Teams & institutions" },
            { k: "100%", v: "On-time delivery" },
          ].map((s, i) => (
            <div key={s.v} className={i < 3 ? "sm:border-r sm:border-border sm:pr-6" : ""}>
              <p className="serif-display text-3xl sm:text-5xl text-amber">{s.k}</p>
              <p className="mt-2 text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-muted-foreground leading-snug">{s.v}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Roles marquee */}
      <div className="mt-10 sm:mt-14 marquee-pause relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex gap-8 sm:gap-14 animate-marquee-slow w-max items-center">
          {[...ROLES, ...STACK, ...ROLES, ...STACK].map((r, i) => (
            <span key={i} className="flex items-center gap-8 sm:gap-14 serif-display text-2xl sm:text-5xl text-foreground/30 hover:text-amber transition-colors whitespace-nowrap">
              {r}
              <span className="text-amber text-xl sm:text-2xl">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
