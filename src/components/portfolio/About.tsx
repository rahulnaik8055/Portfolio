import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function About() {
  return (
    <section id="about" className="relative py-32 md:py-40 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.7, ease }}
          className="text-[13px] text-[#A1A1AA] tracking-[0.16em] uppercase mb-6"
        >
          About
        </motion.p>

        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.9, ease }}
              className="font-display text-3xl md:text-5xl lg:text-[48px] leading-[1.1] tracking-[-0.03em] font-medium mb-10 text-balance"
            >
              I build software that{" "}
              <span className="text-[#A1A1AA]">
                feels obvious in use — and holds up under real load.
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 1, ease, delay: 0.1 }}
              className="space-y-6 text-[17px] leading-[1.7] text-[#A1A1AA] max-w-2xl"
            >
              <p>
                I'm Rahul Naik, a Full Stack Developer passionate about building scalable,
                user-focused applications.
              </p>
              <p>
                Over the past two years, I've worked across startup and enterprise environments,
                developing production-ready software using React, Next.js, Node.js, C#, .NET,
                MongoDB, and PostgreSQL.
              </p>
              <p>
                I enjoy transforming complex business requirements into clean, maintainable, and
                intuitive products. Whether I'm building enterprise applications or freelance
                solutions, I focus on writing reliable code, creating thoughtful user experiences,
                and delivering software that solves real problems.
              </p>
            </motion.div>

            <motion.dl
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.9, ease, delay: 0.2 }}
              className="mt-14 grid grid-cols-3 gap-6 max-w-lg"
            >
              {[
                { k: "2+", v: "Years shipping" },
                { k: "10+", v: "Projects delivered" },
                { k: "∞", v: "Coffees consumed" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="font-display text-3xl md:text-4xl font-medium tracking-tight">
                    {s.k}
                  </dt>
                  <dd className="text-[13px] text-[#A1A1AA] mt-1.5">{s.v}</dd>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* Portrait placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1, ease, delay: 0.15 }}
            className="md:col-span-5"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden card-surface group">
              {/* Background Image */}
              <img
                src="/images/profile.jpeg" // Replace with your image path
                alt="Portrait"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Dark Overlay (optional for readability) */}
              <div className="absolute inset-0 bg-black/30" />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#5EA2FF]/12 via-transparent to-white/5" />

              {/* Glow Effect */}
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 30% 20%, rgba(94,162,255,0.25), transparent 55%)",
                }}
              />

              {/* Bottom Content */}
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between z-10">
                <div>
                  <p className="text-[11px] text-black tracking-[0.2em] uppercase">Based in</p>
                  <p className="text-sm text-black mt-1">India · Remote worldwide</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
