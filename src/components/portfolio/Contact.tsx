import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Linkedin, Github, Instagram, Youtube, Send, CheckCircle2, ArrowUpRight } from "lucide-react";

const EMAIL = "srikanth@visionariesai.com";
const PHONE_1_DISPLAY = "+91 98490 72243";
const PHONE_1_TEL = "+919849072243";
const PHONE_2_DISPLAY = "+91 98490 42243";
const PHONE_2_TEL = "+919849042243";
const ADDRESS = "Visakhapatnam, Andhra Pradesh, India";
const MAPS_URL = `https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`;

export function Contact() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const err: Record<string, string> = {};
    const name = String(fd.get("name") || "");
    const email = String(fd.get("email") || "");
    const subject = String(fd.get("subject") || "");
    const message = String(fd.get("message") || "");
    if (!name) err.name = "Required";
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) err.email = "Valid email required";
    if (!subject) err.subject = "Required";
    if (!message) err.message = "Required";
    setErrors(err);
    if (Object.keys(err).length === 0) {
      // Open user's mail client with prefilled content
      const body = `Name: ${name}%0AEmail: ${email}%0A%0A${encodeURIComponent(message)}`;
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${body}`;
      setSent(true);
      e.currentTarget.reset();
      setTimeout(() => setSent(false), 5000);
    }
  };

  const socials = [
    { Icon: Linkedin,  label: "LinkedIn",  href: "https://www.linkedin.com/in/srikanthdubbaka" },
    { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/visionariesai/" },
    { Icon: Github,    label: "GitHub",    href: "https://github.com/Srikanthsri24" },
    { Icon: Youtube,   label: "YouTube",   href: "https://www.youtube.com/@VisionariesAILabspvtltd" },
  ];

  const infoItems = [
    { Icon: MapPin, label: "Office",   val: ADDRESS, href: MAPS_URL, external: true },
    { Icon: Phone,  label: "Office 1", val: PHONE_1_DISPLAY, href: `tel:${PHONE_1_TEL}` },
    { Icon: Phone,  label: "Office 2", val: PHONE_2_DISPLAY, href: `tel:${PHONE_2_TEL}` },
    { Icon: Mail,   label: "Email",    val: EMAIL, href: `mailto:${EMAIL}` },
  ];

  return (
    <section id="contact" className="section-pad">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-8 items-end border-b border-border pb-10 mb-14">
          <div className="lg:col-span-7">
            <span className="eyebrow flex items-center gap-3"><span className="h-px w-10 bg-amber" /> Contact</span>
            <h2 className="serif-display mt-6 text-4xl sm:text-5xl lg:text-6xl">
              Let's build something <span className="serif-italic text-amber">worth keeping.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-muted-foreground leading-relaxed">
            Tell us about your project, product, or institution. We reply within one business day.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Left: contact info — fully clickable */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            {infoItems.map(({ Icon, label, val, href, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="block border-b border-border pb-6 group"
              >
                <div className="flex items-center gap-3">
                  <Icon size={14} className="text-amber" />
                  <p className="eyebrow">{label}</p>
                  <ArrowUpRight size={12} className="text-muted-foreground group-hover:text-amber group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all ml-auto" />
                </div>
                <p className="mt-3 serif-display text-lg leading-snug group-hover:text-amber transition-colors break-words">{val}</p>
              </a>
            ))}

            <div>
              <p className="eyebrow mb-4">Follow</p>
              <div className="flex flex-wrap gap-3">
                {socials.map(({ Icon, label, href }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                     className="h-12 w-12 sm:h-14 sm:w-14 rounded-full border border-border flex items-center justify-center text-foreground/80 hover:bg-amber hover:text-ink hover:border-amber hover:-translate-y-0.5 hover:scale-110 hover:shadow-[0_8px_24px_-8px_color-mix(in_oklab,var(--amber)_60%,transparent)] transition-all duration-300">
                    <Icon size={22} strokeWidth={1.8} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="lg:col-span-7 surface-elevated rounded-sm p-6 sm:p-10 space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { name: "name",    label: "Name",    type: "text" },
                { name: "email",   label: "Email",   type: "email" },
              ].map((f) => (
                <div key={f.name}>
                  <label className="eyebrow">{f.label}</label>
                  <input
                    name={f.name} type={f.type}
                    className="mt-3 w-full bg-transparent border-b border-border py-3 outline-none focus:border-amber transition-colors text-base"
                  />
                  {errors[f.name] && <p className="text-xs text-destructive mt-1">{errors[f.name]}</p>}
                </div>
              ))}
            </div>
            <div>
              <label className="eyebrow">Subject</label>
              <input
                name="subject" type="text"
                className="mt-3 w-full bg-transparent border-b border-border py-3 outline-none focus:border-amber transition-colors text-base"
              />
              {errors.subject && <p className="text-xs text-destructive mt-1">{errors.subject}</p>}
            </div>
            <div>
              <label className="eyebrow">Message</label>
              <textarea name="message" rows={5}
                className="mt-3 w-full bg-transparent border-b border-border py-3 outline-none focus:border-amber transition-colors text-base resize-none"
              />
              {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
            </div>
            <button type="submit" className="btn-primary w-full justify-center hover:[filter:brightness(1.08)] hover:[transform:translateY(-1px)]">
              {sent ? <><CheckCircle2 size={18} /> Opening your email…</> : <><Send size={16} /> Send Message <ArrowUpRight size={16} /></>}
            </button>
            <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground text-center">
              Submitting opens your email client to {EMAIL}
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
