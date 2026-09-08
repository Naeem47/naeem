"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { careerPoints, domainMix } from "@/lib/data";

export function CareerChart() {
  const [active, setActive] = useState(careerPoints.length - 1);
  const max = Math.max(...careerPoints.map((p) => p.apps));
  const w = 640;
  const h = 240;
  const padX = 40;
  const padY = 36;
  const pts = careerPoints.map((p, i) => {
    const x = padX + (i * (w - padX * 2)) / (careerPoints.length - 1);
    const y = h - padY - (p.apps / max) * (h - padY * 2);
    return { ...p, x, y, i };
  });
  const line = pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
  const area = `${line} L ${pts[pts.length - 1].x} ${h - padY} L ${pts[0].x} ${h - padY} Z`;
  const current = pts[active];

  return (
    <div>
      <svg
        viewBox={`0 0 ${w} ${h}`}
        className="h-auto w-full"
        role="img"
        aria-label="Apps shipped over time"
      >
        <defs>
          <linearGradient id="careerFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.28" />
            <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[1, 2, 3, 4, 5].map((n) => {
          const y = h - padY - (n / max) * (h - padY * 2);
          return (
            <g key={n}>
              <line
                x1={padX}
                x2={w - padX}
                y1={y}
                y2={y}
                stroke="var(--color-line)"
                strokeDasharray="3 6"
              />
              <text x={padX - 10} y={y + 4} textAnchor="end" fill="var(--color-ink-mute)" fontSize="11">
                {n}
              </text>
            </g>
          );
        })}
        <motion.path
          d={area}
          fill="url(#careerFill)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
        <motion.path
          d={line}
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="2.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
        {pts.map((p) => {
          const on = active === p.i;
          return (
            <g
              key={p.label}
              data-cursor
              style={{ cursor: "pointer" }}
              onClick={() => setActive(p.i)}
            >
              <motion.circle
                cx={p.x}
                cy={p.y}
                r={on ? 8 : 5.5}
                fill={on ? "var(--color-highlight)" : "var(--color-surface)"}
                stroke={on ? "var(--color-highlight)" : "var(--color-accent)"}
                strokeWidth="2.5"
                whileHover={{ scale: 1.25 }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
              />
              <text
                x={p.x}
                y={h - 12}
                textAnchor="middle"
                fill={on ? "#ffffff" : "var(--color-ink-mute)"}
                fontSize="12"
                fontWeight={on ? 600 : 400}
              >
                {p.label}
              </text>
            </g>
          );
        })}
      </svg>
      <motion.p
        key={current.label}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-3 text-sm text-ink-soft"
      >
        <span className="font-medium text-ink">{current.apps} products</span>
        <span className="text-ink-mute"> · {current.note}</span>
      </motion.p>
    </div>
  );
}

export function DomainChart() {
  const [active, setActive] = useState(0);
  const row = domainMix[active];

  return (
    <div>
      <div className="space-y-3">
        {domainMix.map((item, index) => {
          const on = active === index;
          return (
            <button
              key={item.label}
              type="button"
              onClick={() => setActive(index)}
              className="w-full text-left"
            >
              <div className="mb-1.5 flex justify-between text-sm">
                <span className={on ? "text-ink" : "text-ink-soft"}>{item.label}</span>
                <span className="tabular-nums text-ink-mute">{item.value}%</span>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-line">
                <motion.div
                  className={`h-full rounded-full ${on ? "bg-highlight" : "bg-accent"}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </button>
          );
        })}
      </div>
      <motion.p
        key={row.label}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-4 text-sm text-ink-mute"
      >
        {row.projects.join(" · ")}
      </motion.p>
    </div>
  );
}
