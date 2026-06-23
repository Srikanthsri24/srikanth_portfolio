import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Play, Sparkles, Star, X } from "lucide-react";
import { ROLES } from "@/data/portfolio";

const STACK = [
  "React",
  "TypeScript",
  "Python",
  "AI / ML",
  "IoT",
  "Cloud",
  "Edge",
  "Design Systems",
];

const COMPANIES = ["VisionariesAI Labs", "Visionicx", "NEXT-GEN"];

const PORTRAIT_IMAGE = "/images/logo.jpeg";
const INTRO_VIDEO = "/videos/intro.mp4";

export function Hero({ onPlay }: { onPlay?: () => void }) {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayIntro = () => {
    if (onPlay) {
      onPlay();
      return;
    }

    setShowVideo(true);
  };

  useEffect(() => {
    if (!showVideo) return;

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowVideo(false);
      }
    };

    window.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [showVideo]);

  return (
    <>
      <section id="home" className="relative pt-24 sm:pt-28 pb-12 overflow-hidden">
        {/* Editorial masthead bar */}
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground pb-5 border-b border-border">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-amber animate-pulse" />
              Now accepting select collaborations · 2026
            </span>

            <span className="hidden md:inline">
              VisionariesAI Labs · Visionicx · NEXT-GEN
            </span>

            <span>Visakhapatnam, Andhra Pradesh, India</span>
          </div>
        </div>

        {/* Hero grid */}
        <div className="mx-auto max-w-7xl px-5 sm:px-8 mt-8 sm:mt-12 grid lg:grid-cols-12 gap-10 lg:gap-10 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 order-2 lg:order-1"
          >
            <span className="eyebrow flex items-center gap-3">
              <span className="h-px w-10 bg-amber" />
              Founder · Chief Executive Officer
            </span>

            <h1 className="serif-display mt-5 text-6xl sm:text-8xl lg:text-[9rem] xl:text-[10rem] leading-[0.88] tracking-tight">
              Srikanth
              <br />
              <span className="serif-italic text-amber">Dubbaka.</span>
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm uppercase tracking-[0.25em] text-muted-foreground">
              {COMPANIES.map((company, index) => (
                <span key={company} className="flex items-center gap-4">
                  <span className="text-foreground/80">{company}</span>
                  {index < COMPANIES.length - 1 && (
                    <span className="text-amber">✦</span>
                  )}
                </span>
              ))}
            </div>

            <p className="mt-7 max-w-2xl text-base sm:text-lg text-foreground/85 leading-relaxed">
              I lead <span className="font-medium">VisionariesAI Labs</span> — a
              product studio building{" "}
              <em className="serif-italic">
                AI platforms, IoT systems, and education technology
              </em>{" "}
              deployed across schools, industries and institutions.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#projects"
                className="btn-primary hover:[filter:brightness(1.08)] hover:[transform:translateY(-1px)]"
              >
                <Sparkles size={16} />
                Explore Products
                <ArrowUpRight size={16} />
              </a>

              <button onClick={handlePlayIntro} className="btn-ghost hover:bg-amber/10">
                <Play size={14} />
                Watch Intro
              </button>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={12} className="fill-amber text-amber" />
                ))}
              </div>

              <span>Trusted by 50+ teams · 50+ projects shipped</span>
            </div>
          </motion.div>

          {/* RIGHT IMAGE CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5 order-1 lg:order-2 relative mx-auto w-full max-w-[360px] sm:max-w-[420px]"
          >
            <div className="relative">
              <div className="absolute inset-0 border border-amber/50 translate-x-3 translate-y-3 rounded-sm pointer-events-none" />

              <div className="relative aspect-[4/5] overflow-hidden rounded-sm surface-elevated group bg-black">
                <img
                  src={PORTRAIT_IMAGE}
                  alt="Srikanth Dubbaka — Founder & CEO, VisionariesAI Labs"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  loading="eager"
                />

                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/60 to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />

                <span className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.3em] text-white/90">
                  N° 01
                </span>

                <span className="absolute top-3 right-3 text-[10px] uppercase tracking-[0.3em] text-white/90">
                  2026
                </span>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-amber font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                    CEO of VisionariesAI Labs
                  </p>

                  <p className="serif-italic text-3xl leading-none mt-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                    Srikanth Dubbaka
                  </p>

                  <p className="text-xs text-white/85 mt-1">
                    Founder · VisionariesAI Labs
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats strip */}
        <div className="mx-auto max-w-7xl px-5 sm:px-8 mt-14 sm:mt-20">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 py-8 border-t border-b border-border">
            {[
              { k: "50+", v: "Projects shipped" },
              { k: "5+", v: "Years building AI" },
              { k: "50+", v: "Teams & institutions" },
              { k: "100%", v: "On-time delivery" },
            ].map((stat, index) => (
              <div
                key={stat.v}
                className={index < 3 ? "sm:border-r sm:border-border sm:pr-6" : ""}
              >
                <p className="serif-display text-3xl sm:text-5xl text-amber">
                  {stat.k}
                </p>

                <p className="mt-2 text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-muted-foreground leading-snug">
                  {stat.v}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Roles marquee */}
        <div className="mt-10 sm:mt-14 marquee-pause relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-background to-transparent z-10" />

          <div className="flex gap-8 sm:gap-14 animate-marquee-slow w-max items-center">
            {[...ROLES, ...STACK, ...ROLES, ...STACK].map((role, index) => (
              <span
                key={index}
                className="flex items-center gap-8 sm:gap-14 serif-display text-2xl sm:text-5xl text-foreground/30 hover:text-amber transition-colors whitespace-nowrap"
              >
                {role}
                <span className="text-amber text-xl sm:text-2xl">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 px-4">
          <button
            onClick={() => setShowVideo(false)}
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
            aria-label="Close intro video"
          >
            <X size={22} />
          </button>

          <div className="w-full max-w-5xl overflow-hidden rounded-xl bg-black shadow-2xl border border-white/10">
            <video
              src={INTRO_VIDEO}
              controls
              autoPlay
              playsInline
              className="h-auto max-h-[80vh] w-full bg-black"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
}