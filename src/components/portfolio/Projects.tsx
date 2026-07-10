import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { projects } from "@/data/projects";
import { ScreenshotCarousel } from "./ScreenshotCarousel";

const ease = [0.22, 1, 0.36, 1] as const;

export function Projects() {
  return (
    <section id="projects" className="relative py-32 md:py-40 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.7, ease }}
              className="text-[13px] text-[#A1A1AA] tracking-[0.16em] uppercase mb-6"
            >
              Selected Projects
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.9, ease }}
              className="font-display text-4xl md:text-6xl leading-[1.05] tracking-[-0.03em] font-medium text-balance max-w-2xl"
            >
              Work I'm proud <span className="text-[#A1A1AA]">to ship.</span>
            </motion.h2>
          </div>
        </div>

        <div className="space-y-8 md:space-y-10">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.9, ease, delay: i * 0.05 }}
              className="group card-surface rounded-3xl overflow-hidden hover:border-white/[0.12] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_80px_-30px_rgba(94,162,255,0.25)]"
            >
              {/* Image on top */}
              <div className="relative aspect-[4/3] md:aspect-[2.2/1] overflow-hidden bg-[#0A0A0A]">
                <div className={`absolute inset-0 bg-gradient-to-br ${p.tint}`} />
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.08), transparent 55%)",
                  }}
                />
                <ScreenshotCarousel screenshots={p.screenshots} accent={p.accent} />
              </div>

              {/* Content below */}
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="font-display text-2xl md:text-3xl leading-tight tracking-[-0.02em] font-medium">
                    {p.name}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {p.status.map((s) => (
                      <span
                        key={s}
                        className="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-full border border-white/[0.08] text-white/60"
                      >
                        <span
                          className="inline-block w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: p.accent }}
                        />
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-[15px] leading-relaxed text-[#A1A1AA] max-w-3xl">{p.tagline}</p>

                <div className="flex flex-wrap items-center gap-3 mt-6">
                  <Link
                    to="/projects/$slug"
                    params={{ slug: p.slug }}
                    search={{ from: "projects" }}
                    className="group/btn inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-[#0A0A0A] text-[13px] font-medium hover:bg-white/90 transition-all"
                  >
                    View Case Study
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </Link>
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/10 text-[13px] text-white/70 hover:bg-white/[0.04] hover:border-white/20 hover:text-white transition-all"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  )}
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/10 text-[13px] text-white/70 hover:bg-white/[0.04] hover:border-white/20 hover:text-white transition-all"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
