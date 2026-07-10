import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const clients = [
  {
    client: "Client Name",
    industry: "SaaS · Analytics",
    overview:
      "Rebuilt a data-heavy dashboard as a calm, glance-able command center with real-time updates.",
    tech: ["Next.js", "NestJS", "PostgreSQL", "tRPC"],
    result: "Time-to-insight reduced by 68%",
  },
  {
    client: "Client Name",
    industry: "E-commerce · Fashion",
    overview:
      "Editorial-first storefront with cinematic product stories and a checkout tuned for conversion.",
    tech: ["Next.js", "Sanity", "Stripe", "Framer Motion"],
    result: "Average session up 2.6×",
  },
  {
    client: "Client Name",
    industry: "Hospitality · Booking",
    overview:
      "Unified reservation platform serving multiple restaurant brands with a shared design system.",
    tech: ["React", "Node.js", "PostgreSQL", "Redis"],
    result: "+54% covers quarter-over-quarter",
  },
];

export function Freelance() {
  return (
    <section id="freelance" className="relative py-32 md:py-40 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.7, ease }}
          className="text-[13px] text-[#A1A1AA] tracking-[0.16em] uppercase mb-6"
        >
          Freelance
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.9, ease }}
          className="font-display text-4xl md:text-6xl leading-[1.05] tracking-[-0.03em] font-medium mb-16 max-w-3xl text-balance"
        >
          Selected client engagements.
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {clients.map((c, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.8, ease, delay: i * 0.08 }}
              className="group card-surface rounded-2xl p-7 md:p-8 flex flex-col hover:border-white/[0.14] hover:-translate-y-1 transition-all duration-500"
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="font-display text-xl font-medium tracking-tight">{c.client}</h3>
                  <p className="text-[12px] text-[#A1A1AA] mt-1">{c.industry}</p>
                </div>
                <span className="text-[11px] text-white/30 tracking-[0.2em] uppercase">
                  0{i + 1}
                </span>
              </div>

              <p className="text-[14px] leading-relaxed text-[#A1A1AA] flex-1">{c.overview}</p>

              <div className="flex flex-wrap gap-1.5 mt-6">
                {c.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2.5 py-0.5 rounded-full border border-white/[0.08] text-white/60"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-white/[0.06]">
                <p className="text-[11px] text-white/40 tracking-[0.2em] uppercase mb-1.5">
                  Result
                </p>
                <p className="text-[14px] text-white">{c.result}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
