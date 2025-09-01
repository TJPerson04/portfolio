import ProjectPageTemplate from "~/templates/ProjectPageTemplate";
import { renderENEDRobots } from "~/texts/projects/ened-robots";

export default function EnedRobots() {
  return (
    <ProjectPageTemplate title="ENED Robots" description={renderENEDRobots} />
  );
}
