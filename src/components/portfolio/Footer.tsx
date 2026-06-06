import { Mail, Phone, ArrowUpRight, Linkedin, Github, Instagram } from "lucide-react";
import { NAV } from "@/data/portfolio";

export function Footer() {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <footer className="border-t border-border mt-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <p className="font-display text-3xl">
            <span className="serif-italic">Srikanth</span><span className="text-amber">.</span>
          </p>
          <p className="mt-4 text-sm text-muted-foreground max-w-md leading-relaxed">
            Founder & CEO of <span className="text-foreground">VisionariesAI Labs</span>. Designing and shipping
            AI, IoT, and education products from India to the world — with craft, care, and conviction.
          </p>
          <div className="mt-5 flex gap-2">
            {[
              { Icon: Linkedin, href: "https://linkedin.com/in/srikanthdubbaka", label: "LinkedIn" },
              { Icon: Github, href: "https://github.com/", label: "GitHub" },
              { Icon: Instagram, href: "https://instagram.com/", label: "Instagram" },
            ].map(({ Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                 className="h-9 w-9 rounded-full border border-border flex items-center justify-center hover:bg-amber hover:text-ink hover:border-amber transition-colors">
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow mb-4">Explore</p>
          <ul className="space-y-2">
            {NAV.map(n => (
              <li key={n.id}>
                <button onClick={() => go(n.id)} className="text-sm text-muted-foreground hover:text-amber transition-colors">
                  {n.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="eyebrow mb-4">Get in touch</p>
          <a href="mailto:srikanth@visionariesai.com" className="group flex items-start gap-3 text-sm text-muted-foreground hover:text-amber transition-colors">
            <Mail size={14} className="mt-0.5 text-amber" /> srikanth@visionariesai.com
            <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a href="tel:+919848000000" className="mt-3 group flex items-start gap-3 text-sm text-muted-foreground hover:text-amber transition-colors">
            <Phone size={14} className="mt-0.5 text-amber" /> +91 98480 00000
            <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a href="https://srikanthsri.com" target="_blank" rel="noopener noreferrer" className="mt-3 group flex items-start gap-3 text-sm text-muted-foreground hover:text-amber transition-colors">
            <span className="mt-0.5 text-amber">↗</span> srikanthsri.com
          </a>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          <p>© {new Date().getFullYear()} VisionariesAI Labs Pvt Ltd · All rights reserved</p>
          <p>Designed & engineered in India · Built with intent</p>
        </div>
      </div>
    </footer>
  );
}
