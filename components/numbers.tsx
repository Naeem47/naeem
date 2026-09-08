"use client";

import { CountUp } from "@/components/count-up";
import { CareerChart, DomainChart } from "@/components/charts";
import { FadeIn } from "@/components/fade-in";
import { stats } from "@/lib/data";

export function Numbers() {
  return (
    <section id="signal" className="relative py-20 sm:py-28">
      <div className="shell">
        <FadeIn>
          <p className="caption max-w-5xl text-balance">
            Flutter.
            <br />
            Realtime.
            <br />
            <span className="text-accent-ink">Products.</span>
          </p>
          <p className="lede mt-8">
            Three years shipping social, live streaming and tooling — measured.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <article key={stat.label} className="rs-panel p-6 sm:p-8">
              <p className="numeral">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </p>
              <h3 className="mt-5 text-lg">{stat.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-mute">{stat.detail}</p>
            </article>
          ))}
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <FadeIn className="rs-panel p-6">
            <h3 className="text-lg">Shipped products over time</h3>
            <p className="mt-1 text-sm text-ink-mute">Click a point on the line.</p>
            <div className="mt-4">
              <CareerChart />
            </div>
          </FadeIn>
          <FadeIn delay={0.08} className="rs-panel p-6">
            <h3 className="text-lg">Focus mix across shipped work</h3>
            <p className="mt-1 text-sm text-ink-mute">Click a bar to see the products.</p>
            <div className="mt-6">
              <DomainChart />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
