import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/data/portfolio";

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const t = TESTIMONIALS[idx];
  const go = (d: number) => setIdx((idx + d + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section id="testimonials" className="section-pad">
      <div className="mx-auto max-w-4xl text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-accent">Testimonial</span>
        <h2 className="mt-3 text-4xl sm:text-5xl font-bold">What clients <span className="text-gradient">say</span></h2>

        <div className="relative mt-12 glass rounded-3xl p-10 sm:p-14">
          <Quote className="absolute top-6 left-6 text-accent/30" size={48} />
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
            >
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-xl sm:text-2xl font-display leading-relaxed">"{t.quote}"</p>
              <div className="mt-8 flex items-center justify-center gap-3">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center font-bold text-primary-foreground">
                  {t.name.charAt(0)}
                </div>
                <div className="text-left">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.title}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="mt-8 flex justify-center gap-3">
            <button onClick={() => go(-1)} className="h-10 w-10 rounded-full glass hover:bg-white/10" aria-label="Previous"><ChevronLeft size={16} className="mx-auto" /></button>
            <button onClick={() => go(1)} className="h-10 w-10 rounded-full glass hover:bg-white/10" aria-label="Next"><ChevronRight size={16} className="mx-auto" /></button>
          </div>
        </div>
      </div>
    </section>
  );
}
