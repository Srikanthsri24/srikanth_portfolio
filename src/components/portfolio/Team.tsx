import { motion } from "framer-motion";
import {
  BrainCircuit,
  Code2,
  Smartphone,
  Palette,
  Server,
  CloudCog,
  Cpu,
  ShieldCheck,
  Megaphone,
  Headphones,
  Database,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import { TEAM } from "@/data/portfolio";

const iconMap: Record<string, LucideIcon> = {
  ai: BrainCircuit,
  fullstack: Code2,
  mobile: Smartphone,
  uiux: Palette,
  backend: Server,
  cloud: CloudCog,
  iot: Cpu,
  qa: ShieldCheck,
  marketing: Megaphone,
  support: Headphones,
  database: Database,
  product: Rocket,
};

function TeamCard({ team }: { team: any }) {
  const Icon = iconMap[team.icon] || Code2;

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="group relative min-w-[190px] sm:min-w-[210px] h-[155px] overflow-hidden rounded-2xl border border-border/70 glass p-5 flex flex-col justify-between hover:glow-cyan transition-all duration-300"
    >
      <div className="absolute -top-10 -right-10 h-24 w-24 rounded-full bg-accent/15 blur-2xl group-hover:bg-accent/25 transition-all" />
      <div className="absolute -bottom-10 -left-10 h-24 w-24 rounded-full bg-secondary/15 blur-2xl group-hover:bg-secondary/25 transition-all" />

      <div className="relative z-10 flex items-center justify-between">
        <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-secondary to-accent p-[1px]">
          <div className="h-full w-full rounded-xl bg-background/90 flex items-center justify-center">
            <Icon size={23} className="text-accent" strokeWidth={1.8} />
          </div>
        </div>

        <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_16px_var(--accent)]" />
      </div>

      <div className="relative z-10 text-left">
        <h3 className="text-base font-semibold leading-snug">
          {team.role}
        </h3>

        <p className="mt-1 text-xs uppercase tracking-[0.18em] text-accent">
          {team.type}
        </p>
      </div>
    </motion.div>
  );
}

export function Team() {
  const firstRow = TEAM.slice(0, 6);
  const secondRow = TEAM.slice(6);

  const firstScroll = [...firstRow, ...firstRow, ...firstRow];
  const secondScroll = [...secondRow, ...secondRow, ...secondRow];

  return (
    <section id="team" className="section-pad overflow-hidden">
      <div className="mx-auto max-w-7xl text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-accent">
          Our Team
        </span>

        <h2 className="mt-3 text-4xl sm:text-5xl font-bold">
          The teams behind the <span className="text-gradient">vision</span>
        </h2>

        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Expert teams working together to deliver AI, web, mobile, design, and
          digital transformation solutions.
        </p>

        <div className="relative mt-12 space-y-5">
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-20 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-20 bg-gradient-to-l from-background to-transparent" />

          <motion.div
            className="flex w-max gap-5"
            animate={{ x: ["0%", "-33.33%"] }}
            transition={{
              duration: 26,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {firstScroll.map((team, index) => (
              <TeamCard key={`row-one-${team.role}-${index}`} team={team} />
            ))}
          </motion.div>

          <motion.div
            className="flex w-max gap-5"
            animate={{ x: ["-33.33%", "0%"] }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {secondScroll.map((team, index) => (
              <TeamCard key={`row-two-${team.role}-${index}`} team={team} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}