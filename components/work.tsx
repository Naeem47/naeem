"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/fade-in";
import { projects } from "@/lib/data";

export function Work() {
  const filters = useMemo(() => {
    const cats = Array.from(
      new Set(projects.map((project) => project.category ?? "Product")),
    );
    return ["All projects", ...cats];
  }, []);
  const [filter, setFilter] = useState("All projects");
  const visible =
    filter === "All projects"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="work" className="relative py-20 sm:py-28">
      <div className="shell">
        <FadeIn className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow">Portfolio</p>
            <h2 className="display-2 mt-4 max-w-3xl">
              All our projects are delivered with quality.
            </h2>
          </div>
          <p className="lede lg:max-w-sm">
            We develop mobile products, realtime systems and developer tooling —
            then put them in stores.
          </p>
        </FadeIn>

        <div className="mt-10 flex flex-wrap gap-2">
          {filters.map((item) => {
            const on = filter === item;
            return (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                className={`rounded-full px-4 py-2 text-sm ${
                  on
                    ? "bg-white text-black"
                    : "border border-line text-ink-mute hover:border-white hover:text-ink"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {visible.map((project, index) => (
            <motion.article
              key={project.name}
              layout
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="group rs-panel overflow-hidden"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-surface-2">
                <div
                  className="absolute inset-0 transition duration-500 group-hover:scale-[1.04]"
                  style={{
                    background: `radial-gradient(80% 70% at 80% 0%, rgba(102,7,8,0.45), transparent 48%), linear-gradient(165deg, #161a1d, #0b090a)`,
                  }}
                />
                <p className="absolute top-5 left-5 font-[family-name:var(--font-display)] text-5xl text-white/15">
                  {project.mark}
                </p>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-xs text-ink-mute">{project.category}</p>
                  <h3 className="mt-1 font-[family-name:var(--font-display)] text-3xl">
                    {project.name}
                  </h3>
                </div>
              </div>
              <div className="p-5 sm:p-6">
                {project.tagline ? (
                  <p className="text-sm text-highlight">{project.tagline}</p>
                ) : null}
                <p className="mt-2 text-sm leading-6 text-ink-mute">{project.oneLiner}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.slice(0, 5).map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-line px-3 py-1 text-xs text-ink-mute"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                {project.links ? (
                  <div className="mt-5 flex flex-wrap gap-4 text-sm">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 hover:text-accent"
                      >
                        {link.label}
                        <ArrowUpRight size={14} />
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
