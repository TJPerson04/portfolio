import ProjectPageTemplate from "~/templates/ProjectPageTemplate";
import { renderPowderPress } from "~/texts/projects/powder-press";

export default function PowderPress() {
  return (
    <ProjectPageTemplate
      title="Powder Press Machine"
      description={renderPowderPress}
    />
  );
}
