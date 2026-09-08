import { FadeIn } from "@/components/fade-in";
import { Section } from "@/components/section";
import { skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="space-y-8">
        {skillGroups.map((group, index) => (
          <FadeIn key={group.title} delay={index * 0.05}>
            <div className="text-center">
              <h3 className="mb-4 text-sm font-semibold tracking-wide text-zinc-300 uppercase">
                {group.title}
              </h3>
              <ul className="flex flex-wrap justify-center gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-zinc-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
