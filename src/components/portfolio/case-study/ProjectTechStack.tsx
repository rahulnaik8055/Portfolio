import type { ProjectData } from "@/data/projects";
import { TechCard, type TechItem } from "./TechCard";

export function ProjectTechStack({ project }: { project: ProjectData }) {
  let globalIndex = 0;

  return (
    <div className="space-y-5">
      {project.techStack.map((group) => (
        <div key={group.category}>
          <p className="text-[10px] text-white/35 tracking-[0.2em] uppercase mb-2.5">
            {group.category}
          </p>
          <div className="flex flex-wrap gap-2.5">
            {group.items.map((item) => {
              const tech: TechItem = { name: item, icon: "" };
              const idx = globalIndex++;
              return <TechCard key={item} tech={tech} index={idx} size="sm" />;
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
