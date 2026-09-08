"use client";

import { FormEvent, useMemo, useState } from "react";
import { FadeIn } from "@/components/fade-in";
import { AreaField } from "@/components/area-field";
import { fitVocabulary } from "@/lib/data";

type Hit = {
  term: string;
  evidence: string[];
  strength: "strong" | "gap";
};

function analyze(text: string): Hit[] {
  const hay = text.toLowerCase();
  if (!hay.trim()) return [];
  return fitVocabulary
    .filter((item) => item.aliases.some((alias) => hay.includes(alias)))
    .map((item) => ({
      term: item.term,
      evidence: [...item.evidence],
      strength: item.evidence.length ? ("strong" as const) : ("gap" as const),
    }));
}

export function FitCheck() {
  const [text, setText] = useState("");
  const [ran, setRan] = useState(false);

  const hits = useMemo(() => (ran ? analyze(text) : []), [ran, text]);
  const score = hits.length
    ? Math.round((hits.filter((h) => h.strength === "strong").length / hits.length) * 100)
    : 0;

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    setRan(true);
  }

  return (
    <section id="fit" className="relative py-20 sm:py-28">
      <div className="shell">
        <FadeIn>
          <p className="eyebrow">Fit check</p>
          <h2 className="display-2 mt-4">Paste the role. See the match.</h2>
          <p className="lede mt-4">
            A job description is mapped against documented Flutter work — in this
            tab. Nothing is uploaded.
          </p>
        </FadeIn>

        <form onSubmit={onSubmit} className="mt-8 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <label className="text-sm text-ink-mute" htmlFor="jd">
              Job description
            </label>
            <AreaField
              id="jd"
              hint="Paste a Flutter / mobile job description…"
              filled={Boolean(text.trim())}
              value={text}
              onChange={(e) => {
                setText(e.target.value);
                setRan(false);
              }}
              rows={10}
              className="mt-2"
            />
            <button type="submit" className="btn-primary mt-4">
              Check the fit
            </button>
          </div>
          <div className="lg:col-span-5">
            {ran ? (
              <div>
                <p className="numeral">
                  {score}
                  <span className="text-accent">%</span>
                </p>
                <p className="mt-2 text-sm text-ink-mute">
                  {hits.length} requirements detected in the text.
                </p>
                <ul className="mt-6 space-y-3">
                  {hits.map((hit) => (
                    <li key={hit.term}>
                      <div className="mb-1 flex justify-between text-sm">
                        <span>{hit.term}</span>
                        <span className="text-ink-mute">
                          {hit.evidence.join(" · ") || "No documented evidence"}
                        </span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-sm bg-line">
                        <div
                          className={`h-full ${
                            hit.strength === "strong" ? "w-full bg-highlight" : "w-1/5 bg-accent"
                          }`}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="text-sm leading-6 text-ink-mute">
                Processed locally in your browser. A match is strong only when a
                project or a role on this site documents it.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
