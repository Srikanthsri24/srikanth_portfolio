import { Mail, Phone, Linkedin, Github, Instagram, Youtube, ArrowUp, ArrowUpRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { NAV } from "@/data/portfolio";

const SOCIALS = [
  { Icon: Linkedin, href: "https://linkedin.com/in/srikanthdubbaka", label: "LinkedIn" },
  { Icon: Instagram, href: "https://www.instagram.com/visionariesai/", label: "Instagram" },
  { Icon: Github, href: "https://github.com/srikanthdubbaka", label: "GitHub" },
  { Icon: Youtube, href: "https://www.youtube.com/@visionariesai", label: "YouTube" },
];

export function Footer() {
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 overflow-hidden border-t border-border">
      {/* Ambient amber glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(800px 320px at 80% 110%, color-mix(in oklab, var(--amber) 18%, transparent), transparent 60%), radial-gradient(600px 280px at 10% 110%, color-mix(in oklab, var(--amber) 8%, transparent), transparent 60%)",
        }}
      />

      {/* CTA strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-7xl px-5 sm:px-8 pt-16 sm:pt-20"
      >
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12 border-b border-border">
          <div>
            <p className="eyebrow mb-3">Let's build something</p>
            <h2 className="serif-display text-4xl sm:text-5xl md:text-6xl leading-[0.95]">
              Have an idea?<br />
              <span className="serif-italic text-amber">Let's make it real.</span>
            </h2>
          </div>
          <button
            onClick={() => go("contact")}
            className="btn-primary group self-start md:self-end hover:[filter:brightness(1.08)] hover:gap-3 transition-all"
          >
            Start a project
            <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45" />
          </button>
        </div>
      </motion.div>

      {/* Main grid */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14 grid grid-cols-2 md:grid-cols-12 gap-10">
        {/* Brand */}
        <div className="col-span-2 md:col-span-5">
          <button onClick={toTop} className="font-display text-3xl text-left group">
            <span className="serif-italic">Srikanth</span>
            <span className="text-amber inline-block transition-transform group-hover:translate-y-[-2px]">.</span>
          </button>
          <p className="mt-4 text-sm text-muted-foreground max-w-md leading-relaxed">
            Founder &amp; CEO of <span className="text-foreground">VisionariesAI Labs</span>.
            Building AI, IoT and education products with craft, care and conviction.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {SOCIALS.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="h-12 w-12 sm:h-14 sm:w-14 rounded-full border border-border flex items-center justify-center text-foreground/80 hover:text-ink hover:bg-amber hover:border-amber hover:-translate-y-0.5 hover:scale-110 hover:shadow-[0_8px_24px_-8px_color-mix(in_oklab,var(--amber)_60%,transparent)] transition-all duration-300"
              >
                <Icon size={22} strokeWidth={1.8} />
              </a>
            ))}
          </div>
        </div>

        {/* Sitemap */}
        <div className="col-span-1 md:col-span-3">
          <p className="eyebrow mb-4">Explore</p>
          <ul className="space-y-2.5">
            {NAV.map((n) => (
              <li key={n.id}>
                <button
                  onClick={() => go(n.id)}
                  className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-amber transition-colors"
                >
                  <span className="relative">
                    {n.label}
                    <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-amber transition-all duration-300 group-hover:w-full" />
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="col-span-2 md:col-span-4">
          <p className="eyebrow mb-4">Get in touch</p>
          <a
            href="mailto:srikanth@visionariesai.com"
            className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-amber transition-colors"
          >
            <span className="h-8 w-8 rounded-full border border-border flex items-center justify-center text-amber group-hover:bg-amber group-hover:text-ink group-hover:border-amber transition-colors">
              <Mail size={13} />
            </span>
            <span className="truncate">srikanth@visionariesai.com</span>
          </a>
          <a
            href="tel:+919849072243"
            className="mt-3 group flex items-center gap-3 text-sm text-muted-foreground hover:text-amber transition-colors"
          >
            <span className="h-8 w-8 rounded-full border border-border flex items-center justify-center text-amber group-hover:bg-amber group-hover:text-ink group-hover:border-amber transition-colors">
              <Phone size={13} />
            </span>
            <span>+91 98490 72243</span>
          </a>
          <a
            href="tel:+919849042243"
            className="mt-3 group flex items-center gap-3 text-sm text-muted-foreground hover:text-amber transition-colors"
          >
            <span className="h-8 w-8 rounded-full border border-border flex items-center justify-center text-amber group-hover:bg-amber group-hover:text-ink group-hover:border-amber transition-colors">
              <Phone size={13} />
            </span>
            <span>+91 98490 42243</span>
          </a>
          <div className="mt-3 flex items-center gap-3 text-sm text-muted-foreground">
            <span className="h-8 w-8 rounded-full border border-border flex items-center justify-center text-amber">
              <MapPin size={13} />
            </span>
            <span>Visakhapatnam, Andhra Pradesh, India</span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          <p className="text-center sm:text-left">
            © {year} Srikanth Dubbaka · Crafted with intent
          </p>
          <button
            onClick={toTop}
            className="group flex items-center gap-2 hover:text-amber transition-colors"
          >
            Back to top
            <span className="h-7 w-7 rounded-full border border-border flex items-center justify-center group-hover:bg-amber group-hover:text-ink group-hover:border-amber group-hover:-translate-y-0.5 transition-all">
              <ArrowUp size={11} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
