import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { TechCard, type TechItem } from "./case-study/TechCard";

const ease = [0.22, 1, 0.36, 1] as const;

const techRows: TechItem[][] = [
  [
    { name: "React", icon: "react" },
    { name: "Next.js", icon: "nextdotjs" },
    { name: "TypeScript", icon: "typescript" },
    { name: "JavaScript", icon: "javascript" },
  ],
  [
    { name: "HTML5", icon: "html5" },
    { name: "CSS3", icon: "css" },
    { name: "Tailwind CSS", icon: "tailwindcss" },
    { name: "Node.js", icon: "nodedotjs" },
    { name: "Express.js", icon: "express" },
  ],
  [
    { name: "NestJS", icon: "nestjs" },
    { name: "C#", icon: "cplusplus" },
    { name: ".NET", icon: "dotnet" },
    { name: "MongoDB", icon: "mongodb" },
  ],
  [
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "Git", icon: "git" },
  ],
  [
    { name: "GitHub", icon: "github" },
    { name: "Postman", icon: "postman" },
    { name: "Cloudinary", icon: "cloudinary" },
    { name: "REST APIs", icon: "apachekafka" },
  ],
];

export function Skills() {
  const shelfRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const shelfRotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [1.5, -1.5]), {
    stiffness: 100,
    damping: 30,
  });
  const shelfRotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-1.5, 1.5]), {
    stiffness: 100,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!shelfRef.current) return;
    const rect = shelfRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  let globalIndex = 0;

  return (
    <section id="skills" className="relative py-32 md:py-40 border-t border-white/[0.06]">
      {/* Background ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(60% 40% at 50% 60%, rgba(94,162,255,0.05), transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.7, ease }}
            className="text-[13px] text-[#A1A1AA] tracking-[0.16em] uppercase mb-6"
          >
            Craft
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.9, ease }}
            className="font-display text-3xl md:text-5xl lg:text-[48px] leading-[1.1] tracking-[-0.03em] font-medium text-balance max-w-3xl mx-auto"
          >
            My Development <span className="text-[#A1A1AA]">Workspace.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="mt-5 text-[15px] text-[#A1A1AA] max-w-xl mx-auto leading-relaxed"
          >
            The technologies I use to design, build and scale modern web applications.
          </motion.p>
        </div>

        {/* Glass shelf */}
        <motion.div
          ref={shelfRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX: shelfRotateX,
            rotateY: shelfRotateY,
            transformStyle: "preserve-3d",
            perspective: 1200,
          }}
          className="relative"
        >
          {/* Shelf base glow */}
          <div
            className="absolute -bottom-8 left-[10%] right-[10%] h-24 rounded-[40px] blur-3xl pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, rgba(94,162,255,0.08), transparent 70%)",
            }}
          />

          {/* Shelf surface */}
          <div
            className="relative rounded-3xl border border-white/[0.06] p-6 md:p-10"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
              backdropFilter: "blur(20px) saturate(120%)",
              boxShadow:
                "0 32px 64px -16px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.04) inset",
            }}
          >
            {/* Top shelf reflection */}
            <div
              className="absolute inset-x-6 top-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent 10%, rgba(255,255,255,0.08) 50%, transparent 90%)",
              }}
            />

            {/* Floating gentle animation container */}
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              className="flex flex-col items-center gap-3 md:gap-4"
            >
              {techRows.map((row, ri) => (
                <div key={ri} className="flex flex-wrap justify-center gap-3 md:gap-4">
                  {row.map((tech) => {
                    const idx = globalIndex++;
                    return <TechCard key={tech.name} tech={tech} index={idx} />;
                  })}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
