import { motion } from "framer-motion";
import { ArrowDown, Play, Sparkles } from "lucide-react";
import heroAsset from "@/assets/srikanth-hero.asset.json";

export function Hero({ onPlay }: { onPlay: () => void }) {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] pt-28 sm:pt-32 pb-12 px-5 sm:px-8 overflow-hidden"
    >
      {/* Top meta strip — editorial masthead */}
      <div className="mx-auto max-w-7xl flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-8 sm:mb-12">
        <span>Vol. 01 — Founder Edition</span>
        <span className="hidden sm:inline">VisionariesAI Labs · Est. 2020</span>
        <span>India / Worldwide</span>
      </div>

      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-10 lg:gap-8 items-center relative">
        {/* Left: editorial copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 order-2 lg:order-1"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-amber" />
            <span className="eyebrow">Chief Executive Officer</span>
          </div>

          <h1 className="serif-display text-[3rem] sm:text-[4.5rem] lg:text-[6.5rem]">
            Srikanth
            <br />
            <span className="serif-italic text-amber">Dubbaka</span>
          </h1>

          <p className="mt-8 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Founder & CEO of <span className="text-foreground font-medium">VisionariesAI Labs</span> —
            building <em className="serif-italic text-foreground">AI-powered platforms, IoT systems,
            and education products</em> trusted by schools, industries, and institutions across India.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn-primary hover:[filter:brightness(1.05)] hover:[transform:translateY(-1px)]">
              <Sparkles size={16} /> Explore Our Work
            </a>
            <button onClick={onPlay} className="btn-ghost hover:bg-white/5">
              <Play size={14} /> Watch Intro
            </button>
          </div>

          {/* Stat row — editorial figures */}
          <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { k: "11+", v: "Products in production" },
              { k: "5+", v: "Years building AI" },
              { k: "100%", v: "On-time delivery" },
            ].map((s) => (
              <div key={s.v}>
                <p className="serif-display text-3xl sm:text-4xl text-amber">{s.k}</p>
                <p className="mt-2 text-[11px] uppercase tracking-widest text-muted-foreground leading-snug">{s.v}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: portrait card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative lg:col-span-5 order-1 lg:order-2 mx-auto w-full max-w-[320px] sm:max-w-sm"
        >
          <div className="relative aspect-[4/5] overflow-hidden">
            {/* Editorial frame — thin amber border */}
            <div className="absolute inset-0 border border-amber/40 translate-x-3 translate-y-3 pointer-events-none" />
            <div className="relative h-full w-full overflow-hidden">
              <img
                src={heroAsset.url}
                alt="Srikanth Dubbaka, CEO of VisionariesAI Labs"
                className="w-full h-full object-cover grayscale-[20%] contrast-[1.05]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />

              {/* Signature ribbon */}
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-amber">Founder</p>
                  <p className="serif-italic text-2xl text-paper leading-none mt-1">Srikanth</p>
                </div>
                <span className="text-[10px] uppercase tracking-widest text-paper/70">2026</span>
              </div>
            </div>
          </div>

          {/* Quote chip */}
          <motion.div
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="hidden sm:block absolute -left-6 top-8 max-w-[220px] surface-elevated p-4 rounded-sm"
          >
            <p className="serif-italic text-sm leading-snug">"Build products that actually ship."</p>
            <p className="mt-2 text-[10px] uppercase tracking-widest text-amber">— Srikanth, CEO</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="mx-auto max-w-7xl mt-16 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        <ArrowDown size={14} className="animate-float text-amber" />
        Scroll to read
      </div>
    </section>
  );
}
