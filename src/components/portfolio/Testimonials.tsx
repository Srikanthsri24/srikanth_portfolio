import { Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/portfolio";

export function Testimonials() {
  // duplicate for seamless marquee
  const loop = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section id="testimonials" className="section-pad relative overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-12 bg-amber" />
              <span className="eyebrow">Kind Words</span>
            </div>
            <h2 className="serif-display text-4xl sm:text-5xl lg:text-6xl">
              Trusted by founders, <br />
              <span className="serif-italic text-amber">engineers & institutions.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-muted-foreground leading-relaxed">
            A small selection of the people we've shipped real products with — from medical
            devices to industrial IoT and automation frameworks.
          </p>
        </div>
      </div>

      {/* Auto-scrolling marquee */}
      <div className="relative marquee-pause">
        {/* fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex gap-6 animate-marquee w-max">
          {loop.map((t, i) => (
            <article
              key={i}
              className="surface-elevated rounded-sm p-7 w-[320px] sm:w-[380px] shrink-0 flex flex-col justify-between hover:border-amber/40 transition-colors"
            >
              <div>
                <Quote size={28} className="text-amber/50" />
                <p className="mt-4 serif-italic text-lg leading-relaxed text-foreground">
                  "{t.quote}"
                </p>
              </div>
              <div className="mt-6 pt-5 hairline flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="h-10 w-10 rounded-full bg-amber/15 text-amber flex items-center justify-center font-display text-base shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-sm truncate">{t.name}</p>
                    <p className="text-xs text-muted-foreground truncate">{t.title}</p>
                  </div>
                </div>
                <div className="flex gap-0.5 shrink-0">
                  {Array.from({ length: t.rating ?? 5 }).map((_, k) => (
                    <Star key={k} size={12} className="fill-amber text-amber" />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
