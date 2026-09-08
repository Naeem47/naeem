import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
  wide?: boolean;
};

export function Section({ id, title, children, wide = false }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 py-20 sm:py-28">
      <div className={`mx-auto px-5 sm:px-8 ${wide ? "max-w-4xl" : "max-w-3xl"}`}>
        <h2 className="mb-10 text-center text-4xl font-extrabold tracking-tight uppercase sm:mb-14 sm:text-5xl">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
