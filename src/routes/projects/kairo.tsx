import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { getProjectBySlug } from "@/data/projects";
import { SmoothScroll } from "@/components/portfolio/SmoothScroll";
import { Footer } from "@/components/portfolio/Footer";
import { useHydrated } from "@/components/portfolio/use-hydrated";
import {
  ProjectDemo,
  ProjectTechStack,
  ProjectArchitecture,
  ProjectFutureScope,
} from "@/components/portfolio/case-study";

const ease = [0.22, 1, 0.36, 1] as const;

export const Route = createFileRoute("/projects/kairo")({
  component: KairoPage,
});

function KairoPage() {
  const hydrated = useHydrated();
  const project = getProjectBySlug("kairo");
  if (!project) return null;

  return (
    <div className="relative overflow-x-clip bg-[#0A0A0A]">
      {hydrated && <SmoothScroll />}
      <main>
        {/* Header */}
        <section className="relative pt-24 md:pt-32 pb-10 md:pb-14">
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
            >
              <Link
                to="/"
                search={{ scrollTo: "projects" }}
                className="inline-flex items-center gap-2 text-[13px] text-[#A1A1AA] hover:text-white transition-colors mb-6"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Back to Projects
              </Link>
            </motion.div>

            <div className="flex flex-wrap items-center gap-4 mb-3">
              <motion.h1
                initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1, ease, delay: 0.1 }}
                className="font-display text-4xl md:text-6xl lg:text-[72px] leading-[1.0] tracking-[-0.03em] font-medium"
              >
                {project.name}
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease, delay: 0.3 }}
                className="flex flex-wrap gap-2"
              >
                {project.status.map((s) => (
                  <span
                    key={s}
                    className="inline-flex items-center gap-1.5 text-[11px] px-3 py-1.5 rounded-full border border-white/[0.10] text-white/70"
                  >
                    <span
                      className="inline-block w-1.5 h-1.5 rounded-full animate-pulse"
                      style={{ backgroundColor: project.accent }}
                    />
                    {s}
                  </span>
                ))}
              </motion.div>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.2 }}
              className="text-[16px] text-[#A1A1AA] max-w-2xl leading-relaxed"
            >
              {project.tagline}
            </motion.p>
          </div>
        </section>

        {/* Row 1: Description + Links */}
        <section className="relative py-8 md:py-10 border-t border-white/[0.06]">
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.8, ease }}
              className="flex flex-col md:flex-row gap-8 md:gap-12 items-start"
            >
              <div className="flex-1">
                <p className="text-[11px] text-white/40 tracking-[0.2em] uppercase mb-3">
                  Description
                </p>
                <div className="space-y-3 text-[15px] leading-[1.7] text-[#A1A1AA]">
                  {project.projectDescription.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3 md:pt-6">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-[#0A0A0A] text-[13px] font-medium hover:bg-white/90 transition-all"
                  >
                    Live Demo
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/[0.10] text-[13px] text-white/80 hover:bg-white/[0.04] hover:border-white/20 transition-all"
                  >
                    <Github className="w-3.5 h-3.5" />
                    GitHub
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Row 2: Video + Architecture */}
        <section className="relative py-8 md:py-10 border-t border-white/[0.06]">
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.8, ease }}
              >
                <p className="text-[11px] text-white/40 tracking-[0.2em] uppercase mb-3">Demo</p>
                <ProjectDemo project={project} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.8, ease, delay: 0.1 }}
              >
                <p className="text-[11px] text-white/40 tracking-[0.2em] uppercase mb-3">
                  Architecture
                </p>
                <ProjectArchitecture accent={project.accent} imageSrc={project.architectureImage} />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Row 3: Tech Stack */}
        <section className="relative py-8 md:py-10 border-t border-white/[0.06]">
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.8, ease }}
            >
              <p className="text-[11px] text-white/40 tracking-[0.2em] uppercase mb-4">
                Tech Stack
              </p>
              <div className="card-surface rounded-2xl p-5">
                <ProjectTechStack project={project} />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Row 4: Future Scope */}
        <section className="relative py-8 md:py-10 border-t border-white/[0.06]">
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.8, ease }}
            >
              <p className="text-[11px] text-white/40 tracking-[0.2em] uppercase mb-4">
                Future Scope
              </p>
              <ProjectFutureScope project={project} />
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
