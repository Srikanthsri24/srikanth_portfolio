import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Play } from "lucide-react";
import { ROLES } from "@/data/portfolio";
import heroAsset from "@/assets/srikanth-hero.asset.json";

export function Hero({ onPlay }: { onPlay: () => void }) {
  const [text, setText] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIdx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setRoleIdx((roleIdx + 1) % ROLES.length);
        }
      }
    }, deleting ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIdx]);

  const badges = ["React", "Python", "AI", "Web Apps", "UI/UX"];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 px-6 overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-secondary/30 blur-3xl animate-float" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="mx-auto max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center relative">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs uppercase tracking-[0.3em] text-accent mb-6">
            I'm
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
            Srikanth <br />
            <span className="text-gradient">Dubbaka</span>
          </h1>
          <div className="text-xl sm:text-2xl text-muted-foreground mb-2 h-9">
            <span className="cursor-blink">{text}</span>
          </div>
          <p className="text-muted-foreground max-w-lg mb-8 mt-4">
            CEO of VisionariesAI Labs — building AI-powered platforms, web apps and digital
            products that solve real problems with elegance and scale.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="btn-primary hover:[transform:translateY(-2px)]">
              <Download size={18} /> Download Brochure
            </a>
            <button onClick={onPlay} className="btn-ghost hover:bg-white/10">
              <Play size={18} /> Play Video
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden glass glow-cyan">
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary/40 via-transparent to-accent/30 mix-blend-overlay z-10" />
            <img src={heroAsset.url} alt="Srikanth Dubbaka" className="w-full h-full object-cover" />
          </div>
          {/* Floating tech badges */}
          {badges.map((b, i) => {
            const positions = [
              "top-6 -left-6", "top-1/3 -right-8", "bottom-1/3 -left-10",
              "bottom-10 -right-4", "top-2/3 left-1/2",
            ];
            return (
              <motion.div
                key={b}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.15, type: "spring" }}
                className={`absolute ${positions[i]} glass px-4 py-2 rounded-full text-sm font-medium animate-float`}
                style={{ animationDelay: `${i * 0.5}s` }}
              >
                <span className="text-accent">●</span> {b}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
