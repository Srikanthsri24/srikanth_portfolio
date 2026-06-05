import { motion } from "framer-motion";
import { ArrowUpRight, Play, Sparkles, Star } from "lucide-react";
import heroAsset from "@/assets/srikanth-hero.asset.json";
import { ROLES } from "@/data/portfolio";

const STACK = ["React", "TypeScript", "Python", "AI / ML", "IoT", "Cloud", "Edge", "Design Systems"];

export function Hero({ onPlay }: { onPlay: () => void }) {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] pt-28 sm:pt-32 pb-10 overflow-hidden"
    >
      {/* Editorial masthead bar */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-muted-foreground pb-6 border-b border-border">
          <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-amber animate-pulse" /> Available for select projects</span>
          <span className="hidden md:inline">VisionariesAI Labs · Est. 2020</span>
          <span>India / Worldwide</span>
        </div>
      </div>

      {/* Hero grid */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 mt-10 sm:mt-14 grid lg:grid-cols-12 gap-10 lg:gap-6 items-start">
        {/* LEFT: oversized headline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-8 order-2 lg:order-1"
        >
          <span className="eyebrow flex items-center gap-3">
            <span className="h-px w-10 bg-amber" /> Founder · Chief Executive Officer
          </span>

          <h1 className="serif-display mt-6 text-[3.5rem] sm:text-[5.5rem] lg:text-[8rem] leading-[0.88]">
            Srikanth
            <br />
            <span className="serif-italic text-amber">Dubbaka.</span>
          </h1>

          <div className="mt-8 max-w-2xl grid sm:grid-cols-[auto_1fr] gap-x-6 gap-y-2 items-start">
            <span className="eyebrow whitespace-nowrap pt-1">About</span>
            <p className="text-base sm:text-lg text-foreground/85 leading-relaxed">
              I lead <span className="text-foreground font-medium">VisionariesAI Labs</span> — a product
              studio building <em className="serif-italic">AI platforms, IoT systems, and education
              technology</em> deployed across schools, industries and institutions.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn-primary hover:[filter:brightness(1.08)] hover:[transform:translateY(-1px)]">
              <Sparkles size={16} /> Explore Products <ArrowUpRight size={16} />
            </a>
            <button onClick={onPlay} className="btn-ghost hover:bg-white/5">
              <Play size={14} /> Watch Intro
            </button>
            <div className="flex items-center gap-2 ml-1 text-xs text-muted-foreground">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={12} className="fill-amber text-amber" />
                ))}
              </div>
              <span>Trusted by 30+ teams</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: editorial portrait card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="lg:col-span-4 order-1 lg:order-2 relative mx-auto w-full max-w-[340px]"
        >
          <div className="relative">
            {/* offset amber frame */}
            <div className="absolute inset-0 border border-amber/50 translate-x-3 translate-y-3 rounded-sm pointer-events-none" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm surface-elevated">
              <img
                src={heroAsset.url}
                alt="Srikanth Dubbaka, CEO of VisionariesAI Labs"
                className="absolute inset-0 h-full w-full object-cover grayscale-[15%] contrast-[1.05]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />

              {/* corner ticks */}
              <span className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.3em] text-paper/70">N° 01</span>
              <span className="absolute top-3 right-3 text-[10px] uppercase tracking-[0.3em] text-paper/70">2026</span>

              {/* signature block */}
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-[10px] uppercase tracking-[0.3em] text-amber">Founder & CEO</p>
                <p className="serif-italic text-3xl text-paper leading-none mt-2">Srikanth</p>
                <p className="text-xs text-paper/70 mt-1">VisionariesAI Labs</p>
              </div>
            </div>
          </div>

          {/* floating quote */}
          <motion.div
            initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="hidden sm:block absolute -left-10 top-12 max-w-[220px] surface-elevated p-4 rounded-sm shadow-2xl"
          >
            <p className="serif-italic text-sm leading-snug">"We don't ship demos. We ship products."</p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-amber">Manifesto · 01</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Stats strip + roles marquee */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 mt-16 sm:mt-20">
        <div className="grid sm:grid-cols-4 gap-6 sm:gap-10 py-8 border-t border-b border-border">
          {[
            { k: "11+",  v: "Products in production" },
            { k: "5+",   v: "Years building AI" },
            { k: "30+",  v: "Teams & institutions" },
            { k: "100%", v: "On-time delivery" },
          ].map((s, i) => (
            <div key={s.v} className={i < 3 ? "sm:border-r sm:border-border sm:pr-6" : ""}>
              <p className="serif-display text-4xl sm:text-5xl text-amber">{s.k}</p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.25em] text-muted-foreground leading-snug">{s.v}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Roles marquee */}
      <div className="mt-12 marquee-pause relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex gap-8 sm:gap-14 animate-marquee-slow w-max items-center">
          {[...ROLES, ...STACK, ...ROLES, ...STACK].map((r, i) => (
            <span key={i} className="flex items-center gap-8 sm:gap-14 serif-display text-3xl sm:text-5xl text-foreground/40 hover:text-amber transition-colors whitespace-nowrap">
              {r}
              <span className="text-amber text-2xl">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
