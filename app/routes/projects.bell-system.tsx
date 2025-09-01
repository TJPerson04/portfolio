import "~/index.css";
import ProjectPageTemplate from "~/templates/ProjectPageTemplate";
import { renderBellSystem } from "~/texts/projects/bell-system";

export default function BellSystem() {
  return (
    <ProjectPageTemplate
      title="Church Bell System"
      description={renderBellSystem}
    />
  );
}
