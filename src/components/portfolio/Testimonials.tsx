import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/data/portfolio";

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const t = TESTIMONIALS[idx];
  const go = (d: number) => setIdx((idx + d + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section id="testimonials" className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-40 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-secondary/30 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">Testimonials</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold">
            Loved by <span className="text-gradient">clients & partners</span>
          </h2>
        </div>

        <div className="mt-14 grid lg:grid-cols-[1.4fr_1fr] gap-6">
          {/* Featured testimonial */}
          <div className="relative glass rounded-3xl p-8 sm:p-12 overflow-hidden">
            <Quote className="absolute top-6 left-6 text-accent/20" size={64} />
            <AnimatePresence mode="wait">
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
                className="relative"
              >
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: t.rating ?? 5 }).map((_, i) => (
                    <Star key={i} size={18} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-xl sm:text-2xl font-display leading-relaxed">"{t.quote}"</p>
                <div className="mt-8 flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center font-bold text-primary-foreground">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold">{t.name}</p>
                      <p className="text-sm text-muted-foreground">{t.title}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => go(-1)} className="h-10 w-10 rounded-full glass hover:bg-accent hover:text-primary-foreground transition-colors" aria-label="Previous">
                      <ChevronLeft size={16} className="mx-auto" />
                    </button>
                    <button onClick={() => go(1)} className="h-10 w-10 rounded-full glass hover:bg-accent hover:text-primary-foreground transition-colors" aria-label="Next">
                      <ChevronRight size={16} className="mx-auto" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Side stack of all testimonials */}
          <div className="space-y-4">
            {TESTIMONIALS.map((item, i) => (
              <button
                key={item.name}
                onClick={() => setIdx(i)}
                className={`w-full text-left glass rounded-2xl p-5 transition-all hover:-translate-y-0.5 ${
                  i === idx ? "ring-2 ring-accent/60 glow-cyan" : "opacity-80 hover:opacity-100"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center font-bold text-primary-foreground text-sm">
                    {item.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-sm truncate">{item.name}</p>
                    <p className="text-xs text-muted-foreground truncate">{item.title}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground line-clamp-2 leading-relaxed">"{item.quote}"</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
