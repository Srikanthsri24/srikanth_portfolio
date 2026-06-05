import { motion } from "framer-motion";
import { TEAM } from "@/data/portfolio";

export function Team() {
  return (
    <section id="team" className="section-pad">
      <div className="mx-auto max-w-7xl text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-accent">Our Team</span>
        <h2 className="mt-3 text-4xl sm:text-5xl font-bold">The minds behind the <span className="text-gradient">vision</span></h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          A passionate team delivering AI, web, mobile, and digital transformation solutions.
        </p>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="glass rounded-3xl p-6 hover:glow-cyan transition-all"
            >
              <div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-2xl font-display font-bold text-primary-foreground">
                {m.initials}
              </div>
              <h3 className="mt-5 font-semibold">{m.name}</h3>
              <p className="text-sm text-accent">{m.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
