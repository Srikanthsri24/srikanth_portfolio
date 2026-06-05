import { motion } from "framer-motion";
import { CheckCircle2, ArrowUpRight } from "lucide-react";

const principles = [
  { k: "01", t: "Ship real products", d: "Not demos, not slides — production systems used daily." },
  { k: "02", t: "AI with intent",     d: "Models serve outcomes, not the other way around." },
  { k: "03", t: "Design as a system", d: "Consistency, accessibility, and motion as defaults." },
  { k: "04", t: "Long-term partner",  d: "Deployment, maintenance, iteration — we stay." },
];

export function About() {
  return (
    <section id="about" className="section-pad">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="grid lg:grid-cols-12 gap-8 items-end border-b border-border pb-10 mb-14">
          <div className="lg:col-span-7">
            <span className="eyebrow flex items-center gap-3"><span className="h-px w-10 bg-amber" /> About</span>
            <h2 className="serif-display mt-6 text-4xl sm:text-5xl lg:text-6xl">
              An <span className="serif-italic text-amber">AI & Full-Stack</span> studio,
              <br className="hidden sm:block" /> led with a builder's hand.
            </h2>
          </div>
          <p className="lg:col-span-5 text-muted-foreground leading-relaxed">
            VisionariesAI Labs is the work of a small, senior team. We architect, design, and ship
            end-to-end — from AI infrastructure to interactive classrooms.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <p className="eyebrow">CEO Letter</p>
            <p className="mt-4 serif-italic text-2xl sm:text-3xl leading-snug">
              "We started VisionariesAI to put real AI into the hands of teachers, operators, and
              founders — not just engineers."
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-amber/15 text-amber flex items-center justify-center font-display text-lg">SD</div>
              <div>
                <p className="font-medium">Srikanth Dubbaka</p>
                <p className="text-xs text-muted-foreground">Founder & CEO, VisionariesAI Labs</p>
              </div>
            </div>

            <a href="#contact" className="mt-10 inline-flex items-center gap-2 text-sm text-amber hover:underline underline-offset-4">
              Start a conversation <ArrowUpRight size={14} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-border rounded-sm overflow-hidden"
          >
            {principles.map((p) => (
              <div key={p.k} className="bg-background p-6 sm:p-8 hover:bg-surface transition-colors group">
                <div className="flex items-start justify-between">
                  <span className="serif-display text-2xl text-amber">{p.k}</span>
                  <CheckCircle2 size={16} className="text-amber/60 group-hover:text-amber transition-colors" />
                </div>
                <h3 className="serif-display text-xl mt-6">{p.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
