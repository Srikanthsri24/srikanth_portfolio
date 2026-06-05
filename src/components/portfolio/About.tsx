import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, Code2, Cpu, Rocket } from "lucide-react";

const features = ["Affordable Prices", "High Quality Product", "On Time Project Delivery"];

const pills = [
  { Icon: Cpu, label: "AI / ML" },
  { Icon: Code2, label: "Full Stack" },
  { Icon: Rocket, label: "Product" },
  { Icon: Sparkles, label: "Design" },
];

export function About() {
  return (
    <section id="about" className="section-pad">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-5 gap-10 lg:gap-14 items-center">
        {/* Decorative visual card — no second photo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="relative lg:col-span-2 w-full max-w-md mx-auto lg:mx-0"
        >
          <div className="absolute -inset-4 bg-gradient-to-br from-secondary/40 to-accent/30 rounded-[2rem] blur-2xl opacity-70" />
          <div className="relative glass rounded-[2rem] p-6 sm:p-8 overflow-hidden">
            {/* grid backdrop */}
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />
            <div className="relative">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center font-display font-bold text-primary-foreground">
                  SD
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-accent">CEO</p>
                  <p className="font-display font-semibold leading-tight">Srikanth Dubbaka</p>
                  <p className="text-xs text-muted-foreground">VisionariesAI Labs</p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {pills.map(({ Icon, label }) => (
                  <div key={label} className="glass rounded-2xl p-3 flex items-center gap-2">
                    <Icon size={16} className="text-accent" />
                    <span className="text-sm font-medium">{label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                {[
                  { k: "5+", v: "Years" },
                  { k: "30+", v: "Projects" },
                  { k: "100%", v: "Delivery" },
                ].map((s) => (
                  <div key={s.v} className="glass rounded-2xl py-3">
                    <p className="font-display text-xl font-bold text-gradient">{s.k}</p>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-0.5">
                      {s.v}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="lg:col-span-3"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-accent">
            CEO · VisionariesAI Labs
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            With extensive experience as an{" "}
            <span className="text-gradient">AI and Full Stack Developer</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            As the CEO of VisionariesAI Labs, I bring a wealth of experience in delivering diverse
            projects across various domains. My expertise spans full-stack development, artificial
            intelligence, and cutting-edge technology solutions. Our team has successfully completed
            multiple projects — from AI-driven solutions to comprehensive web applications and
            complex system integrations.
          </p>
          <div className="mt-8 grid sm:grid-cols-3 gap-3">
            {features.map((f) => (
              <div key={f} className="glass rounded-2xl p-4 flex items-start gap-2">
                <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                <span className="text-sm font-medium">{f}</span>
              </div>
            ))}
          </div>
          <a href="#services" className="mt-8 inline-flex btn-primary">Read More</a>
        </motion.div>
      </div>
    </section>
  );
}
