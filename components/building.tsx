import { FadeIn } from "@/components/fade-in";
import { building } from "@/lib/data";

export function Building() {
  return (
    <section id="building" className="relative py-20 sm:py-28">
      <div className="shell">
        <FadeIn>
          <p className="eyebrow">More solutions</p>
          <h2 className="display-2 mt-4 max-w-4xl">
            Currently building the next chapter.
          </h2>
        </FadeIn>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {building.map((item, index) => (
            <article key={item.title} className="rs-panel p-6 sm:p-8">
              <p className="font-[family-name:var(--font-display)] text-xl text-ink-mute">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-6 text-sm text-highlight">{item.status}</p>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-ink-mute">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
