import "~/index.css";
import ProjectPageTemplate from "~/templates/ProjectPageTemplate";
import { renderOperatingSystems } from "~/texts/classes/operating-systems";

export default function OperatingSystems() {
  return (
    <ProjectPageTemplate
      title="Operating Systems"
      description={renderOperatingSystems}
    />
  );
}
