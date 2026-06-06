import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { NAV } from "@/data/portfolio";
import { useTheme } from "./ThemeProvider";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      let current = "home";
      for (const item of NAV) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= 140) current = item.id;
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
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}>
      <div className={`mx-auto px-3 sm:px-6 transition-all duration-300 ${scrolled ? "max-w-5xl" : "max-w-7xl"}`}>
        <div className={`flex items-center justify-between gap-3 ${scrolled ? "glass rounded-full pl-5 pr-2 py-2" : "py-1"}`}>
          <button onClick={() => go("home")} className="font-display text-xl sm:text-2xl tracking-tight">
            <span className="serif-italic">Srikanth</span><span className="text-amber">.</span>
          </button>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className={`relative px-3.5 py-2 text-sm font-medium transition-colors rounded-full ${
                  active === item.id ? "text-amber" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                {active === item.id && (
                  <motion.span
                    layoutId="nav-dot"
                    className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-amber"
                  />
                )}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:bg-amber hover:text-ink hover:border-amber transition-colors"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button onClick={() => go("contact")} className="hidden sm:inline-flex btn-primary text-sm !py-2.5 !px-5 hover:[filter:brightness(1.08)]">
              Let's Talk
            </button>
            <button onClick={() => setOpen(!open)} className="lg:hidden h-10 w-10 rounded-full border border-border flex items-center justify-center" aria-label="Menu">
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden mx-3 mt-3 glass rounded-2xl p-3"
          >
            {NAV.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-sm ${
                  active === item.id ? "text-amber bg-amber/10" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button onClick={() => go("contact")} className="mt-2 w-full btn-primary justify-center">
              Let's Talk
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
