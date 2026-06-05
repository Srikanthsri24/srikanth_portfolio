import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Trophy } from "lucide-react";
import { SKILLS, EXPERIENCE, ACHIEVEMENTS } from "@/data/portfolio";

export function SkillsExperience() {
  const [tab, setTab] = useState<"exp" | "ach">("exp");
  const data = tab === "exp" ? EXPERIENCE : ACHIEVEMENTS;

  return (
    <section id="skills" className="section-pad">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-8 items-end border-b border-border pb-10 mb-14">
          <div className="lg:col-span-7">
            <span className="eyebrow flex items-center gap-3"><span className="h-px w-10 bg-amber" /> Capabilities</span>
            <h2 className="serif-display mt-6 text-4xl sm:text-5xl lg:text-6xl">
              Built across <span className="serif-italic text-amber">disciplines.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-muted-foreground leading-relaxed">
            Years of compounding craft — across AI, full-stack, IoT, and design — turned into a
            reliable practice for shipping complex products.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Skills — editorial list */}
          <div>
            <p className="eyebrow mb-6">Skills</p>
            <ul className="divide-y divide-border">
              {SKILLS.map((s, i) => (
                <motion.li
                  key={s.name}
                  initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className="py-5 group"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <div className="flex items-baseline gap-4 min-w-0">
                      <span className="serif-display text-sm text-muted-foreground">0{i + 1}</span>
                      <div className="min-w-0">
                        <p className="serif-display text-xl group-hover:text-amber transition-colors">{s.name}</p>
                        <p className="text-xs text-muted-foreground mt-1">{s.desc}</p>
                      </div>
                    </div>
                    <span className="serif-italic text-amber text-lg shrink-0">{s.value}%</span>
                  </div>
                  <div className="mt-4 h-px bg-border overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }} whileInView={{ width: `${s.value}%` }}
                      viewport={{ once: true }} transition={{ duration: 1.1, delay: i * 0.05 }}
                      className="h-full bg-amber"
                      style={{ height: "2px", marginTop: "-1px" }}
                    />
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Experience / Achievements */}
          <div>
            <div className="inline-flex border border-border rounded-full p-1 mb-8">
              {(["exp", "ach"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`flex items-center gap-2 px-5 py-2 text-sm rounded-full transition-all ${
                    tab === t ? "bg-amber text-ink font-medium" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t === "exp" ? <Briefcase size={14} /> : <Trophy size={14} />}
                  {t === "exp" ? "Experience" : "Achievements"}
                </button>
              ))}
            </div>

            <div className="space-y-px bg-border rounded-sm overflow-hidden">
              {data.map((item, i) => (
                <motion.div
                  key={item.title + i}
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-background p-5 sm:p-6 group hover:bg-surface transition-colors"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="serif-display text-xl group-hover:text-amber transition-colors">{item.title}</h4>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-amber">{item.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1.5">{item.org}</p>
                  {"desc" in item && (item as any).desc && (
                    <p className="text-xs text-muted-foreground/80 mt-2 leading-relaxed">{(item as any).desc}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
