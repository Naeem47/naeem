import { ExternalLink } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { Section } from "@/components/section";
import { projects, type Project } from "@/lib/data";

function WhiteCard({ project }: { project: Project }) {
  const href = project.links?.[0]?.href;

  const inner = (
    <>
      <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-black text-sm font-extrabold tracking-tight text-white">
        {project.mark}
      </div>
      <div className="min-w-0">
        <h3 className="font-bold text-black">{project.name}</h3>
        <p className="mt-1 line-clamp-2 text-sm leading-5 text-zinc-600">
          {project.oneLiner}
        </p>
      </div>
    </>
  );

  const className =
    "flex items-center gap-4 rounded-2xl bg-white p-4 text-left shadow-[0_10px_40px_rgba(0,0,0,0.25)] transition-transform hover:scale-[1.015] sm:p-5";

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {inner}
      </a>
    );
  }

  return <article className={className}>{inner}</article>;
}

function FeaturedDetails({ project }: { project: Project }) {
  return (
    <div className="mt-6 space-y-5 text-left text-sm leading-7 text-zinc-400">
      {project.tagline ? (
        <p className="text-gradient font-semibold">{project.tagline}</p>
      ) : null}
      {project.problem ? <p>{project.problem}</p> : null}
      {project.links ? (
        <div className="flex flex-wrap gap-2">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-3 py-1.5 text-xs font-medium text-white hover:bg-white/10"
            >
              {link.label}
              <ExternalLink size={12} />
            </a>
          ))}
        </div>
      ) : null}
      {project.options ? (
        <dl className="grid gap-3 sm:grid-cols-2">
          {project.options.map((option) => (
            <div key={option.title} className="rounded-xl border border-white/10 bg-base p-3">
              <dt className="font-semibold text-white">{option.title}</dt>
              <dd className="mt-1 text-zinc-400">{option.detail}</dd>
            </div>
          ))}
        </dl>
      ) : null}
      {project.highlights ? (
        <ul className="flex flex-wrap gap-2">
          {project.highlights.map((item) => (
            <li
              key={item}
              className="rounded-lg border border-white/10 bg-[#111] px-2.5 py-1 text-xs text-zinc-200"
            >
              {item}
            </li>
          ))}
        </ul>
      ) : null}
      <ul className="space-y-2">
        {project.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      {project.role ? (
        <p>
          <span className="font-semibold text-white">My role. </span>
          {project.role}
        </p>
      ) : null}
      {project.caseStudies ? (
        <div className="grid gap-3 md:grid-cols-2">
          {project.caseStudies.map((study) => (
            <div key={study.title} className="rounded-xl border border-white/10 bg-base p-4">
              <h4 className="font-semibold text-white">{study.title}</h4>
              <p className="mt-2 text-xs leading-5">
                <span className="text-white">Problem. </span>
                {study.problem}
              </p>
              <p className="mt-2 text-xs leading-5">
                <span className="text-white">Solution. </span>
                {study.solution}
              </p>
              <p className="mt-2 text-xs leading-5">
                <span className="text-white">Built. </span>
                {study.built}
              </p>
            </div>
          ))}
        </div>
      ) : null}
      {project.features ? (
        <ul className="flex flex-wrap gap-2">
          {project.features.differentiating.map((item) => (
            <li
              key={item}
              className="rounded-lg border border-white/10 bg-[#111] px-2.5 py-1 text-xs text-zinc-200"
            >
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export function Projects() {
  const featured = projects.filter((project) => project.featured);

  return (
    <Section id="projects" title="Projects" wide>
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project, index) => (
          <FadeIn key={project.name} delay={index * 0.05}>
            <WhiteCard project={project} />
          </FadeIn>
        ))}
      </div>

      <div className="mt-16 space-y-16">
        {featured.map((project) => (
          <FadeIn key={`${project.name}-details`}>
            <div>
              <h3 className="text-xl font-extrabold">{project.name}</h3>
              <FeaturedDetails project={project} />
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
