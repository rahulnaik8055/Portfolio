import type { ProjectData } from "@/data/projects";

export function ProjectFutureScope({ project }: { project: ProjectData }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {project.futureScope.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.title}
            className="card-surface rounded-xl p-4 md:p-5 flex items-center gap-3"
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
              style={{
                backgroundColor: `${project.accent}12`,
                border: `1px solid ${project.accent}20`,
              }}
            >
              <Icon className="w-4 h-4" style={{ color: project.accent }} />
            </div>
            <p className="text-[13px] md:text-[14px] text-white/80 leading-snug">{item.title}</p>
          </div>
        );
      })}
    </div>
  );
}
