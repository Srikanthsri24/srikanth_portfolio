import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Linkedin, Github, Instagram, Facebook, Youtube, Send, CheckCircle2 } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const err: Record<string, string> = {};
    if (!fd.get("name")) err.name = "Required";
    const email = String(fd.get("email") || "");
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) err.email = "Valid email required";
    if (!fd.get("subject")) err.subject = "Required";
    if (!fd.get("message")) err.message = "Required";
    setErrors(err);
    if (Object.keys(err).length === 0) {
      setSent(true);
      e.currentTarget.reset();
      setTimeout(() => setSent(false), 5000);
    }
  };

  const socials = [
    { Icon: Linkedin, label: "LinkedIn" }, { Icon: Github, label: "GitHub" },
    { Icon: Instagram, label: "Instagram" }, { Icon: Facebook, label: "Facebook" }, { Icon: Youtube, label: "YouTube" },
  ];

  return (
    <section id="contact" className="section-pad">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-accent">Say Hello</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold">Let's <span className="text-gradient">work together</span></h2>
          <p className="mt-4 text-muted-foreground max-w-md">
            Have a project in mind or need a thinking partner on an AI initiative? Let's talk.
          </p>
          <div className="mt-10 space-y-5">
            {[
              { Icon: MapPin, label: "Office", val: "3-28, Dubbakavani Peta, Polaki, Srikakulam, AndhraPradesh, India, 532429" },
              { Icon: Phone, label: "Call", val: "+91 984 *******" },
              { Icon: Mail, label: "Mail", val: "srikanth@visionariesai.com" },
            ].map(({ Icon, label, val }) => (
              <div key={label} className="flex gap-4">
                <div className="h-12 w-12 rounded-2xl glass flex items-center justify-center text-accent shrink-0">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
                  <p className="mt-1 text-sm">{val}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Follow me</p>
            <div className="flex gap-3">
              {socials.map(({ Icon, label }) => (
                <a key={label} href="#" aria-label={label}
                   className="h-10 w-10 rounded-full glass flex items-center justify-center hover:bg-accent hover:text-primary-foreground transition-colors">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="glass rounded-3xl p-8 space-y-5"
        >
          {[
            { name: "name", label: "Your Name", type: "text" },
            { name: "email", label: "Your Email", type: "email" },
            { name: "subject", label: "Subject", type: "text" },
          ].map((f) => (
            <div key={f.name}>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">{f.label}</label>
              <input
                name={f.name} type={f.type}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent focus:bg-white/10 transition-colors"
              />
              {errors[f.name] && <p className="text-xs text-destructive mt-1">{errors[f.name]}</p>}
            </div>
          ))}
          <div>
            <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Message</label>
            <textarea name="message" rows={5}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent focus:bg-white/10 transition-colors resize-none"
            />
            {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
          </div>
          <button type="submit" className="btn-primary w-full justify-center hover:[transform:translateY(-2px)]">
            {sent ? <><CheckCircle2 size={18} /> Message Sent!</> : <><Send size={18} /> Send Message</>}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
