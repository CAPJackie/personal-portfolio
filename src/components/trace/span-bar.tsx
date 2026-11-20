import type { Project } from "@/data/projects";
import { getProjectLayers } from "@/lib/trace";

/** A project's bar, with one coloured track for each area the work touched. */
export function SpanBar({ project }: { project: Project }) {
  return (
    <div className="span-bar">
      {getProjectLayers(project).map((layer) => (
        <i key={layer} className="span-bar__stripe" data-layer={layer} />
      ))}
    </div>
  );
}
