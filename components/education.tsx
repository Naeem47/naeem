import { FadeIn } from "@/components/fade-in";
import { education } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="relative py-20 sm:py-28">
      <div className="shell">
        <FadeIn>
          <p className="eyebrow">Education</p>
          <h2 className="display-2 mt-4 max-w-4xl">{education.degree}</h2>
        </FadeIn>
        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <article className="rs-panel p-6 sm:p-8 lg:col-span-7">
            <p className="font-[family-name:var(--font-display)] text-3xl">
              {education.school}
            </p>
            <p className="mt-3 text-ink-mute">
              {education.location} · {education.status}
            </p>
            <p className="mt-6 max-w-lg text-sm leading-6 text-ink-soft">
              Bachelor of Business & Information Technology, studied alongside
              full-time Flutter work at three companies.
            </p>
          </article>
          <aside className="rs-panel flex flex-col justify-between p-6 sm:p-8 lg:col-span-5">
            <p className="text-sm text-ink-mute">Expected</p>
            <p className="mt-4 font-[family-name:var(--font-display)] text-5xl sm:text-6xl">
              {education.expected}
            </p>
            <p className="mt-6 text-sm text-ink-mute">{education.status}</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
