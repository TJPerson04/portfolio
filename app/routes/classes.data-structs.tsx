import ProjectPageTemplate from "~/templates/ProjectPageTemplate";
import { renderDataStructs } from "~/texts/classes/data-structs";

export default function DataStructs() {
  return (
    <ProjectPageTemplate
      title="Data Structures"
      description={renderDataStructs}
    />
  );
}
