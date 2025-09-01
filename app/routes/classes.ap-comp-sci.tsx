import "~/index.css";
import ProjectPageTemplate from "~/templates/ProjectPageTemplate";
import { renderAPCompSci } from "~/texts/classes/ap-comp-sci";

export default function APCompSci() {
  return (
    <ProjectPageTemplate
      title="AP Computer Science"
      description={renderAPCompSci}
    />
  );
}
