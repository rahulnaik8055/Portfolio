import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 animate-hero-drift hero-gradient opacity-60" />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
        }}
      />

      {/* Hero content */}
      <div className="relative flex-1 flex flex-col items-center justify-center w-full max-w-6xl mx-auto px-6 md:px-10 pt-32 pb-10">
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm mb-8"
        >
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#5EA2FF] animate-pulse" />
          <span className="text-[12px] text-[#A1A1AA] tracking-[0.12em] uppercase">
            Available for freelance · 2026
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl lg:text-[80px] leading-[1.0] tracking-[-0.03em] font-medium text-center"
        >
          Rahul Naik.
        </motion.h1>

        {/* Role */}
        <motion.h2
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease, delay: 0.25 }}
          className="font-display text-xl md:text-3xl lg:text-[40px] leading-[1.2] tracking-[-0.02em] font-light text-[#A1A1AA] mt-4 text-center"
        >
          Full Stack Developer
          <br className="hidden md:block" />
          <span className="text-white/40"> & Product Builder.</span>
        </motion.h2>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-[#0A0A0A] text-sm font-medium hover:bg-white/90 transition-all"
          >
            View Projects
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/10 text-sm text-white hover:bg-white/[0.04] hover:border-white/20 transition-all"
          >
            Get In Touch
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[11px] text-white/25 tracking-[0.3em] uppercase"
      >
        Scroll
      </motion.div>
    </section>
  );
}
