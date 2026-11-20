import { Badge } from "@/components/ui/badge";
import type { Skill } from "@/data/profile";
import type { Layer } from "@/data/projects";
import type { Locale } from "@/i18n/config";

/**
 * A skill that explains itself on hover, focus or tap. The tooltip is placed
 * with CSS anchor positioning and needs no script.
 */
export function SkillBadge({
  skill,
  layer,
  locale,
}: {
  skill: Skill;
  layer: Layer;
  locale: Locale;
}) {
  const tipId = `skill-${locale}-${skill.name.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`;

  return (
    <span className="skill" data-layer={layer}>
      <button type="button" className="skill__trigger" aria-describedby={tipId}>
        <Badge layer={layer}>{skill.name}</Badge>
      </button>
      <span id={tipId} role="tooltip" className="skill__tip">
        <strong>{skill.where[locale]}</strong>
        {skill.detail[locale]}
      </span>
    </span>
  );
}
