import ProjectPageTemplate from "~/templates/ProjectPageTemplate";
import { renderRelicHunter } from "~/texts/projects/relic-hunter";

export default function RelicHunter() {
  return (
    <ProjectPageTemplate title="Relic Hunter" description={renderRelicHunter} />
  );
}
