"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/lib/data";

const WORD = profile.shortName.toUpperCase();
const ease = [0.22, 1, 0.36, 1] as const;

export function Splash() {
  const [gone, setGone] = useState(false);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    let outTimer = 0;
    let waitTimer = 0;
    let finished = false;
    const start = performance.now();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    document.documentElement.classList.add("is-splash");

    const finish = () => {
      if (finished) return;
      finished = true;
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
    const tryFinish = () => {
      if (!loaded) return;
      const wait = Math.max(0, 1600 - (performance.now() - start));
      waitTimer = window.setTimeout(finish, wait);
    };

    const onLoad = () => {
      loaded = true;
      tryFinish();
    };

    if (loaded) tryFinish();
    else window.addEventListener("load", onLoad);

    return () => {
      finished = true;
      window.clearTimeout(outTimer);
      window.clearTimeout(waitTimer);
      window.removeEventListener("load", onLoad);
      document.documentElement.classList.remove("is-splash");
    };
  }, []);

  if (gone) return null;

  return (
    <div className={`splash ${hiding ? "is-out" : ""}`} role="status" aria-label="Loading">
      <motion.div
        className="splash-stage"
        animate={hiding ? { opacity: 0, y: -18, filter: "blur(10px)" } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease }}
      >
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
      </motion.div>
    </div>
  );
}
