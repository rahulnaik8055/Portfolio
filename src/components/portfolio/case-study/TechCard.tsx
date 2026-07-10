import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export interface TechItem {
  name: string;
  icon: string;
}

export const techIconMap: Record<string, string> = {
  React: "react",
  "Next.js": "nextdotjs",
  TypeScript: "typescript",
  JavaScript: "javascript",
  HTML5: "html5",
  CSS3: "css",
  "Tailwind CSS": "tailwindcss",
  "Node.js": "nodedotjs",
  "Express.js": "express",
  NestJS: "nestjs",
  "C#": "cplusplus",
  ".NET": "dotnet",
  MongoDB: "mongodb",
  PostgreSQL: "postgresql",
  Git: "git",
  GitHub: "github",
  Postman: "postman",
  Cloudinary: "cloudinary",
  "REST APIs": "apachekafka",
  Liveblocks: "react",
  "Socket.IO": "socketdotio",
  "Radix UI": "radixui",
  "shadcn/ui": "react",
  SWR: "react",
  Sonner: "react",
  Prisma: "prisma",
  Clerk: "clerk",
  Swagger: "swagger",
  "class-validator": "react",
  "Konva + react-konva": "konva",
  Konva: "konva",
  "Socket.IO Client": "socketdotio",
  "Socket.IO Server": "socketdotio",
  "Liveblocks Node": "react",
  "Next.js 15": "nextdotjs",
  "React 19": "react",
  "TypeScript 5": "typescript",
  "Tailwind CSS v4": "tailwindcss",
  "NestJS 11": "nestjs",
  "Prisma 7": "prisma",
  Vercel: "vercel",
  Render: "render",
  JWT: "jsonwebtokens",
};

export function TechCard({
  tech,
  index,
  size = "md",
}: {
  tech: TechItem;
  index: number;
  size?: "sm" | "md";
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), {
    stiffness: 200,
    damping: 25,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), {
    stiffness: 200,
    damping: 25,
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  const iconSlug = tech.icon || techIconMap[tech.name] || "react";
  const isSmall = size === "sm";

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{
        duration: 0.7,
        ease,
        delay: index * 0.03,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 600,
      }}
      whileHover={{ scale: 1.08, y: -4 }}
      className="relative cursor-default shrink-0"
    >
      {/* Glow */}
      <div
        className="absolute -inset-1 rounded-2xl opacity-0 blur-xl transition-opacity duration-500 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(94,162,255,0.25), transparent 70%)",
          opacity: hovered ? 0.5 : 0,
        }}
      />

      <div
        className={`relative flex flex-col items-center gap-2 ${
          isSmall ? "px-3.5 py-3" : "px-5 py-4"
        } rounded-2xl border border-white/[0.07] backdrop-blur-md transition-all duration-300`}
        style={{
          background: hovered ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.025)",
          boxShadow: hovered
            ? "0 8px 32px -8px rgba(94,162,255,0.2), 0 0 0 1px rgba(255,255,255,0.05) inset"
            : "0 4px 16px -4px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.03) inset",
        }}
      >
        {/* Top reflection */}
        <div
          className="absolute inset-x-3 top-0 h-px rounded-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.1) 50%, transparent)",
          }}
        />

        <img
          src={`https://cdn.simpleicons.org/${iconSlug}/ffffff`}
          alt={tech.name}
          width={isSmall ? 24 : 32}
          height={isSmall ? 24 : 32}
          className={`${isSmall ? "w-6 h-6" : "w-8 h-8"} object-contain`}
          style={{
            filter: hovered ? "brightness(1.2)" : "brightness(0.85)",
            transition: "filter 0.3s ease",
          }}
        />
        <span
          className={`${
            isSmall ? "text-[11px]" : "text-[12px]"
          } tracking-wide whitespace-nowrap transition-colors duration-300`}
          style={{
            color: hovered ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.55)",
          }}
        >
          {tech.name}
        </span>
      </div>
    </motion.div>
  );
}
