"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FadeIn } from "@/components/fade-in";
import {
  stackCategories,
  stackCopy,
  stackEdges,
  stackNodes,
} from "@/lib/data";

const CX = 400;
const CY = 248;
const W = 800;
const H = 496;

function polar(r: number, i: number, n: number, offset = -Math.PI / 2) {
  const a = offset + (i / n) * Math.PI * 2;
  return { x: CX + r * Math.cos(a), y: CY + r * Math.sin(a) };
}

function relatedIds(seed: readonly string[]) {
  const ids = new Set<string>(seed);
  for (const [a, b] of stackEdges) {
    if (ids.has(a)) ids.add(b);
    if (ids.has(b)) ids.add(a);
  }
  return ids;
}

function SkillGraph({ seed }: { seed: readonly string[] }) {
  const allowed = useMemo(() => relatedIds(seed), [seed]);
  const [active, setActive] = useState(seed[0] ?? "flutter");
  const [hovered, setHovered] = useState<string | null>(null);
  const focus = hovered ?? active;

  const layout = useMemo(() => {
    const nodes = stackNodes.filter((n) => allowed.has(n.id));
    const centerId = seed[0] ?? nodes[0]?.id;
    const techs = nodes.filter((n) => n.kind === "tech" && n.id !== centerId);
    const projects = nodes.filter((n) => n.kind === "project");
    const map = new Map<string, { x: number; y: number }>();
    if (centerId) map.set(centerId, { x: CX, y: CY });
    techs.forEach((n, i) => map.set(n.id, polar(128, i, Math.max(techs.length, 1))));
    projects.forEach((n, i) =>
      map.set(n.id, polar(210, i, Math.max(projects.length, 1), -Math.PI / 3)),
    );
    return { map, centerId };
  }, [allowed, seed]);

  const lit = useMemo(() => {
    const ids = new Set<string>([focus]);
    for (const [a, b] of stackEdges) {
      if (!allowed.has(a) || !allowed.has(b)) continue;
      if (a === focus) ids.add(b);
      if (b === focus) ids.add(a);
    }
    return ids;
  }, [focus, allowed]);

  const node = stackNodes.find((n) => n.id === active) ?? stackNodes[0];
  const neighbors = stackNodes.filter(
    (n) => n.id !== active && allowed.has(n.id) && lit.has(n.id),
  );
  const visibleEdges = stackEdges.filter(([a, b]) => allowed.has(a) && allowed.has(b));
  const visibleNodes = stackNodes.filter((n) => allowed.has(n.id));

  return (
    <div className="mt-8 grid gap-4 lg:grid-cols-12">
      <div className="rs-panel relative overflow-hidden lg:col-span-8">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 48%, rgba(102,7,8,0.35), transparent 58%)",
          }}
        />
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="h-auto w-full"
          role="img"
          aria-label="Skill graph"
        >
          <circle
            cx={CX}
            cy={CY}
            r="128"
            fill="none"
            stroke="rgba(255,255,255,0.16)"
            strokeDasharray="3 10"
          />
          <circle
            cx={CX}
            cy={CY}
            r="210"
            fill="none"
            stroke="rgba(255,255,255,0.16)"
            strokeDasharray="2 12"
            opacity="0.5"
          />
          {visibleEdges.map(([a, b]) => {
            const na = layout.map.get(a);
            const nb = layout.map.get(b);
            if (!na || !nb) return null;
            const hot = lit.has(a) && lit.has(b);
            return (
              <motion.line
                key={`${a}-${b}`}
                x1={na.x}
                y1={na.y}
                x2={nb.x}
                y2={nb.y}
                stroke={hot ? "var(--color-accent)" : "rgba(255,255,255,0.22)"}
                strokeLinecap="round"
                initial={false}
                animate={{
                  opacity: hot ? 0.95 : 0.16,
                  strokeWidth: hot ? 2.2 : 1,
                }}
              />
            );
          })}
          {visibleNodes.map((item) => {
            const pos = layout.map.get(item.id);
            if (!pos) return null;
            const isActive = item.id === active;
            const isHot = lit.has(item.id);
            const isCenter = item.id === layout.centerId;
            const r = isCenter ? 26 : item.kind === "project" ? 8 : 7;
            return (
              <g
                key={item.id}
                data-cursor
                style={{ cursor: "pointer" }}
                onMouseEnter={() => setHovered(item.id)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setActive(item.id)}
              >
                <motion.circle
                  cx={pos.x}
                  cy={pos.y}
                  r={isActive ? r + 4 : r}
                  fill={
                    isActive
                      ? "var(--color-accent)"
                      : isHot
                        ? "var(--color-highlight)"
                        : item.kind === "project"
                          ? "#161a1d"
                          : "#0b090a"
                  }
                  stroke={
                    isActive
                      ? "var(--color-highlight)"
                      : isHot
                        ? "var(--color-highlight)"
                        : "rgba(255,255,255,0.16)"
                  }
                  strokeWidth={isActive || isHot ? 2 : 1}
                  animate={{ scale: isActive ? 1.08 : 1 }}
                  transition={{ type: "spring", stiffness: 380, damping: 24 }}
                />
                <text
                  x={pos.x}
                  y={isCenter ? pos.y + 4 : pos.y + (item.kind === "project" ? 22 : -14)}
                  textAnchor="middle"
                  fill={isActive || isHot ? "#ffffff" : "rgba(229,229,229,0.78)"}
                  fontSize={isCenter ? 11 : 12}
                  fontWeight={isActive ? 700 : 500}
                >
                  {item.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
      <AnimatePresence mode="wait">
        <motion.aside
          key={node.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="rs-panel p-6 lg:col-span-4"
        >
          <p className="text-xs font-medium tracking-[0.18em] text-ink-mute uppercase">
            {node.kind}
          </p>
          <h3 className="mt-2 font-[family-name:var(--font-display)] text-3xl">
            {node.label}
          </h3>
          <p className="mt-3 text-sm leading-6 text-ink-soft">{stackCopy[node.id]}</p>
          <p className="mt-8 text-xs font-medium tracking-wide text-ink-mute uppercase">
            Connected to
          </p>
          <ul className="mt-4 space-y-2">
            {neighbors.map((n) => (
              <li key={n.id}>
                <button
                  type="button"
                  onClick={() => setActive(n.id)}
                  className="w-full rounded-xl border border-line px-4 py-3 text-left hover:border-white/40"
                >
                  <span className="block text-sm">{n.label}</span>
                  <span className="mt-0.5 block text-xs text-ink-mute">{n.kind}</span>
                </button>
              </li>
            ))}
          </ul>
        </motion.aside>
      </AnimatePresence>
    </div>
  );
}

export function StackGraph() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="stack" className="relative py-20 sm:py-28">
      <div className="shell">
        <FadeIn>
          <p className="eyebrow">Our technologies</p>
          <h2 className="display-2 mt-4 text-balance">Not a list of logos.</h2>
          <p className="lede mt-5">
            Open a practice. Each one has its own graph — only the work this site
            can back up.
          </p>
        </FadeIn>

        <div className="mt-12 border-t border-line">
          {stackCategories.map((item, index) => {
            const on = open === index;
            const count = item.nodes.length + item.extras.length;
            return (
              <article key={item.id} className="border-b border-line">
                <button
                  type="button"
                  className="grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 py-6 text-left sm:gap-8 sm:py-8"
                  aria-expanded={on}
                  onClick={() => setOpen(on ? null : index)}
                >
                  <span className="font-[family-name:var(--font-display)] text-xl text-ink-mute sm:text-2xl">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block font-[family-name:var(--font-display)] text-2xl sm:text-4xl">
                      {item.label}
                    </span>
                    <span className="mt-1 block text-sm text-ink-mute">
                      {count}+ technologies
                    </span>
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
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-12">
                        <p className="max-w-xl text-sm leading-6 text-ink-mute">
                          {item.blurb}
                        </p>
                        <ul className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                          {item.nodes.map((id) => {
                            const row = stackNodes.find((n) => n.id === id);
                            return (
                              <li
                                key={id}
                                className="rounded-2xl border border-line px-4 py-4"
                              >
                                <span className="block font-[family-name:var(--font-display)] text-xl">
                                  {row?.label ?? id}
                                </span>
                                <span className="mt-1 block text-sm leading-6 text-ink-mute">
                                  {stackCopy[id]}
                                </span>
                              </li>
                            );
                          })}
                          {item.extras.map((label) => (
                            <li
                              key={label}
                              className="rounded-2xl border border-line px-4 py-4"
                            >
                              <span className="block font-[family-name:var(--font-display)] text-xl">
                                {label}
                              </span>
                              <span className="mt-1 block text-sm text-ink-mute">
                                Used in production work on this site.
                              </span>
                            </li>
                          ))}
                        </ul>
                        <SkillGraph seed={item.nodes} />
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
