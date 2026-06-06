import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { PRODUCTS, type Category } from "@/data/portfolio";

const FILTERS: Category[] = ["All", "AI", "EDU", "IoT", "WEB", "APP"];

export function Projects() {
  const [filter, setFilter] = useState<Category>("All");
  const filtered = useMemo(
    () => (filter === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category.includes(filter as any))),
    [filter]
  );

  return (
    <section id="projects" className="section-pad">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-8 items-end border-b border-border pb-10 mb-10">
          <div className="lg:col-span-7">
            <span className="eyebrow flex items-center gap-3"><span className="h-px w-10 bg-amber" /> Portfolio</span>
            <h2 className="serif-display mt-6 text-4xl sm:text-5xl lg:text-6xl">
              Our <span className="serif-italic text-amber">products.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-muted-foreground leading-relaxed">
            A growing suite of AI, IoT, and education products — built, deployed, and trusted in production.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 sm:px-5 py-2 text-xs sm:text-sm rounded-full border transition-all ${
                filter === f
                  ? "bg-amber text-ink border-amber font-medium"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-amber/40"
              }`}
            >
              {f === "All" ? "All Products" : f}
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.article
                layout
                key={p.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="group surface-elevated rounded-sm overflow-hidden flex flex-col hover:-translate-y-1 transition-transform"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                    {p.category.map((c) => (
                      <span key={c} className="px-2 py-0.5 rounded-full bg-ink/60 backdrop-blur text-[10px] uppercase tracking-wider text-paper">
                        {c}
                      </span>
                    ))}
                  </div>
                  <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-amber text-ink text-[10px] uppercase tracking-wider font-semibold">
                    {p.status}
                  </span>
                  <div className="absolute bottom-3 left-4 right-4 text-paper">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-amber">{p.tag}</p>
                    <h3 className="mt-1 serif-display text-lg leading-tight">{p.name}</h3>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{p.description}</p>
                  <ul className="mt-4 grid grid-cols-1 gap-1.5">
                    {p.features.slice(0, 4).map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-foreground/85">
                        <CheckCircle2 size={14} className="text-amber shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{p.clients}</span>
                    <a href="#contact"
                       onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                       className="h-8 w-8 rounded-full border border-border flex items-center justify-center hover:bg-amber hover:text-ink hover:border-amber transition-colors"
                       aria-label={`Inquire about ${p.name}`}>
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
