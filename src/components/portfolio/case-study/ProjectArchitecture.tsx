import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Expand } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export function ProjectArchitecture({ accent, imageSrc }: { accent: string; imageSrc?: string }) {
  const [open, setOpen] = useState(false);

  const placeholder = (
    <div className="text-center">
      <div
        className="w-14 h-14 mx-auto mb-3 rounded-2xl flex items-center justify-center"
        style={{
          backgroundColor: `${accent}15`,
          border: `1px solid ${accent}25`,
        }}
      >
        <svg
          className="w-7 h-7"
          style={{ color: accent }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
          />
        </svg>
      </div>
      <p className="text-[12px] text-white/40 tracking-[0.16em] uppercase">Architecture Diagram</p>
      <p className="text-[11px] text-white/25 mt-1">Click to view</p>
    </div>
  );

  const imageContent = imageSrc ? (
    <img
      src={imageSrc}
      alt="Architecture diagram"
      className="w-full h-full object-contain"
      loading="lazy"
    />
  ) : (
    placeholder
  );

  const modalImageContent = imageSrc ? (
    <img
      src={imageSrc}
      alt="Architecture diagram"
      className="w-full h-auto max-h-[80vh] object-contain"
    />
  ) : (
    <div className="text-center">
      <div
        className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center"
        style={{
          backgroundColor: `${accent}15`,
          border: `1px solid ${accent}25`,
        }}
      >
        <svg
          className="w-8 h-8"
          style={{ color: accent }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
          />
        </svg>
      </div>
      <p className="text-[13px] text-white/40 tracking-[0.16em] uppercase">Architecture Diagram</p>
      <p className="text-[12px] text-white/25 mt-1">Add your image to /public/images</p>
    </div>
  );

  return (
    <>
      <div
        className="card-surface rounded-2xl overflow-hidden cursor-pointer group relative"
        onClick={() => setOpen(true)}
      >
        <div className="aspect-video flex items-center justify-center bg-[#0A0A0A] transition-colors group-hover:bg-[#0c0c0c] p-4">
          {imageContent}
        </div>
        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <Expand className="w-3.5 h-3.5 text-white/60" />
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-6 md:p-12"
            onClick={() => setOpen(false)}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center text-white/60 hover:text-white hover:border-white/25 transition-all z-10"
            >
              <X className="w-5 h-5" />
            </button>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease }}
              className="w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="card-surface rounded-2xl overflow-hidden bg-[#0A0A0A] p-4">
                {modalImageContent}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
