import ProjectPageTemplate from "~/templates/ProjectPageTemplate";
import { renderHyTechClub } from "~/texts/classes/hy-tech-club";

export default function HyTechClub() {
  return (
    <ProjectPageTemplate title="Hy-Tech Club" description={renderHyTechClub} />
  );
}
