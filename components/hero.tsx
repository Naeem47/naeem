"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "@/lib/data";

const ticker = [
  "Flutter",
  "Dart",
  "FFmpeg",
  "Agora",
  "Firebase",
  "BLoC",
  "Riverpod",
  "Socket.IO",
  "Node.js",
  "RevenueCat",
];

export function Hero() {
  const loop = [...ticker, ...ticker];

  return (
    <section id="top" className="relative pt-28 sm:pt-36">
      <div className="shell">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="eyebrow"
        >
          {profile.title} · {profile.location}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="display-1 mt-6 max-w-6xl text-balance"
        >
          {profile.shortName.toUpperCase()} is your trusted Flutter partner
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12 }}
          className="lede mt-8"
        >
          {profile.summary} Stylish product, strong technical content, shipped
          store releases.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <a href="#contact" className="btn-primary">
            Discuss the project
            <ArrowUpRight size={18} />
          </a>
          <a href="#contact" className="btn-ghost">
            Let&apos;s talk
          </a>
        </motion.div>
      </div>

      <div className="marquee mt-16 sm:mt-24">
        <div className="marquee-track py-5 text-sm tracking-[0.18em] text-ink-mute uppercase">
          {loop.map((item, index) => (
            <span key={`${item}-${index}`} className="inline-flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
