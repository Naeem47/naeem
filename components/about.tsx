import { FadeIn } from "@/components/fade-in";
import { Section } from "@/components/section";
import { profile } from "@/lib/data";

export function About() {
  return (
    <Section id="about" title="About me">
      <FadeIn>
        <p className="text-center text-base leading-8 text-zinc-400 sm:text-lg">
          {profile.summary}
        </p>
        <p className="mt-8 text-center text-sm leading-7 text-zinc-500">
          Based in {profile.location} · {profile.years} experience · BLoC / Riverpod ·
          Firebase · Agora · FFmpeg
        </p>
      </FadeIn>
    </Section>
  );
}
