import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const roles = [
  {
    company: "Capsitech",
    logo: "/images/capsitech_logo.jpg",
    companyUrl: "https://www.capsitech.com",
    role: "Assistant System Engineer",
    period: "July 2025 — June 2026",
    summary:
      "Worked on enterprise applications related to CRM, Tax, and Accounting systems. Developed scalable frontend and backend modules using React.js, C#, .NET, and MongoDB. Built multiple production-ready features independently from development to deployment.",
    highlights: [
      "Integrated Active Workpapers and Xero platforms",
      "Designed MongoDB aggregation pipelines for reporting",
      "Optimized performance of enterprise systems",
      "Shipped production-ready features end to end",
    ],
    stack: ["React", "C#", ".NET", "MongoDB", "Xero", "Active Workpapers"],
  },
  {
    company: "Sanshi Network Pvt. Ltd.",
    logo: "/images/sanshi_logo.jpg",
    companyUrl: "https://sanshinetworktech.com",
    role: "Full Stack Developer",
    period: "October 2024 — July 2025",
    summary: (
      <>
        Joined as a Frontend Developer and transitioned into a Full Stack Developer role. Played a
        major role in building the company platform{" "}
        <a
          href="https://www.wisein.in"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/80 hover:text-white underline underline-offset-2 decoration-white/20 hover:decoration-white/40 transition-colors"
        >
          WiseIN
        </a>{" "}
        from scratch in a startup environment.
      </>
    ),
    highlights: [
      "Developed frontend with Next.js, backend APIs with NestJS",
      "Managed PostgreSQL databases and backend operations",
      "Handled deployment and productionization processes",
      "Took ownership of multiple modules across the application",
    ],
    stack: ["Next.js", "NestJS", "PostgreSQL", "TypeScript", "REST APIs"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-32 md:py-40 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.7, ease }}
          className="text-[13px] text-[#A1A1AA] tracking-[0.16em] uppercase mb-6"
        >
          Experience
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.9, ease }}
          className="font-display text-4xl md:text-6xl leading-[1.05] tracking-[-0.03em] font-medium mb-16 max-w-3xl text-balance"
        >
          Two years, two teams, one <span className="text-[#A1A1AA]">craft.</span>
        </motion.h2>

        <div className="relative space-y-12">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-white/[0.06] hidden md:block" />

          {roles.map((r, i) => (
            <motion.div
              key={r.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, ease, delay: i * 0.1 }}
              className="relative md:pl-14"
            >
              {/* Timeline dot */}
              <div className="absolute left-[14px] top-8 w-[11px] h-[11px] rounded-full border-2 border-white/20 bg-[#0A0A0A] hidden md:block" />

              <div className="card-surface rounded-2xl overflow-hidden">
                {/* Header */}
                <div className="p-6 md:p-8 pb-0 md:pb-0">
                  <div className="flex items-start gap-4">
                    <img
                      src={r.logo}
                      alt={`${r.company} logo`}
                      className="w-12 h-12 rounded-xl object-cover border border-white/[0.08] shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <a
                          href={r.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-display text-xl md:text-2xl font-medium tracking-tight hover:text-white/80 transition-colors"
                        >
                          {r.company}
                        </a>
                        <a
                          href={r.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[12px] text-white/40 hover:text-white/70 transition-colors"
                        >
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
                        <span className="text-[14px] text-white/60">{r.role}</span>
                        <span className="text-[12px] text-white/30">·</span>
                        <span className="text-[12px] text-white/30">{r.period}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 pt-6 md:pt-6">
                  <p className="text-[15px] leading-relaxed text-[#A1A1AA] max-w-3xl">
                    {r.summary}
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mt-8">
                    {/* Highlights */}
                    <div>
                      <p className="text-[11px] text-white/40 tracking-[0.2em] uppercase mb-4">
                        Key Contributions
                      </p>
                      <ul className="space-y-3">
                        {r.highlights.map((h) => (
                          <li key={h} className="flex gap-3 text-[14px] text-[#A1A1AA]">
                            <span
                              className="mt-2 shrink-0 w-1 h-1 rounded-full"
                              style={{ backgroundColor: "#5EA2FF" }}
                            />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Stack */}
                    <div>
                      <p className="text-[11px] text-white/40 tracking-[0.2em] uppercase mb-4">
                        Technologies
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {r.stack.map((s) => (
                          <span
                            key={s}
                            className="text-[12px] px-3 py-1.5 rounded-lg border border-white/[0.08] text-white/60 bg-white/[0.02]"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
