import "~/index.css";
import ProjectPageTemplate from "~/templates/ProjectPageTemplate";
import { renderIntroPython } from "~/texts/classes/python-programming";

export default function PythonProgramming() {
  return (
    <ProjectPageTemplate
      title="Python Programming"
      description={renderIntroPython}
    />
  );
}
