import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye } from "lucide-react";
import { PROJECTS, type Category } from "@/data/portfolio";

const FILTERS: Category[] = ["All", "WEB", "APP", "AI", "IoT", "UI/UX"];

export function Projects() {
  const [filter, setFilter] = useState<Category>("All");
  const filtered = useMemo(
    () => filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category.includes(filter as any)),
    [filter]
  );

  return (
    <section id="projects" className="section-pad">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">Portfolio</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold">My <span className="text-gradient">Projects</span></h2>
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
              {f === "All" ? "All Projects" : f}
            </button>
          ))}
        </div>
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.article
                layout
                key={p.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group glass rounded-3xl overflow-hidden hover:-translate-y-1 transition-transform"
              >
                <div className={`relative aspect-[4/3] bg-gradient-to-br ${p.gradient} flex items-center justify-center overflow-hidden`}>
                  <span className="font-display text-3xl font-bold text-white/90 px-6 text-center">{p.title}</span>
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                    {p.category.map((c) => (
                      <span key={c} className="px-2 py-0.5 rounded-full bg-black/40 backdrop-blur text-[10px] uppercase tracking-wider text-white">{c}</span>
                    ))}
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <a href="#" className="btn-primary text-sm" aria-label={`Preview ${p.title}`}>
                      <Eye size={16} /> Preview
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <dl className="mt-3 space-y-1 text-sm">
                    <div className="flex gap-2"><dt className="text-muted-foreground w-20">Project</dt><dd>Web Application</dd></div>
                    <div className="flex gap-2"><dt className="text-muted-foreground w-20">Client</dt><dd>{p.client}</dd></div>
                    <div className="flex gap-2"><dt className="text-muted-foreground w-20">Stack</dt><dd className="text-accent">{p.lang}</dd></div>
                  </dl>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
