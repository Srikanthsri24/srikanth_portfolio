import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Linkedin, Github, Instagram, Facebook, Youtube, Send, CheckCircle2, ArrowUpRight } from "lucide-react";

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
          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            {[
              { Icon: MapPin, label: "Office",  val: "3-28, Dubbakavani Peta, Polaki, Srikakulam, Andhra Pradesh, India — 532429" },
              { Icon: Phone,  label: "Call",    val: "+91 984 *******" },
              { Icon: Mail,   label: "Email",   val: "srikanth@visionariesai.com" },
            ].map(({ Icon, label, val }) => (
              <div key={label} className="border-b border-border pb-6">
                <div className="flex items-center gap-3">
                  <Icon size={14} className="text-amber" />
                  <p className="eyebrow">{label}</p>
                </div>
                <p className="mt-3 serif-display text-lg leading-snug">{val}</p>
              </div>
            ))}

            <div>
              <p className="eyebrow mb-4">Follow</p>
              <div className="flex gap-2">
                {socials.map(({ Icon, label }) => (
                  <a key={label} href="#" aria-label={label}
                     className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:bg-amber hover:text-ink hover:border-amber transition-colors">
                    <Icon size={14} />
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
              {sent ? <><CheckCircle2 size={18} /> Message Sent</> : <><Send size={16} /> Send Message <ArrowUpRight size={16} /></>}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
