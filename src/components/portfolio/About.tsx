import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import aboutAsset from "@/assets/srikanth-about.asset.json";

const features = ["Affordable Prices", "High Quality Product", "On Time Project Delivery"];

export function About() {
  return (
    <section id="about" className="section-pad">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute -inset-6 bg-gradient-to-br from-secondary/30 to-accent/20 rounded-3xl blur-2xl" />
          <div className="relative glass rounded-3xl overflow-hidden aspect-[4/5] max-w-md mx-auto">
            <img src={aboutAsset.url} alt="Srikanth Dubbaka, CEO" className="w-full h-full object-cover" />
            <div className="absolute bottom-4 left-4 right-4 glass rounded-2xl p-4">
              <p className="text-xs uppercase tracking-widest text-accent">CEO</p>
              <p className="font-display text-lg font-semibold">Srikanth Dubbaka</p>
              <p className="text-xs text-muted-foreground">VisionariesAI Labs</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-accent">CEO · VisionariesAI Labs</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold leading-tight">
            With extensive experience as an{" "}
            <span className="text-gradient">AI and Full Stack Developer</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            As the CEO of VisionariesAI Labs, I bring a wealth of experience in delivering diverse
            projects across various domains. My expertise spans full-stack development, artificial
            intelligence, and cutting-edge technology solutions. Our team has successfully completed
            multiple projects, demonstrating our capability to tackle any type of project — whether
            AI-driven solutions, comprehensive web applications, or complex system integrations.
          </p>
          <div className="mt-8 grid sm:grid-cols-3 gap-3">
            {features.map((f) => (
              <div key={f} className="glass rounded-xl p-4 flex items-start gap-2">
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
