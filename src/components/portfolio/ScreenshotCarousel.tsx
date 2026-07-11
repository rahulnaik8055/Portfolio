import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function ScreenshotCarousel({
  screenshots,
  accent,
}: {
  screenshots: { src: string; alt: string }[];
  accent: string;
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % screenshots.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [screenshots.length]);

  return (
    <div className="absolute inset-0 flex flex-col overflow-hidden">
      {/* Browser chrome bar */}
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/[0.06] bg-[#0A0A0A]/80 backdrop-blur-sm">
        <span className="w-2 h-2 rounded-full bg-white/15" />
        <span className="w-2 h-2 rounded-full bg-white/15" />
        <span className="w-2 h-2 rounded-full bg-white/15" />
      </div>

      {/* Screenshot */}
      <div className="flex-1 relative overflow-hidden bg-[#0A0A0A]">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={screenshots[current].src}
            alt={screenshots[current].alt}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.6, ease }}
            className="absolute inset-0 w-full h-full object-contain object-center"
          />
        </AnimatePresence>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-1.5 py-2.5 border-t border-white/[0.06] bg-[#0A0A0A]/80 backdrop-blur-sm">
        {screenshots.map((_, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setCurrent(i);
            }}
            className="group/dot"
          >
            <span
              className="block w-1.5 h-1.5 rounded-full transition-all duration-300"
              style={{
                backgroundColor: i === current ? accent : "rgba(255,255,255,0.2)",
                transform: i === current ? "scale(1.3)" : "scale(1)",
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
