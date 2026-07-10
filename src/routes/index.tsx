import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll } from "@/components/portfolio/SmoothScroll";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Freelance } from "@/components/portfolio/Freelance";
import { Skills } from "@/components/portfolio/Skills";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { useHydrated } from "@/components/portfolio/use-hydrated";
import { CustomCursor } from "@/components/portfolio/CustomCursor";

const Route = createFileRoute("/")({
  component: Index,
  validateSearch: (search: Record<string, unknown>) => ({
    scrollTo: (search.scrollTo as string) || undefined,
  }),
});

function Index() {
  const hydrated = useHydrated();
  const { scrollTo } = Route.useSearch();

  useEffect(() => {
    if (scrollTo) {
      const el = document.getElementById(scrollTo);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [scrollTo]);

  return (
    <div className="relative overflow-x-clip bg-[#0A0A0A]">
      {hydrated && <CustomCursor />}
      {hydrated && <SmoothScroll />}
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        {/* <Freelance /> */}
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export { Route };
