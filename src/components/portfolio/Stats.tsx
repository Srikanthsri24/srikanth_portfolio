import { motion } from "framer-motion";
import { Cpu, Layers, Rocket, ShieldCheck } from "lucide-react";

const items = [
  { Icon: Cpu,         t: "AI & ML",         d: "LLMs, vision, analytics in production." },
  { Icon: Layers,      t: "Full Stack",      d: "Web, mobile, APIs, dashboards." },
  { Icon: Rocket,      t: "IoT & Hardware",  d: "Sensors, edge devices, telemetry." },
  { Icon: ShieldCheck, t: "Operations",      d: "Deploy, monitor, maintain at scale." },
];

export function Stats() {
  return (
    <section className="px-5 sm:px-8 -mt-2">
      <div className="mx-auto max-w-7xl">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-sm overflow-hidden">
          {items.map((it, i) => (
            <motion.div
              key={it.t}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="bg-background p-6 sm:p-8 group hover:bg-surface transition-colors"
            >
              <div className="flex items-center justify-between">
                <it.Icon size={22} className="text-amber" />
                <span className="serif-display text-sm text-muted-foreground">0{i + 1}</span>
              </div>
              <h3 className="serif-display text-2xl mt-6 group-hover:text-amber transition-colors">{it.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
