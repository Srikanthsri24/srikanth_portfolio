import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/data/portfolio";

export function Services() {
  return (
    <section id="services" className="section-pad">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-accent">Hire Us</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold">Our <span className="text-gradient">Services</span></h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            From design to deployment — premium services engineered for ambitious teams and founders.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.07 }}
              className="group glass rounded-3xl p-7 hover:glow-cyan hover:-translate-y-1 transition-all"
            >
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-xl text-primary-foreground font-bold">
                {s.icon}
              </div>
              <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <div className="mt-6 flex items-center justify-between pt-5 border-t border-white/10">
                <span className="text-sm font-semibold text-accent">{s.price}</span>
                <a href="#contact" className="h-9 w-9 rounded-full glass flex items-center justify-center group-hover:bg-accent group-hover:text-primary-foreground transition-colors" aria-label="Inquire">
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
