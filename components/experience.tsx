"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FadeIn } from "@/components/fade-in";
import { experience } from "@/lib/data";

export function Experience() {
  const [open, setOpen] = useState(experience.length - 1);

  return (
    <section id="experience" className="relative py-20 sm:py-28">
      <div className="shell">
        <FadeIn className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow">Career</p>
            <h2 className="display-2 mt-4">Experience</h2>
          </div>
          <p className="lede lg:max-w-md">
            Three companies, one direction — production Flutter across social,
            streaming and tooling.
          </p>
        </FadeIn>

        <div className="mt-12 border-t border-line">
          {experience.map((row, index) => {
            const on = open === index;
            return (
              <article key={row.company} className="border-b border-line">
                <button
                  type="button"
                  className="grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 py-6 text-left sm:gap-8 sm:py-8"
                  aria-expanded={on}
                  onClick={() => setOpen(on ? -1 : index)}
                >
                  <span className="font-[family-name:var(--font-display)] text-xl text-ink-mute sm:text-2xl">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block font-[family-name:var(--font-display)] text-2xl sm:text-4xl">
                      {row.role}
                    </span>
                    <span className="mt-1 block text-sm text-ink-mute">{row.company}</span>
                  </span>
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-line text-2xl leading-none">
                    {on ? "–" : "+"}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {on ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28 }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-8 pb-10 lg:grid-cols-12">
                        <p className="text-sm text-ink-mute lg:col-span-4">
                          {row.period} · {row.location}
                          <span className="mt-3 block max-w-sm text-ink-soft">
                            {row.summary}
                          </span>
                        </p>
                        <div className="lg:col-span-8">
                          <ul className="space-y-3 text-sm leading-6 text-ink-soft">
                            {row.bullets.map((bullet) => (
                              <li key={bullet}>{bullet}</li>
                            ))}
                          </ul>
                          <div className="mt-5 flex flex-wrap gap-2">
                            {row.tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full border border-line px-3 py-1 text-xs text-ink-mute"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
