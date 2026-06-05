import { useState } from "react";
import { motion } from "framer-motion";
import { SKILLS, EXPERIENCE, ACHIEVEMENTS } from "@/data/portfolio";

export function SkillsExperience() {
  const [tab, setTab] = useState<"exp" | "ach">("exp");
  const data = tab === "exp" ? EXPERIENCE : ACHIEVEMENTS;

  return (
    <section id="skills" className="section-pad">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">Skills & Experience</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold">Core <span className="text-gradient">competencies</span> built over years</h2>
          <p className="mt-4 text-muted-foreground">
            With a robust background in technology and innovation, I possess a diverse skill set and
            extensive experience across various domains — leading and delivering complex projects
            with precision and excellence.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-10">
          <div className="space-y-5">
            {SKILLS.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              >
                <div className="flex justify-between mb-2 text-sm">
                  <span className="font-medium">{s.name}</span>
                  <span className="text-accent">{s.value}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }} whileInView={{ width: `${s.value}%` }}
                    viewport={{ once: true }} transition={{ duration: 1.2, delay: i * 0.05 }}
                    className="h-full rounded-full bg-gradient-to-r from-secondary to-accent"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div>
            <div className="inline-flex glass rounded-full p-1 mb-6">
              {(["exp", "ach"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`px-5 py-2 text-sm rounded-full transition-all ${
                    tab === t ? "bg-gradient-to-r from-secondary to-accent text-primary-foreground font-semibold" : "text-muted-foreground"
                  }`}
                >
                  {t === "exp" ? "Experience" : "Achievements & Projects"}
                </button>
              ))}
            </div>
            <div className="relative pl-6 border-l border-white/10 space-y-6">
              {data.map((item, i) => (
                <motion.div
                  key={item.title + i}
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="relative"
                >
                  <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-accent ring-4 ring-accent/20" />
                  <p className="text-xs text-accent uppercase tracking-widest">{item.period}</p>
                  <h4 className="font-semibold mt-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.org}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
