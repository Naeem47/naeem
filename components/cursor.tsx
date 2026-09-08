"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE = "a, button, [role='button'], summary, label, [data-cursor]";
const NATIVE = "input, textarea, select, [contenteditable='true']";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.documentElement.classList.add("has-custom-cursor");

    const pos = { x: 0, y: 0 };
    const lag = { x: 0, y: 0 };
    let visible = false;
    let frame = 0;

    const tick = () => {
      lag.x += (pos.x - lag.x) * 0.16;
      lag.y += (pos.y - lag.y) * 0.16;
      ring.style.transform = `translate3d(${lag.x}px, ${lag.y}px, 0)`;
      frame = requestAnimationFrame(tick);
    };

    const move = (event: PointerEvent) => {
      pos.x = event.clientX;
      pos.y = event.clientY;
      dot.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;

      if (!visible) {
        visible = true;
        lag.x = event.clientX;
        lag.y = event.clientY;
        dot.classList.add("is-on");
        ring.classList.add("is-on");
      }

      const target = event.target as Element | null;
      const native = Boolean(target?.closest(NATIVE));
      const hover = !native && Boolean(target?.closest(INTERACTIVE));
      dot.classList.toggle("is-native", native);
      ring.classList.toggle("is-native", native);
      ring.classList.toggle("is-hover", hover);
    };

    const hide = () => {
      visible = false;
      dot.classList.remove("is-on");
      ring.classList.remove("is-on");
    };

    frame = requestAnimationFrame(tick);
    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("mouseleave", hide);
    window.addEventListener("blur", hide);

    return () => {
      cancelAnimationFrame(frame);
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("mouseleave", hide);
      window.removeEventListener("blur", hide);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="site-cursor site-cursor-ring" aria-hidden />
      <div ref={dotRef} className="site-cursor site-cursor-dot" aria-hidden />
    </>
  );
}
