import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV } from "@/data/portfolio";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      let current = "home";
      for (const item of NAV) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= 120) current = item.id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}>
      <div className={`mx-auto max-w-7xl px-6 ${scrolled ? "glass rounded-full mx-4 md:mx-auto" : ""}`}>
        <div className="flex items-center justify-between">
          <button onClick={() => go("home")} className="font-display text-xl font-bold tracking-widest text-gradient">
            SRIKANTH
          </button>
          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                  active === item.id ? "text-accent" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                {active === item.id && (
                  <motion.span
                    layoutId="nav-dot"
                    className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-accent"
                  />
                )}
              </button>
            ))}
          </nav>
          <button onClick={() => go("contact")} className="hidden lg:inline-flex btn-primary text-sm">
            Hire Me
          </button>
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 rounded-md glass" aria-label="Menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden mx-4 mt-3 glass rounded-2xl p-4"
          >
            {NAV.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-sm ${
                  active === item.id ? "text-accent bg-white/5" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
