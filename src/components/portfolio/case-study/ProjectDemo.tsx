import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import type { ProjectData } from "@/data/projects";

const ease = [0.22, 1, 0.36, 1] as const;

function VideoPlaceholder({ project }: { project: ProjectData }) {
  return (
    <div className="aspect-video flex items-center justify-center bg-[#0A0A0A]">
      <div className="text-center">
        <div
          className="w-14 h-14 mx-auto mb-3 rounded-full flex items-center justify-center"
          style={{
            backgroundColor: `${project.accent}15`,
            border: `1px solid ${project.accent}25`,
          }}
        >
          <Play className="w-5 h-5 ml-0.5" style={{ color: project.accent }} />
        </div>
        <p className="text-[13px] text-white/40 tracking-[0.16em] uppercase">Demo Video</p>
        <p className="text-[12px] text-white/25 mt-1">Coming soon</p>
      </div>
    </div>
  );
}

export function ProjectDemo({ project }: { project: ProjectData }) {
  const [open, setOpen] = useState(false);

  const renderVideo = (inModal: boolean) => {
    const wrapperClass = inModal ? "" : "card-surface rounded-2xl overflow-hidden";
    const sizeClass = inModal ? "w-full" : "";

    if (project.demoType === "youtube" && project.demoUrl) {
      return (
        <div className={wrapperClass}>
          <div className={`aspect-video ${sizeClass}`}>
            <iframe
              src={project.demoUrl}
              title={`${project.name} demo`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      );
    }

    if (project.demoType === "vimeo" && project.demoUrl) {
      return (
        <div className={wrapperClass}>
          <div className={`aspect-video ${sizeClass}`}>
            <iframe
              src={project.demoUrl}
              title={`${project.name} demo`}
              className="w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      );
    }

    if (project.demoType === "mp4" && project.demoUrl) {
      return (
        <div className={wrapperClass}>
          <div className={`aspect-video ${sizeClass}`}>
            <video
              src={project.demoUrl}
              controls
              className="w-full h-full object-cover"
              preload="metadata"
            />
          </div>
        </div>
      );
    }

    return <VideoPlaceholder project={project} />;
  };

  return (
    <>
      <div
        className="card-surface rounded-2xl overflow-hidden cursor-pointer group"
        onClick={() => setOpen(true)}
      >
        {renderVideo(false)}
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
              {renderVideo(true)}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
