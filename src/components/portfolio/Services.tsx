import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/data/portfolio";

export function Services() {
  return (
    <section id="services" className="section-pad">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-8 items-end border-b border-border pb-10 mb-14">
          <div className="lg:col-span-7">
            <span className="eyebrow flex items-center gap-3"><span className="h-px w-10 bg-amber" /> What we do</span>
            <h2 className="serif-display mt-6 text-4xl sm:text-5xl lg:text-6xl">
              Services, <span className="serif-italic text-amber">end to end.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-muted-foreground leading-relaxed">
            From early concept to long-term operation — six focused practices, one team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-sm overflow-hidden">
          {SERVICES.map((s, i) => (
            <motion.a
              href="#contact"
              key={s.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="bg-background p-8 group relative hover:bg-surface transition-colors block"
            >
              <div className="flex items-center justify-between">
                <span className="serif-display text-2xl text-amber">0{i + 1}</span>
                <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-amber group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="serif-display text-2xl mt-10 group-hover:text-amber transition-colors">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <span className="mt-8 inline-block text-[10px] uppercase tracking-[0.3em] text-muted-foreground group-hover:text-amber transition-colors">
                Inquire →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
