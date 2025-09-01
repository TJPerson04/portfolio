import "~/index.css";
import ProjectPageTemplate from "~/templates/ProjectPageTemplate";
import { renderLussoCosmeticsWeb } from "~/texts/projects/lusso-cosmetics-web";

export default function LussoCosmeticsWeb() {
  return (
    <ProjectPageTemplate
      title="Lusso Cosmetics Website"
      description={renderLussoCosmeticsWeb}
    />
  );
}
