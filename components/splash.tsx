"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/lib/data";

const DOTS = 8;
const WORD = profile.shortName.toUpperCase();
const ease = [0.22, 1, 0.36, 1] as const;

export function Splash() {
  const [gone, setGone] = useState(false);
  const [hiding, setHiding] = useState(false);
  const [progress, setProgress] = useState(6);

  useEffect(() => {
    let frame = 0;
    let outTimer = 0;
    let finished = false;
    const start = performance.now();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    document.documentElement.classList.add("is-splash");

    const finish = () => {
      if (finished) return;
      finished = true;
      cancelAnimationFrame(frame);
      setProgress(100);
      setHiding(true);
      document.documentElement.classList.remove("is-splash");
      outTimer = window.setTimeout(() => setGone(true), 700);
    };

    if (reduce) {
      outTimer = window.setTimeout(finish, 120);
      return () => {
        window.clearTimeout(outTimer);
        document.documentElement.classList.remove("is-splash");
      };
    }

    let loaded = document.readyState === "complete";
    const onLoad = () => {
      loaded = true;
    };
    window.addEventListener("load", onLoad);

    const tick = (now: number) => {
      const elapsed = now - start;
      const eased = 1 - (1 - Math.min(elapsed / 1700, 1)) ** 3;
      const next = loaded && elapsed > 1600 ? 100 : Math.min(90, 8 + eased * 82);
      setProgress(next);
      if (next >= 100) {
        finish();
        return;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    return () => {
      finished = true;
      cancelAnimationFrame(frame);
      window.clearTimeout(outTimer);
      window.removeEventListener("load", onLoad);
      document.documentElement.classList.remove("is-splash");
    };
  }, []);

  if (gone) return null;

  return (
    <div
      className={`splash ${hiding ? "is-out" : ""}`}
      role="progressbar"
      aria-label="Loading"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress)}
    >
      <motion.div
        className="splash-stage"
        animate={hiding ? { opacity: 0, y: -18, filter: "blur(10px)" } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease }}
      >
        <div className="splash-ring" aria-hidden>
          {Array.from({ length: DOTS }, (_, i) => (
            <i key={i} style={{ "--i": i } as React.CSSProperties} />
          ))}
        </div>

        <p className="splash-word">
          {WORD.split("").map((letter, index) => (
            <span key={`${letter}-${index}`} className="splash-letter">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ delay: 0.16 + index * 0.07, duration: 0.7, ease }}
              >
                {letter}
              </motion.span>
            </span>
          ))}
        </p>

        <motion.span
          className="splash-rule"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.52, duration: 0.65, ease }}
          aria-hidden
        />

        <motion.p
          className="splash-sub"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.72, duration: 0.45, ease }}
        >
          {profile.title}
        </motion.p>

        <div className="splash-track">
          <div className="splash-bar" aria-hidden>
            <span style={{ width: `${progress}%` }} />
          </div>
          <span className="splash-pct">{String(Math.round(progress)).padStart(2, "0")}</span>
        </div>
      </motion.div>
    </div>
  );
}
