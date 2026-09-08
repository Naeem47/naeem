import { Building } from "@/components/building";
import { Contact } from "@/components/contact";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { FitCheck } from "@/components/fit-check";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Numbers } from "@/components/numbers";
import { StackGraph } from "@/components/stack-graph";
import { Work } from "@/components/work";

export default function Home() {
  return (
    <>
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-3 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Numbers />
        <Work />
        <Experience />
        <Education />
        <Building />
        <StackGraph />
        <FitCheck />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
