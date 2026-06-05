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
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">Portfolio</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold">
            Our <span className="text-gradient">Products</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            A growing suite of AI, IoT, and education products — built, deployed, and trusted in production.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === f
                  ? "bg-gradient-to-r from-secondary to-accent text-primary-foreground"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {f === "All" ? "All Products" : f}
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.article
                layout
                key={p.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="group glass rounded-3xl overflow-hidden flex flex-col hover:-translate-y-1 transition-transform"
              >
                {/* Image header — replace `image` URL with your own asset later */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-80 mix-blend-multiply z-10`} />
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent z-20" />
                  <div className="absolute top-3 left-3 z-30 flex flex-wrap gap-1">
                    {p.category.map((c) => (
                      <span key={c} className="px-2 py-0.5 rounded-full bg-black/50 backdrop-blur text-[10px] uppercase tracking-wider text-white">
                        {c}
                      </span>
                    ))}
                  </div>
                  <span className="absolute top-3 right-3 z-30 px-2 py-0.5 rounded-full bg-accent/90 text-[10px] uppercase tracking-wider text-primary-foreground font-semibold">
                    {p.status}
                  </span>
                  <div className="absolute bottom-3 left-4 right-4 z-30">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-white/80">{p.tag}</p>
                    <h3 className="mt-1 text-lg font-display font-bold text-white leading-tight">{p.name}</h3>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{p.description}</p>

                  <ul className="mt-4 grid grid-cols-1 gap-1.5">
                    {p.features.slice(0, 4).map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-foreground/85">
                        <CheckCircle2 size={14} className="text-accent shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{p.clients}</span>
                    <a href="#contact" className="h-8 w-8 rounded-full glass flex items-center justify-center hover:bg-accent hover:text-primary-foreground transition-colors" aria-label={`Inquire about ${p.name}`}>
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
