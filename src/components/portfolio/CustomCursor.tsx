import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const spring = { damping: 25, stiffness: 250, mass: 0.5 };

export function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const ringX = useSpring(cursorX, spring);
  const ringY = useSpring(cursorY, spring);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const hoverSelector = "a, button, [data-cursor-hover], input, textarea";

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const enter = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(hoverSelector);
      setHovering(!!target);
    };

    const leave = () => {
      setVisible(false);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", enter);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", enter);
      document.removeEventListener("mouseleave", leave);
    };
  }, [cursorX, cursorY, visible]);

  return (
    <>
      <style>{`
        @media (pointer: fine) {
          *, *::before, *::after {
            cursor: none !important;
          }
        }
      `}</style>

      {/* dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full bg-white mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          width: 6,
          height: 6,
          opacity: visible ? 1 : 0,
        }}
        animate={{ scale: hovering ? 0.5 : 1 }}
        transition={{ duration: 0.15 }}
      />

      {/* ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full border border-white/50 mix-blend-difference"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0,
        }}
        animate={{
          width: hovering ? 56 : 36,
          height: hovering ? 56 : 36,
          borderWidth: hovering ? 2 : 1,
          borderColor: hovering ? "rgba(94,162,255,0.6)" : "rgba(255,255,255,0.3)",
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
}
