import { motion } from "framer-motion";

const stats = [
  {
    title: "Projects Completed",
    value: "Numerous",
    desc: "A wide range of successful projects, reflecting versatility and expertise — from complex AI solutions to comprehensive web applications, handled with the utmost professionalism."
  },
  {
    title: "Our Expertise",
    value: "Extensive",
    desc: "Deep experience in full-stack development and AI. Commitment to innovation and excellence ensures high-quality, cutting-edge solutions tailored to client needs."
  },
];

export function Stats() {
  return (
    <section className="px-6 -mt-10 mb-10">
      <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="glass rounded-3xl p-8 hover:-translate-y-1 transition-transform"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-accent">{s.title}</p>
            <p className="mt-3 text-5xl font-display font-bold text-gradient">{s.value}</p>
            <p className="mt-4 text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
